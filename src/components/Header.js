import React  from 'react';
import {Link} from 'react-router-dom';
import {LogoutButton, LoginButton, SignupButton} from './Buttons'
import {header1, header2} from '../styles';

const Header = ({id, setId, token, setToken}) => {
    if(id===null || token==='' ){
        return(
            <div style = {header1} className="ui huge  secondary pointing menu">
    
                <Link  to ='/' className= "item">
                            <div className="ui  left icon">
                                <i className="handshake outline icon"></i>
                                <label>CONTACT-API</label>
                            </div>
                </Link>
                
                <div className="right menu">
                  
                    <div className = 'item'> 
                        < LoginButton />
                    </div>
                    
                    <div className = 'item'> 
                        <SignupButton />
                    </div>    
                  
                </div>
            </div>
        );
    }

    return(
        <div style = {header2} className="ui huge secondary pointing menu">

            <Link  to ='/stats' className= "item">
                        <div className="ui left icon">
                            <i class="chart area icon"></i>
                            <label>Stats</label>
                        </div>
            </Link>
            
            <Link  to ='/contacts' className= "item">
                        <div className="ui  left icon">
                            <i class="map icon"></i>
                            <label>Your Contacts</label>
                        </div>
            </Link>

            <Link  to ='/search' className= "item">
                        <div className="ui  left icon">
                            <i class="rocket icon"></i>                            
                            <label>Search Person</label>
                        </div>
            </Link>
            
            <div className="right menu">
                <div className = 'item'> 
                    <LogoutButton setId = { setId } setToken = {setToken} />
                 </div>
             </div>

        </div>
    );
}

export default Header;