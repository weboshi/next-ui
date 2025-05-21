'use client';
import Image from "next/image";

export default function PatientPanel({ name, gender, age, profile_picture, setPatient, activeState, indexOrder, ...props }) {
    return (
        <li className={(activeState === indexOrder) ? 'patient-panel highlighted' : 'patient-panel'} onClick={() => setPatient(props.patient, indexOrder)}>
            <div className="patients-panel-image">
                <Image
                    src={profile_picture}
                    width={48}
                    height={48}
                    alt="Picture of the author"
                />
                </div>
                <div className="patients-panel-name">
                    <h3>{name}</h3>
                    <p>{gender}, {age}</p>
                </div>
            <div className="patient-dot">
                <Image
                    src="/img/three_dots.svg"
                    width={18}
                    height={4}
                    alt="Picture of the author"
                />
            </div>
        </li>
    )
}