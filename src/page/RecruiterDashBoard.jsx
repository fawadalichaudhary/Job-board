import { useDashboardStats } from "../Hooks/UseJob";

const RecruiterDashBoard = () => {
    const { data, isLoading } = useDashboardStats();
    console.log(data);

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>;
    }
    const jobs = data?.data || [];


    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-6">

                <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Total Jobs</p>
                        <h2 className="text-2xl font-bold">{data.total_jobs}</h2>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Total Applications</p>
                        <h2 className="text-2xl font-bold">{data.total_applications}</h2>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Expired Jobs</p>
                        <h2 className="text-2xl font-bold">{data.expired_jobs}</h2>
                    </div>

                </div>
                <div className="space-y-4">
                    {jobs.length > 0 ? (
                        jobs.map((job) => (
                            <div key={job.id}>
                                <p>
                                    {job.title}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No jobs found</p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default RecruiterDashBoard;