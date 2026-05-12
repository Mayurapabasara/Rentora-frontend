import Header from "../components/header";
import { ProductListPage } from "./productListPage";

import {
    Search,
    SlidersHorizontal,
    Tag,
    DollarSign,
    Sparkles
} from "lucide-react";

export default function CategoryPage() {

    return (

        <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white">

            {/* Header */}
            <Header />

            {/* Hero Banner */}


            {/* Main Section */}
            <div className="flex flex-col lg:flex-row gap-8 px-6 py-28">

                {/* Sidebar */}
                <aside className="lg:w-[320px] w-full">

                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-200 p-6 sticky top-28">

                        {/* Title */}
                        <div className="flex items-center gap-3 mb-8">

                            <div className="bg-orange-100 text-orange-500 p-3 rounded-2xl">

                                <SlidersHorizontal className="w-6 h-6" />

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Filters
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Refine your search
                                </p>

                            </div>

                        </div>

                        {/* Search */}
                        <div className="mb-6">

                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Search Product
                            </label>

                            <div className="relative">

                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 outline-none bg-gray-50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                />

                            </div>

                        </div>

                        {/* Category */}
                        <div className="mb-6">

                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Category
                            </label>

                            <div className="relative">

                                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                                <select
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 outline-none bg-gray-50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition appearance-none"
                                >

                                    <option>All Categories</option>
                                    <option>Electronics</option>
                                    <option>Fashion</option>
                                    <option>Beauty</option>
                                    <option>Home</option>
                                    <option>Accessories</option>

                                </select>

                            </div>

                        </div>

                        {/* Price */}
                        <div className="mb-8">

                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Maximum Price
                            </label>

                            <div className="relative">

                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                                <input
                                    type="number"
                                    placeholder="e.g. 5000"
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 outline-none bg-gray-50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                />

                            </div>

                        </div>

                        {/* Apply Button */}
                        <button
                            className="w-full py-3 rounded-2xl bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
                        >

                            Apply Filters

                        </button>

                    </div>

                </aside>

                {/* Product Section */}
                <main className="flex-1">

                    {/* Header */}
                    {/* <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-md border border-gray-200 px-6 py-5 mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

                        <div>

                            <h1 className="text-3xl font-bold text-gray-800">
                                All Products
                            </h1>

                            <p className="text-gray-500 mt-1">
                                Explore the latest products from Rentora
                            </p>

                        </div>

                        
                        <div className="flex items-center gap-3">

                            <span className="text-sm text-gray-500">
                                Sort By
                            </span>

                            <select
                                className="px-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400 transition"
                            >

                                <option>Newest</option>
                                <option>Price Low → High</option>
                                <option>Price High → Low</option>
                                <option>Best Selling</option>

                            </select>

                        </div>

                    </div> */}

                    {/* Product List */}
                    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-md border border-gray-200 p-6">

                        <ProductListPage />

                    </div>

                </main>

            </div>

        </div>
    );
}