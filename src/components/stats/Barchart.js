import React from 'react';
import {XAxis, YAxis, BarChart, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer} from 'recharts';

const Barchart = ({stateData}) => {
    stateData.pop();
    stateData.shift();
    const data = stateData.map(state => {
        state.active = Number(state.active);
        state.confirmed = Number(state.confirmed);
        state.deaths = Number(state.deaths);
        state.recovered = Number(state.recovered);
        const input = [state]
        return (
            <div className = "column">
                <div className = "ui raised link card">
                    <ResponsiveContainer
                    height = {250} 
                    width = "100%">
                        <BarChart
                        data = {input}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                            dataKey = "state"
                            hide = {true} />
                            <YAxis 
                            type = "number" 
                            hide = {true} />
                            <Tooltip />
                            <Legend />
                            <Bar
                            dataKey="active"
                            fill="#FF851B"/>
                            <Bar
                            dataKey="confirmed"
                            fill="#1967D2"/>
                            <Bar
                            dataKey="deaths"
                            fill="#EA4335"/>
                            <Bar
                            dataKey="recovered"
                            fill="#34A853"/>
                        </BarChart>
                    </ResponsiveContainer>
                    <div className = "content">
                        <h4 class="ui center aligned icon header">
                            {state.state}
                        </h4>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <React.Fragment>
            <h2 class="ui center aligned icon header">
                Daily state-wise Stats
            </h2>
            <div className = 'ui four column grid container'>
                {data}
            </div>
        </React.Fragment>
    )
}

export default Barchart;