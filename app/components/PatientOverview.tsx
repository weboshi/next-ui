'use client'
import Image from "next/image";
import { useState } from 'react';

export default function PatientOverview({ overviewData }) {
    const [isHidden, setIsHidden] = useState(false);


    const handleClick = () => {
        setIsHidden(!isHidden);
    };

    const { profile_picture, name, date_of_birth, gender, phone_number, emergency_contact, insurance_type } = overviewData

    function convertBirth(date_of_birth) {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        
        if (date_of_birth.includes("/")) {
          let index = +date_of_birth.slice(0, 2);
          let month = months[index-1]
          let day = date_of_birth.slice(3,5)
          let year = date_of_birth.slice(6,10)
          console.log(year)
          let newDate = month+ " " +day + "," + " "        + year
          return newDate
      
        } else {
          let index = +date_of_birth.slice(5, 7);
          let month = months[index-1]
          let day = date_of_birth.slice(8,10)
          let year = date_of_birth.slice(0,4)
          let newDate = month+ " " + day + "," + " "        + year
          return newDate
      
        }
      }

    return (
        <div className="patient-data">
            <div>
                <div className="patient-detail-panel">
                    <div className="patient-detail-image">
                        {
                            !profile_picture ? '' :
                                <Image
                                    src={profile_picture}
                                    width={200}
                                    height={200}
                                    alt="Calendar Icon"
                                />
                        }
                    </div>
                    <h3 className="patient-detail-name">{!name ? '--' : name}</h3>
                    <div className="patient-detail-block">
                        <div className="patient-detail-block-inner">
                            <div className="patient-detail-icon">
                                <Image
                                    src="/img/BirthIcon.svg"
                                    width={42}
                                    height={42}
                                    alt="Calendar Icon"
                                />
                            </div>
                            <div className="patient-details">
                                <h4>Date of Birth</h4>
                                <p>
                                    {!date_of_birth ? '--' : convertBirth(date_of_birth)  }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="patient-detail-block">
                        <div className="patient-detail-block-inner">
                            <div className="patient-detail-icon">
                                {!gender === "Male" ?
                                    <Image
                                        src="/img/MaleIcon.svg"
                                        width={42}
                                        height={42}
                                        alt="Calendar Icon"
                                    />
                                    :
                                    <Image
                                        src="/img/FemaleIcon.svg"
                                        width={42}
                                        height={42}
                                        alt="Calendar Icon"
                                    />
                                }
                            </div>
                            <div className="patient-details">
                                <h4>Gender</h4>
                                <p>
                                    {!gender ? '--' : gender}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="patient-detail-block">
                        <div className="patient-detail-block-inner">
                            <div className="patient-detail-icon">
                                <Image
                                    src="/img/BirthIcon.svg"
                                    width={42}
                                    height={42}
                                    alt="Calendar Icon"
                                />
                            </div>
                            <div className="patient-details">
                                <h4>Contact Info.</h4>
                                <p>
                                    {!phone_number ? '--' : phone_number}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="patient-detail-block">
                        <div className="patient-detail-block-inner">
                            <div className="patient-detail-icon">
                                <Image
                                    src="/img/BirthIcon.svg"
                                    width={42}
                                    height={42}
                                    alt="Calendar Icon"
                                />
                            </div>
                            <div className="patient-details">
                                <h4>Emergency Contacts</h4>
                                <p>
                                    {!emergency_contact ? '--' : emergency_contact}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${isHidden ? 'patient-detail-block active' : 'hidden'}`}>
                        <div className="patient-detail-block-inner">
                            <div className="patient-detail-icon">
                                <Image
                                    src="/img/InsuranceIcon.svg"
                                    width={42}
                                    height={42}
                                    alt="Calendar Icon"
                                />
                            </div>
                            <div className="patient-details">
                                <h4>Insurance Provider</h4>
                                <p>
                                    {!insurance_type ? '--' : insurance_type}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a className="show-all-button" 
                            onClick={handleClick}>{!isHidden ? "Show All Information" : "Hide Information"}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
