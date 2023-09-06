import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DonatePage from "./Pages/DonatePage";
import Navbar from "./Components/Navbars/Navbar";
import NavbarSplit from "./Components/Navbars/NavbarSplit";
import AboutUsPage from "./Pages/AboutPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/Auth/NotFoundPage";
import MosqueDetails from "./Components/MosqueDetails";

export default function App() {
  const location = useLocation();

  const shouldRenderNavbar =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/donate"||
    location.pathname === "/details"; 

  return (
    <>
      {shouldRenderNavbar ? <Navbar /> : <NavbarSplit />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<MosqueDetails />}/>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* This is the catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
