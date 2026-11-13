import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import Analyzer from "./sections/Analyzer";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

import Dashboard from "./dashboard/Dashboard";

function LandingPage() {
  useEffect(() => {
    if (window.location.hash === "#analyzer") {
      setTimeout(() => {
        document.getElementById("analyzer")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <HowItWorks />
      <Features />
      <Analyzer />
      <CTA />
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;