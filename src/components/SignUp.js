import React from 'react';
import '../css/SignUp.css'
import SignUpForm from './SignUpForm'
import 'react-bulma-components/dist/react-bulma-components.min.css';

const Login = () => {
    return (
        <div className="signup-container">
            <div className="signup-1">
                <div className="signup-header-1"></div>      
                <div className="signup-header-2"/>
                <div className="signup-header-3"></div>
            </div>
            <div className="signup-2">
                <div className="signup-menu-1"/>
                <SignUpForm />
                <div className="signup-menu-3"/>
            </div>
            <div className="signup-3">
                <div className="signup-footer-1"/>      
                <div className="signup-footer-2"/>   
                <div className="signup-footer-3"></div>
            </div>
        </div>
    );
}

export default Login;
