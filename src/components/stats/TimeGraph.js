import React from 'react';
import {XAxis, YAxis, LineChart, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer} from 'recharts';

const TimeGraph = ({timeData}) => {
    timeData.pop()
    timeData.shift()
    timeData.forEach(element => {
        element.dailyconfirmed = Number(element.dailyconfirmed)
        element.dailydeceased = Number(element.dailydeceased)
        element.dailyrecovered = Number(element.dailyrecovered)
    });
    return (
        <div className = 'ui raised segment'>
            <h2 class="ui center aligned header">
                Daily Stats
            </h2>
            <ResponsiveContainer width = "100%"  height = {400}>
                <LineChart data ={timeData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                    dataKey = "date"
                    interval = {30}
                    axisLine = {false} />
                    <YAxis 
                    type = "number" 
                    allowDataOverflow={true}
                    axisLine = {false} />
                    <Tooltip />
                    <Legend />
                    <Line
                    type="monotone" 
                    dataKey="dailyconfirmed"
                    stroke="#FF851B"/>
                    <Line
                    type="monotone" 
                    dataKey="dailydeceased"
                    stroke="#FF695E"/>
                    <Line
                    type="monotone" 
                    dataKey="dailyrecovered"
                    stroke="#1967D2"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TimeGraph;