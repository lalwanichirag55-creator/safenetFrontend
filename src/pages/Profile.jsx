import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5001/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching profile");
            }
        };
        fetchProfile();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                {user ? (
                    <div className="bg-white p-6 rounded shadow inline-block">
                        <p className="text-lg">User ID: {user.userId}</p>
                        {/* Add more user details if available */}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
