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
import { ProductListPage } from "./pages/productListPage";
import ProductOverview from "./pages/admin/productOverview";
import CategoryPage from "./pages/category";
import ServicesPage from "./pages/servicepage";
import CartPage from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen">

        <Toaster position="top-right" />

        <Routes path="/" >
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/overview/:id" element={<ProductOverview />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/*" element={<h1>404 Not Found</h1>} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;