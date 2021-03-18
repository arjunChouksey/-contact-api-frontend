import React from 'react';
import {CovidLabel, RiskLabel} from '../Label'

const getRandomImg = () => {
    const items = ['/matthew.png', 'elyse.png', 'molly.png']
    return items[Math.floor(Math.random()*items.length)]
}

const getDateTime = (str) => {
    const temp = str.split(" ");
    const date = temp[0] +" " +temp[2] +"-" + temp[1] + "-"+ temp[3]
    return [date, temp[4]];
}

const ContactElement = ({data}) => {
    const {contactTime,  userId} = data;
    const [date, time] = getDateTime(contactTime);
    return( 
        <div className = 'column'>
            <div className="ui raised link card">
                <div className="content">
                    <div class="meta">
                        <span class="category">{userId.email}</span>
                    </div>
                    <div className="description">
                        <p>
                            <strong>
                                COVID-19: 
                            </strong>
                            <CovidLabel flag = {userId.covidStatus} />
                        </p>
                        <p>
                            <strong>
                                RISK: 
                            </strong>
                            <RiskLabel flag = {userId.riskStatus}/>
                        </p>
                        <p>
                            <strong>
                                CONTACT-TIME: 
                            </strong>
                            {time}
                        </p>
                        <p>
                            <strong>
                                CONTACT-DAY: 
                            </strong>
                            {date}
                        </p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="left floated author">
                        <img className="ui massive avatar image" alt = {'person'} src={getRandomImg()} />
                        <strong>{userId.name}</strong> 
                    </div>
                </div>   
            </div>
        </div>

    );
}

export default ContactElement;