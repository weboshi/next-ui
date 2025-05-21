'use client';
import Image from "next/image";

export default function DiagnosticList({ labResults }) {
    return (
        <div className="lab-results">
            <h2>Lab Results</h2>
            <div className="lab-results-content">
                <ul>
                {labResults && labResults.map((item: string) => (
                    <li key={item}>{item}                   
                    <Image
                      src="./img/download.svg"
                      width={20}
                      height={20}
                      alt="Calendar Icon"
                    /></li>
                ))}
                </ul>         
            </div>
        </div>
    )
}