import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const contactTranslations = t('contact');

  return (
    <section id="contact" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/[0.01] backdrop-blur-md border border-white/5 hover:border-[#C5A059]/20 rounded-2xl p-10 md:p-16 text-center shadow-2xl transition-all duration-500 overflow-hidden group"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#C5A059]/2 rounded-full blur-2xl group-hover:bg-[#C5A059]/4 transition-all duration-500" />

          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-white mb-6 mt-4 tracking-tight">
            {contactTranslations.title}
          </h2>

          <p className="text-xs md:text-sm text-white/50 max-w-md mx-auto leading-relaxed mb-12">
            {contactTranslations.description}
          </p>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a 
              href={`mailto:${personalInfo.email}`}
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#C5A059] hover:bg-[#d6b26d] text-black text-xs font-bold uppercase tracking-[0.25em] rounded-lg transition-all duration-300 shadow-lg shadow-[#C5A059]/10"
            >
              {contactTranslations.cta.replace(' \u2192', '')}
              <ArrowRight size={14} className="transition-transform duration-300 transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
