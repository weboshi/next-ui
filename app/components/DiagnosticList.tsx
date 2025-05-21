'use client';
export default function DiagnosticList({ diagnosticList }) {
    return (
        <div className="diagnostic-list">
            <h2>Diagnostic List</h2>
            <div className="diagnostic-list-label grid grid-cols-6">
                <div className="col-span-2">Problem/Diagnosis</div>
                <div className="col-span-3">Description</div>
                <div className="col-span-1">Status</div>
            </div>
            <div className="diagnostic-list-content">

                {diagnosticList && diagnosticList.map((item: object, index) => (
                    <div key={index} className="grid grid-cols-6">
                        <div className="diagnostic-col col-span-2">{item.name}</div>
                        <div className="diagnostic-col col-span-3">{item.description}</div>
                        <div className="diagnostic-col col-span-1">{item.status}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}