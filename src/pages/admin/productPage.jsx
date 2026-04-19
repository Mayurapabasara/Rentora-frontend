import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import UpdateProductPage from "./updateProductPage";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader";


// const sampleProducts = [
//   {
//     productId: "PRD001",
//     name: "Canon EOS R50 Camera",
//     altName: ["Canon Camera", "R50 DSLR"],
//     description: "Compact mirrorless camera perfect for photography and videography.",
//     images: [
//       "https://example.com/images/canon1.jpg",
//       "https://example.com/images/canon2.jpg"
//     ],
//     price: 5000,
//     labelledPrice: 6500,
//     category: "Electronics"
//   },
//   {
//     productId: "PRD002",
//     name: "PlayStation 5",
//     altName: ["PS5", "Sony Console"],
//     description: "Next-gen gaming console with ultra-fast SSD and stunning graphics.",
//     images: [
//       "https://example.com/images/ps5-1.jpg"
//     ],
//     price: 8000,
//     labelledPrice: 9500,
//     category: "Gaming"
//   },
//   {
//     productId: "PRD003",
//     name: "MacBook Air M2",
//     altName: ["Apple Laptop", "Mac Air"],
//     description: "Lightweight and powerful laptop with Apple M2 chip.",
//     images: [
//       "https://example.com/images/macbook1.jpg"
//     ],
//     price: 12000,
//     labelledPrice: 14000,
//     category: "Computers"
//   },
//   {
//     productId: "PRD004",
//     name: "DJI Mini 3 Drone",
//     altName: ["Drone Camera", "DJI Drone"],
//     description: "Ultra-light drone with 4K HDR video and long battery life.",
//     images: [
//       "https://example.com/images/dji1.jpg"
//     ],
//     price: 7000,
//     labelledPrice: 8500,
//     category: "Gadgets"
//   },
//   {
//     productId: "PRD005",
//     name: "GoPro Hero 12",
//     altName: ["Action Camera", "GoPro"],
//     description: "Waterproof action camera with high-quality video recording.",
//     images: [
//       "https://example.com/images/gopro1.jpg"
//     ],
//     price: 4500,
//     labelledPrice: 5500,
//     category: "Electronics"
//   }
// ];


function  ProductDeleteConfirm(props) {
  const productId = props.productId;
  const close = props.close;
  const refresh = props.refresh;

  function deleteProduct() {
    axios.delete(import.meta.env.VITE_API_URL + "/api/products/" + productId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response) => {
      toast.success("Product deleted successfully!");
      console.log("Product deleted successfully");
      close();
      refresh();
    }).catch((error) => {
      toast.error("Failed to delete product. Please try again.");
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000080] bg-opacity-50 z-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete the product with product ID : {productId}?</p>
        <div className="flex justify-end gap-4">

          <button  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition" onClick={close}>
            Cancel
          </button>

          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={deleteProduct}>
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

      if(isLoading) {
        axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
          (response) => {
          console.log(response.data);
          setProducts(response.data);
          setIsLoading(false);

        }).catch((error) => {
            console.error("Error fetching products:", error);
        });
      }
      
    }, [isLoading]);

    return (
        <div className="w-full h-screen text-black">

          {
            isDeleteConfirmVisible && <ProductDeleteConfirm refresh={() => setIsLoading(true)} productId={productToDelete} close={() => setIsDeleteConfirmVisible(false)} />
          }

          <Link className="fixed right-20 bottom-15 text-6xl" to="/admin/addProduct">
            <CiCirclePlus className="hover:text-accent"/>
          </Link>

          {isLoading? <Loader /> :
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Image</th>
                <th className="border p-2">Product ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Labelled Price</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Stock</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId || product._id}>
                  <td className="border p-2"><img src={product.images[0]} alt={product.name} className="w-[200px] h-full object-contain" /></td>
                  <td className="border p-2">{product.productId || product._id}</td>
                  <td className="border p-2 w-50">{product.name}</td>
                  <td className="border p-2 w-250">{product.description}</td>
                  <td className="border p-2 w-30">{product.price}</td>
                  <td className="border p-2 w-30">{product.labelledPrice}</td>
                  <td className="border p-2">{product.category}</td>
                  <td className="border p-2">{product.stock}</td>
                  <td className="border p-2">

                    <button 
                      onClick={() => 
                      navigate(`/admin/updateProduct/${product.productId || product._id}`, { state: { product } })} 
                      className="bg-blue-500 text-white hover:text-red-500 px-2 py-1 rounded mr-2">

                        Edit  
                    </button>
                    <button 
                      onClick={() => {
                        setIsDeleteConfirmVisible(true);
                        setProductToDelete(product.productId || product._id);
                        
                      }}
                      className="bg-red-500 text-white hover:text-black px-2 py-1 rounded">
                        Delete
                      </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          }
        </div>
    );
}