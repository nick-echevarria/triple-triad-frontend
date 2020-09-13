import React from 'react';
import '../css/LoginForm.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Box from '../images/info-box.png'

const LoginForm = () => {
    return (
        <div className="login-form-container">
            
            <form className="login-form" action='' method='POST'>
                <div class="field">
                    <label class="label">E-mail</label>
                    <div class="control">
                        <input type="email" id="email" name="email"/>
                    </div>
                </div>     
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input type="password" id="password" name="password"/>
                    </div>
                </div> 
                <br></br>                
                <div class="field">
                    <div class="control has-text-centered">
                        <button class="button login is-link">Login</button>
                    </div>
                    <br></br>
                    <div class="control">
                        <button class="button is-link has-text-white has-background-warning">Create Free Account</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
