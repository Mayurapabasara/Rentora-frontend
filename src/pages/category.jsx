import Header from "../components/header";
import { ProductListPage } from "./productListPage";

export default function CategoryPage() {
    return (
        <div className="w-full min-h-screen bg-gray-100">

            {/* Navbar */}
            <Header />

            {/* Main Content */}
            <div className="flex pt-28 px-6 gap-6 mt-3.5">

                {/* Sidebar */}
                <aside className="w-62.5 bg-white rounded-xl shadow-md p-5 h-fit sticky top-24">

                    <h2 className="text-lg font-semibold mb-4">Filters</h2>

                    {/* Search */}
                    <div className="mb-5">
                        <label className="text-sm text-gray-600">Search</label>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="mb-5">
                        <label className="text-sm text-gray-600">Category</label>
                        <select className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400">
                            <option>All</option>
                            <option>Electronics</option>
                            <option>Fashion</option>
                            <option>Beauty</option>
                            <option>Home</option>
                        </select>
                    </div>

                    {/* Price Range */}
                    <div className="mb-5">
                        <label className="text-sm text-gray-600">Max Price</label>
                        <input
                            type="number"
                            placeholder="e.g. 5000"
                            className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <button className="w-full mt-3 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
                        Apply Filters
                    </button>
                </aside>

                {/* Product Section */}
                <main className="flex-1">

                    {/* Title */}
                    <div className="mb-6 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Products
                        </h1>

                        {/* Sort */}
                        <select className="px-3 py-2 border rounded-lg">
                            <option>Sort by</option>
                            <option>Price Low → High</option>
                            <option>Price High → Low</option>
                        </select>
                    </div>

                    {/* Product List */}
                    <ProductListPage />

                </main>

            </div>
        </div>
    );
}