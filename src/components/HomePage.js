import React from 'react';
import {homePage, homePageDetailCard, feature1, feature1Style, feature2, feature2Style, feature3, feature3Style} from '../styles';

const HomePage = (props) => {
    return (
        <React.Fragment>
            
            <div style = {homePage}>
                <div style = {homePageDetailCard} className="ui raised link card">
                    <div className="content">
                        <i className="right floated active like large icon"></i>
                        <i className="right floated active star large icon"></i>
                        <h4 className="ui center aligned header">Introducing</h4>
                        <h2 className="ui center aligned header">CONTACT API</h2>
                        <div className="description">
                            <i className="quote left icon"></i>
                                A reliable software to store your COVID-19 contact-data and provide your health status with connected friends, to ensure your and their well being...
                            <i className="quote right icon"></i>  
                        </div>
                    </div>
                    <div className="extra content">
                        <div className = "right floated author">
                            <i className="circular handshake outline large icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style = {feature1}>
                <div style ={feature1Style} className="ui raised link card">
                    <div className = 'image'>
                        <img alt = {'feature1pic'} src = {'/contact.svg'}/>
                    </div>
                    <div className="content">
                        <i className="right floated active like large icon"></i>
                        <i className="right floated active star large icon"></i>
                        <h2 className="ui center aligned header">Search & Store Your Contact</h2>
                        <div className="description">
                            <i className="quote left icon"></i>
                                Meet Someone?
                                Just Search them & Add contact with that registered user
                            <i className="quote right icon"></i>  
                        </div>
                    </div>
                    <div className="extra content">
                        <div className = "right floated author">
                            <i className="circular handshake outline large icon"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div style = {feature2}>
                <div style = {feature2Style} className="ui raised link card">
                    <div className = 'image'>
                        <img alt = {'feature2pic'} src = {'/mobilereport.svg'}/>
                    </div>
                    <div className="content">
                        <i className="right floated active like large icon"></i>
                        <i className="right floated active star large icon"></i>
                        <h2 className="ui center aligned header">Report Your Covid Status</h2>
                        <div className="description">
                            <i className="quote left icon"></i>
                                Inform others about your covid status to ensure your contacts well being!! In just a Click..
                            <i className="quote right icon"></i>  
                        </div>
                    </div>
                    <div className="extra content">
                        <div className = "right floated author">
                            <i className="circular handshake outline large icon"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div style = {feature3}>
                <div style = {feature3Style} className="ui raised link card">
                    <div className = 'image'>
                        <img alt = {'feature3pic'} src = {'/update.svg'}/>
                    </div>
                    <div className="content">
                        <i className="right floated active like large icon"></i>
                        <i className="right floated active star large icon"></i>
                        <h2 className="ui center aligned header">Get Updated Metric</h2>
                        <div className="description">
                            <i className="quote left icon"></i>
                                Get live updates of Stats & Metrics specifically of INDIA at glance.. 
                            <i className="quote right icon"></i>  
                        </div>
                    </div>
                    <div className="extra content">
                        <div className = "right floated author">
                            <i className="circular handshake outline large icon"></i>
                        </div>
                    </div>
                 </div>
            </div>
        </React.Fragment>
    );
}

export default HomePage;