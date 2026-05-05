import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const { login, loginLoading } = useAuth()

    const handleLogin = () => {
        login(email, password).then(() => {
            navigate("/dashboard")
                .catch(() => {
                    alert("Login Fail")
                })
        })
    }

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
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium cursor-pointer">
                    {loginLoading ? "...loading" : "Login"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?
                    <Link to="/auth/register" className="text-teal-500 font-medium cursor-pointer">
                        register
                    </Link>
                </p>
            </div>
        </div>
    );
}
export default Login