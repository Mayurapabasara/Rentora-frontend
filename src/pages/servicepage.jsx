import Header from "../components/header";
import Footer from "../components/footer";
import { Truck, Package, ShieldCheck, Clock } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="w-full min-h-screen bg-gray-100">

            <Header />

            {/* Hero Section */}
            <section className="pt-28 pb-16 text-center bg-white">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Our Services
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Rentora provides fast, reliable, and secure services to help you 
                    buy and receive products from any category with ease.
                </p>
            </section>

            {/* Services Cards */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Service 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                    <Truck className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">
                        Get your products delivered quickly to your doorstep with our 
                        reliable delivery network.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                    <Package className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Wide Product Range</h3>
                    <p className="text-gray-600">
                        Explore thousands of products across categories including 
                        electronics, fashion, beauty, and more.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                    <ShieldCheck className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                    <p className="text-gray-600">
                        Shop confidently with secure payment methods and trusted 
                        transaction systems.
                    </p>
                </div>

                {/* Service 4 */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                    <Clock className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                        Our support team is available anytime to assist you with your 
                        orders and inquiries.
                    </p>
                </div>

                {/* Service 5 */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                    <Package className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                    <p className="text-gray-600">
                        Hassle-free return process to ensure your satisfaction with 
                        every purchase.
                    </p>
                </div>

                {/* Service 6 */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                    <Truck className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Order Tracking</h3>
                    <p className="text-gray-600">
                        Track your orders in real-time and stay updated on delivery status.
                    </p>
                </div>

            </section>

            {/* Why Choose Us */}
            <section className="bg-white py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Why Choose Rentora?
                </h2>

                <p className="max-w-3xl mx-auto text-gray-600">
                    Rentora is built to simplify your shopping experience. We combine 
                    speed, reliability, and convenience to give you the best online 
                    buying platform. From daily essentials to premium products, 
                    everything is just a click away.
                </p>
            </section>

            {/* CTA Section */}
            <section className="bg-orange-500 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                    Start Shopping Today
                </h2>
                <p className="mb-6">
                    Discover products from multiple categories and enjoy seamless delivery.
                </p>

                <button className="px-8 py-3 bg-white text-orange-500 rounded-full font-semibold 
                    hover:scale-105 transition">
                    Browse Products
                </button>
            </section>

            <Footer />
        </div>
    );
}