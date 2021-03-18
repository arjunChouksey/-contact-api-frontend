import React, {useState} from 'react';
import Contact from '../../api/Contact'
import {RiskLabel, CovidLabel}  from '../Label';
import {cardFontcolor} from '../../styles';

const getRandomImg = () => {
    const items = ['/matthew.png', 'elyse.png', 'molly.png']
    return items[Math.floor(Math.random()*items.length)]
}

const NameComponent = ({data, id, token}) => {
    const nameId = data._id;
    const [loading, setLoading] = useState('');
    
    const handleClickEvent = () => {
        addContact(id, nameId)
    }

    const addContact = async(id, nameId) => {
        try {
            setLoading('loading')
            const response = await Contact.post('/addContact', {} ,{
                params:{
                    id1:id,
                    id2:nameId
                },
                headers: {
                    Authorization: 'Bearer '+ token
                }   
            });
            if(response.status===200){
                setLoading('')
            }

        } catch (error) {
            setLoading('')
            throw error;
        }
    }

    return (
        <div className="column">
            <div className="ui raised link fluid card">
                <div className="image">
                    <img src={getRandomImg()} alt = {'person'} />
                </div>
                <div className="content">
                    <div className="header">{data.name}</div>
                    <div className="description">
                        <strong>{data.email}</strong>
                    </div>
                </div>
                <div style = {cardFontcolor} className="extra content">
                    <span className="right floated">
                        <strong>COVID-19 :</strong>
                        <CovidLabel flag = {data.covidStatus}/>
                    </span>
                    <span>
                        <strong>RISK :</strong>
                        <RiskLabel flag = {data.riskStatus}/>
                    </span>
                </div>
                <button
                 className = {`fluid ui ${loading} secondary button`}
                 onClick = {handleClickEvent}>Add Contact</button>
            </div>
        </div>
        
    )
}

export default NameComponent;