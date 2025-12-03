import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">SafeNet</h1>
            <div className="space-x-4">
                {token ? (
                    <>
                        <Link to="/home" className="hover:underline">Home</Link>
                        <Link to="/report" className="hover:underline">Report Incident</Link>
                        <Link to="/my-reports" className="hover:underline">My Reports</Link>
                        <Link to="/admin" className="hover:underline">Admin</Link>
                        <Link to="/profile" className="hover:underline">Profile</Link>
                        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/" className="hover:underline">Login</Link>
                        <Link to="/signup" className="hover:underline">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
