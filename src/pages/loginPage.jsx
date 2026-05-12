import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {Eye,EyeOff,Mail,Lock,ArrowRight} from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            axios.post(import.meta.env.VITE_API_URL + "/api/users/google-login", {
                token: tokenResponse.access_token
            }).then((res)=> {
                localStorage.setItem("token", res.data.token);
                toast.success("Login successful!");
                const user = res.data.user;

                if (user.role === "admin") {
                    navigate("/admin");
                }else {
                    navigate("/");
                }
            }).catch((err) => {
                console.error("Google login error:", err);
                toast.error("Google login failed. Please try again.");
            });
        }
    });

    async function handleLogin() {

        try {

            setLoading(true);

            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/api/users/login",
                {
                    email: email,
                    password: password
                }
            );

            localStorage.setItem("token", response.data.token);

            const data = response.data;

            toast.success("Login successful!");

            if (data.user.role === "admin") {

                navigate("/admin");

            } else {

                navigate("/");

            }

        } catch (error) {

            console.error("Error logging in:", error);

            toast.error(
                "Login failed. Please check your credentials and try again."
            );

        } finally {

            setLoading(false);

        }
    }


    return (

        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative px-5"
            style={{
                backgroundImage: "url('/bg_login.png')"
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] shadow-2xl p-8 md:p-10">

                {/* Logo */}
                <div className="flex flex-col items-center text-center">

                    <img
                        src="/rentora_logo.png"
                        alt="Rentora"
                        className="w-44 drop-shadow-xl"
                    />

                    <h1 className="text-4xl font-bold text-white mt-3">
                        Welcome Back
                    </h1>

                    <p className="text-gray-300 mt-3">
                        Login to continue shopping with Rentora
                    </p>

                </div>

                {/* Form */}
                <div className="flex flex-col gap-6 mt-10">

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
                                placeholder="Enter your password"
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

                    {/* Forgot Password */}
                    <div className="flex justify-end">

                        <Link to="/forget-password" className="text-sm text-orange-400 hover:text-orange-300 transition">
                            Forgot Password?
                        </Link>

                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                    >

                        {loading ? (
                                <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Login
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )
                        }

                    </button>

                    {/* Google Login Button */}
                    <button
                        onClick={googleLogin}
                        disabled={loading}
                        className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                    >

                        {loading ? (
                                <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Google Login
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )
                        }

                    </button>

                </div>

                {/* Bottom */}
                <div className="mt-8 text-center">

                    <p className="text-gray-300">

                        Don’t have an account?

                        <Link
                            to="/register"
                            className="text-orange-400 font-semibold ml-2 hover:text-orange-300 transition"
                        >
                            Sign Up
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}