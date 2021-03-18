import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';
import TimeGraph from './TimeGraph';
import Loader from '../Loader';
import Barchart from './Barchart';

const Stats = ({history, id, token}) => {
    if(id===null || token===''){
        history.replace('/');
    }
    const [timeData, setTimeData] = useState([]);
    const [stateData, setStateData] = useState([])
   
    useEffect(() => {
        const fetchTimeData = async() => {
            try {
                const response = await axios.get('https://api.covid19india.org/data.json');
                if(response.status === 200){
                    setTimeData(response.data.cases_time_series);
                    setStateData(response.data.statewise)
                }
                
            } catch (error) {
                if(error.response){
                    console.log(error.response)
                }
                throw error;
            }
        } 
        
        fetchTimeData();
    }, [])


    if(timeData.length===0){
        return (
            <Loader text = {'fetching stats...'} />
        )
    }
    return(
        <React.Fragment>
            <CountryCard recentData = {timeData[timeData.length-1]}/>
            <TimeGraph timeData = {timeData} />
            <Barchart stateData = {stateData}/>
        </React.Fragment>
    );
}

export default Stats;