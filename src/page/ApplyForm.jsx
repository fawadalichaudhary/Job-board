import { useState } from "react";
import { useApplyJob } from "../hooks/UseJob";
import { useNavigate } from "react-router";

const ApplyForm = () => {
    const { mutate, isPending } = useApplyJob();
    const navigate = useNavigate();


    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [experience, setExperience] = useState(null);
    const [role, setRole] = useState(null);
    const [description, setDescription] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null);

    const nextStep = () => setStep(step + 1);
    console.log({ step });

    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            experience: experience,
            role: role,
            description: description,
            coverLetter: coverLetter,
        };

        mutate(data, {
            onSuccess: () => {
                navigate("/");
                setStep(1)
            },
        });
    };
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <form className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-semibold text-gray-800">
                    Apply for Job
                </h2>
                {step === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border p-3 rounded-lg" />
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name" className="border p-3 rounded-lg" />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" className="border p-3 rounded-lg" />
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number" className="border p-3 rounded-lg" />
                    </div>
                )}
                {step === 2 && (
                    <>
                        <input
                            onChange={(e) => setExperience(e.target.value)}
                            placeholder="Years of Experience"
                            className="border p-3 rounded-lg w-full"
                        />

                        <input
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="Current Role"
                            className="border p-3 rounded-lg w-full"
                        />

                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe your experience"
                            className="border p-3 rounded-lg w-full"
                            rows={4}
                        />
                    </>
                )}
                {step === 3 && (
                    <>
                        <textarea
                            onChange={(e) => setCoverLetter(e.target.value)}
                            placeholder="Cover Letter"
                            className="border p-3 rounded-lg w-full"
                            rows={4}
                        />

                        <div className="border rounded-lg p-4 bg-gray-50">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Resume (PDF/DOC)
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="w-full"
                            />
                        </div>
                    </>
                )}
                <div className="flex justify-between pt-4">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-2 bg-gray-300 rounded-lg"
                        >
                            Back
                        </button>
                    )}

                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="px-6 py-2 bg-teal-500 text-white rounded-lg"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="button"
                            disabled={isPending}
                            className="px-6 py-2 bg-teal-500 text-white rounded-lg"
                        >
                            {isPending ? "Submitting..." : "Submit"}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;