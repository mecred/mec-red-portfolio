import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowLeft, MapPin, Calendar, Globe, Volume2, VolumeX, Loader2, Zap, Shield, Sword, Brain, Sparkles } from "lucide-react";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [isLoadingVoice, setIsLoadingVoice] = useState(false);
  const [skinImages, setSkinImages] = useState<{name: string, url: string}[]>([]);
  const [riotNumericKey, setRiotNumericKey] = useState<string | null>(null);
  const [officialLore, setOfficialLore] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const project = PROJECTS.find(p => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setSkinImages([]);
    setRiotNumericKey(null);
    setOfficialLore(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlayingVoice(false);
    }

    const fetchChampionData = async () => {
      try {
        const listRes = await fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/fr_FR/champion.json');
        const listData = await listRes.json();
        let riotId: string | null = null;
        let numericKey: string | null = null;

        const normalizedTitle = project?.title.toLowerCase().replace(/\bmf\b/g, 'miss fortune') || '';
        const normalizedSlug = project?.slug.toLowerCase().replace(/miss-fortune/g, 'missfortune') || '';

        for (const champ of Object.values<any>(listData.data)) {
          const champName = champ.name.toLowerCase();
          const champId = champ.id.toLowerCase();
          if (
            normalizedTitle.includes(champName) ||
            normalizedSlug.includes(champId) ||
            project?.title.toLowerCase().includes(champName) ||
            project?.slug.toLowerCase().includes(champId)
          ) {
            riotId = champ.id;
            numericKey = champ.key;
            break;
          }
        }
        if (numericKey) setRiotNumericKey(numericKey);
        if (riotId) {
          const detailRes = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.24.1/data/fr_FR/champion/${riotId}.json`);
          const detailData = await detailRes.json();
          const champData = detailData.data[riotId];
          if (champData) {
             if (champData.skins) {
                const mappedSkins = champData.skins.map((s: any) => ({
                   name: s.name === 'default' ? 'Classique' : s.name,
                   url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${riotId}_${s.num}.jpg`
                }));
                setSkinImages(mappedSkins);
             }
             if (champData.lore) {
                setOfficialLore(champData.lore);
             }
          }
        }
      } catch (e) {
        console.error("Erreur lors de la récupération des données champion :", e);
      }
    };
    if (project) fetchChampionData();

    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [slug, project]);

  if (!project) return null;

  const nextProject = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];
  const theme = project.theme || { bg: "#0F0F0F", accent: "#C2A878", secondary: "#C2A878" };

  const toggleChampionVoice = useCallback(() => {
    if (isPlayingVoice) {
      audioRef.current?.pause();
      audioRef.current = null;
      setIsPlayingVoice(false);
      return;
    }
    if (!riotNumericKey) return;
    setIsLoadingVoice(true);
    // CommunityDragon French champion-select voice line URL
    const voiceUrl = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/fr_fr/v1/champion-choose-vo/${riotNumericKey}.ogg`;
    const audio = new Audio(voiceUrl);
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;
    audio.addEventListener('canplaythrough', () => {
      setIsLoadingVoice(false);
      setIsPlayingVoice(true);
      audio.play().catch(() => { setIsPlayingVoice(false); setIsLoadingVoice(false); });
    }, { once: true });
    audio.addEventListener('ended', () => { setIsPlayingVoice(false); audioRef.current = null; }, { once: true });
    audio.addEventListener('error', () => { setIsLoadingVoice(false); setIsPlayingVoice(false); audioRef.current = null; }, { once: true });
    audio.load();
  }, [isPlayingVoice, riotNumericKey]);

  const AbilityIcon = ({ iconName }: { iconName: string }) => {
    switch (iconName) {
      case 'zap': return <Zap className="w-5 h-5" />;
      case 'shield': return <Shield className="w-5 h-5" />;
      case 'sword': return <Sword className="w-5 h-5" />;
      case 'brain': return <Brain className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div ref={containerRef} className={`min-h-screen selection:text-black font-sans relative overflow-x-hidden pt-32 transition-colors duration-1000`} style={{ backgroundColor: theme.bg, color: theme.accent }}>
      {/* Immersive Atmospheric Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] opacity-[0.08] blur-[120px] rounded-full animate-pulse" style={{ backgroundColor: theme.accent }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] opacity-[0.05] blur-[150px] rounded-full" style={{ backgroundColor: theme.secondary }} />
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <ProjectSkeleton key="skeleton" />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Editorial Grid Base Overlay */}
            <div className="fixed inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03] z-0">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white h-full" />
              ))}
            </div>

            {/* Top Navigation */}
            <div className="px-10 mb-20 flex justify-between items-center relative z-20">
              <Link to="/" className="inline-flex items-center gap-4 group opacity-50 hover:opacity-100 transition-opacity" style={{ color: theme.accent }}>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
                <span className="text-[10px] uppercase tracking-[4px]">Archive Index</span>
              </Link>
              
              {project.region && (
                <div className="flex items-center gap-3 border border-white/10 px-4 py-2 bg-white/5 backdrop-blur-md">
                   <Globe className="w-3 h-3 opacity-50" />
                   <span className="text-[10px] uppercase tracking-[2px] font-bold">{project.region}</span>
                </div>
              )}
            </div>

            {/* Hero Header */}
            <header className="px-10 grid grid-cols-12 gap-10 mb-40">
              <div className="col-span-12 md:col-span-8">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-[10px] uppercase tracking-[4px] font-bold block mb-8 transition-colors duration-700`}
                  style={{ color: theme.accent }}
                >
                  Document №0{project.id} // {project.category}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  className="text-[10vw] md:text-[140px] font-serif italic leading-[0.8] tracking-[-5px] m-0"
                >
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className={`block ml-20 transition-colors duration-700`} style={{ color: i === 1 ? theme.secondary : 'inherit' }}>
                      {word}{' '}
                    </span>
                  ))}
                </motion.h1>
              </div>
              
              <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
                 {/* Visual Stats Bar */}
                 {project.stats && (
                   <div className="mb-10 space-y-4 border-b border-white/10 pb-8">
                      <span className="text-[10px] uppercase tracking-[2px] opacity-40 block">Analyse des Paramètres</span>
                      <div className="flex justify-between items-end h-24 gap-2">
                         {Object.entries(project.stats).map(([key, val]) => (
                           <div key={key} className="flex-1 flex flex-col items-center gap-2">
                              <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: `${(val as number) * 10}%` }}
                                className="w-full bg-white/20 relative"
                              >
                                 <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
                              </motion.div>
                              <span className="text-[8px] uppercase tracking-[1px] opacity-50 vertical-rl">{key}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                 )}

                 <div className="grid grid-cols-2 gap-10 pt-4">
                    <div className="space-y-4">
                       <span className="text-[10px] uppercase tracking-[2px] opacity-40 block">Point de Faille</span>
                       <div className="flex items-center gap-2 text-sm">
                          <MapPin className={`w-3 h-3 transition-colors`} style={{ color: theme.accent }} /> {project.location}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <span className="text-[10px] uppercase tracking-[2px] opacity-40 block">Cycle de Sortie</span>
                       <div className="flex items-center gap-2 text-sm">
                          <Calendar className={`w-3 h-3 transition-colors`} style={{ color: theme.accent }} /> {project.year}
                       </div>
                    </div>
                 </div>
                 
                 {/* Voice Play Button */}
                 <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[2px] opacity-40 block">Voix du Champion</span>
                      {isPlayingVoice && (
                        <div className="flex gap-[3px] items-end h-4">
                          {[1,2,3,4,5].map(i => (
                            <motion.div
                              key={i}
                              className="w-[3px] rounded-full"
                              style={{ backgroundColor: theme.accent }}
                              animate={{ height: ['4px', '16px', '4px'] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={toggleChampionVoice}
                      disabled={isLoadingVoice}
                      className="group flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-white/40 bg-white/5 transition-all relative overflow-hidden disabled:opacity-50"
                      style={{ color: theme.accent }}
                    >
                      <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      <div className="relative z-10 flex items-center gap-3">
                        {isLoadingVoice ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : isPlayingVoice ? (
                          <VolumeX className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Volume2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        )}
                        <span className="text-[10px] uppercase tracking-[2px]">
                          {isLoadingVoice ? "Chargement..." : isPlayingVoice ? "Arrêter" : "Écouter la Voix"}
                        </span>
                      </div>
                    </button>
                 </div>
              </div>
            </header>

            {/* Main Exhibition Image with Label */}
            <section className="px-10 mb-40 relative">
              <div className="absolute top-0 right-10 -translate-y-full mb-4 flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-[2px] opacity-40">Capture Haute-Résolution</span>
                <span className="text-[8px] opacity-20">REF: {project.slug?.toUpperCase()}-4K-01</span>
              </div>
              <div className="aspect-[16/9] w-full overflow-hidden relative border border-white/5 shadow-2xl">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </section>

            {/* Abilities Section (The "Details") */}
            {project.abilities && (
              <section className="px-10 mb-40">
                <div className="flex items-center gap-6 mb-16">
                   <div className="h-[1px] flex-1 bg-white/10" />
                   <h3 className="text-[10px] uppercase tracking-[6px] opacity-50">Arsenal de Compétences</h3>
                   <div className="h-[1px] flex-1 bg-white/10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                   {project.abilities.map((ability: any, i: number) => (
                     <motion.div 
                        key={i}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="p-8 border border-white/5 transition-colors group cursor-default"
                     >
                        <div className="mb-6 flex items-center justify-between">
                           <div className="p-3 bg-white/5 group-hover:bg-white/10 transition-colors" style={{ color: theme.accent }}>
                              <AbilityIcon iconName={ability.icon} />
                           </div>
                           <span className="text-xs opacity-20 font-mono">0{i+1}</span>
                        </div>
                        <h4 className="text-lg font-serif italic mb-3" style={{ color: theme.accent }}>{ability.name}</h4>
                        <p className="text-xs leading-relaxed opacity-40 group-hover:opacity-80 transition-opacity">
                           {ability.description}
                        </p>
                     </motion.div>
                   ))}
                </div>
              </section>
            )}

            {/* Project Content */}
            <section className="px-10 grid grid-cols-12 gap-10 mb-60">
              <div className="col-span-12 md:col-span-5">
                 <h2 className="text-4xl md:text-6xl font-serif italic leading-tight mb-16" style={{ color: theme.secondary }}>
                   {project.description}
                 </h2>

                 {/* Quote Section */}
                 {project.quote && (
                   <div className="mb-16 italic font-serif text-3xl opacity-90 border-l-[3px] pl-10 py-4" style={{ borderColor: theme.secondary }}>
                     "{project.quote}"
                   </div>
                 )}
                 
                 {/* Biography Section */}
                 <div className="mt-20 border-t border-white/10 pt-12 relative">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.05] pointer-events-none">
                       <span className="text-9xl font-serif italic">BIO</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[4px] opacity-40 block mb-10">Archives de Jeunesse & Ascension</span>
                    <p className="text-xl font-light leading-relaxed opacity-60 text-justify">
                       {officialLore || project.biography}
                    </p>
                 </div>
              </div>
              
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                 <p className="text-2xl md:text-3xl font-light leading-[1.5] tracking-tight opacity-80 mb-20 text-balance overflow-hidden italic font-serif">
                   {project.longDescription}
                 </p>
                 
                 {/* Battles Section */}
                 <div className="mb-24 p-12 border border-white/10 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
                    <span className="text-[10px] uppercase tracking-[4px] opacity-40 block mb-8">Théâtre d'Opérations</span>
                    <p className="text-base md:text-lg font-medium leading-relaxed italic opacity-90 indent-8">
                       "{project.battles}"
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 border-t border-white/10 pt-20">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="space-y-6 group">
                        <span className={`text-[10px] uppercase tracking-[3px] opacity-30 transition-all group-hover:opacity-100 group-hover:translate-x-2 block`}>{spec.label}</span>
                        <p className="text-lg md:text-xl font-medium border-b border-transparent group-hover:border-white/10 pb-2 transition-all" style={{ color: theme.accent }}>{spec.value}</p>
                      </div>
                    ))}
                 </div>
                 
                 {/* Skin Gallery Section */}
                 <div className="mt-32 pt-12 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-[4px] opacity-40 block mb-12 italic">Variations du Prisme (Skins)</span>
                    {skinImages.length > 0 ? (
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                         {skinImages.map((skin, i) => (
                           <div key={i} className="group relative aspect-video overflow-hidden border border-white/10 bg-white/5 cursor-pointer">
                             <img src={skin.url} alt={skin.name} className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" loading="lazy" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             <span className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[2px] font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                               {skin.name}
                             </span>
                           </div>
                         ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-4">
                         <span className="opacity-50 text-xs italic">Chargement des archives visuelles...</span>
                      </div>
                    )}
                 </div>
              </div>
            </section>

            {/* Cinematic Section (hides broken fallback) */}
            {project.cinematicUrl && (
              <section className="px-10 mb-40">
                <div className="flex flex-col items-center mb-16 text-center">
                   <h3 className="text-3xl font-serif italic mb-4" style={{ color: theme.secondary }}>Enregistrement Visuel</h3>
                   <span className="text-[10px] uppercase tracking-[6px] opacity-50">Archive Cinématographique Classifiée</span>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-video relative border border-white/10 p-2 bg-white/5 backdrop-blur-md group">
                  <div className="absolute inset-0 border border-[#C2A878]/30 scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                  <iframe 
                    src={`${project.cinematicUrl}?autoplay=0&controls=1&rel=0&showinfo=0`} 
                    title={`${project.title} Cinematic`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </section>
            )}

            {/* Related Champions By Lore (Relations & Conflits) */}
            <section className="px-10 mb-60">
                <div className="flex flex-col items-center mb-16 text-center">
                   <h3 className="text-3xl font-serif italic mb-4" style={{ color: theme.accent }}>Toile de Relations</h3>
                   <span className="text-[10px] uppercase tracking-[6px] opacity-50">Alliés et Conflits dans {project.region || project.location || "Runeterra"}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {PROJECTS.filter(p => p.id !== project.id && ((p.region && p.region === project.region) || (p.location && project.location && p.location.includes(project.location.split(',')[0])))).slice(0, 4).map(related => (
                       <Link key={related.id} to={`/project/${related.slug}`} className="group relative aspect-square overflow-hidden border border-white/10 bg-white/5 block">
                          <img src={related.image} alt={related.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                          <div className="absolute bottom-6 left-6 right-6 flex flex-col">
                             <span className="text-[10px] uppercase tracking-[2px] opacity-50 mb-1">Entité Liée</span>
                             <span className="text-lg font-serif italic group-hover:text-white transition-colors" style={{ color: theme.secondary }}>{related.title.split(' ').pop()}</span>
                          </div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                             <ArrowUpRight className="w-4 h-4" />
                          </div>
                       </Link>
                    ))}
                </div>
            </section>

            {/* Next Project Teaser */}
            <section className="bg-white text-black py-60 px-10 relative overflow-hidden flex flex-col items-center text-center">
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-[10px] uppercase tracking-[5px] font-bold mb-12 block"
               >
                 Projet Suivant
               </motion.span>
               <Link to={`/project/${nextProject.slug}`} className="group">
                 <motion.h2 
                   whileHover={{ scale: 1.05 }}
                   className="text-7xl md:text-[120px] font-serif italic leading-[0.8] mb-12 transition-transform duration-1000"
                 >
                   {nextProject.title}
                 </motion.h2>
               </Link>
               <p className="text-xs uppercase tracking-[3px] opacity-40 italic font-serif">AESTHETICA VOL 0{nextProject.id}</p>
               
               {/* Decorative watermark */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none scale-150">
                  <span className="text-[20vw] font-serif italic whitespace-nowrap">NEXT CHAPTER</span>
               </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-10"
    >
      <div className="w-40 h-4 bg-white/5 mb-32" />
      
      <div className="grid grid-cols-12 gap-10 mb-40">
        <div className="col-span-8">
          <div className="w-32 h-3 bg-[#C2A878]/20 mb-8" />
          <div className="w-full h-32 bg-white/5 mb-4" />
          <div className="w-2/3 h-32 bg-white/5 ml-20" />
        </div>
        <div className="col-span-4 flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-10">
            <div className="space-y-4">
              <div className="w-16 h-2 bg-white/5" />
              <div className="w-24 h-4 bg-white/5" />
            </div>
            <div className="space-y-4">
              <div className="w-16 h-2 bg-white/5" />
              <div className="w-24 h-4 bg-white/5" />
            </div>
          </div>
        </div>
      </div>

      <div className="aspect-[16/9] w-full bg-white/5 mb-40 overflow-hidden relative">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_100px_rgba(255,255,255,0.1)]"
        />
      </div>
    </motion.div>
  );
}
