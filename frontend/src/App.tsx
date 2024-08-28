// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DrProfile from "./pages/Dr Profile/Desktop";
import DrSearch from "./pages/Dr Search/DrSearch";
import NewDr from "./pages/New Dr/Desktop";
import MedProfile from "./pages/Med Profile/Desktop";
import MedSearch from "./pages/Med Search/MedSearch";
import NewMed from "./pages/New Med/Desktop";
import NewPatient from "./pages/New Patient/Desktop";
import NewRx from "./pages/New Rx/Desktop";
import PatientProfile from "./pages/Patient Profile/Desktop";
import PatientSearch from "./pages/Patient Search/PatientSearch";
import RxProfile from "./pages/Rx Profile/Desktop";
import RxSearch from "./pages/Rx Search/RxSearch";
import NavigationBar from "./pages/Home/components/NavigationBar";

// Import other pages similarly

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar className="nav-bar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drprofile" element={<DrProfile />} />
        <Route path="/drsearch" element={<DrSearch />} />
        <Route path="/newdr" element={<NewDr />} />
        <Route path="/medprofile" element={<MedProfile />} />
        <Route path="/medsearch" element={<MedSearch />} />
        <Route path="/newmed" element={<NewMed />} />
        <Route path="/newpatient" element={<NewPatient />} />
        <Route path="/newrx" element={<NewRx />} />
        <Route path="/patientprofile" element={<PatientProfile />} />
        <Route path="/patientsearch" element={<PatientSearch />} />
        <Route path="/rxprofile/:rx-number" element={<RxProfile />} />
        <Route path="/rxsearch" element={<RxSearch />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
