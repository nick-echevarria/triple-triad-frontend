import React, { Component } from 'react';
import '../css/SignUpForm.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import { Link } from 'react-router-dom'

class LoginForm extends Component {
    state = {
        newUsername: "", 
        newEmail: "", 
        newPassword: ""
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
            <div className="signup-form-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                <div className="field">
                        <label className="label" htmlFor="label">Enter Your E-mail</label>
                        <div className="control">
                            <input type="email" id="email" name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="label">Create A Username</label>
                        <div className="control">
                            <input type="username" id="username" name="username" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="newPassword">Create A Password</label>
                        <div className="control">
                            <input type="newPassword" id="newPassword" name="newPassword" onChange={this.handleChange} />
                        </div>
                    </div>
                    <br></br>
                    <div className="field">
                        <div className="control has-text-centered">  
                            <button className="button login is-link has-background-warning">Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    };
}

export default LoginForm;

// write logic that deactivates button if fields are entered correctly
