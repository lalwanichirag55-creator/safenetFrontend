import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function ReportIncident() {
    const [formData, setFormData] = useState({
        type: "",
        description: "",
        location: "",
        mediaUrl: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:5001/api/incidents", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Incident reported successfully!");
            navigate("/my-reports");
        } catch (err) {
            alert("Error reporting incident");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Report an Incident</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="type"
                        placeholder="Incident Type"
                        className="w-full p-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        className="w-full p-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="w-full p-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="mediaUrl"
                        placeholder="Media URL (Optional)"
                        className="w-full p-2 border rounded"
                        onChange={handleChange}
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
