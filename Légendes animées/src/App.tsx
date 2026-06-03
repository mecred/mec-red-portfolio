import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="bg-[#0F0F0F] text-[#E5E5E5] selection:bg-[#C2A878] selection:text-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
