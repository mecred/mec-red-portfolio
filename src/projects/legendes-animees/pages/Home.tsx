import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, ArrowDown, ArrowUp, Search, X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroParallax = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((p) => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="bg-[#0F0F0F] text-[#E5E5E5] min-h-screen selection:bg-[#C2A878] selection:text-black font-sans relative overflow-x-hidden pt-32">
      {/* Editorial Grid Base Overlay */}
      <div className="fixed inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03] z-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>

      {/* Floating Search Button */}
      <button 
        onClick={() => setIsSearchOpen(true)}
        className="fixed top-10 right-10 z-50 p-4 bg-white/5 border border-white/10 hover:border-[#C2A878] hover:text-[#C2A878] transition-all backdrop-blur-md rounded-full group"
      >
        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Fullscreen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col items-center justify-center p-10"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 p-4 opacity-50 hover:opacity-100 hover:text-[#C2A878] transition-all"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl">
              <span className="text-[10px] uppercase tracking-[4px] opacity-40 block mb-6 text-center">Trouver une Archive</span>
              <input 
                type="text" 
                placeholder="Ex: Assassin, Ionia, Zed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent border-b-2 border-white/20 text-4xl md:text-6xl font-serif text-center pb-6 focus:outline-none focus:border-[#C2A878] transition-colors text-white placeholder-white/10"
              />
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-h-[40vh] overflow-y-auto scrollbar-hide py-4 px-2">
                {filteredProjects.slice(0, 12).map((p) => (
                  <Link 
                    key={p.id} 
                    to={`/legendes-animees/project/${p.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex flex-col gap-2 p-4 border border-white/5 bg-white/[0.02] hover:border-[#C2A878]/50 hover:bg-white/5 transition-all text-center group"
                  >
                    <span className="text-xl font-serif group-hover:text-[#C2A878] transition-colors">{p.title}</span>
                    <span className="text-[9px] uppercase tracking-[2px] opacity-40">{p.category.split(' ')[0]}</span>
                  </Link>
                ))}
              </div>
              {filteredProjects.length > 12 && (
                <div className="text-center mt-8 text-xs opacity-40 uppercase tracking-[2px]">
                  + {filteredProjects.length - 12} autres résultats...
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-[80vh] grid grid-cols-12 px-10">
        {/* Decorative Side Label */}
        <div className="col-span-1 flex items-center justify-end">
          <div className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[4px] opacity-40 whitespace-nowrap">
            Publication Annuelle — MMXXIV
          </div>
        </div>

        {/* Hero Title */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="col-span-11 md:col-span-7 flex flex-col justify-start pt-10 z-10"
        >
           <h1 className="text-[14vw] md:text-[110px] font-serif font-light leading-[0.85] tracking-[-4px] m-0">
            Légendes <br />
            <span className="block ml-20 text-[#C2A878]">Animentées</span>
          </h1>
          
          <div className="mt-20 max-w-sm border-t border-white/10 pt-6">
             <h3 className="font-serif text-2xl mb-4 italic">Archives de Runeterra</h3>
             <p className="text-xs leading-relaxed opacity-70">
              Une conservation éditoriale des figures les plus marquantes du monde de Runeterra, capturées dans leurs formes les plus transcendantes.
             </p>
          </div>
        </motion.div>

        {/* Main Image Frame */}
        <div className="absolute right-0 top-32 w-[60vw] h-[70vh] -z-0 pointer-events-none md:pointer-events-auto">
          <motion.div 
             initial={{ scale: 1.1, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             style={{ y: heroParallax }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#252525] relative overflow-hidden"
          >
            <motion.img 
               src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg" 
               alt="Featured Legend" 
               referrerPolicy="no-referrer"
               style={{ scale: 1.2 }}
               className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(194,168,120,0.1),transparent)]" />
          </motion.div>

          <div className="absolute top-0 right-10 text-right transform -translate-y-1/2 md:translate-y-0 md:top-10">
            <span className="text-5xl font-serif block mb-1">MMXXIV</span>
            <span className="text-[9px] uppercase tracking-[2px] opacity-50">Exposition Annuelle</span>
          </div>
        </div>

        <div className="absolute top-[30%] left-[45%] w-32 h-32 border border-[#C2A878]/30 rounded-full pointer-events-none -z-0" />
      </section>

      {/* Featured List Section */}
      <section id="archives" className="px-10 py-40 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-10">
           <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <h2 className="text-xs uppercase tracking-[4px] opacity-30">Sélection</h2>
              <span className="text-[10px] opacity-20 uppercase tracking-[2px]">{filteredProjects.length} Planches Répertoriées</span>
           </div>
           <div className="flex flex-col gap-8 sticky top-32">
              {visibleProjects.map((project) => (
                <Link 
                  key={project.id}
                  to={`/legendes-animees/project/${project.slug}`}
                  className="block cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ x: 12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="flex gap-4 items-center"
                  >
                    <span className="font-serif italic text-lg text-[#C2A878] opacity-50 group-hover:opacity-100 transition-opacity">0{project.id}.</span>
                    <span className="text-xs uppercase tracking-[1px] group-hover:tracking-[3px] group-hover:text-[#C2A878] transition-all duration-500 ease-out">{project.title}</span>
                  </motion.div>
                </Link>
              ))}
              
              {visibleCount < filteredProjects.length && (
                <button 
                  onClick={() => setVisibleCount(v => v + 10)}
                  className="mt-8 self-start px-6 py-3 border border-white/10 text-[10px] uppercase tracking-[2px] hover:bg-white hover:text-black transition-colors"
                >
                  Charger Plus
                </button>
              )}
           </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {visibleProjects.map((project, idx) => (
               <EditorialCard key={project.id} item={project} index={idx} />
            ))}
          </div>
          
          {visibleCount < filteredProjects.length && (
             <div className="w-full flex justify-center mt-32">
                <button 
                  onClick={() => setVisibleCount(v => v + 10)}
                  className="px-10 py-4 border border-[#C2A878]/30 hover:border-[#C2A878] text-[#C2A878] opacity-60 hover:opacity-100 uppercase tracking-[4px] text-xs transition-all"
                >
                  Accéder aux archives suivantes
                </button>
             </div>
          )}
        </div>
      </section>

      {/* Intro Text */}
      <section className="px-10 py-40 max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-light font-serif leading-relaxed italic text-balance opacity-80"
        >
          Dedicated to the preservation of <span className="not-italic font-sans uppercase text-sm tracking-[0.2em] font-medium p-1 border border-white/20">silence</span> and the exploration of light across raw, architectural landscapes.
        </motion.p>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, backgroundColor: "#C2A878", color: "#000000" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 p-4 border border-[#C2A878] text-[#C2A878] transition-colors duration-300 backdrop-blur-md"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function EditorialCard({ item, index }: { item: typeof PROJECTS[number], index: number } & React.Attributes) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <Link to={`/legendes-animees/project/${item.slug}`}>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.1 }}
        className={`flex flex-col gap-6 group cursor-pointer ${isEven ? 'md:translate-y-20' : ''}`}
      >
        <div className="aspect-[4/5] bg-[#1A1A1A] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 relative">
          <motion.img 
            src={item.image} 
            alt={item.title} 
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            whileHover={{ scale: 1.1 }}
            style={{ y, scale: 1.2 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full object-cover p-[2px]"
          />
          <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[2px] bg-black/40 px-3 py-1 backdrop-blur-sm z-10">
            Planche 0{item.id}
          </div>
        </div>
        <div className="border-l border-[#C2A878]/30 group-hover:border-[#C2A878] group-hover:pl-10 pl-6 pt-2 transition-all duration-700 ease-[0.33, 1, 0.68, 1]">
           <h4 className="font-serif text-2xl mb-2 group-hover:translate-x-2 transition-transform duration-700 ease-[0.33, 1, 0.68, 1]">
             {item.title}
           </h4>
           <p className="text-[11px] uppercase tracking-[1px] opacity-40 mb-3 group-hover:translate-x-1 transition-transform duration-700 delay-75 ease-[0.33, 1, 0.68, 1]">
             {item.category}
           </p>
           <p className="text-xs leading-relaxed opacity-60 font-light max-w-[240px] group-hover:opacity-100 transition-opacity duration-700">
             {item.description}
           </p>
        </div>
      </motion.div>
    </Link>
  );
}
