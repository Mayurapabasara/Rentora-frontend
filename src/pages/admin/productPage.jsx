import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader";

function ProductDeleteConfirm(props) {

    const productId = props.productId;
    const close = props.close;
    const refresh = props.refresh;

    function deleteProduct() {

        axios.delete(
            import.meta.env.VITE_API_URL + "/api/products/" + productId,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        .then(() => {

            toast.success("Product deleted successfully!");
            close();
            refresh();

        })
        .catch((error) => {

            toast.error("Failed to delete product.");
            console.error(error);

        });
    }

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Delete Product
                </h2>

                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete product:
                    <span className="font-semibold text-red-500">
                        {" "} {productId}
                    </span>
                    ?
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={close}
                        className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={deleteProduct}
                        className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );
}

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        if (isLoading) {

            axios.get(import.meta.env.VITE_API_URL + "/api/products")
            .then((response) => {

                setProducts(response.data);
                setIsLoading(false);

            })
            .catch((error) => {

                console.error("Error fetching products:", error);

            });
        }

    }, [isLoading]);

    return (

        <div className="w-full min-h-screen bg-gray-100 p-6 text-black">

            {/* Delete Modal */}
            {
                isDeleteConfirmVisible && (

                    <ProductDeleteConfirm
                        refresh={() => setIsLoading(true)}
                        productId={productToDelete}
                        close={() => setIsDeleteConfirmVisible(false)}
                    />
                )
            }

            {/* Header */}
            <div className="flex items-center justify-between mb-8">

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Products
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage your store products
                    </p>

                </div>

                {/* Add Product Button */}
                <Link
                    to="/admin/addProduct"
                    className="flex items-center gap-2 px-5 py-3 bg-orange-500 
                    text-white rounded-2xl shadow-md hover:bg-orange-600 
                    hover:shadow-lg transition"
                >

                    <CiCirclePlus className="text-2xl" />

                    <span className="font-semibold">
                        Add Product
                    </span>

                </Link>
            </div>

            {/* Content */}
            {
                isLoading ? (

                    <Loader />

                ) : (

                    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                {/* Table Header */}
                                <thead className="bg-gray-50 border-b">

                                    <tr className="text-gray-700">

                                        <th className="p-5 text-left font-semibold">
                                            Product
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Product ID
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Category
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Price
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Stock
                                        </th>

                                        <th className="p-5 text-center font-semibold">
                                            Actions
                                        </th>

                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>

                                    {
                                        products.map((product) => (

                                            <tr
                                                key={product.productId || product._id}
                                                className="border-b hover:bg-gray-50 transition"
                                            >

                                                {/* Product */}
                                                <td className="p-5">

                                                    <div className="flex items-center gap-4">

                                                        <img
                                                            src={product.images[0]}
                                                            alt={product.name}
                                                            className="w-24 h-24 rounded-2xl object-cover border"
                                                        />

                                                        <div>

                                                            <h2 className="font-semibold text-lg text-gray-800">
                                                                {product.name}
                                                            </h2>

                                                            <p className="text-sm text-gray-500 max-w-xs line-clamp-2">
                                                                {product.description}
                                                            </p>

                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Product ID */}
                                                <td className="p-5 font-medium text-gray-700">
                                                    {product.productId || product._id}
                                                </td>

                                                {/* Category */}
                                                <td className="p-5">

                                                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                                                        {product.category}
                                                    </span>

                                                </td>

                                                {/* Price */}
                                                <td className="p-5">

                                                    <div className="flex flex-col">

                                                        <span className="font-bold text-lg text-gray-800">
                                                            LKR {product.price}
                                                        </span>

                                                        <span className="text-sm text-gray-400 line-through">
                                                            LKR {product.labelledPrice}
                                                        </span>

                                                    </div>

                                                </td>

                                                {/* Stock */}
                                                <td className="p-5">

                                                    <span
                                                        className={`px-3 py-1 rounded-full text-sm font-medium
                                                        ${
                                                            product.stock > 0
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-red-100 text-red-700"
                                                        }`}
                                                    >
                                                        {product.stock} Items
                                                    </span>

                                                </td>

                                                {/* Actions */}
                                                <td className="p-5">

                                                    <div className="flex items-center justify-center gap-3">

                                                        {/* Edit Button */}
                                                        <button
                                                            onClick={() =>
                                                                navigate(
                                                                    `/admin/updateProduct/${product.productId || product._id}`,
                                                                    { state: { product } }
                                                                )
                                                            }
                                                            className="px-4 py-2 rounded-xl bg-blue-500 text-white 
                                                            hover:bg-blue-600 transition font-medium"
                                                        >
                                                            Edit
                                                        </button>

                                                        {/* Delete Button */}
                                                        <button
                                                            onClick={() => {

                                                                setIsDeleteConfirmVisible(true);
                                                                setProductToDelete(
                                                                    product.productId || product._id
                                                                );

                                                            }}
                                                            className="px-4 py-2 rounded-xl bg-red-500 text-white 
                                                            hover:bg-red-600 transition font-medium"
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>

                        {/* Empty State */}
                        {
                            products.length === 0 && (

                                <div className="p-10 text-center text-gray-500">
                                    No products found.
                                </div>
                            )
                        }

                    </div>
                )
            }
        </div>
    );
}