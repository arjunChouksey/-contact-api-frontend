import React from 'react';
import NameComponent from './NameComponent';

const NameList = ({nameList, id, token, debouncedName}) => {
    if(debouncedName!=='' && nameList.length===0){
        return(
            <h2 class="ui center aligned icon header">
                    <img className="ui massive avatar image" alt = 'pic' src={'/matthew.png'} />
                    No Peoples were found...
            </h2>
        )
    }

    const names = nameList.map((data) => {
        return(
        <NameComponent key = {data._id} id ={id} data ={data} token = {token} />
        );
    });

    return(
        <div className = "ui three column grid container">
                {names}           
        </div>
    )
}

export default NameList;