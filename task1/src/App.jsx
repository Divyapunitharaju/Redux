import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login"; 
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from "./components/Dashboard";
import ProductForm from "./components/dashboard/ProductForm";
import DashboardLayout from "./DashboardLayout";

const updateMetaTags = (title, description) => {
  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = description;
    document.head.appendChild(newMeta);
  }
}

//update
const MetaUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        updateMetaTags("Login - Mequals", "Login to your Mequals account");
        break;
      case "/signup":
        updateMetaTags("Signup - Mequals", "Create a new account on Mequals");
        break;
      case "/forget-password":
        updateMetaTags("Forgot Password - Mequals", "Reset your password");
        break;
      case "/dashboard":
        updateMetaTags("Dashboard - Mequals", "Access your Mequals dashboard");
        break;
      case "/dashboard/product":
        updateMetaTags("Product Form - Mequals", "Manage products in your dashboard");
        break;
      default:
        updateMetaTags("Mequals", "Welcome to Mequals platform");
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <MetaUpdater />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/product" element={<DashboardLayout><ProductForm /></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
