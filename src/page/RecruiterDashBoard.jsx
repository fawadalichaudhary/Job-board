import { useDashboardStats } from "../components/Hooks/UseJob";

const RecruiterDashBoard = () => {
    const { data, isLoading } = useDashboardStats();

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    const stats = data || {
        total_jobs: 0,
        total_applications: 0,
        expired_jobs: 0,
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-6">

                <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Total Jobs</p>
                        <h2 className="text-2xl font-bold">{stats.totaljobs}</h2>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Total Applications</p>
                        <h2 className="text-2xl font-bold">{stats.totalapplications}</h2>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Expired Jobs</p>
                        <h2 className="text-2xl font-bold">{stats.expiredjobs}</h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RecruiterDashBoard;