'use client';
import { useState, useEffect } from 'react'
import Image from "next/image";
import { Manrope } from 'next/font/google'
import Navigation from "./components/Navigation";
import PatientsPanel from './components/PatientsPanel'
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';
import PatientOverview from './components/PatientOverview';


const manrope = Manrope({ subsets: ['latin'] });

export default function Home() {

  type Patient = {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
  }

  let username = 'coalition';
  let password = 'skills-test';
  let auth = btoa(`${username}:${password}`);

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [isIndex, setIndex] = useState(null)

  const [patientData, setPatientData] = useState({
    "name": ''
  });

  function getPatientData(patient, index) {
    setPatientData({
      ...patient
    })
    setIndex(index)
    console.log(patientData)
  }

  useEffect(() => {
    fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])


  return (
    <div className={`${manrope.className} grid grid-cols-12 p-4 gap-8`}>
      <Navigation />
      <PatientsPanel activeIndex={isIndex} patientData={data} setPatient={getPatientData} />
      <div className="diagnosis-history-container col-span-6">
        <DiagnosisHistory diagnosisHistory={patientData.diagnosis_history} />
        
        <DiagnosticList diagnosticList={patientData.diagnostic_list} />
      </div>
      <div className="col-span-3">
        <PatientOverview overviewData={patientData} />
        <div className="lab-results-container">
          <LabResults labResults={patientData.lab_results}/>
        </div>
      </div>
    </div>

  );
}
