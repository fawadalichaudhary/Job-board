import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useApplyJob } from "../components/Hooks/UseJob";

const ApplyForm = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const { mutate, isPending, isError, error } = useApplyJob();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        years_of_experience: "",
        current_role: "",
        experience: "",
        cover_letter: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("job_id", jobId);

        formData.append("first_name", form.first_name);
        formData.append("last_name", form.last_name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("years_of_experience", form.years_of_experience);
        formData.append("current_role", form.current_role);
        formData.append("experience", form.experience);
        formData.append("cover_letter", form.cover_letter);

        if (form.resume) {
            formData.append("resume", form.resume);
        }

        mutate(formData, {
            onSuccess: () => navigate("/jobs"),
        });
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="first_name"
                        placeholder="First Name"
                        className="border p-3 rounded-lg w-full"
                        onChange={handleChange}
                    />

                    <input
                        name="last_name"
                        placeholder="Last Name"
                        className="border p-3 rounded-lg w-full"
                        onChange={handleChange}
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        className="border p-3 rounded-lg w-full"
                        onChange={handleChange}
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        className="border p-3 rounded-lg w-full"
                        onChange={handleChange}
                    />

                    <input
                        name="years_of_experience"
                        placeholder="Years of Experience"
                        className="border p-3 rounded-lg w-full"
                        onChange={handleChange}
                    />

                    <input
                        name="current_role"
                        placeholder="Current Role"
                        className="border p-3 rounded-lg w-full"
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    name="experience"
                    placeholder="Describe your experience"
                    className="border p-3 rounded-lg w-full"
                    rows={4}
                    onChange={handleChange}
                />

                <textarea
                    name="cover_letter"
                    placeholder="Cover Letter"
                    className="border p-3 rounded-lg w-full"
                    rows={4}
                    onChange={handleChange}
                />

                <div className="border rounded-lg p-4 bg-gray-50">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Resume (PDF/DOC)
                    </label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full"
                    />
                </div>
                {isError && (
                    <p className="text-red-500 text-sm">
                        {error?.response?.data?.message || "Something went wrong"}
                    </p>
                )}
                <div className="flex justify-between pt-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-5 py-2 border rounded-lg"
                    >
                        Back
                    </button>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        {isPending ? "Submitting..." : "Continue"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;