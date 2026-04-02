import React from 'react';
import './Login.css';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <p>Are you a new member? <a href="#">Sign Up Here</a></p>
            <form>
                <label for="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" aria-describedby="helpId" required/>
                <br />
                <label for="password">Password:</label>
                <input id="password" type="password" name="password" placeholder="Enter your password" aria-describedby="helpId" required/>
                <br />
                <div className="buttons">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
            <p>Forget Password?</p>
        </div>
    )
}

export default Login;