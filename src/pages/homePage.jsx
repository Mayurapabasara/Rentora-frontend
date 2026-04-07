import { Link } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Rent Smarter with <span className="text-accent">Rentora</span>
        </h1>

        <p className="text-secondary max-w-2xl text-lg mb-8">
          Discover, rent, and manage products easily with a seamless and modern platform.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-accent px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition"
          >
            Login
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