import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import UpdateProductPage from "./updateProductPage";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader";
import OrderModel from "../../components/orderaInfoModal";

export default function OrderPage() {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {

      if(isLoading) {

        const token = localStorage.getItem("token");
        if(token == null || token === "undefined" || token === "null"){
            toast.error("Session expired. Please login again.");
            navigate("/login");
            return;
        }

        axios.get(import.meta.env.VITE_API_URL + "/api/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(
          (response) => {
          console.log(response.data);
          setOrders(response.data);
          setIsLoading(false);

        }).catch((error) => {
            console.error("Error fetching orders:", error);
        });
      }
      
    }, [isLoading]);

    return (
        <div className="w-full h-screen text-black">

         <OrderModel
            isModalOpen={isModelOpen}
            selectedOrder={selectedOrder}
            closeModal={() => {
              setIsModelOpen(false);
              setSelectedOrder(null);
            }}
            refresh={() => {
              setIsLoading(true);
          }}
        />

          {isLoading? <Loader /> :
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Order ID</th>
                <th className="border p-2">Number of Items</th>
                <th className="border p-2">Customer Name</th>
                <th className="border p-2">Email</th> 
                <th className="border p-2">Phone</th>
                <th className="border p-2">Address Price</th>
                <th className="border p-2">Total</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders .map((order) => (
                <tr key={order._id}
                  onClick={()=>{
                    setSelectedOrder(order);
                    setIsModelOpen(true);
                  }}>
                  <td className="border p-2">{order.orderId}</td>
                  <td className="border p-2 w-5">{order.items.length}</td>
                  <td className="border p-2 w-100">{order.customerName}</td>
                  <td className="border p-2 w-30">{order.email}</td>
                  <td className="border p-2 w-30">{order.phone}</td>
                  <td className="border p-2">{order.address}</td>
                  <td className="border p-2">${order.total.toFixed(2)}</td>
                  <td className="border p-1">{order.status}</td>
                  <td className="border p-1">{new Date(order.date).toLocaleDateString()}</td>
                </tr>
              ))}
              {
                  orders.length === 0 && (
                  <tr>
                    <td colSpan="10" className="border p-2 text-center">
                        No orders found.
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
          }
        </div>
    );
}