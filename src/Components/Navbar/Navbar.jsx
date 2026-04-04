import React from 'react';
import './Navbar.css';
import doctor from './doctor.png';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="left-side">
                    <p>StayHealth <span><img src={doctor} /></span></p>
                </div>
                <div className="right-side">
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="#">Appointment</a>
                    </div>
                    <div className="buttons">
                        <button><a href="./signup">Sign Up</a></button>
                        <button><a href="./login">Login</a></button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;