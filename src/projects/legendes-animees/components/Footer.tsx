import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 py-20 md:py-60 border-t border-white/10 relative overflow-hidden bg-[#0F0F0F] text-[#E5E5E5]">
      <div className="grid grid-cols-12 gap-10 relative z-10">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-serif italic mb-10 leading-tight">Légendes <br /> Éternelles.</h2>
           <p className="max-w-md text-sm font-light opacity-60 leading-relaxed mb-12">
             Dans les méandres de Runeterra, chaque histoire est une constellation. Nous archivons non seulement la force, mais l'esthétique pure de ceux qui ont osé défier le destin.
           </p>
           <div className="flex gap-10">
              <FooterLink label="Universe" href="https://universe.leagueoflegends.com" />
              <FooterLink label="Archives" href="/#archives" />
              <FooterLink label="Exposition" href="#hero" />
           </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-end items-end">
           <div className="text-right">
              <div className="text-3xl font-serif italic mb-2 tracking-tighter">Aesthetica.</div>
              <div className="text-[10px] uppercase tracking-[2px] opacity-40">MMXXIV © Runeterra Archives</div>
           </div>
        </div>
      </div>

      {/* Watermark Background Text */}
      <div className="absolute bottom-0 right-0 opacity-[0.02] select-none pointer-events-none translate-y-1/2">
        <span className="text-[14vw] sm:text-[20vw] md:text-[30vw] font-serif italic whitespace-nowrap">IMMORTEL</span>
      </div>
    </footer>
  );
}

function FooterLink({ label, href = "#" }: { label: string, href?: string }) {
  return (
    <a href={href} className="flex items-center gap-2 group">
      <span className="text-[10px] uppercase tracking-[2px] group-hover:text-[#C2A878] transition-colors">{label}</span>
      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-40 group-hover:opacity-100" />
    </a>
  );
}
