import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { User, LogOut, Package, Settings, ChevronDown } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

export default function UserData() {

    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLogOutConfirmOpen, setIsLogOutConfirmOpen] = useState(false);

    const dropdownRef = useRef();
    const navigate = useNavigate();

    // Load User
    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token !== null) {

            axios.get(import.meta.env.VITE_API_URL + "/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            .then((res) => {

                setUser(res.data);
                setUserLoading(false);

            })

            .catch(() => {

                localStorage.removeItem("token");
                setUser(null);
                setUserLoading(false);

            });

        } else {

            setUserLoading(false);

        }

    }, []);

    // Outside Click
    useEffect(() => {

        function handleClickOutside(event) {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {

                setIsDropdownOpen(false);
                setIsLogOutConfirmOpen(false);

            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {

            document.removeEventListener("mousedown", handleClickOutside);

        };

    }, []);

    // Logout
    function handleLogout() {

        localStorage.removeItem("token");
        window.location.href = "/login";

    }

    // Loading
    if (userLoading) {

        return (
            <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-4 border-orange-100 border-t-orange-500 animate-spin"></div>
            </div>
        );
    }

    // No User
    if (!user) {

        return (
            <Link
                to="/login"
                className="px-5 py-2.5 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
                Login
            </Link>
        );
    }

    return (

        <div className="relative" ref={dropdownRef}>

            {/* User Button */}
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-full px-3 py-2 shadow-sm transition-all duration-300"
            >

                {/* Profile */}
                <div className="relative">

                    <img
                        src={user.image || "https://ui-avatars.com/api/?name=" + user.name}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                    />

                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>

                </div>

                {/* Name */}
                <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-semibold text-gray-800 leading-none">{user.name}</span>
                    <span className="text-md font-semibold text-gray-800 mt-1">My Account</span>
                </div>

                {/* Arrow */}
                <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />

            </button>

            {/* Dropdown */}
            {
                isDropdownOpen && (

                    <div className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-50">

                        {/* Top */}
                        <div className="bg-linear-to-r from-orange-500 to-orange-400 p-6 text-white">

                            <div className="flex items-center gap-4">

                                <img
                                    src={user.image || "https://ui-avatars.com/api/?name=" + user.name}
                                    alt="profile"
                                    className="w-16 h-16 rounded-full border-4 border-white object-cover"
                                />

                                <div>
                                    <h2 className="text-xl font-bold">{user.name}</h2>
                                    <p className="text-orange-100 text-sm mt-1 break-all">{user.email}</p>
                                </div>

                            </div>

                        </div>

                        {/* Menu */}
                        <div className="p-3 flex flex-col">

                            {/* Profile */}
                            <button
                                onClick={() => {
                                    navigate("/profilePage");
                                    setIsDropdownOpen(false);
                                }}
                                className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-orange-50 transition group"
                            >

                                <div className="bg-orange-100 text-orange-500 p-3 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition">
                                    <User className="w-5 h-5" />
                                </div>

                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-800">My Profile</h3>
                                    <p className="text-sm text-gray-500">View account details</p>
                                </div>

                            </button>

                            {/* Orders */}
                            <button
                                onClick={() => {
                                    navigate("/checkout");
                                    setIsDropdownOpen(false);
                                }}
                                className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-orange-50 transition group"
                            >

                                <div className="bg-orange-100 text-orange-500 p-3 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition">
                                    <Package className="w-5 h-5" />
                                </div>

                                <div className="text-left">
                                    <h3 to="/checkout" className="font-semibold text-gray-800">My Orders</h3>
                                    <p className="text-sm text-gray-500">Track your purchases</p>
                                </div>

                            </button>

                            {/* Settings */}
                            <button className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-orange-50 transition group">

                                <div className="bg-orange-100 text-orange-500 p-3 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition">
                                    <Settings className="w-5 h-5" />
                                </div>

                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-800">Settings</h3>
                                    <p className="text-sm text-gray-500">Manage preferences</p>
                                </div>

                            </button>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-3"></div>

                            {/* Logout */}
                            {
                                !isLogOutConfirmOpen ? (

                                    <button
                                        onClick={() => setIsLogOutConfirmOpen(true)}
                                        className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-red-50 transition group"
                                    >

                                        <div className="bg-red-100 text-red-500 p-3 rounded-xl group-hover:bg-red-500 group-hover:text-white transition">
                                            <LogOut className="w-5 h-5" />
                                        </div>

                                        <div className="text-left">
                                            <h3 className="font-semibold text-red-500">Logout</h3>
                                            <p className="text-sm text-gray-500">Sign out from account</p>
                                        </div>

                                    </button>

                                ) : (

                                    <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mt-2">

                                        <h3 className="font-semibold text-gray-800">Confirm Logout</h3>

                                        <p className="text-sm text-gray-500 mt-2">
                                            Are you sure you want to logout?
                                        </p>

                                        <div className="flex gap-3 mt-5">

                                            <button
                                                onClick={handleLogout}
                                                className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                                            >
                                                Logout
                                            </button>

                                            <button
                                                onClick={() => setIsLogOutConfirmOpen(false)}
                                                className="flex-1 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
                                            >
                                                Cancel
                                            </button>

                                        </div>

                                    </div>
                                )
                            }

                        </div>

                    </div>
                )
            }

        </div>
    );
}