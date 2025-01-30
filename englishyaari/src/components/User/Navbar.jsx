import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { Bell, MessageCircle, Search } from 'lucide-react';

export function Navbar() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">AN</span>
                        </div>
                        <span className="text-purple-600 font-semibold">
                            Fluentio
                        </span>
                    </Link>

                    {/* Search Bar */}
                    <div className="relative max-w-md w-full mx-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="search"
                            placeholder="Search Courses"
                            className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-customPurple  hover:text-purple-600 text-md font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/bookings"
                            className="text-customPurple  hover:text-purple-600 text-md font-medium"
                        >
                            Bookings
                        </Link>
                        <Link
                            to="/mentors"
                            className="text-customPurple  hover:text-purple-600 text-md font-medium"
                        >
                            Mentors
                        </Link>
                        <Link
                            to="/profile"
                            className="text-customPurple  hover:text-purple-600 text-md font-medium"
                        >
                            Profile
                        </Link>
                    </div>

                    {/* Auth Section */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <MessageCircle className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <Bell className="w-5 h-5 text-gray-600" />
                                </button>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-gray-600 font-bold">
                                            {user?.name
                                                ?.charAt(0)
                                                .toUpperCase() || 'U'}
                                        </span>
                                    </div>
                                    <Button
                                        className="text-gray-600 hover:text-gray-900"
                                        onClick={handleLogout}
                                    >
                                        Sign out
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <MessageCircle className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <Bell className="w-5 h-5 text-gray-600" />
                                </button>
                                <Link to="/signup">
                                    <Button className="w-[168px] border-2 border-DarkBlue bg-white hover:bg-gray-50 text-DarkBlue rounded-lg font-medium">
                                        Create Account
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button className="w-[168px] bg-yellow-400 hover:bg-yellow-500 text-darkBlue shadow-lg rounded-lg font-medium">
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
