import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../utils/Cart";
import toast from "react-hot-toast";


export default function ProductCard({ product }) {
    const navigate = useNavigate();


    return (
        <div className="w-100 h-160 bg-white rounded-2xl shadow-md hover:shadow-xl 
            transition-all duration-300 overflow-hidden group">

            {/* Image */}
            <div className="relative w-full h-100 overflow-hidden">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
                    flex items-center justify-center transition duration-300">

                    <button className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold
                        shadow-md hover:scale-105 transition"
                         onClick={()=>{
                                    addToCart(product,1)
                                    toast.success("Ädd to Cart");
                        }}>
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col item-center justify-center gap-2">

                {/* Product Name */}
                <h2 className="text-3xl font-semibold text-gray-800 line-clamp-1 flex flex-row items-center justify-center text-bold text-shadow-accent">
                    {product.name}
                </h2>

                {/* Price */}
                {
                    product.labelledPrice > product.price ? (
                        <div>
                            <p className="text-orange-500 font-bold text-lg flex justify-center line-through">
                                LKR {product.labelledPrice?.toFixed(2)}
                            </p>

                            <p className="text-orange-500 font-bold text-2xl flex justify-center">
                                LKR {product.price?.toFixed(2)}
                            </p>
                        </div>
                    ) : (
                        <p className="text-orange-500 font-bold text-lg flex justify-center">
                            LKR {product.price?.toFixed(2)}
                        </p>
                    )
                }

                {/* View Peoduct Button*/}
                <Link
                    to={ "/overview/"+product.productId }
                    className="mt-4 px-6 py-3 h-14 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 text-lg font-semibold  hover:bg-orange-500 hover:text-white transition duration-300 shadow-sm">
                    View Product
                </Link>

            </div>
        </div>
    );
}