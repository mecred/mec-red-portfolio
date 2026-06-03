import { motion } from "motion/react";
import { Menu } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/legendes-animees";

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 md:p-10 flex justify-between items-start mix-blend-difference">
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <Link to="/legendes-animees" className="text-2xl font-serif italic tracking-tighter">
          Aesthetica.
        </Link>
        <Link to="/" className="text-[10px] uppercase tracking-[2px] opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap md:ml-4 mt-1">
          ← Retour Portfolio
        </Link>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <Menu className="w-5 h-5 mb-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
        <div className="text-[10px] uppercase tracking-[3px] opacity-60">
          {isHome ? "Volume 04 / Archives / Index" : "Details / Collection / II"}
        </div>
      </div>
    </nav>
  );
}
