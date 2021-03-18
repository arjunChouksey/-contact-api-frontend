import React from 'react';

export const CovidLabel = ({flag}) => {
    if (flag){
        return (
            <div class="ui red small label">
                POSITIVE
            </div>
        )
    }
    return (
        <div class="ui green small label">
            NEGATIVE
        </div>
    )
}

export const RiskLabel = ({flag}) => {
    if (flag){
        return (
            <div class="ui orange small label">
                HIGH
            </div>
        )
    }
    return (
        <div class="ui blue small label">
            LOW 
        </div>
    )
}