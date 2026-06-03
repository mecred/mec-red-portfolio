import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const aboutTranslations = t('about');

  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/3"
        >
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4">{aboutTranslations.title}</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-2/3"
        >
          <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-2xl">
            {aboutTranslations.bio1}
          </p>
          <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
            {aboutTranslations.bio2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
