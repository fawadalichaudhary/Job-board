import { Link } from "react-router";

const JobCard = ({ job }) => {


    return (
        <div className="bg-white p-5 rounded-xl border shadow-sm flex flex-col md:flex-row justify-between gap-4">
            <div className="space-y-2">
                <div className="flex gap-2 flex-wrap">
                    <span className="bg-gray-100 px-3 py-1 text-sm rounded-full">
                        {job.jobType}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 text-sm rounded-full">
                        {job.experienceLevel}
                    </span>
                </div>

                <h2 className="text-lg md:text-xl font-semibold text-blue-600">
                    {job.title}
                </h2>

                <p className="text-gray-600 text-sm">{job.company}</p>

                <div className="text-sm text-gray-500 flex flex-wrap gap-3">
                    <span>📍 {job.location}</span>
                    <span>
                        📅 {new Date(job.deadline).toLocaleDateString()}
                    </span>
                </div>
            </div>

            <div className="flex justify-end md:items-center">
                <Link to="/jobs/:jobId/apply" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Apply Now
                </Link>
            </div>
        </div>
    );
};

export default JobCard;