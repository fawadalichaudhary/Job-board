import { useState } from "react";
import bgimg from "../assets/image.png";

function SearchJobs({ onSearch }) {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");

    const handleSearch = () => {
        onSearch({ title, type, level });
    };

    return (
        <div className="py-16" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Find Your Dream Job Today!
                </h1>

                <p className="text-green-500 mb-8">
                    Connecting Talent with Opportunity for Seamless Career Success
                </p>

                <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow-lg max-w-3xl mx-auto">

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Job Title"
                        className="flex-1 px-4 py-3 rounded-lg border outline-none"
                    />

                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="p-1.5 rounded-lg border"
                    >
                        <option value="">Job-Time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Internship">Internship</option>
                        <option value="Contract">Contract</option>
                    </select>

                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="p-1.5 rounded-lg border"
                    >
                        <option value="">Experience-Level</option>
                        <option value="Junior">Junior</option>
                        <option value="Mid">Mid</option>
                        <option value="Senior">Senior</option>
                    </select>

                    <button
                        onClick={handleSearch}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg"
                    >
                        Search Job
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchJobs;