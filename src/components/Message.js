import React from 'react';

export const Message = ({status}) => {
    switch(status){
        case 201: {
            return (
                <div class="ui violet message">
                    Registeration was successfull
                </div>
            )
        }
        case 400: {
            return (
                <div class="ui orange message">
                    Invalid credentials 
                </div>
            )
        }
        case 409: {
            return (
                <div class="ui red message">
                    Email already exists
                </div>
            )
        }
        case 500 : {
            return (
                <div class="ui yellow message">
                    Server error please retry after few moments
                </div>
            )
        }
        case 1000: {
            return (
                <div class="ui orange message">
                    Please enter valid details
                </div>
            )
        }
        default:{
            return null;
        }
    }
}


export const EmailValidation = ({setValidEmail, email}) => {
    const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email===''){
        setValidEmail(false);
        return null;
    }else if(!regex.test(email)){
        setValidEmail(false);
        return (
            <div class="ui blue small message">
                please enter valid email
            </div>
        )
    }
    setValidEmail(true);
    return null;

}

export const PasswordValidation = ({setValidPassword, password}) => {

    if(password===''){
        setValidPassword(false);
        return null;
    }else if(password.length>=1 && password.length<=5){
        setValidPassword(false);
        return (
            <div class="ui blue small message">
                password length should atleast be 5
            </div>
        )
    }
    setValidPassword(true);
    return null;
}