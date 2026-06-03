import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, X, ChevronLeft, ChevronRight, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, personalInfo } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const projectsTranslations = t('projects');

  const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalActiveSlide, setModalActiveSlide] = useState(0);

  const getImageUrl = (path: string) => {
    if (!path) return '';
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    const baseUrl = import.meta.env.BASE_URL;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${cleanBase}${cleanPath}`;
  };

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalActiveSlide(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.98,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0F0F0F] flex flex-col relative overflow-hidden">
      {/* Abstract Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#C5A059]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-between items-end mb-16 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-2">
              {projectsTranslations.title} ({projects.length < 10 ? `0${projects.length}` : projects.length})
            </h2>
            <div className="text-sm font-serif italic text-[#C5A059]/80">Crafting high-fidelity digital systems.</div>
          </div>
          <div className="h-[1px] flex-1 mx-8 mb-1.5 bg-white/10 hidden md:block"></div>
          <div className="text-xs font-serif italic text-white/50">{projectsTranslations.archive}</div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-6 w-full"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 18 }
              }}
              onClick={() => handleProjectClick(project)}
              className="group relative flex flex-col lg:flex-row items-stretch lg:items-center p-6 sm:p-8 bg-white/[0.012] hover:bg-white/[0.035] border border-white/5 hover:border-[#C5A059]/25 rounded-xl transition-colors duration-500 w-full overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#00000030] cursor-pointer"
            >
              {/* Subtle light bar accent on hover */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-[#C5A059] to-transparent group-hover:h-full transition-all duration-500" />
              
              <div className="w-12 h-12 flex items-center justify-center font-serif text-2xl text-white/15 italic lg:mr-8 mb-4 lg:mb-0 shrink-0 select-none">
                0{index + 1}
              </div>
              
              {/* Premium Inline Carousel Showcase Thumbnail */}
              <div className="hidden sm:flex items-center justify-center w-44 h-28 rounded-lg overflow-hidden border border-white/5 relative shrink-0 mr-8 mb-4 lg:mb-0 group-hover:border-[#C5A059]/20 transition-all duration-500 bg-black/40 group/carousel">
                {project.images && project.images.length > 0 ? (
                  <>
                    <img 
                      src={getImageUrl(project.images[activeSlides[project.id] || 0])} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500" 
                    />
                    
                    {/* Inline Arrows */}
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlides(prev => ({
                            ...prev,
                            [project.id]: ((prev[project.id] || 0) - 1 + project.images.length) % project.images.length
                          }));
                        }}
                        className="w-6 h-6 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/85 hover:text-white hover:bg-black/80 pointer-events-auto transition-all"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={12} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlides(prev => ({
                            ...prev,
                            [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
                          }));
                        }}
                        className="w-6 h-6 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/85 hover:text-white hover:bg-black/80 pointer-events-auto transition-all"
                        aria-label="Next image"
                      >
                        <ChevronRight size={12} />
                      </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10 pointer-events-none">
                      {project.images.map((_, idx) => (
                        <span 
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            (activeSlides[project.id] || 0) === idx ? 'bg-[#C5A059] w-3' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className={`absolute inset-0 ${project.imagePlaceholder} opacity-[0.08]`} />
                )}
              </div>

              <div className="flex-1 lg:pr-6 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-medium mb-1 text-white group-hover:text-[#C5A059] transition-colors duration-300">
                    {projectsTranslations.items?.[index]?.title || project.title}
                  </h3>
                  {project.liveUrl !== "#" && (
                    <ArrowUpRight size={14} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </div>
                <p className="text-xs text-white/45 font-sans leading-relaxed mb-4 max-w-2xl">
                  {projectsTranslations.items?.[index]?.description || project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/5 text-[8.5px] text-white/50 group-hover:text-white/80 group-hover:border-white/10 transition-colors duration-300 uppercase tracking-widest font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-8 lg:mt-0 items-start lg:items-end lg:w-48 shrink-0 w-full pt-6 lg:pt-0 border-t border-white/5 lg:border-t-0 select-none">
                {project.liveUrl.startsWith('/') ? (
                  <Link 
                    to={project.liveUrl} 
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold transition-all duration-300 hover:text-white hover:underline underline-offset-4"
                  >
                    {projectsTranslations.viewProject}
                  </Link>
                ) : (
                  <a 
                    href={project.liveUrl} 
                    onClick={(e) => {
                      if (project.liveUrl === "#") {
                        e.preventDefault();
                        e.stopPropagation();
                        handleProjectClick(project);
                      } else {
                        e.stopPropagation();
                      }
                    }}
                    target={project.liveUrl !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold transition-all duration-300 hover:text-white hover:underline underline-offset-4"
                  >
                    {projectsTranslations.viewProject}
                  </a>
                )}
                <a 
                  href={project.githubUrl} 
                  onClick={(e) => {
                    if (project.githubUrl === "#") {
                      e.preventDefault();
                      e.stopPropagation();
                      handleProjectClick(project);
                    } else {
                      e.stopPropagation();
                    }
                  }}
                  target={project.githubUrl !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-200"
                >
                  {projectsTranslations.githubRepo}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#121212] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white/70 hover:text-white transition-colors border border-white/5 cursor-pointer"
                aria-label={t('projectModal').close}
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
                {/* Left side: Carousel */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black group/modal-carousel">
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <>
                        <img
                          src={getImageUrl(selectedProject.images[modalActiveSlide])}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {selectedProject.images.length > 1 && (
                          <>
                            {/* Navigation chevrons */}
                            <button
                              onClick={() => setModalActiveSlide(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover/modal-carousel:opacity-100 cursor-pointer"
                              aria-label="Previous Image"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              onClick={() => setModalActiveSlide(prev => (prev + 1) % selectedProject.images.length)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover/modal-carousel:opacity-100 cursor-pointer"
                              aria-label="Next Image"
                            >
                              <ChevronRight size={18} />
                            </button>
                            
                            {/* Slide number indicator */}
                            <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/55 backdrop-blur-sm text-[10px] text-white/70 border border-white/5 font-mono select-none">
                              {modalActiveSlide + 1} / {selectedProject.images.length}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnails indicator */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="flex gap-2.5 overflow-x-auto py-1">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalActiveSlide(idx)}
                          className={`relative w-20 aspect-video rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                            modalActiveSlide === idx ? 'border-[#C5A059] scale-102 ring-1 ring-[#C5A059]/30' : 'border-white/10 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={getImageUrl(img)} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right side: Info & Meta */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold">
                      {t('projectModal').detailsTitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mt-1 mb-4">
                      {selectedProject.title}
                    </h3>
                    
                    <p className="text-xs text-white/60 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase tracking-wider text-white/40 mb-2 font-semibold">
                        {t('projectModal').techUsed}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[9px] text-white/60 uppercase tracking-widest font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Private Notice or Action buttons */}
                  <div className="border-t border-white/5 pt-6 mt-4">
                    {selectedProject.liveUrl === "#" || selectedProject.githubUrl === "#" ? (
                      <div className="bg-white/[0.015] border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-white/80">
                          <Lock size={14} className="text-[#C5A059]" />
                          <span className="text-[10px] uppercase tracking-wider font-semibold">
                            {t('projectModal').privateNotice}
                          </span>
                        </div>
                        <p className="text-[11px] text-white/40 leading-relaxed">
                          {t('projectModal').privateDescription}
                        </p>
                        <a
                          href={`mailto:${personalInfo.email}?subject=Demo%20Request%3A%20${encodeURIComponent(selectedProject.title)}`}
                          className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-[#C5A059] hover:bg-[#d6b26d] text-black text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer"
                        >
                          <Mail size={12} />
                          {t('projectModal').contactBtn}
                        </a>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        {selectedProject.liveUrl !== "#" && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C5A059] hover:bg-[#d6b26d] text-black text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer"
                          >
                            <ExternalLink size={12} />
                            {t('projectModal').liveSite}
                          </a>
                        )}
                        {selectedProject.githubUrl !== "#" && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer"
                          >
                            <Github size={12} />
                            {t('projectModal').viewCode}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

