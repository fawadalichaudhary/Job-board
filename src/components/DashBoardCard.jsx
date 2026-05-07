import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { useDeleteJob } from "@/hooks/useJob";
import { Link } from "react-router";

const DashBoardCard = ({ jobs }) => {
    const deleteJobMutation = useDeleteJob();


    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmDelete) return;

        deleteJobMutation.mutate(id);
    };
    return (
        <div className="border rounded-xl p-4 bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Experience</TableHead>
                        <TableHead>Applications</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {jobs?.map((job) => (
                        <TableRow key={job.id}>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>{job.location}</TableCell>
                            <TableCell>{job.jobType}</TableCell>
                            <TableCell>{job.experienceLevel}</TableCell>
                            <TableCell>{job.applicationCount}</TableCell>

                            <TableCell className="flex gap-2">
                                <Button
                                    className="bg-teal-400"
                                >
                                    Edit
                                </Button>

                                <Button
                                    className="bg-red-500"
                                    onClick={() => handleDelete(job.id)}
                                    disabled={deleteJobMutation.isPending}
                                >
                                    Delete
                                </Button>

                                <Link
                                    className="p-2 bg-gray-500 rounded-md"
                                    to={`/dashboard/jobs/${job.id}/application`}
                                >
                                    Applicants
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DashBoardCard;