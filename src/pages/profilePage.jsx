import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/header";
import { Loader } from "../components/loader";

import {User,Mail,ShieldCheck,Phone,MapPin,Camera,BadgeCheck,Sparkles,CalendarDays} from "lucide-react";

import toast from "react-hot-toast";

export default function ProfilePage() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token || token === "null" || token === "undefined") {

            toast.error("Please login first");

            setLoading(false);

            return;
        }

        axios.get(import.meta.env.VITE_API_URL + "/api/users/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .then((res) => {

            setUser(res.data);

            setLoading(false);

        })

        .catch((err) => {

            console.error(err);

            toast.error("Failed to load profile");

            setLoading(false);

        });

    }, []);

    if (loading) {
        return <Loader />;
    }

    return (

        <div className="w-full min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 overflow-hidden">

            <Header />

            {/* Glow Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto pt-32 pb-20 px-5 relative z-10">

                {/* Main Container */}
                <div className="bg-white/90 backdrop-blur-2xl border border-white rounded-[40px] shadow-2xl overflow-hidden">

                    {/* HERO SECTION */}
                    <div className="relative h-90 overflow-hidden bg-linear-to-r from-orange-400 via-orange-300 to-orange-400">

                        {/* Glow Effects */}
                        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>

                        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-white/10 rounded-full blur-3xl"></div>

                        {/* Decorative Circles */}
                        <div className="absolute top-12 right-20 w-44 h-44 border border-white/20 rounded-full"></div>

                        <div className="absolute top-32 right-44 w-20 h-20 border border-white/20 rounded-full"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex items-end px-8 md:px-14 pb-10">

                            <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

                                {/* LEFT */}
                                <div className="flex flex-col md:flex-row items-center md:items-end gap-6">

                                    {/* Profile Image */}
                                    <div className="relative">

                                        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>

                                        <img
                                            src={
                                                user?.image ||
                                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                            }

                                            alt="profile"

                                            className="relative w-80 h-60 rounded-full border-[6px] border-white object-cover shadow-2xl"
                                        />

                                        {/* Camera Button */}
                                        <button className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-white text-orange-500 shadow-xl flex items-center justify-center hover:scale-110 transition">

                                            <Camera className="w-5 h-5" />

                                        </button>

                                        {/* Online */}
                                        <div className="absolute bottom-4 left-4 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>

                                    </div>

                                    {/* User Info */}
                                    <div className="text-black font-bold text-center md:text-left">

                                        <div className="flex items-center gap-3 justify-center md:justify-start">

                                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                                {user?.fullname}
                                            </h1>

                                            <BadgeCheck className="w-8 h-8 text-sky-300 mt-2" />

                                        </div>

                                        <p className="text-orange-100 text-xl mt-3">
                                            @{user?.username || "username"}
                                        </p>

                                        <div className="mt-5 flex items-center justify-center md:justify-start">

                                            <div className="px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center gap-3">

                                                <ShieldCheck className="w-5 h-5" />

                                                <span className="font-medium capitalize">
                                                    {user?.role || "user"}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* RIGHT */}
                                <div className="hidden lg:flex">

                                    <div className="bg-orange-500 backdrop-blur-2xl border border-white/20 rounded-[30px] p-2 text-white min-w-[320px] shadow-2xl">

                                        <p className="text-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 justify-center md:justify-start">
                                            Account Overview
                                        </p>

                                        <h2 className="text-5xl font-bold mt-3">
                                            Active
                                        </h2>

                                        <p className="text-orange-100 mt-4 leading-relaxed">
                                            Your Rentora account is verified and active with premium shopping access.
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-4 mt-8">

                                            <div className="bg-white/10 rounded-2xl p-4 text-black font-semibold flex flex-col items-center justify-center">

                                                <h3 className="text-2xl font-bold">
                                                    12
                                                </h3>

                                                <p className="text-sm text-black mt-1">
                                                    Orders
                                                </p>

                                            </div>

                                            <div className="bg-white/10 rounded-2xl p-4 text-black font-semibold text-align-center flex flex-col items-center justify-center">

                                                <h3 className="text-2xl font-bold">
                                                    VIP
                                                </h3>

                                                <p className="text-sm text-black mt-1">
                                                    Status
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* CONTENT */}
                    <div className="px-6 md:px-10 py-10">

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl p-6 text-white shadow-xl">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-orange-100">
                                            Account Status
                                        </p>

                                        <h2 className="text-3xl font-bold mt-2">
                                            Active
                                        </h2>

                                    </div>

                                    <Sparkles className="w-10 h-10 text-white/80" />

                                </div>

                            </div>

                            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-gray-500">
                                            Email Verification
                                        </p>

                                        <h2 className="text-3xl font-bold mt-2 text-green-500">
                                            {user?.isEmailVerified ? "Verified" : "Pending"}
                                        </h2>

                                    </div>

                                    <Mail className="w-10 h-10 text-orange-500" />

                                </div>

                            </div>

                            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-gray-500">
                                            Member Since
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2 text-gray-800">
                                            2025
                                        </h2>

                                    </div>

                                    <CalendarDays className="w-10 h-10 text-orange-500" />

                                </div>

                            </div>

                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Personal Info */}
                            <div className="bg-white border border-gray-200 rounded-[35px] p-8 shadow-lg">

                                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                    Personal Information
                                </h2>

                                <div className="flex flex-col gap-6">

                                    <div className="flex items-center gap-5 p-5 rounded-2xl bg-orange-50 border border-orange-100">

                                        <div className="bg-orange-100 text-orange-500 p-4 rounded-2xl">
                                            <User className="w-6 h-6" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Full Name</p>
                                            <h3 className="text-lg font-semibold text-gray-800">{user?.fullname}</h3>
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-5 p-5 rounded-2xl bg-orange-50 border border-orange-100">

                                        <div className="bg-orange-100 text-orange-500 p-4 rounded-2xl">
                                            <Mail className="w-6 h-6" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Email Address</p>
                                            <h3 className="text-lg font-semibold text-gray-800">{user?.email}</h3>
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-5 p-5 rounded-2xl bg-orange-50 border border-orange-100">

                                        <div className="bg-orange-100 text-orange-500 p-4 rounded-2xl">
                                            <Phone className="w-6 h-6" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Phone Number</p>
                                            <h3 className="text-lg font-semibold text-gray-800">+94 71 234 5678</h3>
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-5 p-5 rounded-2xl bg-orange-50 border border-orange-100">

                                        <div className="bg-orange-100 text-orange-500 p-4 rounded-2xl">
                                            <MapPin className="w-6 h-6" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Location</p>
                                            <h3 className="text-lg font-semibold text-gray-800">Sri Lanka</h3>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Right */}
                            <div className="flex flex-col gap-8">

                                {/* Security */}
                                <div className="bg-white border border-gray-200 rounded-[35px] p-8 shadow-lg">

                                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                        Security Status
                                    </h2>

                                    <div className="flex flex-col gap-5">

                                        <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-200">

                                            <div>
                                                <h3 className="font-semibold text-gray-800">Email Verification</h3>
                                                <p className="text-sm text-gray-500 mt-1">Account email verification status</p>
                                            </div>

                                            <span className={`px-5 py-2 rounded-xl text-sm font-semibold ${
                                                user?.isEmailVerified
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                            }`}>
                                                {user?.isEmailVerified ? "Verified" : "Pending"}
                                            </span>

                                        </div>

                                        <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-200">

                                            <div>
                                                <h3 className="font-semibold text-gray-800">Account Status</h3>
                                                <p className="text-sm text-gray-500 mt-1">Current account accessibility</p>
                                            </div>

                                            <span className={`px-5 py-2 rounded-xl text-sm font-semibold ${
                                                user?.isBlocked
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-green-100 text-green-600"
                                            }`}>
                                                {user?.isBlocked ? "Blocked" : "Active"}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[35px] p-10 text-white shadow-2xl relative overflow-hidden">

                                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                                    <div className="relative z-10">

                                        <h2 className="text-4xl font-bold leading-tight">
                                            Welcome Back To Rentora
                                        </h2>

                                        <p className="text-orange-100 mt-5 text-lg leading-relaxed">
                                            Manage your account, orders, and profile settings with a premium shopping experience.
                                        </p>

                                        <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-orange-500 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                                            Edit Profile
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}