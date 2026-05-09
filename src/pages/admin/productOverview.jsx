import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

import {
    ShoppingCart,
    ShieldCheck,
    Truck,
    Star
} from "lucide-react";

import ImageSlider from "../../components/imageSlider";
import { addToCart } from "../../utils/Cart";
import Header from "../../components/header";

export default function ProductOverview() {

    const params = useParams();

    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {

        axios.get(
            import.meta.env.VITE_API_URL + "/api/products/" + params.id
        )
        .then((res) => {

            setProduct(res.data);
            setStatus("success");

        })
        .catch(() => {

            toast.error("Failed to fetch product details");
            setStatus("error");

        });

    }, []);

    return (

        <div className="w-full min-h-screen bg-gray-100">

            <Header />

            {/* Loading */}
            {
                status === "loading" && (

                    <div className="w-full h-screen flex items-center justify-center">

                        <h1 className="text-2xl font-semibold text-gray-700">
                            Loading Product...
                        </h1>

                    </div>
                )
            }

            {/* Error */}
            {
                status === "error" && (

                    <div className="w-full h-screen flex items-center justify-center">

                        <h1 className="text-2xl font-semibold text-red-500">
                            Failed to load product details.
                        </h1>

                    </div>
                )
            }

            {/* Success */}
            {
                status === "success" && product && (

                    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                            {/* Left Side - Images */}
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6">

                                <div className="overflow-hidden rounded-2xl">

                                    <ImageSlider images={product.images} />

                                </div>

                            </div>

                            {/* Right Side - Details */}
                            <div className="flex flex-col gap-6">

                                {/* Category */}
                                <div>

                                    <span className="px-4 py-1 rounded-full bg-orange-100 text-orange-500 text-sm font-semibold">
                                        {product.category}
                                    </span>

                                </div>

                                {/* Product Name */}
                                <div>

                                    <h1 className="text-4xl font-bold text-gray-800 leading-tight">

                                        {product.name}

                                    </h1>

                                    {
                                        product.altName?.length > 0 && (

                                            <p className="text-gray-500 mt-2 text-lg">

                                                {product.altName.join(" / ")}

                                            </p>
                                        )
                                    }

                                </div>

                                {/* Ratings */}
                                <div className="flex items-center gap-2">

                                    <div className="flex items-center text-yellow-500">

                                        <Star className="fill-yellow-500 w-5 h-5" />
                                        <Star className="fill-yellow-500 w-5 h-5" />
                                        <Star className="fill-yellow-500 w-5 h-5" />
                                        <Star className="fill-yellow-500 w-5 h-5" />
                                        <Star className="fill-yellow-500 w-5 h-5" />

                                    </div>

                                    <p className="text-gray-500 text-sm">
                                        (4.9 Reviews)
                                    </p>

                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-4">

                                    {
                                        product.labelledPrice > product.price && (

                                            <p className="text-gray-400 text-2xl line-through">
                                                LKR {product.labelledPrice?.toFixed(2)}
                                            </p>
                                        )
                                    }

                                    <p className="text-4xl font-bold text-orange-500">
                                        LKR {product.price?.toFixed(2)}
                                    </p>

                                </div>

                                {/* Description */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

                                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                        Product Description
                                    </h2>

                                    <p className="text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>

                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center text-center">

                                        <Truck className="text-orange-500 w-8 h-8 mb-3" />

                                        <h3 className="font-semibold text-gray-800">
                                            Fast Delivery
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Island-wide delivery
                                        </p>

                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center text-center">

                                        <ShieldCheck className="text-orange-500 w-8 h-8 mb-3" />

                                        <h3 className="font-semibold text-gray-800">
                                            Secure Payment
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            100% protected payment
                                        </p>

                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center text-center">

                                        <ShoppingCart className="text-orange-500 w-8 h-8 mb-3" />

                                        <h3 className="font-semibold text-gray-800">
                                            Easy Shopping
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Smooth checkout process
                                        </p>

                                    </div>

                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">

                                    {/* Add to Cart */}
                                    <button
                                        className="flex-1 py-4 rounded-2xl border-2 border-orange-500 text-orange-500 
                                        font-semibold text-lg hover:bg-orange-500 hover:text-white 
                                        transition-all duration-300 shadow-sm hover:shadow-lg"

                                        onClick={() => {

                                            addToCart(product, 1);
                                            toast.success("Added to Cart");

                                        }}
                                    >

                                        Add to Cart

                                    </button>

                                    {/* Buy Now */}
                                    <Link
                                        to="/checkout"

                                        state={[{
                                            image: product.images[0],
                                            productId: product.productId,
                                            name: product.name,
                                            price: product.price,
                                            labelledPrice: product.labelledPrice,
                                            quantity: 1
                                        }]}

                                        className="flex-1 py-4 rounded-2xl bg-orange-500 text-white text-lg 
                                        font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] 
                                        transition-all duration-300 flex items-center justify-center"
                                    >

                                        Buy Now

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>
                )
            }

        </div>
    );
}