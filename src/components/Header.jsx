import { Link } from "react-router"

function Header() {
    return (
        <header className="w-full border-b bg-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">JobBoard</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-6">
                    <Link to="/jobs" className="flex items-center gap-2 cursor-pointer">
                        Browse Jobs
                    </Link>
                    <Link to="/dashboard" className="flex items-center gap-2 cursor-pointer">
                        Dashboard
                    </Link>
                </div>
                <span className="text-gray-500">UserName</span>
                <button className="flex items-center gap-2 border px-4 py-1.5 rounded-lg cursor-pointer">
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Header
