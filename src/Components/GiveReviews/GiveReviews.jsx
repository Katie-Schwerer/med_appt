// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';

// Function component for giving reviews
function GiveReviews({ onComplete }) {
    // State variables using useState hook
    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
    });
    const [errors, setErrors] = useState({});

    // Function to handle button click event
    const handleButtonClick = () => {
        setShowForm(true);
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === "rating" ? Number(value) : value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setSubmittedMessage(formData);

        onComplete(formData);

        setFormData({
            name: '',
            review: '',
            rating: 1
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.review.trim()) {
            newErrors.review = "Review is required";
        }

        if (!formData.rating || formData.rating <= 0) {
            newErrors.rating = "Please select a rating";
        }

        return newErrors;
    };

    return (
        <div>
            <h2>Form with Message</h2>
            {!showForm ? (
                // Display button to open the form
                <button onClick={handleButtonClick}>Open Form</button>
            ) : (
                // Display form for giving feedback
                <form onSubmit={handleSubmit}>
                    <h2>Give Your Feedback</h2>
                    {/* Display warning message if not all fields are filled */}
                    {showWarning && <p className="warning">Please fill out all fields.</p>}
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div>
                        <label>Review:</label>
                        <textarea
                            name="review"
                            value={formData.review}
                            onChange={handleChange}
                        />
                        {errors.review && <p className="error">{errors.review}</p>}
                    </div>
                    <div>
                        <input type="ranger" min="1" max="5" step="1" value={formData.rating} onChange={handleChange} />
                        {errors.rating && <p className="error">{errors.rating}</p>}
                    </div>
                    {/* Submit button for form submission */}
                    <button type="submit">Submit</button>
                </form>
            )}
            {/* Display the submitted message if available */}
            {submittedMessage && (
                <div>
                    <h3>Submitted:</h3>
                    <p><strong>Name:</strong> {submittedMessage.name}</p>
                    <p><strong>Review:</strong> {submittedMessage.review}</p>
                    <p><strong>Rating:</strong> {submittedMessage.rating}</p>
                </div>
            )}
        </div>
    );
}

export default GiveReviews;
