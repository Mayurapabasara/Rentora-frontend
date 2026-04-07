
import { Link } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center bg-cover bg-center relative pt-16"style={{ backgroundImage: "url('/bg_img.png')" }}>

        {/* Dark Gradient Overlay (better than plain black) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20"></div>

        {/* Content */}
        <div className="container min-w-full mx-auto flex flex-col items-start justify-center gap-6 relative z-10 px-6 md:px-36 text-center">

          {/* Title */}
          <h1 className="text-4xl md:text-8xl font-bold text-white leading-tight max-w-2xl">
              Buy Anything You Want,
              <br /> Anytime
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-lime-50 md:text-xl max-w-xl">
            Shop from groceries, electronics, fashion, and more. 
            Everything you need, delivered directly to your door.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 flex-col sm:flex-row items-center justify-center">
            
            <button className="px-16 py-6 rounded-full bg-orange-500 text-white font-semibold
                shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                Browse Products
            </button>

            <button className="px-18 py-6 rounded-full border border-white text-white font-semibold
                hover:bg-white hover:text-black transition-all duration-300">
                Learn More
            </button>

          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Link to="#features" className="text-white text-sm flex flex-col items-center gap-1 animate-bounce">
            <span>Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-accent">Easy Rentals</h3>
          <p className="text-secondary">
            Browse and rent products with just a few clicks.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-accent">Secure Payments</h3>
          <p className="text-secondary">
            Safe and reliable payment system for all users.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-accent">User Friendly</h3>
          <p className="text-secondary">
            Clean interface designed for the best user experience.
          </p>
        </div>

      </section>

    </div>
  );
}