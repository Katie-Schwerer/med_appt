import React from 'react';
import './Sign_Up.css'

function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <p>Already a member? <a href="#">Login</a></p>
            <form>
                <label for="role">Role:</label>
                <select id="role" name="role" required>
                    <option>Pick A Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
                <br />
                <label for="name">Name:</label>
                <input id="name" type="text" name="name" aria-describedby="helpId" placeholder="Enter your name" required />
                <br />
                <label for="phone">Phone:</label>
                <input id="phone" type="phone" name="phone" pattern="\d{3}-\d{3}-\d{4}" title="Format: 123-456-7890" placeholder="Enter your phone number" required aria-describedby="helpId" />
                <br />
                <label for="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" required aria-describedby="helpId"/>
                <br />
                <label for="password">Password:</label>
                <input id="password" type="password" name="password" placeholder="Enter your password" required aria-describedby="helpId"/>
                <br />
                <div class="buttons">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div >
    )
}

export default SignUp;