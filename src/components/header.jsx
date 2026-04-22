import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react"
import { getCartCount } from "../utils/Cart"

export default function Header() {

    const [cartCount, setCartCount] = useState(getCartCount())

    return (
        <div className="w-full fixed top-4 z-50 flex justify-center px-4">

            <header className="w-full max-w-8xl h-20 flex items-center justify-between px-10
                bg-white rounded-2xl shadow-lg border border-gray-200">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="h-10 w-12 object-contain"
                    />
                    <img
                        src="/rentora_name.png"
                        alt="name"
                        className="h-8 object-contain"
                    />
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-20 text-[18px] font-semibold text-gray-800">

                        <li>
                            <Link to="/" className="relative group">
                                HOME
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500"></span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/category" className="hover:text-orange-500 transition">
                                CATEGORY
                            </Link>
                        </li>

                        <li>
                            <Link to="/service" className="hover:text-orange-500 transition">
                                SERVICES
                            </Link>
                        </li>

                        <li>
                            <Link to="/track" className="hover:text-orange-500 transition">
                                TRACK YOUR ORDER
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" className="hover:text-orange-500 transition">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    {/* Search */}
                    <Search className="w-6 h-6 cursor-pointer hover:text-orange-500 transition" />

                    {/* Notification */}
                    <div className="relative">
                        <Bell className="w-6 h-6 cursor-pointer hover:text-orange-500 transition" />

                        {/* Badge */}
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs 
                            w-5 h-5 flex items-center justify-center rounded-full">
                            3
                        </span>
                    </div>

                    {/* Cart */}
                    <div className="relative">

                        <Link to="/cart">
                            <IoCartOutline className="w-7 h-7 cursor-pointer hover:text-orange-500 transition" />
                        </Link>

                        {/* Badge */}
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/checkout"
                        className="ml-2 px-6 py-2.5 rounded-full text-white font-semibold
                        bg-orange-500 shadow-md hover:shadow-lg hover:scale-105
                        transition-all duration-300"
                    >
                        BOOK NOW
                    </Link>

                    {/* login Button */}
                    <Link
                        to="/login"
                        className="ml-2 px-6 py-2.5 rounded-full text-white font-semibold
                        bg-orange-500 shadow-md hover:shadow-lg hover:scale-105
                        transition-all duration-300"
                    >
                        Login
                    </Link>
                </div>

            </header>
        </div>
    );
}