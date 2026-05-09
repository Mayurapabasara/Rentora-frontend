import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "../components/header";
import {loadCart, removeFromCart} from "../utils/Cart";
import {ShoppingBag,ShieldCheck,Truck,CreditCard,MapPin,CheckCircle2} from "lucide-react";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

export default function CheckOutPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const [cart, setCart] = useState(() => {
        return location.state || loadCart() || [];
    });

    

    function getTotal() {

        let total = 0;

        cart.forEach((item) => {
            total += item.price * item.quantity;
        });

        return total;
    }

    async function purchaseCart() {

        const token = localStorage.getItem("token");

        console.log("TOKEN:", token);

        if (!token || token === "null" || token === "undefined") {

            toast.error("Session expired. Please login again.");
            navigate("/login");
            return;
        }

        try {

            const items = [];

            for (let i = 0; i < cart.length; i++) {

                items.push({
                    productId: cart[i].productId,
                    quantity: cart[i].quantity
                });
            }

            await axios.post(

                import.meta.env.VITE_API_URL + "/api/orders",

                {
                    address: address,
                    customerName: name==""?null:name,
                    phone: phone==""?"Unknown":phone,
                    items: items
                },

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success("Order placed successfully");

        } catch (error) {

            alert("Failed to place order. Please try again.");

            console.error("Order placement error:", error);

            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message);
            }
        }
    }

    return (

        <div className="w-full min-h-screen bg-linear-to-b from-gray-100 to-white">

            <Header />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                {/* Page Header */}
                <div className="mb-10">

                    <div className="flex items-center gap-4 mb-4">

                        <div className="bg-orange-100 text-orange-500 p-4 rounded-2xl">

                            <ShoppingBag className="w-8 h-8" />

                        </div>

                        <div>

                            <h1 className="text-4xl font-bold text-gray-800">
                                Checkout
                            </h1>

                            <p className="text-gray-500 mt-1">
                                Complete your order securely and quickly
                            </p>

                        </div>

                    </div>

                </div>

                {/* Empty Cart */}
                {
                    cart.length === 0 && (

                        <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-16 flex flex-col items-center justify-center text-center">

                            <CheckCircle2 className="w-20 h-20 text-orange-400 mb-6" />

                            <h2 className="text-3xl font-bold text-gray-800 mb-3">
                                No Products Available
                            </h2>

                            <p className="text-gray-500 max-w-md">
                                Your checkout cart is currently empty. Add some products before placing an order.
                            </p>

                        </div>
                    )
                }

                {/* Checkout Content */}
                {
                    cart.length > 0 && (

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                            {/* Product List */}
                            <div className="xl:col-span-2 flex flex-col gap-6">

                                {
                                    cart.map((item, index) => {

                                        return (

                                            <div
                                                key={index}
                                                className="bg-white rounded-3xl shadow-md border border-gray-200 p-5 flex flex-col md:flex-row gap-5 relative hover:shadow-xl transition"
                                            >

                                                {/* Delete */}
                                                <button
                                                    onClick={() => {

                                                        const updatedCart = removeFromCart(item.productId);
                                                        setCart(updatedCart);

                                                    }}

                                                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition flex items-center justify-center text-xl"
                                                >

                                                    <BiTrash />

                                                </button>

                                                {/* Image */}
                                                <img
                                                    className="w-full md:w-40 h-40 object-cover rounded-2xl border"
                                                    src={item.image}
                                                />

                                                {/* Product Info */}
                                                <div className="flex-1 flex flex-col justify-between">

                                                    <div>

                                                        <h2 className="text-2xl font-semibold text-gray-800">
                                                            {item.name}
                                                        </h2>

                                                        <p className="text-gray-500 mt-2">
                                                            Product ID: {item.productId}
                                                        </p>

                                                    </div>

                                                    {/* Price */}
                                                    <div className="mt-4 flex items-center gap-4">

                                                        {
                                                            item.labelledPrice > item.price && (

                                                                <span className="text-gray-400 line-through text-lg">
                                                                    LKR {item.labelledPrice}
                                                                </span>
                                                            )
                                                        }

                                                        <span className="text-3xl font-bold text-orange-500">
                                                            LKR {(item.price || 0).toFixed(2)}
                                                        </span>

                                                    </div>

                                                </div>

                                                {/* Quantity */}
                                                <div className="flex flex-row md:flex-col items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4">

                                                    {/* Increase */}
                                                    <button
                                                        onClick={() => {

                                                            const newCart = [...cart];

                                                            newCart[index].quantity += 1;

                                                            setCart(newCart);

                                                        }}

                                                        className="w-10 h-10 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
                                                    >

                                                        <FaChevronUp />

                                                    </button>

                                                    <span className="text-xl font-bold text-gray-800">
                                                        {item.quantity}
                                                    </span>

                                                    {/* Decrease */}
                                                    <button
                                                        onClick={() => {

                                                            const newCart = [...cart];

                                                            newCart[index].quantity -= 1;

                                                            if (newCart[index].quantity <= 0) {
                                                                newCart.splice(index, 1);
                                                            }

                                                            setCart(newCart);

                                                        }}

                                                        className="w-10 h-10 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
                                                    >

                                                        <FaChevronDown />

                                                    </button>

                                                </div>

                                            </div>
                                        );
                                    })
                                }

                            </div>

                            {/* Summary */}
                            <div className="h-fit sticky top-28">

                                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">

                                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                        Order Summary
                                    </h2>

                                    {/* Address */}
                                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-6 gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">
                                                <IoPersonOutline className="w-5 h-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-gray-800"> Delivery Person</h3>
                                                <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} className="text-gray-500 mt-1"/>
                                                <hr></hr>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">
                                                <MapPin className="w-5 h-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-gray-800"> Delivery Address</h3>
                                                <input type="text" value={address} id="address" onChange={(e) => setAddress(e.target.value)} className="text-gray-500 mt-1"/>
                                                <hr></hr>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">
                                                <FiPhoneCall className="w-5 h-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-gray-800"> Delivery Number</h3>
                                                <input type="text" value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} className="text-gray-500 mt-1"/>
                                                <hr></hr>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Totals */}
                                    <div className="space-y-5">

                                        <div className="flex items-center justify-between border-b pb-4">

                                            <span className="text-gray-600">
                                                Total Products
                                            </span>

                                            <span className="font-bold text-gray-800">
                                                {cart.length}
                                            </span>

                                        </div>

                                        <div className="flex items-center justify-between border-b pb-4">

                                            <span className="text-gray-600">
                                                Shipping Fee
                                            </span>

                                            <span className="font-bold text-green-500">
                                                Free
                                            </span>

                                        </div>

                                        <div className="flex items-center justify-between">

                                            <span className="text-lg font-semibold text-gray-800">
                                                Grand Total
                                            </span>

                                            <span className="text-3xl font-bold text-orange-500">
                                                LKR {(getTotal() || 0).toFixed(2)}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Place Order */}
                                    <button
                                        className="mt-8 w-full py-4 rounded-2xl bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                                        onClick={purchaseCart}
                                    >

                                        Place Order

                                    </button>

                                    {/* Features */}
                                    <div className="mt-8 flex flex-col gap-5">

                                        <div className="flex items-center gap-4">

                                            <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">

                                                <Truck className="w-5 h-5" />

                                            </div>

                                            <div>

                                                <h3 className="font-semibold text-gray-800">
                                                    Fast Delivery
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    Island-wide delivery service
                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">

                                                <ShieldCheck className="w-5 h-5" />

                                            </div>

                                            <div>

                                                <h3 className="font-semibold text-gray-800">
                                                    Secure Payment
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    Protected payment methods
                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">

                                                <CreditCard className="w-5 h-5" />

                                            </div>

                                            <div>

                                                <h3 className="font-semibold text-gray-800">
                                                    Easy Checkout
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    Smooth and simple ordering
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        
                    )
                    
                }

            </div>

        </div>
    );
}