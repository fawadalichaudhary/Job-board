import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useApplyJob, useUploadResume } from "../hooks/useJob";

const ApplyForm = () => {
    const navigate = useNavigate();
    const { mutate: applyJob, isPending } = useApplyJob();
    const { mutateAsync: uploadResume, isPending: uploading } =
        useUploadResume();

    const [step, setStep] = useState(1);
    const { jobId } = useParams()

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [experience, setExperience] = useState(0);
    const [current_role, setCurrent_role] = useState("");
    const [description, setDescription] = useState("");
    const [years_of_experience, setYears_of_experince] = useState("");
    const [cover_letter, setCover_letter] = useState("");
    const [resumeFile, setResumeFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let resumeUrl = "";

        if (resumeFile) {
            resumeUrl = await uploadResume(resumeFile);
        }
        console.log({ resumeUrl });

        applyJob(
            {
                job_id: jobId,
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                experience,
                years_of_experience,
                current_role,
                description,
                cover_letter,
                resume_url: resumeUrl,
            },
            {
                onSuccess: () => navigate("/"),
            }
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
            >
                <h2 className="text-2xl font-semibold text-gray-800">
                    Apply for Job
                </h2>

                {step === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border p-3 rounded-lg"
                        />
                        <input
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            className="border p-3 rounded-lg"
                        />
                        <input
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-3 rounded-lg"
                        />
                        <input
                            placeholder="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            className="border p-3 rounded-lg"
                        />
                    </div>
                )}

                {step === 2 && (
                    <>
                        <input
                            placeholder="Experience"
                            onChange={(e) => setExperience(e.target.value)}
                            className="border p-3 rounded-lg w-full"
                        />
                        <input
                            type="number"
                            placeholder="Years Of Experience"
                            onChange={(e) => setYears_of_experince(parseInt(e.target.value))}
                            className="border p-3 rounded-lg w-full"
                        />
                        <input
                            placeholder="Role"
                            onChange={(e) => setCurrent_role(e.target.value)}
                            className="border p-3 rounded-lg w-full"
                        />
                        <textarea
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            className="border p-3 rounded-lg w-full"
                            rows={4}
                        />
                    </>
                )}

                {step === 3 && (
                    <>
                        <textarea
                            placeholder="Cover Letter"
                            onChange={(e) => setCover_letter(e.target.value)}
                            className="border p-3 rounded-lg w-full"
                            rows={4}
                        />

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) =>
                                setResumeFile(e.target.files[0])
                            }
                            className="w-full"
                        />
                    </>
                )}

                <div className="flex justify-between">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Back
                        </button>
                    )}

                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={() => setStep(step + 1)}
                            className="px-4 py-2 bg-teal-500 text-white rounded"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isPending || uploading}
                            className="px-4 py-2 bg-teal-500 text-white rounded"
                        >
                            {uploading
                                ? "Uploading..."
                                : isPending
                                    ? "Submitting..."
                                    : "Submit"}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;