import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
    const [step, setStep] = useState("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    async function sendOTP() {
        try {
            await axios.get(import.meta.env.VITE_API_URL + "/api/users/send-otp/"+email)
            toast.success("OTP sent to your email!"+email);
            setStep("otp");
        }catch(e){
            console.error(e);
            toast.error("Failed to send reset link. Please try again.");
        }
    }

    async function changePassword() {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Rentora Password Reset OTP",

            html: getDesignedEmail({
                title: "Password Reset",
                subtitle: "Secure access to your account",
                heading: "Hello,",
                message: "We received a request to reset your Rentora account password. Use the OTP below to continue.",
                otp: otp
                })
            });

        }catch(e) {
            console.error(e);
            toast.error("Failed to change password. Please try again.");
        }
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative px-5" style={{ backgroundImage: "url('/bg_login.png')" }}>
            {step==="email" && <div className="w-100 h-150 backdrop-blur-2xl max-w-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center relative z-10 bg-white/10 border border-white/20">
                
                <h1 className="text-[30px] font-bold text-white mb-6">Forgot Password</h1>
                <p className="text-nlack font-semibold mb-6 text-center">Enter your email address to receive a password reset link.</p>
                
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4" />
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition" onClick={sendOTP}>Send Reset Link</button>
            </div>}

            {step==="otp" && <div className="w-100 h-150 backdrop-blur-2xl max-w-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center relative z-10 bg-white/10 border border-white/20">
                
                <h1 className="text-[30px] font-bold text-white mb-6">Forgot Password</h1>
                <p className="text-nlack font-semibold mb-6 text-center">Enter the OTP sent to your email.</p>
        
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4" />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm New Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4" />

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition" onClick={changePassword}> Change Password </button>
            </div>}
        </div>
    )
    
}