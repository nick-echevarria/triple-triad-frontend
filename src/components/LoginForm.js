import React from 'react';
import '../css/LoginForm.css'

const Login = () => {
    return (
        <div className="login-form-container">
            <form className="login-form" action='' method='POST'>
                <ul className="login-ul">
                    <li>
                        <input type="email" id="email" name="email" placeholder="E-mail"/>
                    </li>
                    <li>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </li>
                    <li>
                        <button type="button" className="login-button">Log In</button>
                    </li>
                    <li>
                        <button type="button" className="new-account-button">Create Free Account</button>
                    </li>
                </ul>                         
            </form>
        </div>
    );
}

export default Login;
