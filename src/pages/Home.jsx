import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to SafeNet</h1>
                <p className="text-lg text-gray-700">
                    A community safety platform to report and track incidents.
                </p>
            </div>
        </div>
    );
}
