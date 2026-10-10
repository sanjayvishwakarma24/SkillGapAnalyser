import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;