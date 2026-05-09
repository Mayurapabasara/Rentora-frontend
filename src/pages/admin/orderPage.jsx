import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader";
import OrderModel from "../../components/orderaInfoModal";

export default function OrderPage() {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        if (isLoading) {

            const token = localStorage.getItem("token");

            if (
                token == null ||
                token === "undefined" ||
                token === "null"
            ) {

                toast.error("Session expired. Please login again.");
                navigate("/login");
                return;
            }

            axios.get(
                import.meta.env.VITE_API_URL + "/api/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            .then((response) => {

                setOrders(response.data);
                setIsLoading(false);

            })
            .catch((error) => {

                console.error("Error fetching orders:", error);
                toast.error("Failed to fetch orders");

            });
        }

    }, [isLoading]);

    function getStatusStyle(status) {

        switch (status) {

            case "pending":
                return "bg-yellow-100 text-yellow-700";

            case "processing":
                return "bg-blue-100 text-blue-700";

            case "shipped":
                return "bg-purple-100 text-purple-700";

            case "completed":
                return "bg-green-100 text-green-700";

            case "cancelled":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    }

    return (

        <div className="w-full min-h-screen bg-gray-100 p-6 text-black">

            {/* Order Modal */}
            <OrderModel
                isModalOpen={isModelOpen}
                selectedOrder={selectedOrder}
                closeModal={() => {

                    setIsModelOpen(false);
                    setSelectedOrder(null);

                }}
                refresh={() => {
                    setIsLoading(true);
                }}
            />

            {/* Header */}
            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    Orders
                </h1>

                <p className="text-gray-500 mt-1">
                    Manage customer orders and delivery status
                </p>

            </div>

            {/* Content */}
            {
                isLoading ? (

                    <Loader />

                ) : (

                    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                {/* Table Head */}
                                <thead className="bg-gray-50 border-b">

                                    <tr className="text-gray-700">

                                        <th className="p-5 text-left font-semibold">
                                            Order ID
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Customer
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Contact
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Address
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Items
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Total
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Status
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Date
                                        </th>

                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>

                                    {
                                        orders.map((order) => (

                                            <tr
                                                key={order._id}
                                                onClick={() => {

                                                    setSelectedOrder(order);
                                                    setIsModelOpen(true);

                                                }}
                                                className="border-b hover:bg-gray-50 transition cursor-pointer"
                                            >

                                                {/* Order ID */}
                                                <td className="p-5">

                                                    <div className="font-semibold text-gray-800">
                                                        {order.orderId}
                                                    </div>

                                                </td>

                                                {/* Customer */}
                                                <td className="p-5">

                                                    <div>

                                                        <h2 className="font-semibold text-gray-800">
                                                            {order.customerName}
                                                        </h2>

                                                        <p className="text-sm text-gray-500">
                                                            {order.email}
                                                        </p>

                                                    </div>

                                                </td>

                                                {/* Contact */}
                                                <td className="p-5 text-gray-700">
                                                    {order.phone}
                                                </td>

                                                {/* Address */}
                                                <td className="p-5">

                                                    <p className="max-w-xs text-gray-700 line-clamp-2">
                                                        {order.address}
                                                    </p>

                                                </td>

                                                {/* Items */}
                                                <td className="p-5">

                                                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                                                        {order.items.length} Items
                                                    </span>

                                                </td>

                                                {/* Total */}
                                                <td className="p-5">

                                                    <span className="font-bold text-lg text-orange-500">
                                                        ${order.total.toFixed(2)}
                                                    </span>

                                                </td>

                                                {/* Status */}
                                                <td className="p-5">

                                                    <span
                                                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(order.status)}`}
                                                    >
                                                        {order.status}
                                                    </span>

                                                </td>

                                                {/* Date */}
                                                <td className="p-5 text-gray-600">

                                                    {new Date(order.date).toLocaleDateString()}

                                                </td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>

                        {/* Empty State */}
                        {
                            orders.length === 0 && (

                                <div className="p-10 text-center text-gray-500">
                                    No orders found.
                                </div>
                            )
                        }

                    </div>
                )
            }
        </div>
    );
}