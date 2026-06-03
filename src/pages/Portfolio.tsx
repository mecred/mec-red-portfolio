import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));
const BackToTop = lazy(() => import('../components/BackToTop'));

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<div className="py-24 flex items-center justify-center text-[#C5A059] font-serif italic text-sm tracking-widest">Loading sections...</div>}>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <BackToTop />
        </Suspense>
      </div>
    </LanguageProvider>
  );
}
