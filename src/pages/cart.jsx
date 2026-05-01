import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import Header from "../components/header"
import { addToCart, getTotal, loadCart, removeFromCart } from "../utils/Cart"
import { Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { BiTrash } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function CartPage() {

    // LoadCart
    const [cart, setCart] = useState(loadCart())

    return (
        <div className="w-full h-full bg-black/10 pt-30 flex flex-row item-center">
            <Header />

            <div className="w-250 flex flex-col gap-4 px-10 item-center rounded-2xl mx-5">
                {
                    cart.map((item, index) => {
                        return (
                            <div key={index} className="w-full h-30 bg-white flex relative gap-2">

                                {/* Delete button */}
                                <button
                                    onClick={() => {
                                        const updatedCart = removeFromCart(item.productId);
                                        setCart(updatedCart);
                                    }}
                                    className="absolute -right-12.5 text-2xl text-black font-bold rounded-full aspect-square hover:bg-red-500 hover:text-white flex items-center justify-center">
                                    <BiTrash />
                                </button>

                                <img className="h-full aspect-square object-cover" src={item.image} />

                                <div className="w-60 h-full flex flex-col pl-2 pt-2">
                                    <h1 className="text-lg text-wrap"> {item.name} </h1>
                                    <span>{item.productId}</span>
                                </div>

                                <div className="w-25 y-full bg-yellow-100 border-2 border-black flex flex-col items-center justify-center">
                                    <FaChevronUp onClick={
                                        () => {
                                            addToCart(item, 1)
                                            setCart(loadCart())
                                        }
                                    } />
                                    <span>{item.quantity}</span>
                                    <FaChevronDown onClick={
                                        () => {
                                            addToCart(item, -1)
                                            setCart(loadCart())
                                        }
                                    } />
                                </div>

                                <div className="w-40 h-full flex flex-col">
                                    {
                                        item.labelledPrice > item.price &&
                                        <span className="text-black w-full text-right line-through text-lg pr-2.5 mt-5">LKR {item.labelledPrice}</span>
                                    }
                                    <span className="font-semibold text-accent w-full text-right text-2xl pr-2.5 mt-1">LKR {(item.price || 0).toFixed(2)}</span>
                                </div>

                            </div>
                        )
                    })
                }
                <div className="w-full h-30 bg-white flex items-center justify-center gap-40">

                    <Link state={cart} to="/checkout" className="text-2xl text-white text-bold px-6 py-2.5 border-4 bg-orange-500 border-orange-500 rounded-4xl flex justify-center items-center hover:scale-105
                        transition-all duration-300">
                        Process Checkout
                    </Link>
                    <div className="bg-accent-light">
                        <span>Total: LKR {getTotal().toFixed(2)}</span>
                    </div>

                </div>
            </div>

        </div>
    )
}