import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Desktop.css';

interface Perscription {
  patient_id: number;
  prescribed_date: string;
  rx_item_id: number;
  quantity: number; 
  refills: number;
  tech_initials: string;
  rx_number: number;
  prescriber_id: number;
  directions: string;
  quantity_dispensed: number;
  status: string;
}

interface PatientName {
  id: number;
  first_name: string;
  last_name: string;
}

interface DoctorName {
  id: number;
  first_name: string;
  last_name: string;
}

interface MedicationName {
  id: number;
  first_name: string;
  last_name: string;
}

const CurrentRx: React.FC = () => {
const { rx_number } = useParams();
const [prescription, setPrescription] = useState<Perscription | null>(null);
console.log(rx_number)

useEffect(() => {
    const fetchPrescription = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/prescriptions/${rx_number}`);
            const data = await response.json();
            setPrescription(data);
        } catch (error) {
            console.error('Error fetching prescription data:', error);
        }
    };

    if (rx_number) {
        fetchPrescription();
    }
}, [rx_number]);

if (!prescription) {
    return <div>Prescription not found</div>;
}

return (
    <div className="current-rx">
        <h1>Current Rx</h1>
        <div className="rx-form">
        <div className="form-group">
          <label htmlFor="patient_name">Patient Name</label>
          <input type="text" id="patient_name" value={prescription.patient_id} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="medication">Medication Name</label>
          <input type="text" id="medication" value={prescription.rx_item_id} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_name">Doctor Name</label>
          <input type="text" id="doctor_name" value={prescription.prescriber_id} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="quantity_written">Quantity Written</label>
          <input type="text" id="quantity_written" value={prescription.quantity} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="quantity_dispensed">Quantity Dispensed</label>
          <input type="text" id="quantity_dispensed" value={prescription.quantity_dispensed} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="refills">Refills</label>
          <input type="text" id="refills" value={prescription.refills} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="tech_initials">Tech Initials</label>
          <input type="text" id="tech_initials" value={prescription.tech_initials} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="date_of_rx">Date of RX</label>
          <input type="text" id="date_of_rx" value={prescription.prescribed_date} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="prescription_number">Prescription #</label>
          <input type="text" id="prescription_number" value={prescription.rx_number} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" value={prescription.directions} readOnly></textarea>
        </div>
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