import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const heroTranslations = t('hero');

  // Interactive mouse tracking glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const xStr = useTransform(glowX, v => `${v}px`);
  const yStr = useTransform(glowY, v => `${v}px`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Framer Motion staggered container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background radial highlight & grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <motion.div 
        className="absolute -inset-[1px] bg-[radial-gradient(450px_circle_at_var(--x)_var(--y),#C5A0590c,transparent_90%)] pointer-events-none hidden md:block"
        style={{
          // @ts-ignore
          "--x": xStr,
          // @ts-ignore
          "--y": yStr,
        }}
      />

      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start max-w-3xl relative z-10 my-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mb-6 block font-semibold px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full"
        >
          {heroTranslations.role}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 text-white tracking-tight"
        >
          {heroTranslations.headline[0]}<br />
          <span className="italic text-[#C5A059]">{heroTranslations.headline[1]}</span><br />
          {heroTranslations.headline[2]}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-white/50 leading-relaxed max-w-md mb-12"
        >
          {heroTranslations.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start gap-6 w-full"
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-2 mb-2 w-full max-w-[200px]">{heroTranslations.socials}</div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-white/60">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="relative group hover:text-[#C5A059] transition-colors" aria-label="GitHub">
              {heroTranslations.github}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="relative group hover:text-[#C5A059] transition-colors" aria-label="LinkedIn">
              {heroTranslations.linkedin}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="relative group hover:text-[#C5A059] transition-colors" aria-label="Email">
              {heroTranslations.email}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.4, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium font-sans">Scroll</span>
        <ChevronDown size={14} className="text-[#C5A059]" />
      </motion.div>
    </section>
  );
}
