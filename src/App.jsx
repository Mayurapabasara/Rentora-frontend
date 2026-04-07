import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// import pages
import HomePage from "./pages/homePage";
import RegisterPage from "./pages/registerPage";
import AdminPage from "./pages/adminPage";
import ContactPage from "./pages/contactPage";
import TestPage from "./pages/testPage";
import LoginPage from "./pages/loginPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-amber-100">

        <Toaster position="top-right" />

        <Routes path="/" >
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;