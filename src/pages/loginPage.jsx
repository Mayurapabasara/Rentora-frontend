export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        const response = await axios.post("http://localhost:5000/users/login", {
            email : email,
            password : password
        });
        console.log(response);
    }





    return (
        <div className="w-full h-screen flex items-center justify-center bg-[url('/bg_login.jpg')] bg-cover bg-center">

            {/* Left Side */}
            <div className="w-1/2 h-full hidden lg:flex flex-col justify-center items-center text-black p-10">
                <h1 className="text-8xl font-extrabold mb-4 tracking-wide">
                Welcome Back 👋
                </h1>
                <p className="text-lg text-black text-center max-w-md">
                Access your account and continue your journey with a seamless experience.
                </p>
            </div>

            {/* Right Side */}  
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-150 h-100 backdrop-blur-sm bg-white/30 rounded-xl shadow-lg flex flex-col items-center justify-center gap-5 p-2">
                    <h1 className="text-4xl font-bold gap-2.5">Login</h1>

                    <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                    } type="text" placeholder="Email" className="w-125 h-15 rounded-md px-3 bg-white/50" />

                    <input onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        }
                    } type="password" placeholder="Password" className="w-125 h-15 rounded-md px-3 bg-white/50" />

                    <button onClick={handleLogin} className="w-125 h-15 bg-blue-500 text-white rounded-md p-2.5">Login</button>

                    <p className="text-sm text-center text-md text-gray-200">
                        Don’t have an account?{" "}
                        <span className="text-blue-800 cursor-pointer hover:underline">
                        Sign up
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}