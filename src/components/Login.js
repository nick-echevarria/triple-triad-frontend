import React from 'react';
import '../css/Login.css'
import LoginForm from './LoginForm'
import Box from '../images/info-box.png'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-1">
                <div className="header-1"></div>      
                <div className="header-2">
                    <img className="title-box" src={Box} alt="title"/>  
                    <div className="title">Triple Triad</div>                                      
                </div>
                <div className="header-3"></div>
            </div>
            <div className="login-2">
                <div className="menu-1"/>
                <LoginForm />
                <div className="menu-3"/>
            </div>
            <div className="login-3">
                <div className="footer-1"/>      
                <div className="footer-2">
                    <div className="footer-sig">Made with love by Nicholas Echevarria</div>
                </div>    
                <div className="footer-3"></div>
            </div>
        </div>
    );
}

export default Login;
