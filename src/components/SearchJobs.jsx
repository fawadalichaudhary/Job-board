import bgimg from "../assets/image.png"
function SearchJobs() {
    return (
        <div className="py-16"
            style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="max-w-6xl mx-auto px-6 text-center ">

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Find Your Dream Job Today!
                </h1>

                <p className="text-green-500 mb-8">
                    Connecting Talent with Opportunity for Seamless Career Success
                </p>

                <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow-lg max-w-3xl mx-auto">
                    <input
                        type="text"
                        placeholder="Job Title"
                        className="flex-1 px-4 py-3 rounded-lg border outline-none text-gray-700"
                    />
                    <select className="p-1.5 rounded-lg border border-gray-300 text-gray-700 appearance-none focus:ring-2 focus:ring-green-400 outline-none">
                        <option value="">All</option>
                        <option value="remote">Part-time</option>
                        <option value="onsite">Full-time</option>
                        <option value="hybrid">Internship</option>
                    </select>
                    <select className="p-1.5 rounded-lg border border-gray-300 text-gray-700 appearance-none focus:ring-2 focus:ring-green-400 outline-none">
                        <option value=""> All</option>
                        <option value="">Junior</option>
                        <option value="">Mid</option>
                        <option value="">Senior</option>
                    </select>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Search Job
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchJobs;