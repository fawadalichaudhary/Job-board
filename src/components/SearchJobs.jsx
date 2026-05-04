

function SearchJobs() {
    return (
        <div>
            <div className="bg-gray-100 py-1 px-1">
                <div className="px-5">

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Find your next role
                    </h1>


                    <p className="text-gray-600 text-lg mb-8">
                        Browse open positions from top companies. Apply in minutes — no
                        account needed.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-3 w-full">
                            <input
                                type="text"
                                placeholder="Search by job title or company..."
                                className="w-3/4 outline-none text-gray-700"
                            />
                        </div>
                        <select className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 w-full md:w-40">
                            <option>All</option>
                            <option>Engineering</option>
                            <option>Design</option>
                            <option>Marketing</option>
                        </select>
                        <select className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 w-full md:w-40">
                            <option>All</option>
                            <option>Remote</option>
                            <option>On-site</option>
                            <option>Hybrid</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchJobs
