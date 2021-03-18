import React from 'react';

const CountryCard = ({recentData}) => {
    const {totalconfirmed, totaldeceased, totalrecovered} = recentData;
    return(
        <div className="ui inverted segment">
            <h1 className="ui center aligned icon header">
              <i className="india flag"></i>
                INDIA
            </h1>
            <div className="ui three inverted statistics">
                <div className="ui red inverted statistic">
                    <div className="value">
                    {totaldeceased}
                    </div>
                    <div className="label">
                        TOTAL DEATHS
                    </div>
                </div>
                <div className="ui orange inverted statistic">
                    <div className="value">
                    {totalconfirmed}
                    </div>
                    <div className="label">
                        TOTAL CONFIRMED
                    </div>
                </div>
                <div className="ui blue inverted statistic">
                    <div className="value">
                    {totalrecovered}
                    </div>
                    <div className="label">
                        TOTAL RECVORED
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CountryCard;