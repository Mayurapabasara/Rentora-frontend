import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

import { ProductListPage } from "./productListPage";

import {
    ArrowRight,
    ShieldCheck,
    Truck,
    Sparkles,
    ShoppingBag,
    Star,
    CreditCard,
    Headphones
} from "lucide-react";

export default function HomePage() {

    const features = [

        {
            icon: <ShoppingBag className="w-8 h-8" />,
            title: "Easy Shopping",
            description:
                "Browse thousands of products and shop with a smooth experience."
        },

        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Secure Payments",
            description:
                "Safe and trusted payment methods for worry-free shopping."
        },

        {
            icon: <Truck className="w-8 h-8" />,
            title: "Fast Delivery",
            description:
                "Quick island-wide delivery service directly to your doorstep."
        },

        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Easy Checkout",
            description:
                "Simple and fast checkout process with a premium experience."
        },

        {
            icon: <Headphones className="w-8 h-8" />,
            title: "24/7 Support",
            description:
                "Friendly customer support available anytime you need help."
        },

        {
            icon: <Star className="w-8 h-8" />,
            title: "Premium Quality",
            description:
                "Carefully selected quality products across all categories."
        }
    ];

    return (

        <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden">

            <Header />

            {/* HERO SECTION */}
            <section
                className="relative w-full min-h-screen flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg_img.png')"
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20"></div>

                {/* Glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">

                    <div className="max-w-3xl">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-white mb-8">

                            <Sparkles className="w-5 h-5 text-orange-400" />

                            Premium Online Shopping Platform

                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

                            Buy Anything
                            <span className="text-orange-500">
                                {" "}You Want
                            </span>

                            <br />

                            Anytime Anywhere

                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">

                            Shop electronics, fashion, beauty, home essentials, accessories, and thousands of premium products delivered directly to your doorstep.

                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 mt-10">

                            <Link
                                to="/overview"
                                className="px-8 py-4 rounded-2xl bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
                            >

                                Browse Products

                                <ArrowRight className="w-5 h-5" />

                            </Link>

                            <Link
                                to="/services"
                                className="px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                            >

                                Explore Services

                            </Link>

                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-10 mt-16">

                            <div>

                                <h2 className="text-4xl font-bold text-white">
                                    10K+
                                </h2>

                                <p className="text-gray-300 mt-2">
                                    Products
                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-bold text-white">
                                    5K+
                                </h2>

                                <p className="text-gray-300 mt-2">
                                    Customers
                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-bold text-white">
                                    24/7
                                </h2>

                                <p className="text-gray-300 mt-2">
                                    Support
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Scroll */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">

                    <a
                        href="#products"
                        className="flex flex-col items-center gap-2"
                    >

                        <span className="text-sm tracking-widest uppercase">
                            Scroll Down
                        </span>

                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />

                        </svg>

                    </a>

                </div>

            </section>

            {/* FEATURE SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                {/* Title */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium mb-6">

                        <Sparkles className="w-5 h-5" />

                        Why Choose Rentora

                    </div>

                    <h2 className="text-5xl font-bold text-gray-800">

                        Premium Shopping Experience

                    </h2>

                    <p className="text-gray-500 text-lg mt-5 max-w-3xl mx-auto">

                        Rentora combines modern technology, premium products, and fast delivery services to provide the best online shopping platform.

                    </p>

                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        features.map((feature, index) => (

                            <div
                                key={index}
                                className="group bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >

                                {/* Icon */}
                                <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">

                                    {feature.icon}

                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">

                                    {feature.title}

                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed">

                                    {feature.description}

                                </p>

                            </div>
                        ))
                    }

                </div>

            </section>

            {/* PRODUCT SECTION */}
            <section
                id="products"
                className="relative py-24 bg-gradient-to-b from-white to-gray-100"
            >

                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

                        <div>

                            <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium mb-6">

                                <ShoppingBag className="w-5 h-5" />

                                Featured Products

                            </div>

                            <h2 className="text-5xl font-bold text-gray-800">

                                Discover Trending Products

                            </h2>

                            <p className="text-gray-500 text-lg mt-5 max-w-2xl">

                                Explore the latest and most popular products from multiple categories with premium quality and unbeatable prices.

                            </p>

                        </div>

                        <Link
                            to="/overview"
                            className="px-8 py-4 rounded-2xl bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg flex items-center gap-3 w-fit"
                        >

                            View All Products

                            <ArrowRight className="w-5 h-5" />

                        </Link>

                    </div>

                    {/* Product List */}
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[40px] shadow-xl p-6 md:p-10">

                        <ProductListPage />

                    </div>

                </div>

            </section>

            {/* CTA SECTION */}
            <section className="relative py-28 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400"></div>

                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">

                        Start Shopping With
                        <br />
                        Rentora Today

                    </h2>

                    <p className="text-orange-100 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">

                        Join thousands of happy customers and experience fast delivery, secure payments, and premium products from every category.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">

                        <Link
                            to="/overview"
                            className="px-8 py-4 rounded-2xl bg-white text-orange-500 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                        >

                            Shop Now

                        </Link>

                        <Link
                            to="/contact"
                            className="px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300"
                        >

                            Contact Us

                        </Link>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
}