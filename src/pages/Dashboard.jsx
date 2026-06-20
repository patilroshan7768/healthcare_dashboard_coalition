import { useEffect, useState } from "react";
import { getPatients } from "../services/api";
import "../styles/dashboard.css";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import DiagnosisHistory from "../components/DiagnosisHistory";
import VitalCards from "../components/VitalCards";
import DiagnosticList from "../components/DiagnosticList";
import LabResults from "../components/LabResults";
import { SearchIcon, MoreIcon } from "../components/Icons";

function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [jessica, setJessica] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();

        setPatients(data);

        const patient = data.find((p) => p.name === "Jessica Taylor");

        setJessica(patient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatients();
  }, []);

  if (!jessica) {
    return (
      <div className="dashboard-loading">
        <p>Loading patient data...</p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="dashboard">
        <aside className="patients-sidebar">
          <div className="patients-sidebar-header">
            <h2>Patients</h2>
            <button className="icon-btn-ghost" type="button" aria-label="Search patients">
              <SearchIcon />
            </button>
          </div>

          <div className="patients-list">
            {patients.map((patient) => (
              <div
                key={patient.name}
                className={
                  patient.name === jessica.name ? "patient active" : "patient"
                }
              >
                <img src={patient.profile_picture} alt={patient.name} />

                <div className="patient-info">
                  <h4>{patient.name}</h4>
                  <p>
                    {patient.gender}, {patient.age}
                  </p>
                </div>

                <button className="patient-menu" type="button" aria-label={`More options for ${patient.name}`}>
                  <MoreIcon />
                </button>
              </div>
            ))}
          </div>
        </aside>

        <main className="main-content">
          <DiagnosisHistory diagnosisHistory={jessica.diagnosis_history} />

          <VitalCards
            latest={
              jessica.diagnosis_history[jessica.diagnosis_history.length - 1]
            }
          />

          <DiagnosticList diagnosticList={jessica.diagnostic_list} />
        </main>

        <aside className="profile-sidebar">
          <ProfileCard jessica={jessica} />
          <LabResults labResults={jessica.lab_results} />
        </aside>
      </div>
    </>
  );
}

export default Dashboard;
