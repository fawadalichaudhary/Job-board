import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
                <div className="flex items-center gap-3 mb-6">

                    <h1 className="text-lg font-semibold">JobBoard</h1>
                </div>

                <h2 className="text-2xl font-bold mb-1">Welcome</h2>


                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer">
                    Log in
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?
                    <Link to="/signup" className="text-blue-600 font-medium cursor-pointer">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
export default Login