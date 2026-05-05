import { Link } from "react-router";

const JobCard = ({ job }) => {
    return (
        <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-5 space-y-4">
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        {job.title}
                    </h2>
                    <p className="text-sm text-gray-500">{job.company}</p>
                </div>

                <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">
                    {job.jobType}
                </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-600">

                <div>
                    <p className="text-gray-400">Location</p>
                    <p className="font-medium">{job.location}</p>
                </div>

                <div>
                    <p className="text-gray-400">Experience</p>
                    <p className="font-medium">{job.experienceLevel}</p>
                </div>

                <div>
                    <p className="text-gray-400">Deadline</p>
                    <p className="font-medium">
                        {new Date(job.deadline).toLocaleDateString()}
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
                {job.description}
            </p>
            <div className="flex justify-between items-center pt-2">

                <span className="text-xs text-gray-400">
                    Posted recently
                </span>
                <Link
                    to={`/jobs/${job.id}/apply`}
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg transition"
                >
                    Apply Now
                </Link>
            </div>

        </div>
    );
};

export default JobCard;