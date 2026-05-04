
import { useNavigate } from "react-router";
import { useApplyJob } from "../components/Hooks/UseJob";

const ApplyForm = () => {
    const navigate = useNavigate();
    const { isPending, isError, error } = useApplyJob();





    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <form

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

                    />

                    <input
                        name="last_name"
                        placeholder="Last Name"
                        className="border p-3 rounded-lg w-full"

                    />

                    <input
                        name="email"
                        placeholder="Email"
                        className="border p-3 rounded-lg w-full"

                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        className="border p-3 rounded-lg w-full"

                    />

                    <input
                        name="years_of_experience"
                        placeholder="Years of Experience"
                        className="border p-3 rounded-lg w-full"

                    />

                    <input
                        name="current_role"
                        placeholder="Current Role"
                        className="border p-3 rounded-lg w-full"

                    />
                </div>
                <textarea
                    name="experience"
                    placeholder="Describe your experience"
                    className="border p-3 rounded-lg w-full"
                    rows={4}

                />

                <textarea
                    name="cover_letter"
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