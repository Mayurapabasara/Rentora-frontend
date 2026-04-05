export default function Header() {
    return (
        <div className="w-full h-22 bg-gray-800 text-white flex items-center justify-between px-4">
            <h1 className="text-xl font-bold">Rentora</h1>  
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/register" className="hover:text-gray-400">Register</a></li>
                    <li><a href="/admin" className="hover:text-gray-400">Admin</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}