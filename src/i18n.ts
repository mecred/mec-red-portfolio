export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      role: 'Web Developer & Designer',
      headline: ['Crafting digital', 'architecture with', 'precision.'],
      description: 'I am MEC RED, a developer dedicated to the intersection of clean code and sophisticated aesthetics. Specializing in high-performance web systems and bespoke UI experiences.',
      socials: 'Socials',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Contact'
    },
    about: {
      title: 'About Me',
      bio1: 'I am a passionate and detail-oriented web developer dedicated to building responsive, accessible, and high-performance applications. With a strong foundation in both front-end and back-end technologies, I enjoy transforming complex problems into elegant, intuitive digital experiences. Always eager to learn new tools and methodologies, I strive for coding excellence and impactful design.',
      bio2: "I prioritize writing clean, maintainable code and building architectures that scale. With a strong mastery of AI and Large Language Models (LLMs), I integrate cutting-edge AI capabilities into seamless user experiences. When I'm not configuring servers or designing database schemas, I'm obsessing over the micro-interactions that make an interface feel alive."
    },
    skills: {
      title: 'Technical Arsenal',
      subtitle: 'Technologies, frameworks, and tools I use frequently to construct digital architecture.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & DevOps',
      ai: 'AI & LLMs',
    },
    projects: {
      title: 'Selected Works',
      archive: 'Portfolio Archive',
      viewProject: 'View Project \u2192',
      githubRepo: 'GitHub Repo',
      items: [
        {
          title: "E-Commerce Dashboard",
          description: "A comprehensive admin dashboard for managing products, viewing analytics, and tracking orders in real-time. Features dark mode, responsive data tables, and interactive charts."
        },
        {
          title: "Sunny Glow",
          description: "An e-commerce platform for a natural skincare brand, featuring product showcases, special bundles, and a seamless shopping experience."
        },
        {
          title: "Légendes Animées",
          description: "An immersive League of Legends explorer featuring interactive champion cards, lore, skin galleries, and voice lines synchronised with the official game API."
        }
      ]
    },
    contact: {
      location: 'Located in London, UK',
      title: "Let's Connect",
      description: 'Available for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.',
      cta: 'Initiate Contact \u2192'
    },
    footer: {
      getInTouch: 'Get in Touch'
    }
  },
  fr: {
    nav: {
      about: 'À Propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      role: 'Développeur Web & Designer',
      headline: ['Créer une architecture', 'numérique avec', 'précision.'], // or 'Façonner', 'Construire'
      description: "Je suis MEC RED, un développeur dévoué à l'intersection du code propre et d'une esthétique sophistiquée. Spécialisé dans les systèmes web haute performance et les expériences utilisateur sur mesure.",
      socials: 'Réseaux',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Contact'
    },
    about: {
      title: 'À Propos De Moi',
      bio1: "Je suis un développeur web passionné et minutieux, dédié à la création d'applications réactives, accessibles et performantes. Avec de solides bases dans les technologies front-end et back-end, j'aime transformer des problèmes complexes en expériences numériques élégantes et intuitives. Toujours désireux d'apprendre de nouveaux outils et méthodologies, je vise l'excellence en programmation et un design percutant.",
      bio2: "Je donne la priorité à l'écriture d'un code propre et maintenable, et à la construction d'architectures évolutives. Avec une excellente maîtrise de l'IA et des Grands Modèles de Langage (LLMs), j'intègre des capacités d'Intelligence Artificielle de pointe dans des expériences utilisateur fluides. Quand je ne configure pas de serveurs ou ne conçois pas de schémas de base de données, je suis obsédé par les micro-interactions qui rendent une interface vivante."
    },
    skills: {
      title: 'Arsenal Technique',
      subtitle: "Technologies, frameworks et outils que j'utilise fréquemment pour construire une architecture numérique.",
      frontend: 'Front-end',
      backend: 'Back-end',
      tools: 'Outils & DevOps',
      ai: 'IA & LLMs',
    },
    projects: {
      title: 'Œuvres Sélectionnées',
      archive: 'Archives du Portfolio',
      viewProject: 'Voir le Projet \u2192',
      githubRepo: 'Dépôt GitHub',
      items: [
        {
          title: "Tableau de Bord E-Commerce",
          description: "Un tableau de bord complet pour gérer les produits, consulter les analyses et suivre les commandes en temps réel. Comprend un mode sombre, des tableaux de données responsives et des graphiques interactifs."
        },
        {
          title: "Sunny Glow",
          description: "Une plateforme e-commerce pour une marque de soins naturels algérienne, proposant des vitrines de produits, des packs personnalisés et une expérience numérique fluide."
        },
        {
          title: "Légendes Animées",
          description: "Un explorateur immersif de League of Legends comprenant des fiches de champions interactives, le lore, une galerie de skins et des répliques audio synchronisées avec l'API officielle du jeu."
        }
      ]
    },
    contact: {
      location: 'Basé à Londres, R-U',
      title: "Prenons Contact",
      description: "Disponible pour de nouvelles opportunités. Que vous ayez un projet en tête ou que vous souhaitiez simplement dire bonjour, ma boîte de réception est toujours ouverte.",
      cta: 'Initier le Contact \u2192'
    },
    footer: {
      getInTouch: 'Entrer en Contact'
    }
  }
};
