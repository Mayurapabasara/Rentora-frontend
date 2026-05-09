import { Link } from "react-router-dom";
import { Search, Bell, Menu, X } from "lucide-react";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getCartCount } from "../utils/Cart";

export default function Header() {

    const [cartCount, setCartCount] = useState(getCartCount());
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-full fixed top-2 sm:top-4 z-50 flex justify-center px-2 sm:px-4">

            <header
                className="w-full max-w-8xl min-h-16 sm:h-20 flex items-center justify-between
                px-4 sm:px-6 lg:px-10 py-3
                bg-white rounded-2xl shadow-lg border border-gray-200"
            >

                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3">

                    <img
                        src="/logo.png"
                        alt="logo"
                        className="h-8 w-10 sm:h-10 sm:w-12 object-contain"
                    />

                    <img
                        src="/rentora_name.png"
                        alt="name"
                        className="h-6 sm:h-8 object-contain"
                    />

                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">

                    <ul className="flex items-center gap-10 xl:gap-20 text-[16px] xl:text-[18px] font-semibold text-gray-800">

                        <li>
                            <Link to="/" className="relative group">
                                HOME
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-500"></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/category"
                                className="hover:text-orange-500 transition"
                            >
                                CATEGORY
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/service"
                                className="hover:text-orange-500 transition"
                            >
                                SERVICES
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/track"
                                className="hover:text-orange-500 transition"
                            >
                                TRACK YOUR ORDER
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-orange-500 transition"
                            >
                                CONTACT
                            </Link>
                        </li>

                    </ul>

                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-5">

                    {/* Desktop Search */}
                    <Search className="hidden sm:block w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-orange-500 transition" />

                    {/* Notification */}
                    <div className="relative hidden sm:block">

                        <Bell className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-orange-500 transition" />

                        <span
                            className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] sm:text-xs
                            w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full"
                        >
                            3
                        </span>

                    </div>

                    {/* Cart */}
                    <div className="relative">

                        <Link to="/cart">
                            <IoCartOutline className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-orange-500 transition" />
                        </Link>

                        <span
                            className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] sm:text-xs
                            w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full"
                        >
                            {cartCount}
                        </span>

                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3">

                        <Link
                            to="/checkout"
                            className="px-5 xl:px-6 py-2 xl:py-2.5 rounded-full text-white font-semibold
                            text-sm xl:text-base
                            bg-orange-500 shadow-md hover:shadow-lg hover:scale-105
                            transition-all duration-300"
                        >
                            BOOK NOW
                        </Link>

                        <Link
                            to="/login"
                            className="px-5 xl:px-6 py-2 xl:py-2.5 rounded-full text-white font-semibold
                            text-sm xl:text-base
                            bg-orange-500 shadow-md hover:shadow-lg hover:scale-105
                            transition-all duration-300"
                        >
                            Login
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >

                        {
                            mobileMenuOpen ? (
                                <X className="w-7 h-7" />
                            ) : (
                                <Menu className="w-7 h-7" />
                            )
                        }

                    </button>

                </div>

            </header>

            {/* Mobile Menu */}
            {
                mobileMenuOpen && (

                    <div
                        className="absolute top-20 left-2 right-2 bg-white rounded-2xl shadow-xl
                        border border-gray-200 p-6 lg:hidden"
                    >

                        <nav>

                            <ul className="flex flex-col gap-5 text-base font-semibold text-gray-800">

                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="hover:text-orange-500 transition"
                                    >
                                        HOME
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/category"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="hover:text-orange-500 transition"
                                    >
                                        CATEGORY
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/service"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="hover:text-orange-500 transition"
                                    >
                                        SERVICES
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/track"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="hover:text-orange-500 transition"
                                    >
                                        TRACK YOUR ORDER
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="hover:text-orange-500 transition"
                                    >
                                        CONTACT
                                    </Link>
                                </li>

                            </ul>

                        </nav>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col gap-3 mt-6">

                            <Link
                                to="/checkout"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-3 rounded-full text-center text-white font-semibold
                                bg-orange-500 shadow-md"
                            >
                                BOOK NOW
                            </Link>

                            <Link
                                to="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-3 rounded-full text-center text-white font-semibold
                                bg-orange-500 shadow-md"
                            >
                                Login
                            </Link>

                        </div>

                    </div>
                )
            }

        </div>
    );
}