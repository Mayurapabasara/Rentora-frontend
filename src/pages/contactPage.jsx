import Header from "../components/header";
import Footer from "../components/footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen bg-gray-100">

            <Header />

            {/* Hero Section */}
            <section className="pt-28 pb-16 text-center bg-white">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Contact Us
                </h1>
                <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                    Have questions or need help? Our team is here to support you anytime.
                </p>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

                    <form className="flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="mt-2 bg-orange-500 text-white py-3 rounded-lg font-semibold 
                            hover:bg-orange-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                        <MapPin className="text-orange-500 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="font-semibold text-lg">Location</h3>
                            <p className="text-gray-600">Kurunegala, Sri Lanka</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                        <Phone className="text-orange-500 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="font-semibold text-lg">Phone</h3>
                            <p className="text-gray-600">+94 717975625</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                        <Mail className="text-orange-500 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-gray-600">mayurapabasara143@gmail.com</p>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                            Google Map (Coming Soon)
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
}