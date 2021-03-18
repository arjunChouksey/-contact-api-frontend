import React, {useState}  from 'react';
import Status from '../../api/Status';

const ReportButton = ({id, user, setClick, token, click}) => {
    const [loading, setLoading] = useState('');
    const handlePositiveReport = () => {
        const postPositiveReport = async(id) => {
            try {
                setLoading('loading')
                const response = await Status.post('/reportPositive',{},{
                    params:{
                        id:id
                    },
                    headers: {
                        Authorization:'Bearer ' +token
                    }
                })
                if(response.status===200){
                    // setUser({...user, covidStatus:true, riskSatus:true})
                    setClick(!click)
                    setLoading('')
                }
                
            } catch (error) {
                throw error
            }
        }

        postPositiveReport(id)
    }

    const handleNegativeReport = () => {
        const postNegativeReport = async(id) => {
            try {
                setLoading('loading')
                const response = await Status.post('/reportNegative',{},{
                    params:{
                        id:id
                    },
                    headers: {
                        Authorization:'Bearer ' +token
                    }
                })
                // console.log(response);
                if(response.status===200){
                    // setUser({...user, covidStatus:false})
                    setClick(!click);
                    setLoading('')
                }
                
            } catch (error) {
                setLoading('')
                throw error
            }
        }

        postNegativeReport(id)
    }

    if(user.covidStatus){
        return(
            <button
             className = {`fluid ui ${loading} secondary button`}
             onClick = {handleNegativeReport}>
                Report Yourself Negative
            </button>
        )
    }
    return (
        <button
         class={`fluid ui ${loading} secondary button`}
         onClick = {handlePositiveReport}>
            Report Yourself Positive
        </button>
    )
}

export default ReportButton;