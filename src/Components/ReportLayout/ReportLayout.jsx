import React from "react";
import './ReportLayout.css';

let doctor = [{ 'serial_number': 1, 'name': 'Dr. John Doe', 'speciality': 'Cardiology' }, { 'serial_number': 2, 'name': 'Dr. Jane Smith', 'speciality': 'Dermatology' }]

function ReportLayout() {
    return (
        <div className="review-component">
            <div className="review-content">
                <h1>Reviews</h1>
                <table className="review-table">
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                    {doctor.map(doc => <tr key={doc.serial_number}>
                                <td>{doc.serial_number}</td>
                                <td>{doc.name}</td>
                                <td>{doc.speciality}</td>
                                <td>
                                    <button>View Report</button>
                                </td>
                                <td>
                                    <button>Download Report</button>
                                </td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default ReportLayout;