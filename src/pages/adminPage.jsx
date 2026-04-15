import { Routes, Route, Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import DashboardPage from "./admin/dashboardPage";
import ProductPage from "./admin/productPage";
import OrderPage from "./admin/orderPage";
import UserPage from "./admin/userPage";
import AddProductPage from "./admin/addProduct";


export default function AdminPage() {
    return (
        <div className="w-full h-screen bg-orange-300 flex flex-row">
            
            {/* Sidebar */}
            <div className="h-full w-100 bg-orange-300 text-black p-4">
                <div className="flex flex-row h-60 items-center gap-2 mb-6">
                    <img src="rentora_logo.png" alt="Logo" className="w-100 h-80 mb-4 justify-center" />
                </div>
                <div className="w-full h-[75%] flex flex-col gap-4 bg-orange-200 p-4 rounded-3xl">

                    <Link to="/admin" className="px-10 py-2 rounded-lg text-3xl font-bold flex flex-cols  hover:bg-orange-500 transition-colors duration-300 items-center gap-2">
                        <MdDashboardCustomize />
                        Dashboard
                    </Link>
                    <Link to="/admin/orders" className="px-10 py-2 rounded-lg text-3xl font-bold flex flex-cols  hover:bg-orange-500 transition-colors duration-300 items-center gap-2">
                        <FaCartArrowDown />
                        Orders
                    </Link>
                    <Link to="/admin/products" className="px-10 py-2 rounded-lg text-3xl font-bold flex flex-cols  hover:bg-orange-500 transition-colors duration-300 items-center gap-2">
                        <FaBoxes />
                        Products
                    </Link>
                    <Link to="/admin/users" className="px-10 py-2 rounded-lg text-3xl font-bold flex flex-cols  hover:bg-orange-500 transition-colors duration-300 items-center gap-2">
                        <FaUserLarge />
                        Users
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="h-95% w-[calc(100%-400px)] flex bg-white rounded-3xl m-4 p-4 text-black overflow-hidden">
                <div className="w-full h-full max-w-full max-h-full overflow-y-scroll">
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/products" element={<ProductPage />} />
                        <Route path="/orders" element={<OrderPage />} />
                        <Route path="/users" element={<UserPage />} />
                        <Route path="/addProduct" element={<AddProductPage />} />
                    </Routes>  
                </div>
            </div>

        </div>
    );
}