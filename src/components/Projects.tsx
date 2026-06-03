import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const projectsTranslations = t('projects');

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
              className="group relative flex flex-col lg:flex-row items-stretch lg:items-center p-8 bg-white/[0.012] hover:bg-white/[0.035] border border-white/5 hover:border-[#C5A059]/25 rounded-xl transition-colors duration-500 w-full overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#00000030]"
            >
              {/* Subtle light bar accent on hover */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-[#C5A059] to-transparent group-hover:h-full transition-all duration-500" />
              
              <div className="w-12 h-12 flex items-center justify-center font-serif text-2xl text-white/15 italic lg:mr-8 mb-4 lg:mb-0 shrink-0 select-none">
                0{index + 1}
              </div>
              
              {/* Premium Abstract Showcase Thumbnail */}
              <div className="hidden sm:flex items-center justify-center w-36 h-24 rounded-lg overflow-hidden border border-white/5 relative shrink-0 mr-8 mb-4 lg:mb-0 group-hover:border-[#C5A059]/20 transition-all duration-500 bg-black/40">
                <div className={`absolute inset-0 ${project.imagePlaceholder} opacity-[0.08] group-hover:opacity-[0.16] transition-opacity duration-500`} />
                
                {/* Visual Representation */}
                <span className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full border border-white/5 bg-white/[0.02] group-hover:scale-110 transition-transform duration-500" />
                
                <div className="relative font-mono text-[9px] text-white/30 tracking-widest flex flex-col gap-1.5 items-center select-none">
                  <span className="text-white/80 font-serif italic text-lg leading-none">{project.title.charAt(0)}</span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#C5A059]/80" />
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                </div>
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
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold transition-all duration-300 hover:text-white hover:underline underline-offset-4"
                  >
                    {projectsTranslations.viewProject}
                  </Link>
                ) : (
                  <a 
                    href={project.liveUrl} 
                    target={project.liveUrl !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold transition-all duration-300 hover:text-white hover:underline underline-offset-4"
                  >
                    {projectsTranslations.viewProject}
                  </a>
                )}
                <a 
                  href={project.githubUrl} 
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
    </section>
  );
}
