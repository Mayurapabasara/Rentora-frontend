import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-300 py-14 px-6 border-t border-gray-800">
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                {/* Brand Section */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Rentora Logo" className="h-10 w-12" />
                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            Rentora
                        </h1>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                        Rentora Private Limited is your trusted platform to buy anything, anytime.
                        Fast delivery, reliable service, and a seamless shopping experience.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-white tracking-wide">
                        Contact
                    </h2>

                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                        <span>Kurunegala, Sri Lanka</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <span>+94 717975625</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span>mayurapabasara143@gmail.com</span>
                    </div>
                </div>

                {/* CTA / Highlight */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-white">
                        Get Started
                    </h2>

                    <p className="text-sm text-gray-400">
                        Explore thousands of products across multiple categories and enjoy a smooth shopping experience.
                    </p>

                    <button className="w-fit px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold
                        shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Browse Products
                    </button>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Rentora Private Limited. All rights reserved.
            </div>

        </footer>
    );
}