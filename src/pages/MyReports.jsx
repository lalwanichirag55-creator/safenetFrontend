import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function MyReports() {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5001/api/incidents", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setIncidents(res.data);
            } catch (err) {
                console.error("Error fetching incidents");
            }
        };
        fetchIncidents();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">My Reports</h2>
                <div className="grid gap-4">
                    {incidents.map((incident) => (
                        <div key={incident.id} className="p-4 border rounded shadow">
                            <h3 className="font-bold">{incident.type}</h3>
                            <p>{incident.description}</p>
                            <p className="text-sm text-gray-500">Location: {incident.location}</p>
                            <p className="text-sm font-semibold">Status: {incident.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
