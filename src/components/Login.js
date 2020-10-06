import React from 'react';
import '../css/Login.css'
import LoginForm from './LoginForm'
import Box from '../images/info-box.png'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../images/ff8-logo.png'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-1">
                <div className="login-header-1"></div>      
                <div className="login-header-2">
                    <img className="title-box" src={Box} alt="title"/>  
                    <div className="title is-size-1">Triple Triad</div>                                      
                </div>
                <div className="login-header-3"></div>
            </div>
            <div className="login-2">
                <div className="login-menu-1"/>
                <LoginForm />
                <div className="login-menu-3"/>
            </div>
            <div className="login-3">
                <div className="login-footer-1"/>      
                <div className="login-footer-2">
                    <a className="footer-sig" href="https://github.com/nick-echevarria">Made with love by Nicholas Echevarria</a>
                </div>    
                <div className="login-footer-3"></div>
            </div>
        </div>
    );
}

export default Login;
