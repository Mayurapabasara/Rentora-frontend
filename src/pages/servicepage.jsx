import Header from "../components/header";
import Footer from "../components/footer";

import {
    Truck,
    Package,
    ShieldCheck,
    Clock,
    ShoppingBag,
    ArrowRight,
    Sparkles,
    BadgeCheck,
    CreditCard,
    Headphones,
    Boxes
} from "lucide-react";

import { Link } from "react-router-dom";

export default function ServicesPage() {

    const services = [

        {
            icon: <Truck className="w-8 h-8" />,
            title: "Fast Delivery",
            description:
                "Get your products delivered quickly and safely with our trusted island-wide delivery network."
        },

        {
            icon: <Package className="w-8 h-8" />,
            title: "Wide Product Range",
            description:
                "Explore electronics, fashion, beauty, home essentials, accessories, and much more."
        },

        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Secure Payments",
            description:
                "Shop confidently with secure payment methods and protected transactions."
        },

        {
            icon: <Clock className="w-8 h-8" />,
            title: "24/7 Customer Support",
            description:
                "Our support team is always available to help with orders, payments, and inquiries."
        },

        {
            icon: <Boxes className="w-8 h-8" />,
            title: "Easy Returns",
            description:
                "Enjoy a simple and hassle-free return process for eligible products."
        },

        {
            icon: <Truck className="w-8 h-8" />,
            title: "Real-Time Tracking",
            description:
                "Track your orders in real-time and stay updated on delivery progress."
        }
    ];

    return (

        <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden">

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6">

                {/* Glow Effects */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium mb-6">

                        <Sparkles className="w-5 h-5" />

                        Premium Shopping Services

                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight max-w-5xl mx-auto">

                        Experience Modern
                        <span className="text-orange-500">
                            {" "}Shopping Services
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">

                        Rentora provides fast, reliable, and secure eCommerce services designed to make your shopping experience smooth, simple, and enjoyable.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

                        <Link
                            to="/overview"
                            className="px-8 py-4 rounded-2xl bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                        >

                            Browse Products

                            <ArrowRight className="w-5 h-5" />

                        </Link>

                        <Link
                            to="/contact"
                            className="px-8 py-4 rounded-2xl border-2 border-orange-500 text-orange-500 font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >

                            Contact Us

                        </Link>

                    </div>

                </div>

            </section>

            {/* Features Stats */}
            <section className="max-w-7xl mx-auto px-6 mb-20">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition">

                        <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">

                            <ShoppingBag className="w-8 h-8" />

                        </div>

                        <h2 className="text-4xl font-bold text-gray-800">
                            10K+
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Products
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition">

                        <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">

                            <Truck className="w-8 h-8" />

                        </div>

                        <h2 className="text-4xl font-bold text-gray-800">
                            24H
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Fast Delivery
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition">

                        <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">

                            <BadgeCheck className="w-8 h-8" />

                        </div>

                        <h2 className="text-4xl font-bold text-gray-800">
                            100%
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Secure
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition">

                        <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">

                            <Headphones className="w-8 h-8" />

                        </div>

                        <h2 className="text-4xl font-bold text-gray-800">
                            24/7
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Support
                        </p>

                    </div>

                </div>

            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">

                {/* Section Header */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Core Services
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">

                        Rentora provides a complete online shopping ecosystem with reliable and customer-focused services.

                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        services.map((service, index) => (

                            <div
                                key={index}
                                className="group bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >

                                {/* Icon */}
                                <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">

                                    {service.icon}

                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">

                                    {service.title}

                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed">

                                    {service.description}

                                </p>

                            </div>
                        ))
                    }

                </div>

            </section>

            {/* Why Choose Us */}
            <section className="bg-white py-24">

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <div>

                        <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium mb-6">

                            <BadgeCheck className="w-5 h-5" />

                            Why Choose Rentora

                        </div>

                        <h2 className="text-5xl font-bold text-gray-800 leading-tight">

                            Trusted By Thousands Of Customers

                        </h2>

                        <p className="text-gray-500 text-lg mt-6 leading-relaxed">

                            Rentora combines speed, convenience, and reliability to deliver a premium shopping experience. From daily essentials to premium products, everything is just a click away.

                        </p>

                        {/* Features */}
                        <div className="mt-10 flex flex-col gap-6">

                            <div className="flex items-start gap-4">

                                <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">

                                    <Truck className="w-6 h-6" />

                                </div>

                                <div>

                                    <h3 className="font-semibold text-gray-800 text-lg">
                                        Fast & Reliable Delivery
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        Timely delivery services across Sri Lanka.
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">

                                    <CreditCard className="w-6 h-6" />

                                </div>

                                <div>

                                    <h3 className="font-semibold text-gray-800 text-lg">
                                        Secure Transactions
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        Protected payment methods for worry-free shopping.
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">

                                    <ShieldCheck className="w-6 h-6" />

                                </div>

                                <div>

                                    <h3 className="font-semibold text-gray-800 text-lg">
                                        Trusted Platform
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        Thousands of happy customers trust Rentora daily.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Card */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">

                            <h2 className="text-4xl font-bold leading-tight">

                                Start Shopping With Confidence Today

                            </h2>

                            <p className="mt-6 text-orange-100 text-lg leading-relaxed">

                                Explore premium products, fast delivery, secure payments, and exceptional customer support — all in one place.

                            </p>

                            <Link
                                to="/overview"
                                className="mt-10 inline-flex items-center gap-3 bg-white text-orange-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300"
                            >

                                Shop Now

                                <ArrowRight className="w-5 h-5" />

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="relative py-24 px-6 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400"></div>

                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center text-white">

                    <h2 className="text-5xl font-bold leading-tight">

                        Ready To Experience Better Shopping?

                    </h2>

                    <p className="text-orange-100 text-lg mt-6 max-w-2xl mx-auto">

                        Join Rentora today and discover a modern online shopping platform designed for speed, reliability, and convenience.

                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

                        <Link
                            to="/overview"
                            className="px-8 py-4 rounded-2xl bg-white text-orange-500 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                        >

                            Browse Products

                        </Link>

                        <Link
                            to="/contact"
                            className="px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300"
                        >

                            Contact Support

                        </Link>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
}