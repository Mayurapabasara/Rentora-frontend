// export function Loader() {
//     return (
//         <div className="w-full h-screen flex items-center justify-center bg-accent-light)">

//             <div className="flex flex-col items-center gap-4">

//                 {/* SPINNER */}
//                 <div className="relative">
//                     <div className="w-16 h-16 border-4 border-border rounded-full"></div>

//                     <div className="absolute top-0 left-0 w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
//                 </div>

//                 {/* TEXT */}
//                 <p className="text-sm text-muted animate-pulse">
//                     Loading, please wait...
//                 </p>

//             </div> 
//         </div>
//     );
// }


import {
    ShoppingBag
} from "lucide-react";

export function Loader() {

    return (

        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

            {/* Loader Container */}
            <div className="relative z-10 flex flex-col items-center gap-8">

                {/* Logo Spinner */}
                <div className="relative flex items-center justify-center">

                    {/* Outer Glow */}
                    <div className="absolute w-36 h-36 rounded-full bg-orange-500/10 blur-2xl animate-pulse"></div>

                    {/* Rotating Border */}
                    <div className="w-28 h-28 rounded-full border-[6px] border-orange-100 border-t-orange-500 animate-spin"></div>

                    {/* Center Icon */}
                    <div className="absolute w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center border border-gray-200">

                        <ShoppingBag className="w-10 h-10 text-orange-500" />

                    </div>

                </div>

                {/* Text */}
                <div className="text-center">

                    <h2 className="text-2xl font-bold text-gray-800">
                        Loading Rentora
                    </h2>

                    <p className="text-gray-500 mt-2 animate-pulse">
                        Please wait while we prepare your experience...
                    </p>

                </div>

                {/* Loading Dots */}
                <div className="flex items-center gap-3">

                    <div className="w-3 h-3 rounded-full bg-orange-500 animate-bounce"></div>

                    <div
                        className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                    ></div>

                    <div
                        className="w-3 h-3 rounded-full bg-orange-300 animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                    ></div>

                </div>

            </div>

        </div>
    );
}