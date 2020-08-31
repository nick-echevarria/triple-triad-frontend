import React from 'react';
import '../css/Home.css'
import LoginForm from './LoginForm'
import Box from "../images/info-box.png"

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-1">
                <div className="header-1"></div>      
                <div className="header-2">
                    <img className="title-box" src={Box} alt="title"/>  
                    <div className="title">Triple Triad</div>                                      
                </div>
                <div className="header-3"></div>
            </div>
            <div className="home-2">
                <div className="menu-1"/>
                <LoginForm />
                <div className="menu-3"/>
            </div>
            <div className="home-3"/>
        </div>
    );
}

export default Home;
