import React from 'react';
import './ReviewForm.css'

let doctor = [{ 'serial_number': 1, 'name': 'Dr. John Doe', 'speciality': 'Cardiology' }, { 'serial_number': 2, 'name': 'Dr. Jane Smith', 'speciality': 'Dermatology' }]

function ReviewForm() {
    return (
        <div class="review-component">
            <div class="review-content">
                <h1>Reviews</h1>
                <table class="review-table">
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                    {doctor.map(doc => <tr>
                        <td>{doc.serial_number}</td>
                        <td>{doc.name}</td>
                        <td>{doc.speciality}</td>
                        <td><button class="review-button">Click Here</button></td>
                        <td></td>
                    </tr>)}
                </table>
            </div>
        </div>
    );
}

export default ReviewForm;