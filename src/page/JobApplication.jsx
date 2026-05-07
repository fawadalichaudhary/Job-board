import { useParams } from "react-router";

import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useJobApplicants } from "@/hooks/useJob";

const JobApplication = () => {
    const { jobId } = useParams();

    const { data, isLoading, isError } =
        useJobApplicants(jobId);

    const applicants = data?.data || [];

    if (isLoading) {
        return (
            <div className="p-6 text-center">
                Loading applicants...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-6 text-center text-red-500">
                Failed to load applicants
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">
                    Applicants
                </h1>

                <p className="text-gray-500">
                    Total Applicants: {applicants.length}
                </p>
            </div>

            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Current Role</TableHead>
                            <TableHead>Experience</TableHead>
                            <TableHead>Years</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Resume</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {applicants.length > 0 ? (
                            applicants.map((applicant) => (
                                <TableRow key={applicant.id}>
                                    <TableCell className="font-medium">
                                        {applicant.firstName}
                                        {applicant.lastName}
                                    </TableCell>

                                    <TableCell>
                                        {applicant.email}
                                    </TableCell>

                                    <TableCell>
                                        {applicant.phone}
                                    </TableCell>

                                    <TableCell>
                                        {applicant.currentRole}
                                    </TableCell>

                                    <TableCell >
                                        {applicant.experience}
                                    </TableCell>

                                    <TableCell>
                                        {applicant.years_of_experience} yrs
                                    </TableCell>

                                    <TableCell>

                                        {applicant.status}
                                    </TableCell>

                                    <TableCell>
                                        Resume
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={8}

                                >
                                    No applicants found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default JobApplication;