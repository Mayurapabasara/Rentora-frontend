import { Link } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
    return (
        <div>
            <Header />
            <Link to="/register" className="text-blue-500 underline">
                Register
            </Link> 
        </div>
    )
}   