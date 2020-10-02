import React from 'react';
import '../css/SignUp.css'
import SignUpForm from './SignUpForm'
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import '../images/ff8-logo.png'


const Login = () => {
    return (
        <div className="login-container">
            <div className="login-1">
                <div className="login-header-1"></div>      
                <div className="login-header-2"/>
                <div className="login-header-3"></div>
            </div>
            <div className="login-2">
                <div className="login-menu-1"/>
                <SignUpForm />
                <div className="login-menu-3"/>
            </div>
            <div className="login-3">
                <div className="login-footer-1"/>      
                <div className="login-footer-2"/>   
                <div className="login-footer-3"></div>
            </div>
        </div>
    );
}

export default Login;
