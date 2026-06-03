import { motion } from 'motion/react';
import { skills } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  const skillsTranslations = t('skills');

  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'Frontend': return skillsTranslations.frontend;
      case 'Backend': return skillsTranslations.backend;
      case 'Tools & DevOps': return skillsTranslations.tools;
      case 'AI & LLMs': return (skillsTranslations as any).ai || 'AI & LLMs';
      default: return category;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0A0A0A] relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C5A059]/1 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/3"
        >
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4">{skillsTranslations.title}</h2>
          <p className="text-sm text-white/50 leading-relaxed max-w-sm mt-4">
            {skillsTranslations.subtitle}
          </p>
        </motion.div>
        
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 + 0.15, ease: "easeOut" }}
              className="group relative bg-[#121212c4] backdrop-blur-md border border-white/5 hover:border-[#C5A059]/20 p-8 rounded-xl transition-all duration-500 overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#C5A059]/2 group-hover:bg-[#C5A059]/4 rounded-full blur-xl transition-colors duration-500" />

              <h3 className="text-[10px] uppercase tracking-[0.25em] text-white/40 border-b border-white/10 pb-3 mb-5 font-semibold group-hover:text-[#C5A059] group-hover:border-[#C5A059]/20 transition-all duration-500">
                {getCategoryTitle(skillGroup.category)}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item) => (
                  <motion.span 
                    key={item} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="px-3 py-1.5 bg-white/[0.03] hover:bg-[#C5A059] hover:text-black border border-white/10 hover:border-[#C5A059] text-[10px] font-medium text-white/80 rounded-md transition-colors duration-200 cursor-default select-none shadow-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
