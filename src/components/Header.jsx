import { Link } from "react-router";
import { useAuthcontext } from "../context/AuthContext";

function Header() {
    const { user, logout } = useAuthcontext();
    console.log({ user });

    return (
        <>
            <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-xl font-bold text-gray-800">
                    JobBoard
                </div>
                <div className="flex items-center gap-6 text-sm">
                    <Link
                        to="/jobs"
                        className="text-gray-600 hover:text-black transition text-xl"
                    >
                        Browse Jobs
                    </Link>
                    {user ? (
                        <>
                            <Link
                                to="/dashboard"
                                className="text-gray-600 hover:text-black transition text-xl"
                            >
                                Dashboard
                            </Link>

                            <div className="flex items-center gap-3">
                                <span className="text-gray-500">
                                    {user?.name || "User"}
                                </span>

                                <button
                                    onClick={logout}
                                    className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-lg">
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/auth/login"
                                className="px-4 py-1.5 border rounded-lg hover:bg-gray-100 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/auth/register"
                                className="px-4 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;