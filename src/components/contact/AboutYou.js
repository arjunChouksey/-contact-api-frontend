import React, {useEffect, useState} from 'react';
import {CovidLabel, RiskLabel} from '../Label';
import ReportButton from './Report';
import User from '../../api/User';
import {aboutYou} from '../../styles';

const getRandomImg = () => {
    const items = ['/matthew.png', '/elyse.png', '/molly.png']
    return items[Math.floor(Math.random()*items.length)]
}

const AboutYou = ({id, click, setClick, token}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchYou = async(id) => {
            try {
                const response = await User.get('/user', {
                    params:{
                        id:id
                    },
                    headers: {
                        Authorization:'Bearer '+ token
                    }
                });
                // console.log(response);
                if(response.status===200){
                    setUser(response.data)
                }

            } catch (error) {
                if(error.response){
                    console.log(error.response);
                }   
                throw error;
            }
        }
        fetchYou(id);
    }, [id, token, click])

    return(
        <div className = 'ui container'>
            <div className="ui raised link fluid card" style = {aboutYou}>
                <div className="content">
                    <div className="header">About You</div>
                    <div className="meta">
                        <span className="category">{user.email}</span>
                    </div>
                    <div className="description">
                        <p>
                            <strong>
                                COVID-19:
                            </strong>
                            <CovidLabel flag = {user.covidStatus} />
                        </p>
                         <p>
                            <strong>
                                 RISK:
                            </strong>
                            <RiskLabel flag = {user.riskStatus} />
                        </p>
                    </div>  
                </div>
                <div className="extra content">
                    <div className="right floated author">
                    <img className="ui massive avatar image" alt = 'pic' src={getRandomImg()} />
                     {user.name}
                    </div>
                </div>
                <ReportButton id = { id } user = {user} setUser = {setUser} setClick = {setClick} token = {token} click = {click}/>
            </div>
        </div>
    )
}

export default AboutYou;