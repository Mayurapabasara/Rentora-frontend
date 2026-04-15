import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import MediaUpload from "../../utils/mediaUpload";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddProductPage() {

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altName, setAltName] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState(0);
    const [labelledPrice, setLabelledPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    async function addProduct() {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            alert("You must be logged in to add a product.");
            return;
        }

        const promises = [];

        for (let i = 0; i < images.length; i++) {
            promises[i] = MediaUpload(images[i]);
        }

        try {
            const urls = await Promise.all(promises);
            const alternativeNames = altName.split(",");

            const productData = {
                productId,
                name,
                altName: alternativeNames.map(name => name.trim()),
                description,
                images: urls,
                price: parseFloat(price),
                labelledPrice: parseFloat(labelledPrice),
                category,
                stock: parseInt(stock)
            };

            await axios.post(import.meta.env.VITE_API_URL + "/api/products", productData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Product added successfully!");
            navigate("/admin/products");
                                                                                                                      
        }catch (error) {
            
                console.error("Error adding product:", error);
                alert("Failed to add product. Please try again.");
        }
        
        //console.log(urls);
    }

    return (
        <div className="w-full min-h-screen bg-linear-to-br from-accent-light to-white rounded-3xl flex items-center justify-center p-6">

            {/* CARD */}
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg border border-b border-border rounded-2xl shadow-xl p-8">

                {/* HEADER */}
                <h1 className="text-3xl font-semibold text-secondary mb-1">
                    Add New Product
                </h1>
                <p className="text-sm text-muted mb-6">
                    Fill in the details to add a new product
                </p>

                <form className="space-y-9">

                    {/* Product ID */}
                    <div>
                        <label className="text-lg font-medium text-secondary">
                            Product ID
                        </label>
                        <input
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            type="text"
                            placeholder="PRD001"
                            className="mt-1 w-full px-4 py-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="text-lg font-medium text-secondary]">
                            Product Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Product Name"
                            className="mt-1 w-full px-4 py-4 rounded-lg border border-border focus:ring-2 focus:ring-accent transition"
                        />
                    </div>

                    {/* Alternative Name */}
                    <div>
                        <label className="text-lg font-medium text-secondary">
                            Alternative Name
                        </label>
                        <input
                            value={altName}
                            onChange={(e) => setAltName(e.target.value)}
                            type="text"
                            placeholder="Alternative Name (optional)"
                            className="mt-1 w-full px-4 py-4 rounded-lg border border-border focus:ring-2 focus:ring-accent transition"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-lg font-medium text-secondary">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write product details..."
                            rows={3}
                            className="mt-1 w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent transition"
                        />
                    </div>

                    {/* Prices Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-lg font-medium text-secondary">
                                Price
                            </label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                className="mt-1 w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-[var(--color-accent)]"
                            />
                        </div>

                        <div>
                            <label className="text-lg font-medium text-secondary">
                                Labelled Price
                            </label>
                            <input
                                value={labelledPrice}
                                onChange={(e) => setLabelledPrice(e.target.value)}
                                type="number"
                                className="mt-1 w-full px-4 py-3 rounded-lg border border-           nborder focus:ring-2 focus:ring-[var(--color-accent)]"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-lg font-medium text-[var(--color-secondary)]">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 w-full px-4 py-4 rounded-lg border border-[var(--color-border)] bg-white focus:ring-2 focus:ring-[var(--color-accent)]"
                        >
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="cosmetic">Cosmetic</option>
                            <option value="home">Home</option>
                            <option value="books">Books</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>

                    {/* stock */}
                    <div>
                            <label className="text-lg font-medium text-secondary">
                                Stock
                            </label>
                            <input
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                type="number"
                                className="mt-1 w-full px-4 py-3 rounded-lg border border-           nborder focus:ring-2 focus:ring-[var(--color-accent)]"
                            />
                        </div>

                    {/* Image Upload */}
                    <div>
                        <label className="text-lg font-medium text-[var(--color-secondary)] mb-1 block">
                            Upload Images
                        </label>

                        <label className="mt-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[var(--color-border)] rounded-xl cursor-pointer hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition group relative">

                            {/* COUNT BADGE */}
                            {images?.length > 0 && (
                                <div className="absolute top-2 right-2 bg-[var(--color-accent)] text-white text-xs px-2 py-1 rounded-full shadow">
                                    {images.length} image{images.length > 1 && "s"}
                                </div>
                            )}

                            <div className="flex flex-col items-center justify-center gap-2 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition">

                                <FaDownload className="text-3xl opacity-70 group-hover:scale-110 transition" />

                                <p className="text-sm font-medium">
                                    Click or drag images to upload
                                </p>

                                <span className="text-xs opacity-70">
                                    PNG, JPG up to 5MB
                                </span>

                                {/* EXTRA TEXT FEEDBACK */}
                                {images?.length > 0 && (
                                    <p className="text-xs text-[var(--color-accent)] font-medium">
                                        {images.length} file{images.length > 1 && "s"} selected
                                    </p>
                                )}

                            </div>

                            <input
                                type="file"
                                onChange={(e) => setImages(e.target.files)}
                                multiple
                                className="hidden"
                            />
                        </label>
                    </div>

                    {/* BUTTON */}
                    <div className="flex flex-row gap-[10%]">
                        <button
                            onClick={() => navigate("/admin/products")}
                            type="button"
                            className="w-[45%] py-3 rounded-lg bg-amber-200 text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.01] transition">
                            Cancel
                        </button>
                        <button
                            onClick={addProduct}
                            type="button"
                            className="w-[45%] py-3 rounded-lg bg-accent text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.01] transition">
                            Add Product
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );

}