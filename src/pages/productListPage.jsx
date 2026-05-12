import toast from "react-hot-toast";
import { Loader } from "../components/loader";

import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "../components/productCard";

import {
    Search,
    SlidersHorizontal,
    Sparkles
} from "lucide-react";

export function ProductListPage() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("default");

    useEffect(() => {

        if (isLoading) {

            axios
                .get(import.meta.env.VITE_API_URL + "/api/products")

                .then((response) => {

                    console.log(response.data);

                    setProducts(response.data);
                    setFilteredProducts(response.data);

                    setIsLoading(false);

                })

                .catch((error) => {

                    console.error("Error fetching products:", error);

                    setIsLoading(false);

                    toast.error(
                        "Failed to load products. Please try again later."
                    );
                });
        }

    }, [isLoading]);

    // Search + Sort
    useEffect(() => {

        let updatedProducts = [...products];

        // Search
        if (search.trim() !== "") {

            updatedProducts = updatedProducts.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sort
        if (sort === "low-high") {

            updatedProducts.sort((a, b) => a.price - b.price);

        } else if (sort === "high-low") {

            updatedProducts.sort((a, b) => b.price - a.price);

        }

        setFilteredProducts(updatedProducts);

    }, [search, sort, products]);

    return (

        <div className="w-full min-h-screen text-black">

            {
                isLoading ? (

                    <div className="w-full h-[60vh] flex items-center justify-center">

                        <Loader />

                    </div>

                ) : (

                    <div className="flex flex-col gap-8">

                        {/* Header */}
                        <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-6">

                            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">

                                {/* Left */}
                                <div>

                                    <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium mb-4">

                                        <Sparkles className="w-5 h-5" />

                                        Featured Collection

                                    </div>

                                    <h1 className="text-4xl font-bold text-gray-800">
                                        Explore Products
                                    </h1>

                                    <p className="text-gray-500 mt-3">
                                        Discover premium products across multiple categories.
                                    </p>

                                </div>

                                {/* Controls */}
                                <div className="flex flex-col sm:flex-row gap-4">

                                    {/* Search */}
                                    <div className="relative">

                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            className="w-full sm:w-72 pl-12 pr-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                        />

                                    </div>

                                    {/* Sort */}
                                    <div className="relative">

                                        <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                                        <select
                                            value={sort}
                                            onChange={(e) =>
                                                setSort(e.target.value)
                                            }
                                            className="pl-12 pr-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400 transition appearance-none"
                                        >

                                            <option value="default">
                                                Sort Products
                                            </option>

                                            <option value="low-high">
                                                Price Low → High
                                            </option>

                                            <option value="high-low">
                                                Price High → Low
                                            </option>

                                        </select>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Products Grid */}
                        {
                            filteredProducts.length > 0 ? (

                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                                    {
                                        filteredProducts.map((product) => (

                                            <ProductCard
                                                key={
                                                    product.productId ||
                                                    product._id
                                                }
                                                product={product}
                                            />
                                        ))
                                    }

                                </div>

                            ) : (

                                <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-20 text-center">

                                    <h2 className="text-3xl font-bold text-gray-800">
                                        No Products Found
                                    </h2>

                                    <p className="text-gray-500 mt-4">
                                        Try searching with a different keyword.
                                    </p>

                                </div>

                            )
                        }

                    </div>

                )
            }

        </div>
    );
}