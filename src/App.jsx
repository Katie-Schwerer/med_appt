// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm'
import ProfileCard from './Components/ProfileCard/ProfileCard';

// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
            <BrowserRouter>
                <Notification>
                    <Routes>
                        <Route path="/" element={<Landing_Page />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/booking-consultation" element={<BookingConsultation />} />
                        <Route path="/reviews" element={<ReviewForm />} />
                        <Route path="/profile" element={<ProfileCard />} />
                    </Routes>
                </Notification>
            </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;
