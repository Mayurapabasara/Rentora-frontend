import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function OrderModel({
    isModalOpen,
    selectedOrder,
    closeModal,
    refresh,
}) {

    const [status, setStatus] = useState(selectedOrder?.status);

    if (!isModalOpen || !selectedOrder) return null;

    async function updateStatus(status) {

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                import.meta.env.VITE_API_URL + `/api/orders/status/${selectedOrder.orderId}`,
                { status: status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success(`Order marked as ${status}`);
            closeModal();
            refresh();

        } catch (error) {
            console.error(error);
            toast.error("Failed to update order status");
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            {/* Modal */}
            <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b p-6 sticky top-0 bg-white z-10">

                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            Order Details
                        </h1>

                        <p className="text-gray-500">
                            Order ID: {selectedOrder.orderId}
                        </p>
                    </div>

                    <button
                        onClick={closeModal}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-8">

                    {/* Customer + Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Customer Information */}
                        <div className="bg-gray-50 p-5 rounded-xl border">
                            <h2 className="text-lg font-semibold mb-4 text-gray-800">
                                Customer Information
                            </h2>

                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <span className="font-semibold">Name:</span>
                                    {" "} {selectedOrder.customerName}
                                </p>

                                <p>
                                    <span className="font-semibold">Email:</span>
                                    {" "} {selectedOrder.email}
                                </p>

                                <p>
                                    <span className="font-semibold">Phone:</span>
                                    {" "} {selectedOrder.phone}
                                </p>

                                <p>
                                    <span className="font-semibold">Address:</span>
                                    {" "} {selectedOrder.address}
                                </p>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-gray-50 p-5 rounded-xl border">

                            <h2 className="text-lg font-semibold mb-4 text-gray-800">
                                Order Summary
                            </h2>

                            <div className="space-y-3 text-gray-700">

                                <p>
                                    <span className="font-semibold">Status:</span>

                                    <span
                                        className={`ml-2 px-3 py-1 rounded-full text-sm font-medium
                                        ${selectedOrder.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : selectedOrder.status === "completed"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {selectedOrder.status}
                                    </span>
                                </p>

                                <p>
                                     {/* Premium Select */}
                                    <select
                                        defaultValue={selectedOrder.status}
                                        onChange={(e) => {
                                            setStatus(e.target.value);
                                        }}
                                        className="w-full px- py-2 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition shadow-sm hover:border-orange-300"
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="processing">Processing</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </p>

                                <p>
                                    <span className="font-semibold">Total:</span>
                                    {" "} ${selectedOrder.total.toFixed(2)}
                                </p>

                                <p>
                                    <span className="font-semibold">Items:</span>
                                    {" "} {selectedOrder.items.length}
                                </p>

                                <p>
                                    <span className="font-semibold">Date:</span>
                                    {" "}
                                    {new Date(selectedOrder.date).toLocaleString()}
                                </p>

                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6">

                                <button
                                    onClick={() => {
                                        const token = localStorage.getItem("token");
                                        axios.put(
                                            import.meta.env.VITE_API_URL + `/api/orders/status/${selectedOrder.orderId}`,
                                            { status: status },
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${token}`
                                                }
                                            }
                                        )
                                        .then(() => {
                                            toast.success(`Order marked as ${status}`);
                                            closeModal();
                                            refresh();
                                        })
                                        .catch((error) => {
                                            toast.error("Failed to update order status");
                                            console.error(error);})
                                    }}
                                    disabled={status == selectedOrder.status}
                                    className="flex-1 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                                >
                                    Update Status
                                </button>

                                <button
                                    onClick={() => updateStatus("cancelled")}
                                    className="flex-1 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                                >
                                    Cancel
                                </button>

                            </div>

                        </div>
                    </div>

                    {/* Ordered Products */}
                    <div>

                        <h2 className="text-xl font-semibold mb-5 text-gray-800">
                            Ordered Products
                        </h2>

                        <div className="flex flex-col gap-4">

                            {selectedOrder.items.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row items-center gap-5 border rounded-xl p-4 hover:shadow-md transition"
                                >

                                    {/* Product Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-28 h-28 object-cover rounded-lg border"
                                    />

                                    {/* Product Details */}
                                    <div className="flex-1 w-full">

                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.name}
                                        </h3>

                                        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-600">

                                            <p>
                                                <span className="font-semibold">
                                                    Product ID:
                                                </span>
                                                <br />
                                                {item.productId}
                                            </p>

                                            <p>
                                                <span className="font-semibold">
                                                    Quantity:
                                                </span>
                                                <br />
                                                {item.quantity}
                                            </p>

                                            <p>
                                                <span className="font-semibold">
                                                    Price:
                                                </span>
                                                <br />
                                                ${item.price.toFixed(2)}
                                            </p>

                                            <p>
                                                <span className="font-semibold">
                                                    Subtotal:
                                                </span>
                                                <br />
                                                ${(item.quantity * item.price).toFixed(2)}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}