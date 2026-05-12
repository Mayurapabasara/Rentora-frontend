import {
    Mail,
    MapPin,
    Phone,
    ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {

    return (

        <footer className="w-full bg-black text-white relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

                {/* Top Section */}
                <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="flex flex-col gap-6">

                        <div className="flex items-center gap-4">

                            <div className="bg-white p-2 rounded-2xl shadow-lg">

                                <img
                                    src="/logo.png"
                                    alt="Rentora Logo"
                                    className="w-12 h-12 object-contain"
                                />

                            </div>

                            <div>

                                <h1 className="text-3xl font-bold tracking-wide">
                                    Rentora
                                </h1>

                                <p className="text-orange-400 text-sm">
                                    Buy Anything Anytime
                                </p>

                            </div>

                        </div>

                        <p className="text-gray-400 leading-relaxed text-sm">

                            Rentora Private Limited delivers a modern shopping experience with thousands of products, secure payments, and fast delivery services across Sri Lanka.

                        </p>

                        {/* Newsletter */}
                        <div className="mt-2">

                            <h3 className="font-semibold mb-3 text-white">
                                Subscribe Newsletter
                            </h3>

                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-4 py-3 outline-none text-sm text-white placeholder:text-gray-500"
                                />

                                <button
                                    className="bg-orange-500 hover:bg-orange-600 transition px-5 py-3"
                                >

                                    <ArrowRight className="w-5 h-5" />

                                </button>

                            </div>

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h2 className="text-xl font-semibold mb-6">
                            Quick Links
                        </h2>

                        <div className="flex flex-col gap-4 text-gray-400">

                            <Link
                                to="/"
                                className="hover:text-orange-400 transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/services"
                                className="hover:text-orange-400 transition"
                            >
                                Services
                            </Link>

                            <Link
                                to="/overview"
                                className="hover:text-orange-400 transition"
                            >
                                Products
                            </Link>

                            <Link
                                to="/contact"
                                className="hover:text-orange-400 transition"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/login"
                                className="hover:text-orange-400 transition"
                            >
                                Login
                            </Link>

                        </div>

                    </div>

                    {/* Categories */}
                    <div>

                        <h2 className="text-xl font-semibold mb-6">
                            Categories
                        </h2>

                        <div className="flex flex-col gap-4 text-gray-400">

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Electronics
                            </p>

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Fashion
                            </p>

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Beauty
                            </p>

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Home & Living
                            </p>

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Accessories
                            </p>

                        </div>

                    </div>

                    {/* Contact */}
                    <div>

                        <h2 className="text-xl font-semibold mb-6">
                            Contact Us
                        </h2>

                        <div className="flex flex-col gap-5">

                            {/* Address */}
                            <div className="flex items-start gap-4">

                                <div className="bg-orange-500/10 p-3 rounded-xl text-orange-400">

                                    <MapPin className="w-5 h-5" />

                                </div>

                                <div>

                                    <p className="font-medium">
                                        Address
                                    </p>

                                    <p className="text-gray-400 text-sm mt-1">
                                        Kurunegala, Sri Lanka
                                    </p>

                                </div>

                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">

                                <div className="bg-orange-500/10 p-3 rounded-xl text-orange-400">

                                    <Phone className="w-5 h-5" />

                                </div>

                                <div>

                                    <p className="font-medium">
                                        Phone
                                    </p>

                                    <p className="text-gray-400 text-sm mt-1">
                                        +94 717975625
                                    </p>

                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">

                                <div className="bg-orange-500/10 p-3 rounded-xl text-orange-400">

                                    <Mail className="w-5 h-5" />

                                </div>

                                <div>

                                    <p className="font-medium">
                                        Email
                                    </p>

                                    <p className="text-gray-400 text-sm mt-1 break-all">
                                        mayurapabasara143@gmail.com
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">

                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-sm text-gray-500 text-center md:text-left">
                            © {new Date().getFullYear()} Rentora Private Limited. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500">

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Privacy Policy
                            </p>

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Terms & Conditions
                            </p>

                            <p className="hover:text-orange-400 transition cursor-pointer">
                                Support
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}