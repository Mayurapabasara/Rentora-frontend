import toast from "react-hot-toast";
import { Loader } from "../components/loader";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/productCard";
import { Key } from "lucide-react";

export function ProductListPage() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(isLoading) {
            axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
                (response) => {
                    console.log(response.data);
                    setProducts(response.data);
                    setIsLoading(false);
                }
            ).catch((error) => {
                console.error("Error fetching products:", error);
                setIsLoading(false);
                toast.error("Failed to load products. Please try again later.");
            });
        }
    }, [isLoading]);

    return (
        <div className="w-full h-screen flex items-center justify-center backdrop-blur-md rounded-3xl text-black">
            {
                isLoading ? <Loader /> : 
                <div className="w-full h-full p-10 grid md:grid-cols-3 gap-6 overflow-y-scroll flex-wrap">
                    {
                        products.map((product) => (
                            <ProductCard
                                key= {product.productId || ProductCard._id} 
                                product={product} 
                            />
                        ))
                    }

                    {
                        products.map((product) => (
                            <ProductCard
                                key= {product.productId || ProductCard._id} 
                                product={product} 
                            />
                        ))
                    }

                    {
                        products.map((product) => (
                            <ProductCard
                                key= {product.productId || ProductCard._id} 
                                product={product} 
                            />
                        ))
                    }

                    {
                        products.map((product) => (
                            <ProductCard
                                key= {product.productId || ProductCard._id} 
                                product={product} 
                            />
                        ))
                    }

                    {
                        products.map((product) => (
                            <ProductCard
                                key= {product.productId || ProductCard._id} 
                                product={product} 
                            />
                        ))
                    }

                    {
                        products.map((product) => (
                            <ProductCard
                                key= {product.productId || ProductCard._id} 
                                product={product} 
                            />
                        ))
                    }

                    {
                        products.map((product) => (
                            <ProductCard
                                key= {product.productId || ProductCard._id} 
                                product={product} 
                            />
                        ))
                    }
                </div>
            }
        </div>
    );
}