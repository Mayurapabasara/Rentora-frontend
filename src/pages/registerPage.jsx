import React, { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight
} from "lucide-react";

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleRegister() {

        if (password !== confirmPassword) {

            toast.error("Passwords do not match. Please try again.");

            return;
        }

        try {

            setLoading(true);

            await axios.post(
                import.meta.env.VITE_API_URL + "/api/users",
                {
                    fullname: fullName,
                    username: username,
                    email: email,
                    password: password
                }
            );

            toast.success(
                "Registration successful! Please login to your account."
            );

            navigate("/login");

        } catch (error) {

            console.error("Error registering:", error);

            toast.error("Registration failed. Please try again.");

        } finally {

            setLoading(false);

        }
    }

    return (

        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative px-5 py-10 overflow-hidden"
            style={{
                backgroundImage: "url('/bg_login.png')"
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

            {/* Register Card */}
            <div className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] shadow-2xl p-8 md:p-10">

                {/* Logo */}
                <div className="flex flex-col items-center text-center">

                    <img
                        src="/rentora_logo.png"
                        alt="Rentora"
                        className="w-52 drop-shadow-xl"
                    />

                    <h1 className="text-4xl font-bold text-white mt-2">
                        Create Account
                    </h1>

                    <p className="text-gray-300 mt-3">
                        Join Rentora and start your premium shopping experience.
                    </p>

                </div>

                {/* Form */}
                <div className="flex flex-col gap-5 mt-10">

                    {/* Full Name */}
                    <div>

                        <label className="text-sm text-white font-medium mb-3 block">
                            Full Name
                        </label>

                        <div className="relative">

                            <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition"
                            />

                        </div>

                    </div>

                    {/* Username */}
                    <div>

                        <label className="text-sm text-white font-medium mb-3 block">
                            Username
                        </label>

                        <div className="relative">

                            <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Choose a username"
                                autoComplete="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition"
                            />

                        </div>

                    </div>

                    {/* Email */}
                    <div>

                        <label className="text-sm text-white font-medium mb-3 block">
                            Email Address
                        </label>

                        <div className="relative">

                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition"
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div>

                        <label className="text-sm text-white font-medium mb-3 block">
                            Password
                        </label>

                        <div className="relative">

                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 pl-14 pr-14 text-white placeholder:text-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition"
                            >

                                {
                                    showPassword
                                        ? <EyeOff className="w-5 h-5" />
                                        : <Eye className="w-5 h-5" />
                                }

                            </button>

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div>

                        <label className="text-sm text-white font-medium mb-3 block">
                            Confirm Password
                        </label>

                        <div className="relative">

                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 pl-14 pr-14 text-white placeholder:text-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition"
                            >

                                {
                                    showConfirmPassword
                                        ? <EyeOff className="w-5 h-5" />
                                        : <Eye className="w-5 h-5" />
                                }

                            </button>

                        </div>

                    </div>

                    {/* Register Button */}
                    <button
                        onClick={handleRegister}
                        disabled={loading}
                        className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 mt-2"
                    >

                        {
                            loading ? (

                                <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

                            ) : (

                                <>
                                    Create Account
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )
                        }

                    </button>

                </div>

                {/* Bottom */}
                <div className="mt-8 text-center">

                    <p className="text-gray-300">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-orange-400 font-semibold ml-2 hover:text-orange-300 transition"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}