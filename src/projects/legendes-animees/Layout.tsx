import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="bg-[#0F0F0F] text-[#E5E5E5] selection:bg-[#C2A878] selection:text-black min-h-screen">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
