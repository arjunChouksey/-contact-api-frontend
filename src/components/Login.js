import React, {useState} from 'react';
import {EmailValidation, Message} from './Message'
import User from '../api/User';
import {formStyle,LoginformStyleBackground} from '../styles';

const Login = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState('');
    
    const handleClickEvent = () => {
        if(validEmail){
            getUser(email, password);        
        }else{
            setStatus(1000);
        }
        
    }
    

    const getUser = async(email, password) => {
        try {
            setLoading('loading');
            const response = await User.get('/get',{
                params:{
                    email: email,
                    password:password
                }
            });
            if(response.status===200){
                props.setId(response.data._id);
                props.setToken(response.data.token)
                props.history.push('/contacts')

            }else{
                setStatus(response.status);
            }
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
        <div style = {LoginformStyleBackground}>
    
            <div style = {formStyle} className="ui fluid form">
                <Message status = {status} />
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
                    <EmailValidation setValidEmail = {setValidEmail}  email = {email} />
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
                </div>
                    <button onClick= {handleClickEvent}  className= {`fluid ui ${loading} secondary button`}>Log In</button>
            </div>
         </div>
    );
}

export default Login