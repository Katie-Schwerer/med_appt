import React, { useState } from 'react';
import './ReviewForm.css'
import GiveReviews from '../GiveReviews/GiveReviews';

let doctor = [{ 'serial_number': 1, 'name': 'Dr. John Doe', 'speciality': 'Cardiology' }, { 'serial_number': 2, 'name': 'Dr. Jane Smith', 'speciality': 'Dermatology' }]

function ReviewForm() {
    const [showModal, setShowModal] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleReviewComplete = () => {
        setShowModal(false);
        setIsButtonDisabled(true);
    };

    return (
        <div className="review-component">
            <div className="review-content">
                <h1>Reviews</h1>
                <table className="review-table">
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                    {doctor.map(doc => <tr key={doc.serial_number}>
                        <td>{doc.serial_number}</td>
                        <td>{doc.name}</td>
                        <td>{doc.speciality}</td>
                        <td>
                            <button onClick={handleOpenModal} disabled={isButtonDisabled}>
                                Click Here
                            </button>
                        </td>
                        <td></td>
                    </tr>)}
                </table>
            </div>
            {showModal && (
                    <div className="modal">
                        <GiveReviews onComplete={handleReviewComplete} />
                    </div>
                )}
        </div>
    );
}

export default ReviewForm;