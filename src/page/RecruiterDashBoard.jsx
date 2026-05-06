import CreateJobModel from "@/components/CreateJobModel";
import DashBoardCard from "../components/DashBoardCard";
import { useDashboardStats, useMyJobs } from "../hooks/useJob";

const RecruiterDashBoard = () => {
    const { data, isLoading, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage, isFetchingNextPage,
    } = useMyJobs();

    const { data: dashboardStats } = useDashboardStats();

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>;
    }
    const currentPage =
        data?.pages[data.pages.length - 1];

    const jobs = currentPage?.data || [];

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
                    <CreateJobModel />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Total Jobs</p>
                        <h2 className="text-2xl font-bold">
                            {dashboardStats?.total_jobs}
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Total Applications</p>
                        <h2 className="text-2xl font-bold">
                            {dashboardStats?.total_applications}
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-500">Expired Jobs</p>
                        <h2 className="text-2xl font-bold">
                            {dashboardStats?.expired_jobs}
                        </h2>
                    </div>
                </div>

                <div className="space-y-4">
                    {jobs.length > 0 ? (
                        <>
                            <DashBoardCard jobs={jobs} />
                            <div className="flex justify-center gap-4 mt-6">
                                <button
                                    onClick={() => fetchPreviousPage()}
                                    disabled={!hasPreviousPage}
                                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                                >
                                    Previous
                                </button>

                                <button
                                    onClick={() => fetchNextPage()}
                                    disabled={!hasNextPage}
                                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>

                            {isFetchingNextPage && (
                                <p className="text-center">
                                    Loading more...
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="text-center text-gray-500">
                            No jobs found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecruiterDashBoard;