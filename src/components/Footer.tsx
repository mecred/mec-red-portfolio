import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const footerTranslations = t('footer');

  return (
    <footer className="h-20 bg-[#C5A059] flex items-center justify-center">
      <a href={`mailto:${personalInfo.email}`} className="text-black font-bold tracking-[0.3em] text-[10px] uppercase hover:underline underline-offset-4 decoration-black/30">
        {footerTranslations.getInTouch}: {personalInfo.email}
      </a>
    </footer>
  );
}
