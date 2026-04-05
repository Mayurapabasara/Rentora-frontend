import { useState } from "react";

export default function TestPage() {

    const [count, setCount] = useState(10);
    const [status, setStatus] = useState("action");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-6">

            <div className="w-[320px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white border border-white/20">

                {/* Image */}
                <div className="h-40 w-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl mb-6 shadow-inner"></div>

                {/* Counter Section */}
                <div className="flex items-center justify-center gap-4 mb-6">

                    <button 
                        onClick={() => {
                            console.log("Decresing....");
                            setCount(count - 1);
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition duration-300 shadow-lg text-xl font-bold"
                    >
                        −
                    </button>

                    <span className="text-2xl font-bold tracking-wide">
                        {count}
                    </span>

                    <button 
                        onClick={() => {
                            console.log("Incresing....");
                            setCount(count + 1);
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition duration-300 shadow-lg text-xl font-bold"
                    >
                        +
                    </button>

                </div>

                {/* Status Section */}
                <div className="text-center space-y-4">

                    <span className="block text-sm text-gray-300 uppercase tracking-widest">
                        {status}
                    </span>

                    <div className="flex gap-3 justify-center">

                        <button 
                            onClick={() => setStatus("Online")}
                            className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 transition duration-300 shadow-md text-sm font-semibold"
                        >
                            Online
                        </button>

                        <button 
                            onClick={() => setStatus("Offline")}
                            className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition duration-300 shadow-md text-sm font-semibold"
                        >
                            Offline
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}