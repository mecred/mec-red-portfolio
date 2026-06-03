import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTranslations = t('nav');

  const navLinks = [
    { name: navTranslations.about, href: '#about' },
    { name: navTranslations.skills, href: '#skills' },
    { name: navTranslations.projects, href: '#projects' },
    { name: navTranslations.contact, href: '#contact' },
  ];

  const LanguageSwitcher = () => (
    <div className="relative flex items-center bg-white/[0.03] border border-white/5 rounded-full p-1 ml-2">
      <div className="relative flex items-center text-xs uppercase tracking-wider font-semibold">
        <button 
          onClick={() => setLanguage('en')} 
          className={`relative z-10 px-3 py-1 transition-colors duration-300 ${language === 'en' ? 'text-black font-extrabold' : 'text-white/50 hover:text-white'}`}
        >
          {language === 'en' && (
            <motion.span
              layoutId="activeLang"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute inset-0 bg-[#C5A059] rounded-full -z-10"
            />
          )}
          EN
        </button>
        <button 
          onClick={() => setLanguage('fr')} 
          className={`relative z-10 px-3 py-1 transition-colors duration-300 ${language === 'fr' ? 'text-black font-extrabold' : 'text-white/50 hover:text-white'}`}
        >
          {language === 'fr' && (
            <motion.span
              layoutId="activeLang"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute inset-0 bg-[#C5A059] rounded-full -z-10"
            />
          )}
          FR
        </button>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0A0A0AB2] backdrop-blur-xl border-b border-white/10 py-4' 
          : 'bg-transparent border-b border-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="relative group text-2xl font-serif tracking-widest text-[#C5A059] font-bold transition-all duration-300 hover:opacity-90">
          {personalInfo.name}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-medium text-white/60">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                {hoveredLink === link.href && (
                  <motion.span
                    layoutId="navHover"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-white/[0.04] border border-white/[0.05] rounded-lg -z-10"
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="p-2 text-white/60 hover:text-[#C5A059] transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} className="text-[#C5A059]" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A9C] backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70 hover:text-[#C5A059] py-2 border-b border-white/5 last:border-0 transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
