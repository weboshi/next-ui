'use client';
import Image from "next/image";
import PatientPanel from "./PatientPanel";

export default function PatientsPanel({ activeIndex, patientData, name, gender, age, profile_picture, setPatient, activeState, ...props }) {
    return (
        <div className="patients-panel col-span-3">
        <h2 className="patients-panel-label">Patients <Image
                    src="/img/search_icon.svg"
                    width={18}
                    height={18}
                    alt="Picture of the author"
                /></h2>
        <div className="patients-panel-info">
          <ul>
            {patientData && patientData.map((patient, index) => (
              <PatientPanel patient={patient} indexOrder={index} activeState={activeIndex} setPatient={setPatient} key={patient.name} name={patient.name} gender={patient.gender} age={patient.age} profile_picture={patient.profile_picture} {...patient} />
            ))}
          </ul>
        </div>
      </div>
    )
}