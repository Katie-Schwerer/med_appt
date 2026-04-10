import React, { useState } from 'react'
import './AppointmentForm.css';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, date, selectedSlot });
      setName(name);
      setPhoneNumber(phoneNumber);
      setDate(date);
      setSelectedSlot(selectedSlot)
      localStorage.setItem('doctorData', JSON.stringify({'name': doctorName, 'speciality': doctorSpeciality}))
      localStorage.setItem('appointmentData', JSON.stringify({"name": name, 'phone': phoneNumber, 'date': date, 'time': selectedSlot}))
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Book Time Slot:</label>
          <select id="timeSlot" name="timeSlot" value={selectedSlot} onChange={(e) => handleSlotSelection(e.target.value)} required>
            <option>Select a time slot</option>
            <option value="nineam">9:00 AM</option>
            <option value="tenam">10:00 AM</option>
            <option value="onepm">1:00 PM</option>
            <option value="twoam">2:00 PM</option>
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;