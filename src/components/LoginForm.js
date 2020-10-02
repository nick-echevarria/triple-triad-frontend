import React, { Component } from 'react';
import '../css/LoginForm.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Link } from 'react-router-dom'

class LoginForm extends Component {
    state = {
        email: "", 
        password: ""
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log(this.state)
    }

    render() {
        return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label" htmlFor="label">E-mail</label>
                        <div className="control">
                            <input type="email" id="email" name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="password">Password</label>
                        <div className="control">
                            <input type="password" id="password" name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <br></br>
                    <div className="field">
                        <div className="control has-text-centered">
                            <button className="button login is-link">Login</button>
                        </div>
                        <br></br>
                        <div className="control">
                            <Link to="signup">
                                <button className="button is-link has-text-white has-background-warning">Create Free Account</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    };
}

export default LoginForm;
