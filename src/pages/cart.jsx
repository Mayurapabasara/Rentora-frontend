import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Header from "../components/header";

import {
    addToCart,
    getTotal,
    loadCart,
    removeFromCart
} from "../utils/Cart";

import {
    ShoppingBag,
    ShieldCheck,
    Truck,
    CreditCard
} from "lucide-react";

import { useState } from "react";

import { BiTrash } from "react-icons/bi";

import { Link } from "react-router-dom";

export default function CartPage() {

    // Load Cart
    const [cart, setCart] = useState(loadCart());

    return (

        <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white">

            <Header />

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                {/* Page Header */}
                <div className="mb-10">

                    <div className="flex items-center gap-4 mb-4">

                        <div className="bg-orange-100 text-orange-500 p-4 rounded-2xl">

                            <ShoppingBag className="w-8 h-8" />

                        </div>

                        <div>

                            <h1 className="text-4xl font-bold text-gray-800">
                                Shopping Cart
                            </h1>

                            <p className="text-gray-500 mt-1">
                                Review your selected products before checkout
                            </p>

                        </div>

                    </div>

                </div>

                {/* Empty Cart */}
                {
                    cart.length === 0 && (

                        <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-16 flex flex-col items-center justify-center text-center">

                            <ShoppingBag className="w-20 h-20 text-orange-400 mb-6" />

                            <h2 className="text-3xl font-bold text-gray-800 mb-3">
                                Your Cart is Empty
                            </h2>

                            <p className="text-gray-500 max-w-md">
                                Looks like you haven’t added any products yet. Start shopping now and fill your cart with amazing products.
                            </p>

                            <Link
                                to="/overview"
                                className="mt-8 px-8 py-4 rounded-2xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                            >
                                Continue Shopping
                            </Link>

                        </div>
                    )
                }

                {/* Cart Content */}
                {
                    cart.length > 0 && (

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                            {/* Cart Items */}
                            <div className="xl:col-span-2 flex flex-col gap-6">

                                {
                                    cart.map((item, index) => {

                                        return (

                                            <div
                                                key={index}
                                                className="bg-white rounded-3xl shadow-md border border-gray-200 p-5 flex flex-col md:flex-row gap-5 relative hover:shadow-xl transition"
                                            >

                                                {/* Delete Button */}
                                                <button
                                                    onClick={() => {

                                                        const updatedCart = removeFromCart(item.productId);
                                                        setCart(updatedCart);

                                                    }}

                                                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition flex items-center justify-center text-xl"
                                                >

                                                    <BiTrash />

                                                </button>

                                                {/* Product Image */}
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

                                                            addToCart(item, 1);
                                                            setCart(loadCart());

                                                        }}

                                                        className="w-10 h-10 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
                                                    >

                                                        <FaChevronUp />

                                                    </button>

                                                    {/* Quantity */}
                                                    <span className="text-xl font-bold text-gray-800">
                                                        {item.quantity}
                                                    </span>

                                                    {/* Decrease */}
                                                    <button
                                                        onClick={() => {

                                                            addToCart(item, -1);
                                                            setCart(loadCart());

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

                            {/* Order Summary */}
                            <div className="h-fit sticky top-28">

                                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">

                                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                        Order Summary
                                    </h2>

                                    {/* Summary */}
                                    <div className="space-y-5">

                                        <div className="flex items-center justify-between border-b pb-4">

                                            <span className="text-gray-600">
                                                Total Items
                                            </span>

                                            <span className="font-bold text-gray-800">
                                                {cart.length}
                                            </span>

                                        </div>

                                        <div className="flex items-center justify-between border-b pb-4">

                                            <span className="text-gray-600">
                                                Shipping
                                            </span>

                                            <span className="font-bold text-green-500">
                                                Free
                                            </span>

                                        </div>

                                        <div className="flex items-center justify-between">

                                            <span className="text-lg font-semibold text-gray-800">
                                                Total
                                            </span>

                                            <span className="text-3xl font-bold text-orange-500">
                                                LKR {getTotal().toFixed(2)}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Checkout Button */}
                                    <Link
                                        state={cart}
                                        to="/checkout"

                                        className="mt-8 w-full py-4 rounded-2xl bg-orange-500 text-white text-lg font-semibold flex items-center justify-center hover:bg-orange-600 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                                    >

                                        Proceed to Checkout

                                    </Link>

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
                                                    Island-wide shipping
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
                                                    100% protected payment
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
                                                    Smooth checkout process
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