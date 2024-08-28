import React from 'react';
import './Desktop.css';

// interface Perscription {
//   patient_id: number,
//   prescribed_date: string,
//   rx_item_id: number,
//   quantity: number,
//   refills: number,
//   tech_initials: string,
//   rx_number: number,
//   prescriber_id: number,
//   directions: string,
//   quantity_dispensed: number,
//   status: string
// }





const CurrentRx = () => {
    return (
        <div className="current-rx">
            <h1>Current Rx</h1>
            <div className="rx-form">
                <input type="text" placeholder="Patient Name" />
                <input type="text" placeholder="Medication Name" />
                <input type="text" placeholder="Doctor Name" />
                <input type="text" placeholder="Quantity Written" />
                <input type="text" placeholder="Quantity Dispensed" />
                <input type="text" placeholder="Refills" />
                <input type="text" placeholder="Tech Initials" />
                <input type="text" placeholder="Date of RX" />
                <input type="text" placeholder="Prescription #" />
                <input type="text" placeholder="Sig Code" />
                <input type="text" placeholder="directions" />
            </div>
            <div className="rx-actions">
                <button className="delete">Delete</button>
                <button className="edit">Edit</button>
                <button className="save">Save and Continue to Label</button>
            </div>
            <div className="rx-images">
                <div className="image-box">Scan Image</div>
                <div className="image-box">Label</div>
            </div>
        </div>
    );
};

export default CurrentRx;

// "patient_id": 1,
//   "prescribed_date": "2024-08-15",
//   "rx_item_id": 3,
//   "quantity": 8,
//   "refills": 6,
//   "tech_initials": "djt",
//   "rx_number": 5,
//   "prescriber_id": 2,
//   "directions": "one tablet by mouth daily",
//   "quantity_dispensed": 8,
//   "status": "pending"