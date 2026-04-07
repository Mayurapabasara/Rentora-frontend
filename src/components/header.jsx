import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full h-20 bg-primary/95 backdrop-blur-md shadow-md flex items-center justify-between px-8 fixed top-0 z-50">
            
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
                <img 
                    src="/logo.png" 
                    alt="Rentora Logo" 
                    className="h-10 w-10 object-contain"
                />
                <h1 className="text-2xl font-bold tracking-wide text-white"> Rentora </h1>
            </div>

            {/* Navigation */}
            <nav>
                <ul className="flex items-center gap-8 text-sm font-medium">
                    
                    <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
                    <li><Link to="/register" className="hover:text-accent transition">Register</Link></li>
                    <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
                    <li><Link to="/admin" className="hover:text-accent transition">Admin</Link></li>
                    
                    {/* CTA Button */}
                    <li><Link to="/login" className="bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 transition">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}