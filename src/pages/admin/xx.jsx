import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductPage() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // 🔍 Filter logic
  const filteredProducts = products.filter((p) =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination
  const start = (page - 1) * itemsPerPage;
  const paginated = filteredProducts.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // 📊 Stats
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <div className="w-full h-screen p-6 overflow-hidden">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold text-[var(--color-secondary)]">
          Product Dashboard
        </h1>

        <button className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">
          + Add Product
        </button>
      </div>

      {/* 📊 STATS */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="bg-white p-4 rounded-xl shadow border">
          <p className="text-sm text-[var(--color-muted)]">Total Products</p>
          <h2 className="text-xl font-bold">{totalProducts}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border">
          <p className="text-sm text-[var(--color-muted)]">Total Value</p>
          <h2 className="text-xl font-bold">Rs. {totalValue}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border">
          <p className="text-sm text-[var(--color-muted)]">Categories</p>
          <h2 className="text-xl font-bold">
            {[...new Set(products.map(p => p.category))].length}
          </h2>
        </div>
      </div>

      {/* 🔍 FILTER BAR */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search product..."
          className="flex-1 p-2 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 rounded-lg border border-[var(--color-border)]"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          {[...new Set(products.map(p => p.category))].map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl shadow border overflow-hidden h-[65%] flex flex-col">

        <div className="overflow-auto">

          <table className="w-full text-sm">

            <thead className="bg-[var(--color-accent)] text-white sticky top-0">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="p-3"><div className="w-12 h-12 bg-gray-200 rounded"></div></td>
                    <td className="p-3"><div className="h-4 bg-gray-200 w-20"></div></td>
                    <td className="p-3"><div className="h-4 bg-gray-200 w-32"></div></td>
                    <td className="p-3"><div className="h-4 bg-gray-200 w-16"></div></td>
                    <td className="p-3"><div className="h-4 bg-gray-200 w-20"></div></td>
                    <td className="p-3"><div className="h-6 bg-gray-200 w-24"></div></td>
                  </tr>
                ))
              ) : (
                paginated.map((product) => (
                  <tr
                    key={product.productId || product._id}
                    className="border-b hover:bg-[var(--color-accent-light)] transition"
                  >
                    <td className="p-3">
                      <img
                        src={product.images?.[0] || "/fallback.jpg"}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>

                    <td className="p-3 text-[var(--color-muted)]">
                      {product.productId || product._id}
                    </td>

                    <td className="p-3 font-medium">{product.name}</td>

                    <td className="p-3 font-semibold">Rs. {product.price}</td>

                    <td className="p-3">
                      <span className="bg-[var(--color-accent-light)] text-[var(--color-accent)] px-2 py-1 rounded-full text-xs">
                        {product.category}
                      </span>
                    </td>

                    <td className="p-3 flex gap-2">
                      <button className="px-3 py-1 rounded bg-[var(--color-accent)] text-white hover:opacity-90">
                        Edit
                      </button>
                      <button className="px-3 py-1 rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

        {/* 📄 PAGINATION */}
        <div className="flex justify-between items-center p-3 border-t">
          <span className="text-sm text-[var(--color-muted)]">
            Page {page} of {totalPages || 1}
          </span>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}