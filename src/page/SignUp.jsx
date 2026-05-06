import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { signup, signupLoading } = useAuth();

    const handleSignup = () => {
        signup(name, email, password)
            .then(() => {
                console.log("Signup success");
            })
            .catch(() => {
                alert("Signup failed");
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
                <div className="flex items-center gap-3 mb-6">
                    <h1 className="text-lg font-semibold">JobBoard</h1>
                </div>

                <h2 className="text-2xl font-bold mb-1">Create your account</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={handleSignup}
                    className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition">
                    {signupLoading ? "loading" : "Create account"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?
                    <Link to="/auth/login"
                        className="text-teal-500 font-medium cursor-pointer">
                        Log in
                    </Link>
                </p>
            </div>
        </div>

    )
}

export default SignUp
