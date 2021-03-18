import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Stats from './stats/Stats';
import ContactComponent from './contact/ContactComponent';
import Search from './search/Search';

const App = () => {
    const [id, setId] = useState(null);
    const [token, setToken] = useState('');

    return (
        <BrowserRouter >

            <Header id = {id} setId = {setId} token = {token} setToken = {setToken}/>
            <Route path ='/' exact component = {HomePage} />
               
            <Route
             path = '/login' exact 
             render = {(props)=> <Login {...props} id = {id} setId = {setId} setToken = {setToken} /> } 
            />
                
            <Route path = '/signup' exact component = {Signup} />
               
            <Route 
            path = '/contacts' exact
            render = {(props)=> <ContactComponent {...props} id = {id} token = {token} /> }
            />
            
            <Route 
            path = '/search' exact
            render = {(props)=> <Search {...props} id = {id} token = {token} /> }
            />
            
            <Route
            path = '/stats' exact
            render = {(props)=> <Stats {...props} id = {id} token = {token} />}
            />

        </BrowserRouter>
    
    );
}

export default App;