import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { MdDashboardCustomize, MdOutlineSpaceDashboard} from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineShoppingBag, HiOutlineUsers, HiOutlineClipboardList, HiOutlineLogout} from "react-icons/hi";
import DashboardPage from "./admin/dashboardPage";
import ProductPage from "./admin/productPage";
import OrderPage from "./admin/orderPage";
import UserPage from "./admin/userPage";
import AddProductPage from "./admin/addProduct";
import UpdateProductPage from "./admin/updateProductPage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "../components/loader";
import axios from "axios";

export default function AdminPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const [userLoaded, setUserLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Please login to access the admin panel.");
            // If no token, redirect to login
            navigate("/login");
            return;
        }
        
        axios.get(import.meta.env.VITE_API_URL + "/api/users/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res)=> {
            if (res.data.role !== "admin") {
                toast.error("You do not have permission to access the admin panel.");
                navigate("/");
                return;
            }
            setUserLoaded(true);
        }).catch(()=>{
            toast.error("Session expired. Please login again.");
            localStorage.removeItem("token");
            naviagte("/login");
        })
    }, []);

    const menuItems = [

        {
            name: "Dashboard",
            path: "/admin",
            icon: <MdOutlineSpaceDashboard />
        },

        {
            name: "Orders",
            path: "/admin/orders",
            icon: <HiOutlineClipboardList />
        },

        {
            name: "Products",
            path: "/admin/products",
            icon: <HiOutlineShoppingBag />
        },

        {
            name: "Users",
            path: "/admin/users",
            icon: <HiOutlineUsers />
        }
    ];

    return (

        <div className="w-full min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-50 flex">

            {/* Sidebar */}
            <div className="w-[320px] min-h-screen bg-white/80 backdrop-blur-xl border-r border-gray-200 shadow-xl flex flex-col">

                {/* Logo */}
                <div className="flex flex-col items-center justify-center py-8 border-b border-gray-200">
                    <img src="/rentora_logo.png" alt="Rentora" className="w-52 object-contain" />
                    <p className="text-gray-500 text-sm mt-2"> Admin Dashboard </p>
                </div>

                {/* Navigation */}
                <div className="flex-1 p-5 flex flex-col gap-3">

                    {
                        menuItems.map((item, index) => (

                            <Link
                                key={index}
                                to={item.path}
                                className={`group flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-300
                                
                                ${
                                    location.pathname === item.path
                                        ? "bg-orange-500 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                                }`}
                            >

                                <span className="text-2xl"> {item.icon}</span>

                                <span> {item.name} </span>

                            </Link>
                        ))
                    }

                </div>

                {/* Bottom Section */}
                <div className="p-5 border-t border-gray-200">

                    <div className="bg-linear-to-r from-orange-500 to-orange-400 rounded-2xl p-5 text-white shadow-lg">
                        <h2 className="font-bold text-lg"> Rentora Admin </h2>
                        <p className="text-sm opacity-90 mt-1"> Manage products, orders, and customers easily. </p>
                    </div>

                    {/* Logout */}
                    <Link to="/login" className="w-full mt-5 flex items-center justify-center gap-3 py-3 rounded-2xl bg-gray-100 hover:bg-red-500 hover:text-white transition font-semibold" >
                        <HiOutlineLogout className="text-xl" />
                        Logout
                    </Link>

                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-hidden">

                {/* Top Bar */}
                <div className="w-full bg-white/80 backdrop-blur-xl border border-gray-200 shadow-sm rounded-3xl px-8 py-5 mb-6 flex items-center justify-between">

                    <div>
                        <h1 className="text-3xl font-bold text-gray-800"> Rentora Admin Panel </h1>
                        <p className="text-gray-500 mt-1"> Welcome back! Manage your store efficiently. </p>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* Admin Avatar */}
                        <div className="flex items-center gap-3 bg-orange-100 px-4 py-2 rounded-2xl">

                            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold"> A</div>

                            <div>
                                <h3 className="font-semibold text-gray-800"> Admin </h3>
                                <p className="text-sm text-gray-500"> Store Manager </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Page Content */}
                <div className="w-full h-[calc(100vh-140px)] bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-sm overflow-hidden">

                    <div className="w-full h-full overflow-y-auto">

                    {userLoaded?<Routes>

                            <Route path="/" element={<DashboardPage />} />
                            <Route path="/products" element={<ProductPage />} />
                            <Route path="/orders" element={<OrderPage />} />
                            <Route  path="/users"  element={<UserPage />} />
                            <Route path="/addProduct" element={<AddProductPage />} />
                            <Route path="/updateProduct/:id" element={<UpdateProductPage />} />

                        </Routes> : <Loader />
                    }

                    </div>

                </div>

            </div>

        </div>
    );
}