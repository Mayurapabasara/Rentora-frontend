import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link, useLocation, useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider"
import { addToCart, loadCart } from "../../utils/Cart"
import Header from "../../components/header"

export default function ProductOverview() {

    const params = useParams()
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading")

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/api/products/" + params.id).then(
            (res) => {
                console.log(res.data)
                setProduct(res.data)
                setStatus("success")
            }
        ).catch(
            () => {
                toast.error("Faild to fetch product details")
                setStatus("error")
            }
        )
    }, [])

    return (
        <div className="w-full h-screen pt-30 flex flex-row bg-white">
            <Header />
            {status == "loading" && <h1>Loading...</h1>}

            {status == "error" && <h1>Faild to load product details.</h1>}

            {status == "success" && product && (
                <div className="p-10 text-center flex flex-row">

                    <div className="object-cover ">
                        <ImageSlider images={product.images} />
                    </div>

                    <div className="flex flex-col">
                        {/* <img
                            src={product.images[0]}
                            className="w-64 mx-auto mb-4 rounded-lg"
                        /> */}

                        <h1 className="text-3xl font-bold">
                            {product.name}

                            {
                                product.altName?.length > 0 && (
                                    <span className="text-gray-500 text-lg ml-2">
                                        (
                                        {product.altName.map((name, index) => (
                                            <span key={index}>
                                                {name}
                                                {index !== product.altName.length - 1 && " / "}
                                            </span>
                                        ))}
                                        )
                                    </span>
                                )
                            }
                        </h1>

                        <p className="text-gray-600 mt-2">{product.description}</p>

                        {
                            product.labelledPrice > product.price ? (
                                <div>
                                    <p className="text-orange-500 font-bold text-lg flex justify-center line-through">
                                        LKR {product.labelledPrice?.toFixed(2)}
                                    </p>

                                    <p className="text-orange-500 font-bold text-2xl flex justify-center">
                                        LKR {product.price?.toFixed(2)}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-orange-500 font-bold text-lg flex justify-center">
                                    LKR {product.price?.toFixed(2)}
                                </p>
                            )
                        }

                        {/* Add to Cart & Buy Now */}
                        <div className="w-200  flex flex-col sm:flex-row gap-4 mt-6">

                            {/* Add to Cart */}
                            <button 
                                className="flex-1 py-3 rounded-full border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
                                onClick={()=>{
                                    addToCart(product,1)
                                    toast.success("Ädd to Cart");
                                }}>
                                Add to Cart
                            </button>

                            {/* Buy Now */}
                            <Link to="/checkout" 
                                state={[{
                                    image: product.images[0],
                                    productId: product.productId,
                                    name: product.name,
                                    price: product.price,
                                    labelledPrice: product.labelledPrice,
                                    quantity: 1
                                }]}
                                className="flex-1 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                Buy Now
                            </Link>

                        </div>
                    </div>

                </div>
            )}


        </div>
    )
}
