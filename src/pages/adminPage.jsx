import { Routes, Route } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-screen bg-orange-300 flex flex-row border-[15px] border-blue-900">
            
            {/* Sidebar */}
            <div className="h-full w-[400px] bg-orange-300 text-white p-4">
                Sidebar
            </div>

            {/* Main Content */}
            <div className="h-95% w-[calc(100%-400px)] flex bg-white rounded-3xl m-4 p-4 text-white  ">

                <Routes>
                    {/* <Route path="/" element={<h1>Dashboard</h1>} /> */}
                    <Route path="/products" element={<h1>Products</h1>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                </Routes>
            </div>

        </div>
    );
}