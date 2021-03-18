import React from 'react';
import {useHistory} from 'react-router';

export const LogoutButton = ({setId, setToken}) => {
    const history = useHistory()
    const handleClickEvent = () => {
        setId(null);
        setToken('')
        history.replace('/')
       
    }

    return (
        <div
         className="ui secondary button"
         onClick = {handleClickEvent}>
            Log Out
        </div>
    )

}

export const LoginButton = () => {
    const history = useHistory()
    const handleClickEvent = () => {
        history.push('/login')
       
    }

    return (
        <div
         className="ui secondary button"
         onClick = {handleClickEvent}>
            Log In
        </div>
    )

}

export const SignupButton = () => {
    const history = useHistory()
    const handleClickEvent = () => {
        history.push('/signup')
       
    }

    return (
        <div
         className="ui secondary button"
         onClick = {handleClickEvent}>
             Sign Up
        </div>
    )

}