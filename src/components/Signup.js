import React, { useState} from 'react';
import User from '../api/User';
import {Message , EmailValidation, PasswordValidation} from './Message';
import {formStyle, SignupformStyleBackground} from '../styles';


const Signup = (props) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(null);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [loading, setLoading] = useState('');

    const handleClickEvent = () => {
        if(userName!==''&& validEmail && validPassword ){
            postUser(userName, password, email);
        }else{
            setStatus(1000);
        }
    }
    
    const postUser = async(name, password, email) => {
        
        setLoading('loading');
        try {
            const response = await User.post('/post',{},{
                params:{
                    name:name,
                    email: email,
                    password:password
                }
            });
            
            setStatus(response.status)
            setLoading('');
            
        } catch (error) {
            if(error.response){
                setStatus(error.response.status);
                setLoading('');

                throw error;     
            }
        }
    }

    return(
        <div style = {SignupformStyleBackground}>
            <div  style = {formStyle} className="ui fluid form">
                <Message status = {status} />
                <div className="field">
                    <label>Username</label>
                    <div className="ui large left icon input">
                        <input 
                        type="text"
                            placeholder="username"
                            value = {userName}
                            onChange = {e => setUserName(e.target.value)} />
                        <i className="user outline icon"></i>
                    </div>
                </div>

                <div className="field">
                    <label>Email</label>
                    <div className="ui large left icon input">
                        <input 
                        type="text"
                            placeholder="email"
                            value = {email}
                            onChange = {e => setEmail(e.target.value)} />
                        <i className="envelope icon"></i>
                    </div>
                    <EmailValidation setValidEmail = {setValidEmail}  email= {email} />
                </div>

                <div className="field">
                    <label>Password</label>
                    <div className="ui large left icon input">
                        <input
                            type="password" 
                            placeholder="password"
                            value = {password}
                            onChange = {e => setPassword(e.target.value)} />
                        <i className="lock icon"></i>
                    </div>
                    <PasswordValidation setValidPassword={setValidPassword} password = {password} />
                </div>

                <button onClick = {handleClickEvent} className={`fluid ui ${loading} secondary button`}>Sign Up</button>
            </div>
        
        </div>
       
    );
}

export default Signup