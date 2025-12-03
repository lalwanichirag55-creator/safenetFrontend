import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetchIncidents();
    }, []);

    const fetchIncidents = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://localhost:5001/api/incidents/all", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setIncidents(res.data);
        } catch (err) {
            console.error("Error fetching incidents");
        }
    };

    const updateStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `http://localhost:5001/api/incidents/${id}`,
                { status },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchIncidents();
        } catch (err) {
            alert("Error updating status");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
                <div className="grid gap-4">
                    {incidents.map((incident) => (
                        <div key={incident.id} className="p-4 border rounded shadow bg-gray-50">
                            <h3 className="font-bold">{incident.type}</h3>
                            <p>{incident.description}</p>
                            <p className="text-sm text-gray-500">Location: {incident.location}</p>
                            <p className="text-sm text-gray-500">User: {incident.user?.email}</p>
                            <div className="mt-2">
                                <span className="font-semibold mr-2">Status: {incident.status}</span>
                                <select
                                    className="border p-1 rounded"
                                    value={incident.status}
                                    onChange={(e) => updateStatus(incident.id, e.target.value)}
                                >
                                    <option value="PENDING">Pending</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="RESOLVED">Resolved</option>
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
