import { useState } from "react";
import { useCreateJob } from "@/hooks/useJob";

import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "../components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router";

function CreateJobModel() {

    const navigate = useNavigate()
    const { mutate, isPending } = useCreateJob();

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");
    const [description, setDescription] = useState("");
    const [salaryRange, setSalaryRange] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = () => {
        mutate(
            {
                title,
                company,
                location,
                job_type: jobType,
                experience_level: experienceLevel,
                description,
                salary_range: salaryRange,
                deadline,
            },
            {
                onSuccess: () => {
                    alert("Job created!");
                    navigate("/dashboard")
                },
            }
        );
    };

    return (
        <Dialog>
            <DialogTrigger className="bg-teal-600 p-2 rounded-md">
                Add Job
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create Job</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                    <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <select
                        className="w-full border rounded p-2"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                    <select
                        className="w-full border rounded p-2"
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value)}
                    >
                        <option value="">Select Experience</option>
                        <option value="Junior">Junior</option>
                        <option value="Mid">Mid</option>
                        <option value="Senior">Senior</option>
                    </select>

                    <Input
                        placeholder="Salary Range"
                        value={salaryRange}
                        onChange={(e) => setSalaryRange(e.target.value)}
                    />

                    <Input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />

                    <Textarea
                        placeholder="Job Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Button onClick={handleSubmit} disabled={isPending}>
                        {isPending ? "Creating..." : "Create Job"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default CreateJobModel;