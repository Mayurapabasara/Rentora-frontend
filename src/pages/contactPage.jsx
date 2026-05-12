import Header from "../components/header";
import Footer from "../components/footer";

import {
    Mail,
    MapPin,
    Phone,
    Send,
    Clock3,
    ShieldCheck,
    MessageSquare
} from "lucide-react";

export default function ContactPage() {

    return (

        <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden">

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6">

                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium mb-6">

                        <MessageSquare className="w-5 h-5" />

                        Contact Rentora

                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">

                        We’d Love To Hear
                        <span className="text-orange-500">
                            {" "}From You
                        </span>

                    </h1>

                    <p className="text-gray-500 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">

                        Have questions about products, orders, or services?
                        Our Rentora support team is always ready to help you
                        with a fast and reliable response.

                    </p>

                </div>

            </section>

            {/* Main Section */}
            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Contact Form */}
                    <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                        <div className="mb-8">

                            <h2 className="text-3xl font-bold text-gray-800">
                                Send a Message
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Fill out the form and our team will contact you shortly.
                            </p>

                        </div>

                        <form className="flex flex-col gap-6">

                            {/* Name */}
                            <div>

                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                />

                            </div>

                            {/* Email */}
                            <div>

                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                />

                            </div>

                            {/* Subject */}
                            <div>

                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                />

                            </div>

                            {/* Message */}
                            <div>

                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition resize-none"
                                ></textarea>

                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                            >

                                <Send className="w-5 h-5" />

                                Send Message

                            </button>

                        </form>

                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-6">

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* Location */}
                            <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-6 hover:shadow-xl transition">

                                <div className="bg-orange-100 text-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">

                                    <MapPin className="w-7 h-7" />

                                </div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Location
                                </h3>

                                <p className="text-gray-500 mt-2 leading-relaxed">
                                    Kurunegala,
                                    <br />
                                    Sri Lanka
                                </p>

                            </div>

                            {/* Phone */}
                            <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-6 hover:shadow-xl transition">

                                <div className="bg-orange-100 text-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">

                                    <Phone className="w-7 h-7" />

                                </div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Phone
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    +94 717975625
                                </p>

                            </div>

                            {/* Email */}
                            <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-6 hover:shadow-xl transition">

                                <div className="bg-orange-100 text-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">

                                    <Mail className="w-7 h-7" />

                                </div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Email
                                </h3>

                                <p className="text-gray-500 mt-2 break-all">
                                    mayurapabasara143@gmail.com
                                </p>

                            </div>

                            {/* Working Hours */}
                            <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-6 hover:shadow-xl transition">

                                <div className="bg-orange-100 text-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">

                                    <Clock3 className="w-7 h-7" />

                                </div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Working Hours
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    Mon - Sat
                                    <br />
                                    8.00 AM - 8.00 PM
                                </p>

                            </div>

                        </div>

                        {/* Map Section */}
                        <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl overflow-hidden">

                            <div className="p-6 border-b border-gray-200">

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Find Us
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Visit our Rentora office location
                                </p>

                            </div>

                            {/* Placeholder Map */}
                            <div className="h-[350px] bg-gradient-to-br from-orange-100 to-orange-50 flex flex-col items-center justify-center text-center p-6">

                                <div className="bg-white shadow-lg p-5 rounded-3xl mb-5">

                                    <MapPin className="w-12 h-12 text-orange-500" />

                                </div>

                                <h3 className="text-2xl font-bold text-gray-800">
                                    Google Map Integration
                                </h3>

                                <p className="text-gray-500 mt-3 max-w-md">
                                    Interactive Google Maps location will be added here for easier navigation and store access.
                                </p>

                            </div>

                        </div>

                        {/* Trust Section */}
                        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl p-8 text-white shadow-xl">

                            <div className="flex items-start gap-5">

                                <div className="bg-white/20 p-4 rounded-2xl">

                                    <ShieldCheck className="w-8 h-8" />

                                </div>

                                <div>

                                    <h2 className="text-2xl font-bold">
                                        Trusted Customer Support
                                    </h2>

                                    <p className="text-orange-100 mt-3 leading-relaxed">
                                        Rentora provides reliable customer support to ensure a smooth and secure shopping experience for every customer.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
}