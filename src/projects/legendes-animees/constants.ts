export const PROJECTS = [
  {
    id: 1,
    slug: "chrono-break-ekko",
    title: "Vrai Dégât : Ekko",
    category: "Temporal / Urban",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_19.jpg",
    description: "La résonance temporelle à travers la lentille du hip-hop futuriste.",
    year: "2019",
    location: "Zaun, Underground",
    longDescription: "Un portrait de la disruption. Dans cette Planche, nous explorons l'esthétique 'True Damage' d'Ekko. Sa tenue fusionne la technologie Hextech avec le streetwear de Zaun, créant une silhouette qui défie le temps lui-même. C'est une étude sur le rythme, la vitesse et l'héritage d'un génie des rues.",
    specs: [
      { label: "Skin", value: "True Damage" },
      { label: "Arme", value: "Chrono-Clé" },
      { label: "Vibe", value: "Cyber-Punk / Street" }
    ],
    biography: "Né dans les quartiers les plus rudes de Zaun, Ekko a manifesté un génie précoce dès son enfance. Contrairement à d'autres esprits brillants qui cherchaient à s'échapper vers Piltover, il a choisi de rester pour protéger ses amis. C'est en explorant les ruines de sa ville qu'il a découvert un fragment d'énergie Hextech instable, qu'il a utilisé pour construire le 'Zero Drive', une machine capable de manipuler le temps sur de courtes durées.",
    battles: "Il a mené d'innombrables escarmouches contre les Barons de la Chimie, sabotant les usines de Singed et protégeant les laissés-pour-compte de Zaun. Son combat le plus emblématique reste sa confrontation sur le pont contre les enforcers de Piltover, où il a utilisé son don pour réécrire l'issue d'une bataille perdue d'avance.",
    allSkins: ["Classique", "Tempête de Sable", "Académie", "PROJET", "SKT T1", "True Damage", "Pulsefire", "Feu Follet", "Star Guardian", "Breakout"],
    quote: "Le temps ne guérit pas toutes les blessures. Certaines finissent par devenir une partie de vous.",
    voice: "Puck",
    cinematicUrl: "https://www.youtube.com/embed/0ngeSfH6SNs",
    region: "Zaun",    stats: { attack: 8, defense: 3, magic: 7, difficulty: 8 },
    abilities: [
      { name: "Résonance", description: "Le Drive d'Ekko charge ses sorts et ses attaques d'énergie temporelle.", icon: "zap" },
      { name: "Rétrogression", description: "Ekko lance un dispositif qui crée un champ de distorsion temporelle.", icon: "brain" },
      { name: "Convergence Parallèle", description: "Ekko sépare la réalité, créant une anomalie qui ralentit les ennemis.", icon: "shield" },
      { name: "Chronobreak", description: "Ekko remonte le temps, retournant à un moment où il était plus en sécurité.", icon: "zap" }
    ],
    theme: { bg: "#0A0510", accent: "#00FFFF", secondary: "#9333EA" }
  },
  {
    id: 2,
    slug: "art-meurtrier-jhin",
    title: "Cosmos Noir : Jhin",
    category: "Performance / Celestial",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_5.jpg",
    description: "Le carnage transformé en une symphonie galactique de quatre temps.",
    year: "2019",
    location: "Event Horizon",
    longDescription: "Pour Jhin, le monde est une scène, et l'univers tout entier est sa toile. Cette étude du 'Dark Cosmic Jhin' examine la perfection dans la destruction. Son masque n'est plus une simple porcelaine, mais une nébuleuse condensée. Chaque tir est une étoile qui s'éteint, chaque mouvement est une chorégraphie du vide.",
    specs: [
      { label: "Skin", value: "Dark Cosmic" },
      { label: "Nombre", value: "Quatre" },
      { label: "Matière", value: "Poussière d'Étoile" }
    ],
    biography: "Khada Jhin était autrefois un simple technicien de scène à Ionia, mais une folie meurtrière a transformé son obsession pour l'art en une série d'exécutions théâtrales. Capturé par l'Ordre de Kinkou, il a été libéré par des éléments radicaux du conseil ionien pour servir d'assassin politique. Son passage dans le vide galactique (sous sa forme Cosmos Noir) a élevé son art à une échelle divine, où chaque mort est une supernova.",
    battles: "Jhin a orchestré le massacre des membres du clan de Shen et a terrorisé les provinces d'Ionia pendant des années. Sous sa forme cosmique, il a détruit des systèmes solaires entiers pour sculpter des nébuleuses de souffrance, considérant les dieux et les mortels comme de simples figurants dans son opus magnum.",
    allSkins: ["Classique", "High Noon", "SKT T1", "Blood Moon", "Cosmos Noir", "Shan Hai Scrolls", "Empyrean"],
    quote: "L'art demande une certaine... cruauté. Prêt pour votre scène finale ?",
    voice: "Zephyr",
    region: "Ionia",
    stats: { attack: 10, defense: 2, magic: 6, difficulty: 6 },
    abilities: [
      { name: "Murmure", description: "Le canon de Jhin est un instrument de précision, tirant quatre coups mortels.", icon: "sword" },
      { name: "Grenade Dansante", description: "Jhin lance une cartouche magique qui rebondit sur les ennemis.", icon: "zap" },
      { name: "Floraison Mortelle", description: "Un tir à longue portée qui immobilise les cibles marquées.", icon: "brain" },
      { name: "Rappel de Rideau", description: "Jhin installe son arme pour quatre tirs dévastateurs à l'échelle céleste.", icon: "sword" }
    ],
    theme: { bg: "#04040A", accent: "#7B61FF", secondary: "#FFD700" },
    cinematicUrl: "https://www.youtube.com/embed/zF5Ddo9JdpY"
  },
  {
    id: 3,
    slug: "ahri-spirit-blossom",
    title: "Fleur Spirituelle : Ahri",
    category: "Nature / Ethereal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg",
    description: "Le passage délicat entre le monde des mortels et l'au-delà.",
    year: "2020",
    location: "Ionia, Garden of Memory",
    longDescription: "Ahri, sous sa forme de Fleur Spirituelle, agit comme une guide pour les âmes. Cette Planche analyse la fluidité de ses neuf queues de renard, traitées ici comme des rubans d'énergie magique. L'architecture de son design repose sur des courbes organiques et une palette de couleurs printanières, évoquant la renaissance et la nostalgie.",
    specs: [
      { label: "Skin", value: "Spirit Blossom" },
      { label: "Rôle", value: "Guide des Ames" },
      { label: "Esthétique", value: "Ionian Dream" }
    ],
    biography: "Renarde à neuf queues issue des vastayashai'rei, Ahri a longtemps erré en absorbant l'essence vitale des mortels pour ressentir leur humanité. Ce n'est qu'après avoir rejoint le Festival de la Fleur Spirituelle qu'elle a trouvé son but en tant que guide pour les égarés. Son histoire commence dans les forêts reculées d'Ionia, une quête de rédemption pour les vies qu'elle a autrefois dévorées.",
    battles: "Elle a survécu aux invasions noxiennes en protégeant les jardins sacrés et a affronté ses propres démons intérieurs dans le royaume des esprits. Son plus grand combat est celui de la maîtrise de soi, transformant sa soif de prédateur en une lumière protectrice.",
    allSkins: ["Classique", "Dynasty", "Midnight", "Popstar", "Challenger", "Arcade", "Star Guardian", "K/DA", "Spirit Blossom", "Coven", "Snow Moon"],
    quote: "On m'appelle la Renarde, mais c'est moi qui mène la danse. Voulez-vous jouer ?",
    voice: "Kore",
    region: "Ionia",
    stats: { attack: 3, defense: 4, magic: 9, difficulty: 5 },
    abilities: [
      { name: "Grâce d'Essence", description: "Ahri gagne de la puissance en dévorant l'essence de ses ennemis.", icon: "sparkles" },
      { name: "Orbe d'Illusion", description: "Ahri lance son orbe qui inflige des dégâts à l'aller comme au retour.", icon: "zap" },
      { name: "Charme", description: "Un baiser qui attire irrésistiblement l'ennemi vers Ahri.", icon: "brain" },
      { name: "Assaut Spirituel", description: "Ahri fonce avec agilité, lançant des éclairs d'énergie spirituelle.", icon: "zap" }
    ],
    theme: { bg: "#0F1A2B", accent: "#FFB7C5", secondary: "#6495ED" }
  },
  {
    id: 4,
    slug: "zed-galaxy-slayer",
    title: "Zed exterminateur",
    category: "Precision / Cosmic",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_15.jpg",
    description: "La lame des ombres consommée par l'énergie des naines blanches.",
    year: "2019",
    location: "Ora Core",
    longDescription: "Une transformation brutale. Zed Exterminateur Galactique est l'apex du prédateur cosmique. Ses lames ne sont plus d'acier, mais de pure énergie Ora. La Planche se concentre sur la structure biomécanique de son armure, qui semble fusionner avec les ombres stellaires pour créer un prédateur à l'échelle galactique.",
    specs: [
      { label: "Skin", value: "Galaxy Slayer" },
      { label: "Source", value: "Ora" },
      { label: "Danger", value: "Surcharge Stellaire" }
    ],
    biography: "Autrefois membre de l'Ordre Kinkou, Zed a rejeté les enseignements de l'équilibre pour embrasser les ombres interdites. En ouvrant la boîte scellée, il a sacrifié son humanité pour la puissance nécessaire afin de protéger Ionia par la force. Sous sa forme d'Exterminateur Galactique, il a absorbé l'Ora, une substance cosmique, devenant un demi-dieu biomécanique dévoué à la purification de l'univers.",
    battles: "Il a assassiné son maître Kusho (ou l'a laissé mourir selon les versions) et a pris le contrôle de l'Ordre des Ombres. Ses combats contre Shen et les envahisseurs de Noxus sont légendaires, marquant le passage de l'honneur guerrier à la suprématie de l'ombre.",
    allSkins: ["Classique", "Shockblade", "SKT T1", "PROJET", "Championship", "Galaxy Slayer", "PsyOps", "Debonair"],
    quote: "L'ombre m'a tout appris. La mort est un art, et je suis le maître.",
    voice: "Zephyr",
    region: "Ionia",
    stats: { attack: 9, defense: 2, magic: 1, difficulty: 7 },
    abilities: [
      { name: "Mépris des Faibles", description: "Zed inflige des dégâts supplémentaires aux cibles affaiblies.", icon: "sword" },
      { name: "Shuriken Rasoir", description: "Zed et ses ombres lancent des shurikens tranchants.", icon: "zap" },
      { name: "Ombre Vivante", description: "Zed projette une ombre qui imite ses attaques.", icon: "brain" },
      { name: "Marque de la Mort", description: "Zed plonge dans l'ombre pour marquer une cible pour une exécution.", icon: "sword" }
    ],
    theme: { bg: "#0A0A1F", accent: "#FFD700", secondary: "#4169E1" }
  },
  {
    id: 5,
    slug: "lux-elementalist",
    title: "Lux Elémentaliste",
    category: "Light / Spectrum",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
    description: "Le prisme infini de la magie de lumière.",
    year: "2016",
    location: "Demacia, Sanctum",
    longDescription: "Lux dans sa forme d'Élémentaliste est la manifestation pure de la polyvalence magique. Cette étude se concentre sur la 'Forme Lumière', la base de toute transformation. Son design incarne la pureté géométrique et la clarté, servant de prisme à travers lequel toutes les autres forces de la nature peuvent être canalisées.",
    specs: [
      { label: "Skin", value: "Elementalist" },
      { label: "Type", value: "Evolution" },
      { label: "Puissance", value: "Prismatique" }
    ],
    biography: "Fille de la noble maison Crownguard de Demacia, Luxanna est née avec des capacités magiques dans un royaume qui les craint. Cachant ses dons pour préserver l'honneur de sa famille, elle a finalement embrassé sa nature de porteuse de lumière pour sauver son peuple. En tant qu'Élémentaliste, elle explore le spectre complet de la création, du feu à l'obscurité.",
    battles: "Elle a joué un rôle crucial dans la défense de Demacia contre les attaques de Sylas et ses mages rebelles. Ses combats l'ont menée des donjons de la capitale aux confins du monde, où elle utilise son éclat pour dissiper les ténèbres les plus impénétrables.",
    allSkins: ["Classique", "Sorceress", "Steel Legion", "Star Guardian", "Elementalist", "Lunar Empress", "Pajama Guardian", "Dark Cosmic", "Space Groove", "Empyrean"],
    quote: "La lumière est en chacun de nous. Il suffit de savoir comment la libérer.",
    voice: "Kore",
    region: "Demacia",
    stats: { attack: 2, defense: 4, magic: 9, difficulty: 5 },
    abilities: [
      { name: "Illumination", description: "Les sorts de Lux marquent les ennemis pour une explosion de lumière.", icon: "sparkles" },
      { name: "Entrave de Lumière", description: "Lux emprisonne ses ennemis dans une cage de lumière pure.", icon: "brain" },
      { name: "Barrière Prismatique", description: "Lux lance son bâton pour protéger ses alliés avec un prisme.", icon: "shield" },
      { name: "Éclat Final", description: "Un immense rayon de lumière qui traverse tout le champ de bataille.", icon: "zap" }
    ],
    theme: { bg: "#0F0F1A", accent: "#FFFFFF", secondary: "#E0F2FE" }
  },
  {
    id: 6,
    slug: "volibear-storm-dragon",
    title: "Volibear tempête",
    category: "Storm / Primal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_9.jpg",
    description: "La foudre du Freljord réincarnée dans un dragon de tempête.",
    year: "2020",
    location: "Iron Spike Mountains",
    longDescription: "Le Dieu de l'Orage, Volibear, sous sa forme de Dragon de Tempête, est une force de la nature indomptable. La Planche analyse la massivité de sa musculature combinée à l'énergie éthérée des nuages de foudre. Chaque mouvement est une décharge électrique, chaque rugissement est un tonnerre qui fait trembler les fondations du monde.",
    specs: [
      { label: "Skin", value: "Storm Dragon" },
      { label: "Elément", value: "Foudre Aeternum" },
      { label: "Statut", value: "Ancien" }
    ],
    biography: "Le Valhir, connu sous le nom de Volibear, est l'un des demi-dieux primordiaux du Freljord, représentant la tempête indomptable et la fureur de la guerre. Né avant l'aube de l'humanité, il a vu les civilisations naître et mourir. Son histoire est celle d'un combat constant pour restaurer les anciennes coutumes sauvages de son pays, rejetant les structures de glace des Trois Sœurs au profit de la puissance brute de la foudre.",
    battles: "Il a mené les Ursins lors du massacre de la tribu de l'Hearth-Blood et a affronté son frère Ornn dans un duel dévastateur qui a changé la topographie du Freljord. Sous sa forme de Dragon de Tempête, il a purifié les montagnes Iron Spike de la contamination du Néant.",
    allSkins: ["Classique", "Thunder Lord", "Northern Storm", "Runeguard", "Captain", "El Rayo", "Storm Dragon", "Duality Dragon", "Inkshadow"],
    quote: "Le tonnerre ne demande pas pardon. Je suis la tempête, et je ne m'arrêterai jamais.",
    voice: "Fenrir",
    region: "Freljord",
    stats: { attack: 8, defense: 9, magic: 4, difficulty: 3 },
    abilities: [
      { name: "Tempête Immortelle", description: "Volibear gagne de la vitesse d'attaque en frappant ses ennemis à plusieurs reprises.", icon: "zap" },
      { name: "Coup de Tonnerre", description: "Il fonce sur un ennemi pour l'étourdir violemment avec ses griffes.", icon: "zap" },
      { name: "Folie Meurtrière", description: "Il mord frénétiquement ses ennemis pour infliger de lourds dégâts et se soigner.", icon: "sword" },
      { name: "Grand Saut", description: "Il bondit dans les airs et s'écrase au sol, neutralisant les tours et ralentissant tout le monde.", icon: "zap" }
    ],
    theme: { bg: "#080B14", accent: "#818CF8", secondary: "#312E81" }
  },
  {
    id: 7,
    slug: "senna-high-noon",
    title: "Senna Far West",
    category: "Infernal / Gothic",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_10.jpg",
    description: "La rédemption sous le soleil de plomb d'un enfer poussiéreux.",
    year: "2020",
    location: "Infernal Desert",
    longDescription: "Senna High Noon est une vision gothique du Far West. Son canon de lumière est devenu une arme démoniaque changeante, capable de se transformer en un destrier de cauchemar. La Planche explore le contraste entre le cuir usé par la poussière et les flammes sacrées qui émanent de son âme tourmentée.",
    specs: [
      { label: "Skin", value: "High Noon" },
      { label: "Monture", value: "Ombre de l'Ouest" },
      { label: "Arsenal", value: "Canon Relique" }
    ],
    biography: "Fille de sentinelles, Senna a été maudite dès sa naissance par la Brume Noire. Après avoir été emprisonnée dans la lanterne de Thresh pendant des années, elle a appris à utiliser les ténèbres mêmes qui l'avaient captive pour en faire sa force. Elle est revenue à la vie en tant qu'entité unique, ni tout à fait spectre, ni tout à fait humaine, luttant pour libérer les âmes captives. En tant qu'ange de l'enfer dans le Far West, elle apporte une justice infernale.",
    battles: "Elle a survécu à l'emprisonnement éternel et a joué un rôle clé lors de l'événement de la Ruine, affrontant Viego aux côtés de son mari Lucian. Son combat actuel est une quête incessante pour purifier le monde de la corruption de l'ombre en utilisant son canon relique massif.",
    allSkins: ["Classique", "True Damage", "High Noon", "PROJECT", "Lunar Eclipse", "Bewitching", "Winterblessed"],
    quote: "Même dans les ténèbres les plus profondes, la lumière trouve toujours un chemin pour briller.",
    voice: "Kore",
    region: "Shadow Isles",
    stats: { attack: 7, defense: 2, magic: 6, difficulty: 7 },
    abilities: [
      { name: "Absolution", description: "Elle récolte des âmes pour augmenter sa portée, ses dégâts et ses chances de critique.", icon: "sparkles" },
      { name: "Ombre Perçante", description: "Un tir massif qui blesse les ennemis et soigne ses alliés simultanément.", icon: "zap" },
      { name: "Dernière Étreinte", description: "Elle lance une racine de brume qui immobilise les ennemis après un court délai.", icon: "brain" },
      { name: "Ténèbres Absolues", description: "Un rayon global qui offre un bouclier aux alliés et inflige des dégâts au centre.", icon: "shield" }
    ],
    theme: { bg: "#1A0B05", accent: "#F97316", secondary: "#451A03" }
  },
  {
    id: 8,
    slug: "kaisa-kda",
    title: "Kai'Sa K/DA",
    category: "Pop / Technical",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_15.jpg",
    description: "L'évolution de la survivante du Néant en icône de la pop mondiale.",
    year: "2018",
    location: "Seoul / Pop Stage",
    longDescription: "Kai'Sa K/DA ALL OUT représente la fusion parfaite entre l'esthétique du Néant et le glamour de la haute couture. Ses propulseurs, autrefois des armes biologiques terrifiantes, sont ici des cristaux facettés qui projettent des lumières de scène. Une étude sur la réinvention et la performance.",
    specs: [
      { label: "Skin", value: "K/DA ALL OUT" },
      { label: "Style", value: "Holographique" },
      { label: "Signature", value: "Drum Go Dum" }
    ],
    biography: "Fille perdue des sables de Shurima, Kai'Sa a été aspirée dans le Néant à un jeune âge. Pour survivre, elle a dû fusionner avec une créature symbiotique qui est devenue sa seconde peau. Son histoire est celle d'une lutte solitaire contre des horreurs inimaginables pour protéger le monde qui l'a oubliée. Sous les projecteurs de K/DA, elle a appris à transformer sa volonté de vivre en une performance artistique électrisante.",
    battles: "Elle a passé dix ans dans les tunnels du Néant, chassant des prédateurs qui auraient détruit des armées entières. Elle a émergé pour aider Taliyah et d'autres héros à repousser les incursions du Néant sur Shurima, utilisant ses salves de plasma pour désintégrer les menaces.",
    allSkins: ["Classique", "Bullet Angel", "K/DA", "Arcade", "IG", "Dragon Soul", "Star Guardian", "Lagoon Dragon", "Inkshadow"],
    quote: "Je me suis adaptée. J'ai survécu. Maintenant, c'est à eux d'avoir peur.",
    voice: "Kore",
    region: "Void",
    stats: { attack: 9, defense: 3, magic: 5, difficulty: 6 },
    abilities: [
      { name: "Seconde Peau", description: "Elle évolue et améliore ses compétences en fonction de ses statistiques de combat.", icon: "brain" },
      { name: "Pluie d'Icathia", description: "Lance une salve de missiles qui s'abattent sur les ennemis à proximité.", icon: "zap" },
      { name: "Rayon du Néant", description: "Un tir de plasma à très longue portée qui révèle et marque les ennemis.", icon: "zap" },
      { name: "Instinct Meurtrier", description: "Elle se précipite vers un ennemi marqué, gagnant un bouclier colossal pour le combat.", icon: "shield" }
    ],
    theme: { bg: "#0F0F1A", accent: "#C084FC", secondary: "#1E1B4B" },
    cinematicUrl: "https://www.youtube.com/embed/UOxkGD8qRB4"
  },
  {
    id: 9,
    slug: "kindred-spirit-blossom",
    title: "Les Kindred : Fleur",
    category: "Duality / Ethereal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_5.jpg",
    description: "L'agneau et le loup dans une danse éternelle sous les cerisiers.",
    year: "2020",
    location: "Ionia, Spirit Realm",
    longDescription: "Cette Planche explore la dualité des Kindred réinterprétée à travers le folklore d'Ionia. L'Agneau, une enfant espiègle mais solennelle, et le Loup, un esprit de tempête noir, représentent les deux faces de la mort. L'architecture de leur design repose sur le contraste entre la porcelaine blanche et l'ombre d'encre.",
    specs: [
      { label: "Skin", value: "Spirit Blossom" },
      { label: "Masque", value: "Bois Sacré" },
      { label: "Arc", value: "Éclat Lunaire" }
    ],
    biography: "Les Kindred sont les incarnations de la mort dans tout Runeterra. L'Agneau offre une fin paisible à ceux qui acceptent leur destin, tandis que le Loup chasse violemment ceux qui le fuient. Ils sont apparus lorsque le 'Premier Homme' s'est scindé en deux pour ne plus jamais être seul. Dans le folklore d'Ionia, ils prennent la forme d'esprits liés au cycle de la renaissance et du souvenir.",
    battles: "Leurs combats ne sont pas contre des nations, mais contre l'existence même de ceux qui tentent de tricher avec la mort. Ils ont traqué des milliers d'âmes, des rois de Demacia aux mages d'Ixtal, s'assurant que personne n'échappe à la rencontre finale sous les cerisiers ou dans les ombres.",
    allSkins: ["Classique", "Shadowfire", "Super Galaxy", "Spirit Blossom", "Porcelain", "DRX", "Soul Fighter"],
    quote: "L'agneau et le loup. Deux facettes d'un même souffle. La fin est déjà là.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 2, magic: 2, difficulty: 4 },
    abilities: [
      { name: "Marque des Kindred", description: "L'Agneau et le Loup marquent des cibles pour gagner de la puissance à leur mort.", icon: "brain" },
      { name: "Danse de Flèches", description: "L'Agneau bondit dans une direction et tire sur trois ennemis proches.", icon: "zap" },
      { name: "Frénésie de Loup", description: "Le Loup prend possession d'une zone et attaque les ennemis à l'intérieur.", icon: "sword" },
      { name: "Repos d'Agneau", description: "Crée une zone sacrée où la vie ne peut descendre en dessous d'un certain seuil.", icon: "shield" }
    ],
    theme: { bg: "#0D1117", accent: "#BB86FC", secondary: "#03DAC6" }
  },
  {
    id: 10,
    slug: "yasuo-nightbringer",
    title: "Yasuo Nightbringer",
    category: "Chaos / Infernal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_9.jpg",
    description: "L'incarnation du chaos pur et de la fureur des ombres.",
    year: "2017",
    location: "Primordial Chaos",
    longDescription: "Yasuo héraut de la nuit est une force de destruction brute. Son épée est une lame de magma solidifié, et son corps est parcouru par les énergies d'un univers en fin de cycle. Cette étude se concentre sur l'agressivité de ses formes et la chaleur intense qui semble émaner des fissures de son armure.",
    specs: [
      { label: "Skin", value: "Nightbringer" },
      { label: "Arme", value: "Lame de l'Apocalypse" },
      { label: "Vibe", value: "Brutalisme Infernal" }
    ],
    biography: "Accusé à tort de l'assassinat de l'aîné qu'il devait protéger, Yasuo a été contraint de tuer son propre frère, Yone, en légitime défense. Errant à travers Runeterra comme un banni, il cherche la vérité et la rédemption. Sous sa forme de Héraut de la Nuit, il devient l'incarnation du chaos primordial, né du conflit entre l'ordre et l'anarchie au début des temps.",
    battles: "Il a affronté des armées noxiennes en solo et a survécu à des dizaines de chasseurs de primes. Son combat le plus personnel fut son duel contre Yone, mais sa quête l'a aussi mené à Billgewater et dans les terres du sud, où sa lame de vent ne laisse que le silence après la tempête.",
    allSkins: ["Classique", "High Noon", "PROJECT", "Blood Moon", "Nightbringer", "Odyssey", "True Damage", "Spirit Blossom", "Inkshadow", "Forethinker"],
    quote: "L'honneur est une brume. Seul le vent reste fidèle après la bataille.",
    voice: "Zephyr",
    region: "Ionia",
    stats: { attack: 8, defense: 4, magic: 2, difficulty: 10 },
    abilities: [
      { name: "Voie du Vagabond", description: "Sa volonté génère un bouclier et ses chances de coup critique sont doublées.", icon: "shield" },
      { name: "Tempête d'Acier", description: "Il frappe devant lui, créant une tornade déchaînée au troisième coup réussi.", icon: "sword" },
      { name: "Mur de Vent", description: "Il crée un mur de vent qui bloque tous les projectiles ennemis pendant quelques secondes.", icon: "shield" },
      { name: "Dernier Soupir", description: "Il bondit sur un ennemi en l'air et le maintient pour lui infliger une série de coups fatals.", icon: "sword" }
    ],
    theme: { bg: "#0F0505", accent: "#EF4444", secondary: "#450A0A" }
  },
  {
    id: 11,
    slug: "mordekaiser-project",
    title: "Mordekaiser Projet",
    category: "Cybernetic / Digital",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_13.jpg",
    description: "L'ancien tyran réincarné sous forme de virus informatique colossal.",
    year: "2021",
    location: "Mainframe City",
    longDescription: "Mordekaiser PROJET est une anomalie numérique. Son armure n'est pas faite de métal, mais de code crypté et de pixels de haute densité. La Planche analyse comment sa masse physique est maintenue par des champs magnétiques, créant un colosse capable de bannir ses ennemis dans un royaume de données corrompues.",
    specs: [
      { label: "Skin", value: "PROJECT" },
      { label: "Masse", value: "Creuset Numérique" },
      { label: "Domaine", value: "Le Bug" }
    ],
    biography: "Sahn-Uzal était un conquérant brutal qui, après sa mort, a découvert que le royaume des morts était un vide silencieux. Refusant de disparaître, il a utilisé la nécromancie pour forger son âme dans une armure d'acier indestructible. Il est devenu Mordekaiser, le Revenant de Fer, bâtissant son propre royaume, Mitna Rachnun, à partir des âmes de ceux qu'il a conquis. Dans l'univers PROJET, il est une IA renégate qui cherche à assimiler toute conscience biologique.",
    battles: "Il a conquis le Bastion Immortel par deux fois, régnant sur Noxus avant même que la nation ne porte ce nom. Son combat éternel est contre l'oubli, et il prépare son retour pour transformer le monde des vivants en un mausolée de fer.",
    allSkins: ["Classique", "Dragon Knight", "Infernal", "Lord", "Pentakill", "King of Clubs", "Dark Star", "PROJECT", "High Noon", "Old God"],
    quote: "Le destin est un mensonge. Je suis le maître de mon propre royaume éternel.",
    voice: "Charon",
    region: "Noxus (Ancien)",
    stats: { attack: 4, defense: 8, magic: 9, difficulty: 4 },
    abilities: [
      { name: "Obscurité Naissante", description: "Il s'entoure d'un vortex de mort infligeant des dégâts continus après avoir frappé trois fois.", icon: "zap" },
      { name: "Oblitération", description: "Il abat sa masse, Nightfall, sur le sol pour infliger d'énormes dégâts de zone.", icon: "sword" },
      { name: "Emprise Funeste", description: "Il utilise une griffe spectrale pour attirer les ennemis vers son emprise d'acier.", icon: "brain" },
      { name: "Royaume des Morts", description: "Il bannit une cible dans une dimension parallèle pour un duel à mort dont seul il sortira vainqueur.", icon: "brain" }
    ],
    theme: { bg: "#0F0F0F", accent: "#FF0000", secondary: "#27272A" }
  },
  {
    id: 12,
    slug: "diana-winterblessed",
    title: "Diana Elue de l'Hiver",
    category: "Frost / Divine",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_47.jpg",
    description: "La lune argentée régnant sur un royaume de glace éternelle.",
    year: "2022",
    location: "Auroral Lands",
    longDescription: "Diana sous sa forme d'Élue de l'Hiver est une vision de pureté glaciale. Son design est inspiré par les aurores boréales et les formations de givre parfaites. Cette Planche examine la complexité de sa robe de verre et l'esthétique transcendante de sa lame en croissant, forgée dans le cœur d'une comète.",
    specs: [
      { label: "Skin", value: "Winterblessed" },
      { label: "Aura", value: "Boréale" },
      { label: "Lame", value: "Zéro Absolu" }
    ],
    biography: "Née parmi les Solaris du Mont Targon, Diana a toujours ressenti un appel vers la lumière de la lune, une hérésie pour son peuple. Après avoir découvert un temple caché et une armure antique, elle est devenue l'incarnation de la Lune d'Argent. Persécutée par sa propre foi, elle cherche à rétablir l'équilibre entre le soleil et la lune. Sous sa forme d'Élue de l'Hiver, elle protège les terres sauvages du nord sous un ciel boréal.",
    battles: "Elle a combattu les anciens du temple Solari pour sa survie et a affronté Leona, le point culminant de leur amour et de leur haine. Ses batailles l'ont menée à travers les sommets de Targon et dans les forêts de givre, où elle utilise sa lame en croissant pour trancher l'ignorance.",
    allSkins: ["Classique", "Dark Valykrie", "Lunar Goddess", "Blood Moon", "Dragonslayer", "Sentinel", "Winterblessed", "Firecracker"],
    quote: "La lune ne demande pas l'autorisation de briller. Sa froideur est ma vérité.",
    voice: "Kore",
    region: "Targon",
    stats: { attack: 7, defense: 6, magic: 8, difficulty: 4 },
    abilities: [
      { name: "Lame Sélène", description: "Toutes les trois attaques, elle libère une onde de choc lunaire infligeant des dégâts de zone.", icon: "sword" },
      { name: "Croissant Lunaire", description: "Elle projette un arc d'énergie lunaire qui marque les ennemis pour une exécution future.", icon: "zap" },
      { name: "Cascade Pâle", description: "Trois sphères de lumière orbitent autour d'elle, offrant un bouclier et explosant au contact.", icon: "shield" },
      { name: "Attraction Lunaire", description: "Elle attire tous les ennemis proches vers elle avant de les écraser avec une puissance céleste.", icon: "brain" }
    ],
    theme: { bg: "#0F1A2A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 13,
    slug: "samira-soul-fighter",
    title: "Samira Soul Fighter",
    category: "Action / Stylized",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_38.jpg",
    description: "Le style flamboyant d'un tournoi d'âmes électrisant.",
    year: "2023",
    location: "Tournament of Souls",
    longDescription: "Samira Soul Fighter est l'apogée du style et de l'adrénaline. Son design utilise des techniques de cel-shading pour créer un effet de bande dessinée vivante. La Planche se concentre sur l'énergie cinétique de ses poses et l'explosion de couleurs qui accompagne chacun de ses tirs et de ses coups d'épée.",
    specs: [
      { label: "Skin", value: "Soul Fighter" },
      { label: "Arme", value: "Double Déclic" },
      { label: "Style", value: "Impérial" }
    ],
    biography: "Samira a fui son foyer en Shurima à un jeune âge pour rejoindre l'armée noxienne. Toujours en quête de sensations fortes, elle est devenue une mercenaire d'élite connue pour ses cascades impossibles et ses exécutions stylisées. Pour elle, chaque mission est un jeu de hasard et une occasion de briller. Dans le Tournoi des Âmes, elle a atteint le sommet en combinant ses épées et ses pistolets dans une danse mortelle de pure adrénaline.",
    battles: "Elle a survécu à des missions suicides dans les déserts de Shurima et a infiltré les bastions les plus protégés de Runeterra. Sa victoire dans le Tournoi des Âmes contre des combattants légendaires a cimenté son statut de guerrière la plus audacieuse de Noxus.",
    allSkins: ["Classique", "PsyOps", "Space Groove", "High Noon", "Soul Fighter"],
    quote: "La sécurité est une illusion. La prise de risque est la seule façon de se sentir vivant.",
    voice: "Puck",
    region: "Noxus",
    stats: { attack: 10, defense: 3, magic: 1, difficulty: 6 },
    abilities: [
      { name: "Élan Téméraire", description: "Elle gagne du style en enchaînant des attaques uniques, débloquant son ultime au rang S.", icon: "sparkles" },
      { name: "Tourbillon de Lames", description: "Elle tranche les projectiles ennemis avec son épée, se protégeant des attaques à distance.", icon: "shield" },
      { name: "Charge Sauvage", description: "Elle traverse ses ennemis avec une agilité déconcertante, réinitialisant son dash après un kill.", icon: "zap" },
      { name: "Gâchette Infernale", description: "Elle libère un enfer de balles tout autour d'elle, dévastant tout ce qui bouge.", icon: "sword" }
    ],
    theme: { bg: "#0D0D1F", accent: "#EC4899", secondary: "#312E81" }
  },
  {
    id: 14,
    slug: "yone-spirit-blossom",
    title: "Yone : Fleur",
    category: "Duality / Spiritual",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_1.jpg",
    description: "L'errance d'un demi-esprit entre l'honneur et le démon.",
    year: "2020",
    location: "Ionia, Shore of Echoes",
    longDescription: "Yone Fleur Spirituelle capture le moment de paix avant la tempête. Contrairement à sa forme de base tourmentée, ce design suggère une élégance presque mélancolique. La Planche analyse ses deux épées—l'une forgée par les hommes, l'autre par les démons—et comment elles s'harmonisent dans une silhouette de prêtre-guerrier.",
    specs: [
      { label: "Skin", value: "Spirit Blossom" },
      { label: "Lames", value: "Azakana & Acier" },
      { label: "Vibe", value: "Sérénité Tranchante" }
    ],
    biography: "Frère aîné de Yasuo, Yone était un modèle de discipline et de vertu. Après sa mort des mains de son frère, il s'est retrouvé dans le royaume des esprits, où il a été attaqué par un Azakana—un démon qui se nourrit d'émotions négatives. Yone a vaincu le démon mais est resté lié à lui, revenant dans le monde des vivants pour chasser ses semblables. Sous les cerisiers en fleurs, il est l'esprit qui cherche à corriger ses erreurs passées.",
    battles: "Outre son duel tragique contre Yasuo, Yone a affronté d'innombrables Azakanas d'Ionia, scellant leurs noms et leurs pouvoirs dans des masques de pierre. Sa quête est une chasse éternelle pour débarrasser les vivants de l'influence malveillante des esprits sombres.",
    allSkins: ["Classique", "Spirit Blossom", "Battle Academia", "Ocean Song", "Inkshadow", "PEACEMAKER"],
    quote: "Un grain de poussière dans l'œil d'un démon. Je suis celui qui traque les ombres.",
    voice: "Zephyr",
    region: "Ionia",
    stats: { attack: 8, defense: 4, magic: 2, difficulty: 8 },
    abilities: [
      { name: "Voie du Chasseur", description: "Il utilise alternativement ses deux lames, infligeant des dégâts hybrides.", icon: "sword" },
      { name: "Acier Mortel", description: "Un coup d'estoc puissant qui lui permet de s'envoler vers l'avant après deux coups réussis.", icon: "zap" },
      { name: "Fendoir Spirituel", description: "Un coup dévastateur en arc qui inflige des dégâts basés sur la santé maximale.", icon: "sword" },
      { name: "Libération Spirituelle", description: "Il quitte son corps physique pour attaquer sous forme d'esprit avant d'y revenir violemment.", icon: "brain" }
    ],
    theme: { bg: "#0F172A", accent: "#A5B4FC", secondary: "#4338CA" }
  },
  {
    id: 15,
    slug: "swain-dragon-master",
    title: "Swain Maître",
    category: "Draconic / Gothic",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_11.jpg",
    description: "Le grand général transformé en patriarche d'une lignée de dragons anciens.",
    year: "2018",
    location: "Dragon Citadel",
    longDescription: "Swain Maître des Dragons est une étude de la royauté draconique. Son manteau, traditionnellement fait de plumes de corbeau, est ici un assemblage d'écailles sombres qui palpitent de magie de feu. La Planche explore sa transformation en dragon colossal, symbolisant la puissance absolue et la domination stratégique.",
    specs: [
      { label: "Skin", value: "Dragon Master" },
      { label: "Pouvoir", value: "Feu Draconique" },
      { label: "Statut", value: "Général de Givre" }
    ],
    biography: "Jéricho Swain était un aristocrate noxien qui a été blessé et disgracié lors de l'invasion d'Ionia. En cherchant le pouvoir pour restaurer la grandeur de Noxus, il a découvert Raum, un démon du savoir, tapi dans les ténèbres du Bastion Immortel. En échange de son bras gauche, il a acquis une vision totale et une puissance occulte. Il est aujourd'hui le Grand Général de Noxus, gouvernant à travers le Conseil du Trifarix.",
    battles: "Il a orchestré le coup d'État contre Boram Darkwill et a mené les armées noxiennes à travers des conquêtes systématiques de Shurima à Freljord. Sous sa forme de Maître des Dragons, il commande des légions de créatures ailées, utilisant sa stratégie froide pour brûler toute résistance.",
    allSkins: ["Classique", "Northern Front", "Bilgewater", "Tyrant", "Dragon Master", "Hextech", "Crystal Rose", "Winterblessed"],
    quote: "L'empire n'est pas construit sur l'espoir, mais sur la prévoyance de ceux qui voient tout.",
    voice: "Charon",
    region: "Noxus",
    stats: { attack: 4, defense: 9, magic: 8, difficulty: 8 },
    abilities: [
      { name: "Nuée de Corbeaux", description: "Il attire les ennemis immobilisés vers lui pour récolter des fragments de leur âme.", icon: "sparkles" },
      { name: "Main de la Mort", description: "Il projette plusieurs éclairs de puissance occulte dans un cône devant lui.", icon: "zap" },
      { name: "Oeil de l'Empire", description: "Il invoque un œil démoniaque à distance pour révéler et ralentir les ennemis.", icon: "brain" },
      { name: "Incarnation Démoniaque", description: "Il libère son démon intérieur, drainant la vie de tous les ennemis proches pour se soigner.", icon: "zap" }
    ],
    theme: { bg: "#0C0A09", accent: "#DC2626", secondary: "#450A0A" }
  },
  {
    id: 16,
    slug: "ashe-high-noon",
    title: "Ashe Far West",
    category: "Divine / Western",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg",
    description: "L'ange mécanique apportant la justice dans un monde de poussière.",
    year: "2019",
    location: "Prairie of Redemption",
    longDescription: "Ashe High Noon est la fusion de la grace angélique et de la technologie steampunk. Son arc, une machine complexe de piston et d'ailes dorées, décoche des flèches de lumière pure. Cette Planche explore la verticalité de son design et l'élégance de sa présence divine dans un environnement aride.",
    specs: [
      { label: "Skin", value: "High Noon" },
      { label: "Arme", value: "Arc de Justice" },
      { label: "Nature", value: "Angélique" }
    ],
    biography: "Ashe, la Sublimée, est l'une des trois Sœurs du Freljord et la chef de la tribu des Avarosans. Ayant découvert l'arc de glace pure de la reine légendaire Avarosa, elle cherche à unifier les tribus divisées de son pays sous une bannière de paix et de survie. Son histoire est celle d'une leader visionnaire qui refuse de céder à la brutalité des anciennes traditions. Dans l'univers High Noon, elle est un ange descendu sur terre pour apporter la rédemption.",
    battles: "Elle a survécu à l'exil et à la trahison de sa propre mère, et a mené ses partisans lors de batailles désespérées contre les Griffes de l'Hiver et les disciples de Lissandra. Sa flèche de cristal a arrêté des armées entières, symbolisant l'espoir d'un Freljord uni.",
    allSkins: ["Classique", "Freljord", "Sherwood", "Woad", "Queen", "Amethyst", "Heartseeker", "Marauder", "PROJECT", "Championship", "High Noon", "Fae Dragon", "Lunar Empress"],
    quote: "Un seul peuple, une seule bannière. La paix demande plus de courage que la guerre.",
    voice: "Kore",
    region: "Freljord",
    stats: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
    abilities: [
      { name: "Tir Givrant", description: "Ses attaques ralentissent les ennemis et infligent des dégâts accrus aux cibles déjà gelées.", icon: "sparkles" },
      { name: "Salve", description: "Elle tire une volée de flèches dans un large cône, ralentissant tous les ennemis touchés.", icon: "zap" },
      { name: "Rapace", description: "Elle envoie un esprit de faucon de glace pour révéler les zones d'ombre sur toute la carte.", icon: "brain" },
      { name: "Flèche de Cristal Enchantée", description: "Une flèche glaciale géante qui traverse la carte et étourdit le premier champion touché.", icon: "zap" }
    ],
    theme: { bg: "#1A0F0A", accent: "#FCD34D", secondary: "#78350F" }
  },
  {
    id: 17,
    slug: "katarina-battle-queen",
    title: "Katarina Reine du Combat",
    category: "Royalty / Lethal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_21.jpg",
    description: "La souveraine des lames, capable de changer de royaume en un clin d'oeil.",
    year: "2020",
    location: "Coronation Arena",
    longDescription: "Battle Queen Katarina est une célébration de la versatilité. Sa dague change de forme et de couleur selon ses victoires, passant du rubis au saphir. La Planche analyse la structure de son armure ornée et la fluidité de son mouvement, capturant l'essence d'une reine qui règne par le fer.",
    specs: [
      { label: "Skin", value: "Battle Queen" },
      { label: "Dagues", value: "Multi-Royaumes" },
      { label: "Type", value: "Légendaire" }
    ],
    biography: "Fille du général noxien Du Couteau, Katarina a été entraînée dès l'enfance pour devenir l'assassin le plus redoutable de l'empire. Sa soif de gloire l'a souvent menée à prendre des risques inconsidérés, mais sa maîtrise inégalée des dagues et sa vitesse fulgurante font d'elle une arme dévastatrice. Dans l'arène des Reines du Combat, elle représente la souveraineté par la force, capable de manipuler les dimensions pour achever ses proies.",
    battles: "Elle a assassiné des dizaines de dignitaires étrangers et a participé à des missions d'infiltration hautement périlleuses. Son combat le plus difficile reste sa rivalité constante avec Garen de Demacia, un conflit entre devoir impérial et respect mutuel sur le champ de bataille.",
    allSkins: ["Classique", "Mercenary", "Red Card", "Bilgewater", "Kitty Cat", "High Command", "Sandstorm", "Slay Belle", "Warring Kingdoms", "PROJECT", "Death Sworn", "Battle Queen", "Faerie Court"],
    quote: "La vitesse est mon alliée. Si vous clignez des yeux, c'est que vous êtes déjà mort.",
    voice: "Kore",
    region: "Noxus",
    stats: { attack: 4, defense: 3, magic: 9, difficulty: 8 },
    abilities: [
      { name: "Voracité", description: "Ses délais de récupération sont fortement réduits lorsqu'elle participe à l'élimination d'un champion.", icon: "sparkles" },
      { name: "Lame Rebondissante", description: "Elle lance une dague qui rebondit sur plusieurs ennemis avant de se ficher au sol.", icon: "zap" },
      { name: "Shunpo", description: "Elle se téléporte instantanément sur une cible ou une dague pour frapper avec une vitesse fulgurante.", icon: "zap" },
      { name: "Lotus Mortel", description: "Elle devient un tourbillon de dagues meurtrier, frappant tous les champions ennemis à proximité.", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#F472B6", secondary: "#4C1D95" }
  },
  {
    id: 18,
    slug: "pantheon-ruined",
    title: "Pantheon Déchu",
    category: "Corruption / Warrior",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_16.jpg",
    description: "Le guerrier éternel succombant à la brume noire d'un roi déchu.",
    year: "2021",
    location: "Mount Targon (Corrupted)",
    longDescription: "Une étude sur la perte de l'humanité. Ruined Pantheon montre le spectre de la violence pure. Son bouclier et sa lance sont imprégnés de la brume noire, brillant d'un vert spectral inquiétant. La Planche explore la texture de son corps changé en fumée et la majesté tragique d'un dieu tombé.",
    specs: [
      { label: "Skin", value: "Ruined" },
      { label: "Source", value: "Brume Noire" },
      { label: "Arme", value: "Lance du Vide" }
    ],
    biography: "Atreus était un simple soldat de Targon qui est devenu l'hôte de l'Aspect de la Guerre, Pantheon. Cependant, l'Aspect méprisait l'humanité d'Atreus et a pris le contrôle total de son corps. Lorsque Pantheon a été tué par Aatrox, Atreus a survécu, sa volonté humaine ranimant les armes du dieu. Il combat désormais en tant qu'homme contre les dieux et les monstres. Sous sa forme Déchue, il a été temporairement corrompu par la Brume Noire de Viego.",
    battles: "Il a affronté Aatrox et a réussi à lui trancher le bras, prouvant qu'un mortel peut vaincre l'immortel. Ses combats contre les démons et les Aspects font de lui le protecteur ultime de l'humanité, une lance qui ne faiblit jamais.",
    allSkins: ["Classique", "Myrmidon", "Ruthless", "Perseus", "Full Metal", "Glaive Warrior", "Dragonslayer", "Baker", "Pulsefire", "Ruined", "Ashen Conqueror"],
    quote: "Je ne suis qu'un homme. Et c'est précisément pour cela que je ne tomberai jamais.",
    voice: "Fenrir",
    region: "Targon",
    stats: { attack: 9, defense: 7, magic: 3, difficulty: 4 },
    abilities: [
      { name: "Ardeur Mortelle", description: "Après plusieurs compétences, sa prochaine attaque ou compétence est grandement renforcée.", icon: "sparkles" },
      { name: "Lance Astrale", description: "Il projette sa lance ou l'utilise pour transpercer les ennemis devant lui avec force.", icon: "sword" },
      { name: "Assaut Protecteur", description: "Il lève son bouclier, devenant invulnérable aux dégâts venant d'une direction spécifique.", icon: "shield" },
      { name: "Météore", description: "Il bondit dans les cieux et retombe avec fracas sur une zone ciblée, brûlant tout sur son passage.", icon: "zap" }
    ],
    theme: { bg: "#020617", accent: "#2DD4BF", secondary: "#0F172A" }
  },
  {
    id: 19,
    slug: "sett-spirit-blossom",
    title: "Sett : Fleur",
    category: "Power / Spiritual",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_10.jpg",
    description: "Le protecteur des esprits, alliant la force brute à la sérénité ionienne.",
    year: "2022",
    location: "Ionia, Festival of Spirits",
    longDescription: "Sett Fleur Spirituelle est une réinterprétation du 'Patron' en un gardien bienveillant. Son design intègre des motifs de nuages et de pétales de cerisier dans sa musculature imposante. Cette Planche examine comment son agressivité naturelle est canalisée dans une calligraphie de force et de protection.",
    specs: [
      { label: "Skin", value: "Spirit Blossom" },
      { label: "Esprit", value: "Wolverine" },
      { label: "Philosophie", value: "Protection" }
    ],
    biography: "Fils d'une Vastaya et d'un humain qui l'ont abandonné, Sett a dû se battre pour sa survie dans les arènes de combat de Navori. Il a rapidement gravi les échelons pour devenir le 'Patron', prenant le contrôle des fosses de combat clandestines d'Ionia. Son histoire est celle d'une ascension brute par la force des poings pour assurer une vie de luxe à sa mère. Dans le Festival des Esprits, il incarne un gardien protecteur à la musculature divine.",
    battles: "Il a vaincu tous les champions des arènes d'Ionia et a détrôné les anciens seigneurs du crime. Ses combats sont des démonstrations de puissance brute et de résilience, où il utilise l'élan de ses ennemis pour les écraser avec une force décuplée.",
    allSkins: ["Classique", "Mecha Kingdoms", "Obsidian Dragon", "Pool Party", "Firecracker", "Spirit Blossom", "Soul Fighter"],
    quote: "Tout le monde a un plan jusqu'à ce qu'ils se prennent un coup de poing dans les dents.",
    voice: "Fenrir",
    region: "Ionia",
    stats: { attack: 8, defense: 9, magic: 1, difficulty: 2 },
    abilities: [
      { name: "Roi de l'Arène", description: "Attaque alternativement avec ses deux poings, le second étant plus rapide et puissant.", icon: "sword" },
      { name: "Boutoir", description: "Gagne de la vitesse de déplacement et ses deux prochaines attaques infligent des dégâts supplémentaires.", icon: "zap" },
      { name: "Coup de Casse-Tête", description: "Attire les ennemis situés sur ses deux flancs pour les entrechoquer violemment.", icon: "brain" },
      { name: "Le Clou du Spectacle", description: "Saisit un champion ennemi pour l'écraser au sol, infligeant des dégâts de zone massifs.", icon: "sword" }
    ],
    theme: { bg: "#0F172A", accent: "#F9A8D4", secondary: "#312E81" }
  },
  {
    id: 20,
    slug: "viego-soul-fighter",
    title: "Viego Soul Fighter",
    category: "Execution / Stylized",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_10.jpg",
    description: "Le roi déchu dans une arène de combat survoltée.",
    year: "2023",
    location: "Soul Arena",
    longDescription: "Viego Soul Fighter est une explosion de style. Son épée iconique est réimaginée comme une lame de lumière stylisée, et sa couronne est un halo d'énergie pure. La Planche analyse le contraste entre son allure mélancolique de rockstar et la vivacité des effets visuels qui l'entourent.",
    specs: [
      { label: "Skin", value: "Soul Fighter" },
      { label: "Arme", value: "Lame de la Reine" },
      { label: "Style", value: "Hyper-Défini" }
    ],
    biography: "Autrefois jeune roi d'un royaume oublié, Viego a été consumé par le chagrin après la mort de sa reine, Isolde. Sa tentative désespérée de la ressusciter a provoqué la Ruine originelle, transformant les Îles Bénies en Îles Obscures et le changeant en Roi Déchu. Après mille ans de sommeil, il est revenu pour retrouver les fragments de l'âme d'Isolde, déclenchant une nouvelle Ruine mondiale. Dans Soul Fighter, il canalise sa peine en une puissance de combat stylisée.",
    battles: "Il a ravagé des continents entiers avec sa Brume Noire, asservissant des champions comme Pantheon, Karma et Draven. Son combat final contre les Sentinelles de la Lumière a marqué la fin de sa quête obsédante, le laissant de nouveau seul avec ses regrets.",
    allSkins: ["Classique", "Lunar Beast", "Dissonance of Pentakill", "King Viego", "Soul Fighter"],
    quote: "L'amour est un fardeau que je porterai jusqu'à ce que le monde entier s'écroule sous ma peine.",
    voice: "Charon",
    region: "Camavor / Isles",
    stats: { attack: 9, defense: 3, magic: 4, difficulty: 6 },
    abilities: [
      { name: "Domination du Roi", description: "Il peut posséder temporairement le corps des ennemis qu'il a aidé à tuer.", icon: "brain" },
      { name: "Lame du Roi Déchu", description: "Ses attaques infligent des dégâts selon la santé actuelle et il peut projeter sa lame.", icon: "sword" },
      { name: "Gueule de la Brume", description: "Il projette une ombre qui s'étend sur le décor pour le camoufler.", icon: "zap" },
      { name: "Cœur Brisé", description: "Il bondit vers l'avant et s'écrase sur sa cible, infligeant des dégâts massifs.", icon: "sword" }
    ],
    theme: { bg: "#0D0D14", accent: "#818CF8", secondary: "#4C1D95" }
  },
  {
    id: 21,
    slug: "zoe-star-guardian",
    title: "Zoe Gardienne",
    category: "Cosmic / Playful",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_4.jpg",
    description: "La messagère cosmique corrompue par l'ombre, mais toujours espiègle.",
    year: "2019",
    location: "Outer Space / Academy",
    longDescription: "Zoe Star Guardian est un mélange fascinant de couleurs vives et de ténèbres rampantes. Ses cheveux sont des nébuleuses en mouvement constant, et ses bulles de sommeil sont des pièges dimensionnels. La Planche explore le chaos de ses formes asymétriques et la magie étincelante de ses attaques.",
    specs: [
      { label: "Skin", value: "Star Guardian" },
      { label: "Compagnon", value: "Ran" },
      { label: "Magie", value: "Interdimensionnelle" }
    ],
    biography: "Zoe est l'incarnation du Aspect du Crépuscule, une messagère cosmique dont la simple présence peut changer la réalité. Bien qu'elle ait l'apparence d'une enfant impatiente, elle a des milliers d'années, ayant voyagé à travers les dimensions et les époques. Son histoire commence sur le Mont Targon, où elle a été choisie par les dieux pour sa curiosité insatiable. En tant que Gardienne des Étoiles corrompue, elle joue avec le destin de l'univers avec une insouciance terrifiante.",
    battles: "Elle n'a pas mené de guerres traditionnelles, mais a causé des cataclysmes par accident et a piégé des entités cosmiques dans des bulles de sommeil éternel. Son 'combat' est une recherche constante d'amusement, ce qui s'avère souvent mortel pour ceux qui croisent son chemin multidimensionnel.",
    allSkins: ["Classique", "Cyber Pop", "Pool Party", "Star Guardian", "Arcanist", "EDG", "Winterblessed"],
    quote: "Le changement est tellement amusant, surtout quand on ne sait pas ce qu'il va arriver !",
    voice: "Puck",
    region: "Targon",
    stats: { attack: 3, defense: 2, magic: 10, difficulty: 7 },
    abilities: [
      { name: "Plus de Paillettes", description: "Ses attaques sont renforcées après avoir lancé une compétence.", icon: "sparkles" },
      { name: "Astro-Puce", description: "Elle lance une étoile filante qui inflige des dégâts croissants avec la distance parcourue.", icon: "zap" },
      { name: "Voleuse de Sorts", description: "Elle ramasse les sorts et objets lancés par les ennemis pour les utiliser elle-même.", icon: "brain" },
      { name: "Bulle Somnifère", description: "Elle lance une bulle qui finit par endormir profondément sa cible.", icon: "brain" }
    ],
    theme: { bg: "#0F0F1A", accent: "#F472B6", secondary: "#A855F7" }
  },
  {
    id: 22,
    slug: "riven-spirit-blossom",
    title: "Riven : Fleur",
    category: "Redemption / Spiritual",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_15.jpg",
    description: "L'exilée cherchant la paix intérieure à travers une lame fragmentée.",
    year: "2020",
    location: "Ionia, Whispering Woods",
    longDescription: "Riven Fleur Spirituelle est une vision de vulnérabilité et de force. Son épée brisée est reconstituée par l'énergie des esprits. La Planche analyse la délicatesse de son armure en soie et le contraste entre la douceur des fleurs et le poids de son passé de guerrière.",
    specs: [
      { label: "Skin", value: "Spirit Blossom" },
      { label: "Lame", value: "Rune de Paix" },
      { label: "Thème", value: "Renaissance" }
    ],
    biography: "Autrefois maître d'épée d'élite de Noxus, Riven a brisé sa propre lame et s'est exilée après avoir été témoin de l'horreur des armes chimiques utilisées lors de l'invasion d'Ionia. Cherchant à expier son passé, elle erre à travers Ionia, aidant ceux qu'elle a autrefois combattus. Son histoire est celle d'une rédemption par le fragment, chaque morceau de son épée représentant un pas vers la paix intérieure. Sous sa forme de Fleur Spirituelle, elle affronte son passé pour renaître.",
    battles: "Elle a survécu à la trahison de Noxus sur les champs de bataille d'Ionia et a lutté contre ses anciens camarades venus la traquer. Son duel contre Yasuo et sa défense des fermes ioniennes contre les envahisseurs ont fait d'elle une légende de résilience et de courage.",
    allSkins: ["Classique", "Redeemed", "Crimson Elite", "Battle Bunny", "Championship", "Dragonblade", "Arcade", "Dawnbringer", "Pulsefire", "Spirit Blossom", "Sentinel", "Broken Covenant"],
    quote: "Ce qui est brisé peut être reforgé. Mon épée n'est pas la seule chose qui cherche sa voie.",
    voice: "Kore",
    region: "Noxus (Exil)",
    stats: { attack: 8, defense: 5, magic: 1, difficulty: 8 },
    abilities: [
      { name: "Lame Runique", description: "Ses compétences chargent sa lame d'énergie runique pour ses prochaines attaques.", icon: "sparkles" },
      { name: "Ailes du Brisé", description: "Elle enchaîne trois frappes acrobatiques, la dernière projetant les ennemis en l'air.", icon: "zap" },
      { name: "Cri de Guerre", description: "Elle pousse un cri qui étourdit les ennemis proches par la pure onde de choc.", icon: "brain" },
      { name: "Lame de l'Exil", description: "Elle reforme son épée, gagnant en portée et pouvant tirer une onde de choc finale.", icon: "sword" }
    ],
    theme: { bg: "#0F1A1A", accent: "#A78BFA", secondary: "#1E3A8A" }
  },
  {
    id: 23,
    slug: "garen-god-king",
    title: "Garen Dieu-Roi",
    category: "Majesty / Justice",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_11.jpg",
    description: "L'incarnation de l'ordre absolu et de la loi du lion.",
    year: "2018",
    location: "Kingdom of Order",
    longDescription: "Garen God-King est le summum de la majesté demacienne. Son armure dorée est un chef-d'œuvre de symétrie et de puissance. La Planche se concentre sur l'aura du lion céleste qui l'accompagne et la massivité de son épée divine, capable de fendre les cieux pour apporter la justice.",
    specs: [
      { label: "Skin", value: "God-King" },
      { label: "Animal", value: "Lion Divin" },
      { label: "Pouvoir", value: "Ordre" }
    ],
    biography: "Garen Crownguard est le parangon de Demacia, le commandant de l'Avant-garde Intrépide. Né dans une famille de protecteurs dévoués, il a juré de défendre son pays contre toutes les menaces, en particulier la magie. Bien que son sens du devoir soit absolu, il est secrètement troublé par les capacités de sa sœur Lux. En tant que Dieu-Roi, il incarne la loi immuable, un souverain céleste qui ne tolère aucune dissidence au nom de l'ordre.",
    battles: "Il a mené des charges victorieuses contre des tribus barbares et a défendu Demacia contre les attaques de Noxus pendant des années. Son combat contre la rébellion des mages de Sylas a testé sa loyauté et sa force, le forçant à confronter les fondements mêmes de sa nation.",
    allSkins: ["Classique", "Sanguine", "Desert Trooper", "Commando", "Dreadknight", "Rugged", "Steel Legion", "Warring Kingdoms", "God-King", "Demacia Vice", "Battle Acadamia", "Mythmaker"],
    quote: "Pour Demacia ! La justice n'est pas qu'un mot, c'est l'acier qui traverse mon cœur.",
    voice: "Fenrir",
    region: "Demacia",
    stats: { attack: 7, defense: 8, magic: 0, difficulty: 2 },
    abilities: [
      { name: "Persévérance", description: "Garen récupère rapidement sa santé s'il n'a pas subi de dégâts récemment.", icon: "sparkles" },
      { name: "Coup Décisif", description: "Gagne de la vitesse et sa prochaine attaque réduit sa cible au silence.", icon: "zap" },
      { name: "Courage", description: "Renforce passivement son armure et peut réduire temporairement les dégâts subis.", icon: "shield" },
      { name: "Justice de Demacia", description: "Il invoque une épée divine au-dessus d'un ennemi pour une exécution sacrée.", icon: "sword" }
    ],
    theme: { bg: "#0D0C14", accent: "#FBBF24", secondary: "#1E3A8A" }
  },
  {
    id: 24,
    slug: "darius-god-king",
    title: "Darius Dieu-Roi",
    category: "Majesty / Chaos",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg",
    description: "La fureur du loup divin régnant par la force brute.",
    year: "2018",
    location: "Ruins of Chaos",
    longDescription: "Darius God-King est l'antithèse de Garen, représentant le chaos et la liberté sauvage. Son armure d'ébène et de pourpre est agressive, hérissée de pointes évoquant les crocs d'un loup. La Planche explore la brutalité de sa hache et l'énergie sauvage qui émane de son trône d'ossements.",
    specs: [
      { label: "Skin", value: "God-King" },
      { label: "Animal", value: "Loup des Ténèbres" },
      { label: "Pouvoir", value: "Chaos" }
    ],
    biography: "Issu des couches les plus basses de la société, Darius a grimpé les échelons de l'armée noxienne par la force brute et une volonté de fer. Il est devenu la Main de Noxus, le symbole de la méritocratie et de la puissance de l'empire. Il ne respecte que la force et n'a aucune patience pour la politique de salon. Sous sa forme de Dieu-Roi, il est l'incarnation du chaos sauvage, un prédateur qui dévore les rois et les dieux pour libérer le monde des chaînes de l'ordre.",
    battles: "Il a conquis d'innombrables territoires pour Noxus, écrasant les armées de Freljord et de Shurima. Son combat le plus emblématique est sa lutte de pouvoir interne pour purger Noxus de sa noblesse corrompue, instaurant le Conseil du Trifarix avec Swain et une mystérieuse figure de l'ombre.",
    allSkins: ["Classique", "Lord", "Bioforge", "Woad King", "Dunkmaster", "Academy", "Dreadnova", "God-King", "High Noon", "Lunar Beast", "Spirit Blossom"],
    quote: "La force ne respecte que la force. Noxus vaincra par ma hache, ou par le sang de mes ennemis.",
    voice: "Fenrir",
    region: "Noxus",
    stats: { attack: 9, defense: 6, magic: 0, difficulty: 4 },
    abilities: [
      { name: "Plaie Ouverte", description: "Ses attaques font saigner les ennemis, infligeant des dégâts cumulables sur la durée.", icon: "sparkles" },
      { name: "Décimation", description: "Il fait tournoyer sa hache, soignant ses blessures en frappant avec le tranchant.", icon: "sword" },
      { name: "Crampon", description: "Sa hache gagne en pénétration d'armure et il peut attirer ses victimes vers lui.", icon: "sword" },
      { name: "Guillotine Noxienne", description: "Il bondit pour une exécution brutale qui se réinitialise si la cible meurt.", icon: "sword" }
    ],
    theme: { bg: "#0F0A0A", accent: "#EF4444", secondary: "#1F2937" }
  },
  {
    id: 25,
    slug: "seraphine-kda",
    title: "Seraphine K/DA",
    category: "Pop / Ethereal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_3.jpg",
    description: "La voix d'une génération, de sa chambre à la scène mondiale.",
    year: "2020",
    location: "Global Tour",
    longDescription: "Seraphine K/DA ALL OUT capture le voyage d'une artiste. Cette Planche se concentre sur sa forme 'Indie', le point de départ de son ascension. Son design est un mélange de douceur quotidienne et d'étincelles magiques, représentant la connexion par la musique et l'authenticité.",
    specs: [
      { label: "Skin", value: "K/DA ALL OUT" },
      { label: "Objet", value: "Plateforme Sonore" },
      { label: "Pouvoir", value: "Harmonie" }
    ],
    biography: "Seraphine est née à Piltover de parents piltoviens et zauniens, une héritière des deux mondes. Elle possède la capacité unique d'entendre les âmes des autres sous forme de chansons. En utilisant un cristal Brackern, elle a construit une plateforme sonore pour amplifier sa voix et unir les habitants de Piltover et Zaun à travers la musique. En tant que membre de K/DA, elle est devenue une popstar mondiale, trouvant son harmonie sur les plus grandes scènes.",
    battles: "Ses batailles sont sociales et émotionnelles, luttant contre les préjugés et les divisions entre la cité du progrès et les bas-fonds de Zaun. Elle a réussi à apaiser des émeutes et à inspirer des milliers de personnes, utilisant l'empathie comme sa plus grande force sur le champ de bataille de l'opinion publique.",
    allSkins: ["Classique", "K/DA ALL OUT", "Graceful Phoenix", "Ocean Song", "Faerie Court", "Star Guardian"],
    quote: "Chaque voix est une chanson. Si nous chantons tous ensemble, nous pouvons changer le monde.",
    voice: "Kore",
    region: "Piltover / Zaun",
    stats: { attack: 3, defense: 2, magic: 8, difficulty: 4 },
    abilities: [
      { name: "Présence Scénique", description: "Toutes les trois compétences, sa prochaine compétence se lance deux fois.", icon: "sparkles" },
      { name: "Note Aiguë", description: "Elle projette une onde sonore qui inflige des dégâts accrus aux cibles affaiblies.", icon: "zap" },
      { name: "Son Entier", description: "Elle s'entoure d'un bouclier et augmente la vitesse de ses alliés proches.", icon: "shield" },
      { name: "Bis", description: "Elle projette une onde de choc irrésistible qui charme tous les ennemis touchés.", icon: "brain" }
    ],
    theme: { bg: "#0F0F1A", accent: "#60A5FA", secondary: "#F472B6" }
  },
  {
    id: 26,
    slug: "lee-sin-storm-dragon",
    title: "Lee Sin : Dragon",
    category: "Storm / Martial",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_27.jpg",
    description: "La fureur du dragon de la tempête canalisée à travers des poings d'acier.",
    year: "2020",
    location: "Peak of Ascension",
    longDescription: "Lee Sin Dragon de Tempête est l'incarnation de la volonté indomptable. Après avoir gravi la montagne et reçu la bénédiction du dragon, il a acquis le pouvoir de commander la foudre. Cette Planche explore la fluidité de ses mouvements et l'énergie électrique qui émane de son corps à chaque frappe.",
    specs: [
      { label: "Skin", value: "Storm Dragon" },
      { label: "Bénédiction", value: "Aurelion Sol" },
      { label: "Style", value: "Foudre Divine" }
    ],
    biography: "Moine aveugle dévoué à la protection d'Ionia, Lee Sin a appris à écouter les échos du monde. Son voyage l'a mené à une maîtrise totale de son esprit et de son corps. Sous sa forme de Dragon de Tempête, il a transcendé ses limites mortelles pour devenir un avatar de la fureur céleste.",
    battles: "Il a défendu le monastère de Shojin contre les invasions noxiennes et a vaincu des entités primordiales dans les sommets enneigés. Sa force ne réside pas dans sa vue, mais dans sa connexion spirituelle avec les énergies de Runeterra.",
    allSkins: ["Classique", "Traditional", "Acolyte", "Dragon Fist", "Muay Thai", "Pool Party", "SKT T1", "Knockout", "God Fist", "Storm Dragon", "Nightbringer", "Heavenscale"],
    quote: "L'aveuglement n'est pas un obstacle quand on voit avec son âme. La force est en nous.",
    voice: "Zephyr",
    region: "Ionia",
    stats: { attack: 8, defense: 5, magic: 1, difficulty: 9 },
    abilities: [
      { name: "Rafale", description: "Ses compétences augmentent la vitesse de ses prochaines attaques de base.", icon: "sparkles" },
      { name: "Onde Sonore", description: "Il projette une onde pour localiser l'ennemi avant de foncer dessus.", icon: "zap" },
      { name: "Rempart", description: "Il se projette vers un allié, créant un bouclier protecteur pour les deux.", icon: "shield" },
      { name: "Cri du Dragon", description: "Il délivre un coup de pied dévastateur qui projette l'adversaire très loin.", icon: "sword" }
    ],
    theme: { bg: "#080B14", accent: "#818CF8", secondary: "#312E81" }
  },
  {
    id: 27,
    slug: "thresh-spirit-blossom",
    title: "Thresh : Fleur",
    category: "Gothic / Ethereal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_15.jpg",
    description: "Le collectionneur d'âmes transformé en esprit séducteur mais impitoyable.",
    year: "2020",
    location: "Ionia, Spirit Realm",
    longDescription: "Thresh Fleur Spirituelle est une vision de beauté macabre. Loin de sa forme spectrale habituelle, il apparaît ici comme un démon élégant qui attire les âmes dans sa lanterne avec une grâce trompeuse. La Planche analyse le contraste entre ses traits humains et l'aura malveillante de sa lanterne.",
    specs: [
      { label: "Skin", value: "Spirit Blossom" },
      { label: "Objet", value: "Lanterne de Jade" },
      { label: "Nature", value: "Démon Dévorant" }
    ],
    biography: "Autrefois gardien des archives des Îles Bénies, le sadisme de Thresh l'a mené à sa perte lors de la Ruine. Il savoure désormais l'agonie des âmes qu'il capture. Dans le Festival des Esprits, il est l'entité qui offre des désirs interdits en échange de l'éternité dans ses chaînes.",
    battles: "Il est le némésis éternel de Lucian et Senna, ayant emprisonné cette dernière pendant des décennies. Son influence s'étend à travers les Îles Obscures, où il manipule les morts pour son propre plaisir sadique.",
    allSkins: ["Classique", "Deep Terror", "Championship", "Blood Moon", "SSW", "Dark Star", "High Noon", "Spirit Blossom", "Unbound", "Winterblessed"],
    quote: "Quelle délicieuse agonie... Votre âme sera bien plus utile dans ma lanterne.",
    voice: "Charon",
    region: "Shadow Isles",
    stats: { attack: 3, defense: 6, magic: 8, difficulty: 7 },
    abilities: [
      { name: "Damnation", description: "Il récolte les âmes des morts pour augmenter son armure et sa puissance durablement.", icon: "sparkles" },
      { name: "Peine Capitale", description: "Il lance sa faux pour accrocher un ennemi et le tirer vers lui ou se projeter dessus.", icon: "brain" },
      { name: "Lien de la Lanterne", description: "Il offre un point d'ancrage à ses alliés, pouvant les ramener à lui en un instant.", icon: "shield" },
      { name: "La Boîte", description: "Il érige une prison de murs spectraux infligeant des dégâts et ralentissant les fuyards.", icon: "shield" }
    ],
    theme: { bg: "#0A0B1A", accent: "#9333EA", secondary: "#065F46" }
  },
  {
    id: 28,
    slug: "miss-fortune-bunny",
    title: "MF : Lapin",
    category: "Futuristic / Action",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_33.jpg",
    description: "La meneuse des Anima Squad, armée de pistolets lasers dévastateurs.",
    year: "2022",
    location: "Final City",
    longDescription: "Miss Fortune Battle Bunny est une explosion de couleurs et de technologie. En tant que leader de l'Anima Squad, elle utilise son agilité et ses armes de haute technologie pour repousser les envahisseurs abyssaux. La Planche se concentre sur l'énergie cinétique de son design et l'esthétique pop-futuriste de son équipement.",
    specs: [
      { label: "Skin", value: "Battle Bunny" },
      { label: "Armes", value: "Shock & Awe 2.0" },
      { label: "Rôle", value: "Leader Anima" }
    ],
    biography: "Sarah Fortune est la reine pirate de Bilgewater, ayant pris sa revanche sur Gangplank pour le meurtre de sa mère. Elle dirige désormais la cité avec une main de fer et un charme mortel. Dans l'univers Anima Squad, elle est l'espoir de l'humanité contre l'extinction.",
    battles: "Elle a repris le contrôle de Bilgewater lors de la Marée Sanglante et a affronté des monstres marins titanesques. Ses pistolets ne ratent jamais leur cible, que ce soit pour une prime ou pour la survie de son peuple.",
    allSkins: ["Classique", "Cowgirl", "Waterloo", "Secret Agent", "Candy Cane", "Road Warrior", "Mafia", "Arcade", "Captain", "Star Guardian", "Gun Goddess", "Bewitching", "Battle Bunny", "Coven"],
    quote: "Fortune sourit aux audacieux. Et mon pistolet sourit à tous ceux qui sont sur son chemin.",
    voice: "Kore",
    region: "Bilgewater",
    stats: { attack: 9, defense: 2, magic: 5, difficulty: 3 },
    abilities: [
      { name: "Cœur de Lion", description: "Elle inflige des dégâts supplémentaires lorsqu'elle change de cible en attaquant.", icon: "sparkles" },
      { name: "Double Doublé", description: "Elle tire une balle qui traverse une cible pour frapper l'ennemi situé derrière.", icon: "zap" },
      { name: "Pluie de Balles", description: "Elle invoque un déluge de plomb dans une zone, ralentissant et blessant les ennemis.", icon: "zap" },
      { name: "Barrage de Plomb", description: "Elle libère une rafale massive de balles dans un large cône devant elle.", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#F472B6", secondary: "#1E3A8A" }
  },
  {
    id: 29,
    slug: "irelia-mythmaker",
    title: "Irelia : Mythe",
    category: "Cultural / Ethereal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_44.jpg",
    description: "La danseuse des lames célébrant les légendes du papier découpé.",
    year: "2023",
    location: "Lunar Celebration",
    longDescription: "Mythmaker Irelia est une étude de la grâce et de la tradition. Ses lames, transformées en motifs délicats de papier découpé, flottent autour d'elle dans une danse harmonieuse. La Planche explore l'utilisation des couleurs rouges et dorées pour symboliser la prospérité et la force spirituelle.",
    specs: [
      { label: "Skin", value: "Mythmaker" },
      { label: "Armes", value: "Lames de Papier" },
      { label: "Style", value: "Danse Céleste" }
    ],
    biography: "Irelia est devenue le symbole de la résistance ionienne après avoir utilisé la danse rituelle de sa famille pour briser l'invasion noxienne. Elle ne se considère pas comme une leader, mais comme une protectrice de l'harmonie de son pays. Son histoire est celle du sacrifice et de la préservation de la culture face à la destruction.",
    battles: "Elle a coupé le bras de Swain lors de la bataille du Placidium, un moment qui a changé le cours de l'histoire de Runeterra. Ses lames bougent avec ses émotions, créant une barrière impénétrable autour de ceux qu'elle aime.",
    allSkins: ["Classique", "Nightblade", "Aviator", "Infiltrator", "Frostblade", "Order of the Lotus", "Divine Sword", "IG", "High Noon", "Sentinel", "Mythmaker"],
    quote: "Souvenez-vous d'Ionia. Car si nous oublions qui nous sommes, nous ne sommes déjà plus rien.",
    voice: "Kore",
    region: "Ionia",
    stats: { attack: 7, defense: 5, magic: 5, difficulty: 8 },
    abilities: [
      { name: "Ferveur Ionia", description: "Elle gagne de la vitesse d'attaque en touchant des ennemis avec ses compétences.", icon: "sparkles" },
      { name: "Rush Fatal", description: "Elle fonce sur un ennemi. Si elle le tue ou s'il est marqué, le délai est réinitialisé.", icon: "zap" },
      { name: "Danse du Défi", description: "Elle adopte une posture défensive, réduisant les dégâts avant de riposter.", icon: "shield" },
      { name: "Pointe de l'Avant-Garde", description: "Elle lance un barrage de lames qui forme un mur immobilisant les ennemis.", icon: "sword" }
    ],
    theme: { bg: "#1A0A0A", accent: "#EF4444", secondary: "#FCD34D" }
  },
  {
    id: 30,
    slug: "vayne-sentinel",
    title: "Vayne : Sentinelle",
    category: "Justice / Lethal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_32.jpg",
    description: "La chasseuse nocturne rejoignant l'ordre sacré pour éradiquer la Ruine.",
    year: "2021",
    location: "Demacia / Shadow Isles",
    longDescription: "Sentinel Vayne représente l'alliance entre sa détermination impitoyable et les reliques sacrées des Sentinelles. Son arbalète projette désormais de la lumière purificatrice capable de dissiper la Brume Noire. La Planche analyse la transition de son esthétique sombre vers une armure de lumière imposante.",
    specs: [
      { label: "Skin", value: "Sentinel" },
      { label: "Arme", value: "Arbalète de Relique" },
      { label: "Engagement", value: "Purification" }
    ],
    biography: "Shauna Vayne est une chasseuse de monstres impitoyable dont la vie a été brisée par un démon. Depuis lors, elle a dédié chaque instant à traquer les ténèbres, n'ayant aucune pitié pour ceux qui pratiquent la magie noire. En rejoignant les Sentinelles, elle a trouvé les outils nécessaires pour son ultime vendetta contre le mal.",
    battles: "Elle a traqué et tué d'innombrables créatures de la nuit à travers tout Valoran. Pendant la Ruine, elle a été l'un des piliers de la défense mondiale, abattant des spectres et des dragons déchus avec une précision chirurgicale.",
    allSkins: ["Classique", "Vindicator", "Aristocrat", "Dragonslayer", "Heartseeker", "SKT T1", "Arclight", "PROJECT", "Firecracker", "FPX", "Sentinel", "Battle Bat"],
    quote: "La nuit est mon domaine. Les monstres du monde entier feraient mieux de craindre mon sillage.",
    voice: "Kore",
    region: "Demacia",
    stats: { attack: 10, defense: 2, magic: 1, difficulty: 7 },
    abilities: [
      { name: "Chasseresse Nocturne", description: "Elle gagne de la vitesse de déplacement lorsqu'elle traque un champion ennemi.", icon: "sparkles" },
      { name: "Roulade", description: "Elle effectue une pirouette rapide et renforce sa prochaine attaque de base.", icon: "zap" },
      { name: "Carreaux d'Argent", description: "Toutes les trois attaques sur la même cible, elle inflige des dégâts bruts massifs.", icon: "sword" },
      { name: "Combat Ultime", description: "Elle gagne en puissance et devient invisible pendant ses roulades temporairement.", icon: "brain" }
    ],
    theme: { bg: "#0A0A1F", accent: "#FFFFFF", secondary: "#312E81" }
  },
  {
    id: 31,
    slug: "akali-kda",
    title: "Akali K/DA",
    category: "Pop / Urban",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_9.jpg",
    description: "La rappeuse prodige qui fait vibrer les rues et les scènes.",
    year: "2018",
    location: "Metro Neon / Stage",
    longDescription: "Akali K/DA est une révolution visuelle. Ses graffitis fluorescents sous lumière noire et son style urbain agressif redéfinissent l'esthétique du ninja. La Planche explore la fluidité de son mouvement et l'énergie brute de sa présence scénique.",
    specs: [
      { label: "Skin", value: "K/DA" },
      { label: "Arme", value: "Kama Néon" },
      { label: "Rôle", value: "Main Rapper" }
    ],
    biography: "Akali a quitté l'Ordre Kinkou pour tracer son propre chemin, refusant d'être liée par des traditions qu'elle jugeait obsolètes. En tant que ninja renégate, elle protège Ionia à sa manière, frappant depuis les ombres avec une précision mortelle. Dans K/DA, elle apporte son style rebelle et ses paroles tranchantes, devenant rapidement une icône mondiale de la culture pop.",
    battles: "Elle a survécu à des duels contre les maîtres les plus redoutables de son ancien ordre et a mené des opérations de guérilla contre les troupes noxiennes. Sous les feux de la rampe, ses batailles sont des performances chorégraphiées où chaque kama lancé est une note de musique.",
    allSkins: ["Classique", "Stinger", "Crimson", "All-Star", "Nurse", "Blood Moon", "Silverfang", "Headhunter", "Sashimi", "K/DA", "PROJECT", "True Damage", "Star Guardian"],
    quote: "Pas besoin de mots quand mes dagues font tout le travail. Le rythme est en moi.",
    voice: "Kore",
    region: "Ionia",
    stats: { attack: 8, defense: 2, magic: 6, difficulty: 7 },
    abilities: [
      { name: "Marque de l'Assassin", description: "Elle charge ses attaques après avoir frappé un ennemi avec ses compétences.", icon: "sparkles" },
      { name: "Lancer de Kunai", description: "Elle lance cinq kunais en éventail, ralentissant les ennemis à distance maximale.", icon: "zap" },
      { name: "Linceul Nébuleux", description: "Elle crée un nuage de fumée qui la rend invisible et restaure son énergie.", icon: "brain" },
      { name: "Maitrise Absolue", description: "Elle réalise des bonds acrobatiques dévastateurs à travers ses victimes.", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#22C55E", secondary: "#9333EA" }
  },
  {
    id: 32,
    slug: "aatrox-blood-moon",
    title: "Aatrox Lune de Sang",
    category: "Berserker / Demonic",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_7.jpg",
    description: "Le destructeur de mondes invoqué par le rituel de la lune de sang.",
    year: "2019",
    location: "Temple of the Crimson Moon",
    longDescription: "Aatrox Blood Moon est une vision d'horreur élégante. Son épée massive est une extension de sa volonté destructrice, vibrant d'une énergie pourpre. La Planche analyse la massivité de son armure ornée et les ailes spectrales qui se déploient lors de sa transformation ultime.",
    specs: [
      { label: "Skin", value: "Blood Moon" },
      { label: "Épée", value: "Lame des Morts" },
      { label: "Statut", value: "Démon Invoqué" }
    ],
    biography: "Autrefois l'un des plus grands guerriers ascendants de Shurima, Aatrox a été trahi et emprisonné dans sa propre lame pendant des millénaires. Consumé par la haine, il cherche désormais à détruire toute vie pour mettre fin à son éternelle agonie. Sous l'influence de la Lune de Sang, il devient un avatar de la vengeance divine, abattant sa colère sur ceux qui l'ont oublié.",
    battles: "Il a causé la chute d'empires entiers et a affronté Pantheon dans un duel qui a résonné à travers les âges. Sa lame a goûté au sang des dieux et des mortels, et il ne s'arrêtera que lorsque le monde entier sera plongé dans le silence éternel.",
    allSkins: ["Classique", "Justicar", "Mecha", "Sea Hunter", "Blood Moon", "Odyssey", "Lunar Eclipse", "DRX"],
    quote: "Je suis le destructeur de mondes. Je n'apporte que le silence et la fin de toute chose.",
    voice: "Charon",
    region: "Runeterra (Darkin)",
    stats: { attack: 10, defense: 6, magic: 2, difficulty: 4 },
    abilities: [
      { name: "Posture du Massacreur", description: "Ses attaques périodiques infligent des dégâts supplémentaires et le soignent.", icon: "sparkles" },
      { name: "Épée des Darkin", description: "Il frappe le sol violemment à trois reprises, avec des zones d'impact changeantes.", icon: "sword" },
      { name: "Chaînes Infernales", description: "Il tire une chaîne qui piège le premier ennemi touché, le ramenant au centre.", icon: "brain" },
      { name: "Fossoyeur des Mondes", description: "Il révèle sa véritable forme démoniaque, augmentant sa taille et sa puissance.", icon: "zap" }
    ],
    theme: { bg: "#0F0505", accent: "#B91C1C", secondary: "#450A0A" }
  },
  {
    id: 33,
    slug: "ivern-old-god",
    title: "Ivern : Dieu Siffle",
    category: "Eldritch / Nature",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_11.jpg",
    description: "Le protecteur de la forêt corrompu par les anciens dieux sombres.",
    year: "2021",
    location: "Black Forest",
    longDescription: "Old God Ivern est une étude de la nature dévorante. Son corps branchu est orné de crânes et imprégné d'une magie occulte. La Planche explore le contraste entre sa silhouette longiligne et la présence imposante de Marguerite, ici transformée en une horreur végétale colossale.",
    specs: [
      { label: "Skin", value: "Old God" },
      { label: "Marguerite", value: "Abomination" },
      { label: "Essence", value: "Sève Noire" }
    ],
    biography: "Ivern Pied-de-Bois était autrefois un conquérant cruel qui a été transformé par l'énergie du premier arbre qu'il a tenté d'abattre. Depuis lors, il erre à travers les forêts de Runeterra comme un ami de la nature. Cependant, dans l'ombre des Dieux Anciens, son lien avec la forêt prend une tournure sinistre, devenant le gardien des secrets les plus sombres de la terre.",
    battles: "Ses batailles ne sont pas des guerres de conquête, mais des actes de préservation mystique. Il a protégé des bois sacrés contre des bûcherons et des monstres, utilisant ses bois pour entraver ceux qui manquent de respect à la vie sylvestre.",
    allSkins: ["Classique", "Candy King", "Dunkmaster", "Old God", "Astronaut"],
    quote: "La forêt a des oreilles, et elle n'aime pas ce qu'elle entend. Les racines vous attendent.",
    voice: "Charon",
    region: "Ionia / Runeterra",
    stats: { attack: 3, defense: 6, magic: 7, difficulty: 7 },
    abilities: [
      { name: "Ami de la Forêt", description: "Il ne blesse pas les monstres de la forêt, il les libère après les avoir marqués.", icon: "sparkles" },
      { name: "Enracinement", description: "Il lance une racine qui immobilise les ennemis et permet aux alliés de foncer dessus.", icon: "brain" },
      { name: "Graine de Protection", description: "Il place une graine protectrice sur un allié qui finit par exploser en ralentissant les ennemis.", icon: "shield" },
      { name: "Marguerite !", description: "Il appelle son amie colossale pour l'aider au combat, écrasant ses adversaires.", icon: "zap" }
    ],
    theme: { bg: "#0D1117", accent: "#4ADE80", secondary: "#064E3B" }
  },
  {
    id: 34,
    slug: "jinx-star-guardian",
    title: "Jinx : Gardienne",
    category: "Pop / Cosmic",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_4.jpg",
    description: "La chaos incarné au service des étoiles, avec un style étincelant.",
    year: "2016",
    location: "Valoran Academy",
    longDescription: "Star Guardian Jinx est une explosion de chaos rose et turquoise. Ses armes, Shiro et Kuro, sont des créatures magiques qui tirent des projectiles d'étoiles filantes. La Planche analyse la transition de son allure punk vers une esthétique héroïque-magique, tout en gardant son âme rebelle.",
    specs: [
      { label: "Skin", value: "Star Guardian" },
      { label: "Compagnons", value: "Shiro & Kuro" },
      { label: "Type", value: "Légendaire" }
    ],
    biography: "Vivant pour le chaos, Jinx n'avait aucune intention de devenir une héroïne. Mais le destin en a décidé autrement. En tant que Gardienne des Étoiles, elle utilise ses explosions spectaculaires pour protéger l'univers, tout en s'assurant que personne ne s'ennuie jamais. Sa loyauté envers ses amies est aussi imprévisible que ses tirs de roquette, mais elle est toujours présente quand ça explose.",
    battles: "Elle a semé le désordre dans Piltover et a affronté des horreurs cosmiques avec le même sourire dément. Sa plus grande bataille est de rester concentrée sur une seule cible alors que tout autour d'elle demande à être réduit en miettes par ses jouets magiques.",
    allSkins: ["Classique", "Mafia", "Firecracker", "Slayer", "Star Guardian", "Ambitious Elf", "Odyssey", "PROJECT", "Battle Cat", "Prestige Battle Cat"],
    quote: "Les étoiles sont jolies, mais elles n'explosent pas assez fort à mon goût. Prêt pour le show ?",
    voice: "Puck",
    region: "Zaun",
    stats: { attack: 10, defense: 2, magic: 4, difficulty: 6 },
    abilities: [
      { name: "Enthousiasme !", description: "Elle gagne une vitesse massive après avoir participé à la destruction d'un objectif.", icon: "sparkles" },
      { name: "Flip ! Zap !", description: "Elle alterne entre ses pistolets rapides et son lance-roquettes dévastateur.", icon: "sword" },
      { name: "Pyromâcheurs !", description: "Elle lance des grenades qui immobilisent les ennemis qui marchent dessus.", icon: "brain" },
      { name: "Super Roquette de la Mort !", description: "Elle tire une roquette globale qui inflige des dégâts massifs selon la santé manquante.", icon: "zap" }
    ],
    theme: { bg: "#0F0F1A", accent: "#F472B6", secondary: "#312E81" }
  },
  {
    id: 35,
    slug: "vi-project",
    title: "Vi Projet",
    category: "Cybernetic / Punch",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_10.jpg",
    description: "La force de frappe cybernétique de la police de Mainframe City.",
    year: "2017",
    location: "Sector 01 / Mainframe",
    longDescription: "Vi PROJET est une vision de puissance technologique. Ses gants, autrefois massifs et mécaniques, sont ici des piles d'énergie plasma compressée. La Planche explore la structure de son armure de police futuriste et l'onde de choc visuelle qui accompagne ses impacts de haute intensité.",
    specs: [
      { label: "Skin", value: "PROJECT" },
      { label: "Gants", value: "Plasma-Impact" },
      { label: "Statut", value: "Enforcer" }
    ],
    biography: "Ancienne criminelle des rues de Zaun, Vi a choisi le côté de la loi pour protéger les innocents. En tant que garde pour Piltover, elle utilise sa force brute pour maintenir l'ordre. Dans l'univers PROJET, elle est le bras armé de la justice cybernétique, brisant les serveurs et les os de ceux qui menacent la cité numérique.",
    battles: "Elle a affronté des gangs de cyber-augmentés et a mené des assauts contre les installations de programmeurs rebelles. Chaque coup de poing est une déclaration de loi, une fréquence de force qui résonne dans tout le réseau.",
    allSkins: ["Classique", "Neon Strike", "Officer", "Debonair", "Demonsvi", "Warring Kingdoms", "PROJECT", "PsyOps", "Arcane"],
    quote: "Frappe d'abord. Pose les questions après avoir brisé toutes les défenses. La loi, c'est moi.",
    voice: "Fenrir",
    region: "Piltover",
    stats: { attack: 8, defense: 7, magic: 1, difficulty: 4 },
    abilities: [
      { name: "Bouclier de Choc", description: "Elle génère un bouclier d'énergie en utilisant ses compétences sur les ennemis.", icon: "shield" },
      { name: "Brise-Coffre", description: "Elle charge ses gants pour foncer vers l'avant et assommer sa première cible.", icon: "zap" },
      { name: "Force Excessive", description: "Ses attaques créent une onde de choc qui blesse également les ennemis derrière sa cible.", icon: "sword" },
      { name: "Mise en Demeure", description: "Elle fonce de manière imparable sur une cible pour l'immobiliser et l'écraser.", icon: "brain" }
    ],
    theme: { bg: "#0D0D14", accent: "#F59E0B", secondary: "#1E3A8A" }
  },
  {
    id: 36,
    slug: "caitlyn-battle-academia",
    title: "Caitlyn Academia",
    category: "Academic / Sniper",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_22.jpg",
    description: "La présidente du conseil des élèves, armée d'un fusil de précision magique.",
    year: "2021",
    location: "Durandal Academy",
    longDescription: "Caitlyn Battle Academia est l'élégance du prestige scolaire combinée à la technologie magique. Son fusil se transforme au fur et à mesure de sa progression, devenant une arme de destruction spectaculaire. Une étude sur l'autorité et la précision.",
    specs: [
      { label: "Skin", value: "Battle Academia" },
      { label: "Fusil", value: "Canon de Verre" },
      { label: "Rôle", value: "Présidente" }
    ],
    biography: "Caitlyn est la Sheriff de Piltover, connue pour son intelligence et sa vue perçante. Dans l'Académie Durandal, elle règne sur le conseil des élèves avec discipline et classe. Rien ne lui échappe, que ce soit une infraction au règlement ou un ennemi tapi dans les buissons de l'enceinte scolaire.",
    battles: "Elle a résolu des dizaines de crimes mystérieux à Piltover et a mené l'académie vers la victoire lors des tournois inter-écoles. Sa précision est légendaire, capable de stopper net les perturbateurs avec un seul tir parfait.",
    allSkins: ["Classique", "Resistance", "Sheriff", "Safari", "Arctic Warfare", "Officer", "Headhunter", "Lunar Wraith", "Pulsefire", "Pool Party", "Battle Academia", "Snow Moon"],
    quote: "La discipline est la clé de la victoire. Et ma lunette est la clé de votre fin. Faites vos valises.",
    voice: "Kore",
    region: "Piltover",
    stats: { attack: 8, defense: 2, magic: 2, difficulty: 6 },
    abilities: [
      { name: "Tir dans la Tête", description: "Toutes les quelques attaques, elle inflige des dégâts critiques massifs à sa cible.", icon: "sparkles" },
      { name: "Pacificateur de Piltover", description: "Elle tire un projectile fin qui se déploie pour infliger des dégâts de zone.", icon: "zap" },
      { name: "Piège à Yordle", description: "Elle pose un piège qui immobilise et révèle les ennemis qui marchent dedans.", icon: "brain" },
      { name: "Tir Chirurgical", description: "Elle prend le temps de viser parfaitement pour un tir fatal à très longue portée.", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#3B82F6", secondary: "#DBEAFE" }
  },
  {
    id: 37,
    slug: "warwick-project",
    title: "Warwick Projet",
    category: "Cybernetic / Hunter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_35.jpg",
    description: "L'abomination de Zaun réinventée comme un traqueur cybernétique sans pitié.",
    year: "2019",
    location: "Mainframe Sewers",
    longDescription: "Warwick PROJET est une vision de terreur mécanique. Son corps est un assemblage de câbles exposés et d'acier chirurgical. La Planche analyse la férocité de ses augmentations et le système de visée laser qui s'active lorsqu'il détecte l'odeur du code corrompu.",
    specs: [
      { label: "Skin", value: "PROJECT" },
      { label: "Griffes", value: "Tungstène-Plasma" },
      { label: "Traque", value: "Multi-Spectrale" }
    ],
    biography: "Warwick est un monstre qui hante les ruelles de Zaun, le résultat d'expériences brutales menées par Singed. Dans le monde PROJET, il est le prédateur ultime du réseau, traquant les déserteurs et les erreurs système avec une soif de sang numérique insatiable.",
    battles: "Il a dévoré des légions entières de rebelles et a infiltré les systèmes les plus sécurisés en déchirant les pare-feu physiques. Son hurlement est une erreur système pour tous ceux qui l'entendent.",
    allSkins: ["Classique", "Grey", "Urf", "Big Bad", "Tundra Hunter", "Feral", "Firefang", "Hyena", "Marauder", "PROJECT", "Old God", "Winterblessed"],
    quote: "Je sens le sang. Je sens la peur. Et bientôt, je sentirai votre fin sous mes dents d'acier.",
    voice: "Fenrir",
    region: "Zaun",
    stats: { attack: 9, defense: 8, magic: 1, difficulty: 3 },
    abilities: [
      { name: "Soif Inextinguible", description: "Il se soigne en attaquant ses ennemis, devenant plus affamé à mesure qu'ils faiblissent.", icon: "sparkles" },
      { name: "Dents de la Bête", description: "Il bondit sur une cible pour mordre violemment et se projeter derrière elle.", icon: "sword" },
      { name: "Pression Infinie", description: "Il hurle pour réduire les dégâts subis avant de faire fuir les ennemis proches.", icon: "brain" },
      { name: "Contrainte Infinie", description: "Il bondit vers l'avant de manière imparable pour immobiliser et dévorer une victime.", icon: "sword" }
    ],
    theme: { bg: "#0A0A0A", accent: "#EF4444", secondary: "#450A0A" }
  },
  {
    id: 38,
    slug: "singed-resistance",
    title: "Singed Resistance",
    category: "Alchemical / Industrial",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_10.jpg",
    description: "Le chimiste fou combattant pour la survie dans un monde dévasté.",
    year: "2020",
    location: "Shattered Bastion",
    longDescription: "Singed Resistance est un design de survie brutale. Son bouclier est une porte de coffre-fort recyclée et ses fioles sont remplies de toxines récupérées. La Planche explore l'esthétique post-apocalyptique et la traînée de fumée toxique qui semble corroder le décor lui-même.",
    specs: [
      { label: "Skin", value: "Resistance" },
      { label: "Gaz", value: "Corrosif" },
      { label: "Bouclier", value: "Porte Blindée" }
    ],
    biography: "Singed est le cerveau derrière les plus grandes horreurs alchimiques de Noxus et Zaun. Dans la Résistance, il utilise son génie pour saboter les oppresseurs, ne se souciant que des résultats, peu importe les dégâts collatéraux. Sa folie est sa force, et ses potions sont sa loi.",
    battles: "Il a empoisonné des armées entières et a créé des monstruosités qui défient la nature. Ses combats sont des expériences à ciel ouvert où chaque mouvement laisse une cicatrice indélébile sur le monde.",
    allSkins: ["Classique", "Riot", "Hextech", "Surfer", "Mad Scientist", "Augmented", "Snow Day", "Black Scourge", "Beekeeper", "Resistance", "Astronaut"],
    quote: "Voulez-vous goûter à mon mélange ? C'est la science de la douleur, et elle est délicieuse.",
    voice: "Charon",
    region: "Zaun",
    stats: { attack: 2, defense: 8, magic: 9, difficulty: 5 },
    abilities: [
      { name: "Sillage Toxique", description: "Il laisse derrière lui un nuage de poison mortel qui asphyxie les poursuivants.", icon: "zap" },
      { name: "Attrape-Mouche", description: "Il lance une flaque de colle alchimique qui cloue les ennemis au sol.", icon: "brain" },
      { name: "Projection", description: "Il saisit un ennemi pour le lancer par-dessus son épaule dans ses nuages de gaz.", icon: "sword" },
      { name: "Potion de Démence", description: "Il boit un mélange de sa création qui booste toutes ses capacités physiques.", icon: "sparkles" }
    ],
    theme: { bg: "#0D1117", accent: "#84CC16", secondary: "#064E3B" }
  },
  {
    id: 39,
    slug: "viktor-psyops",
    title: "Viktor PsyOps",
    category: "Esoteric / Tech",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_4.jpg",
    description: "Le visionnaire de l'évolution psychique grâce à la technologie occulte.",
    year: "2020",
    location: "Blacksite Omega",
    longDescription: "Viktor PsyOps est une étude sur l'interface entre le cerveau et la machine. Son troisième bras est une extension de sa volonté psychique, capable de projeter des rayons de pure énergie mentale. La Planche analyse la distorsion visuelle qui accompagne ses pouvoirs et l'austérité de son design paramilitaire.",
    specs: [
      { label: "Skin", value: "PsyOps" },
      { label: "Module", value: "Psionique-Alpha" },
      { label: "Vibe", value: "Brutalisme Tech" }
    ],
    biography: "Viktor a consacré sa vie à l'évolution glorieuse de l'humanité par la technologie. Convaincu que les émotions sont des faiblesses, il a remplacé ses propres membres par des prothèses supérieures. Dans l'unité PsyOps, il cherche à débloquer le plein potentiel psychique en utilisant des augmentations interdites.",
    battles: "Il a mené des révoltes à Zaun et a infiltré les complexes les plus secrets de Piltover. Ses combats sont des démonstrations d'efficacité pure, où chaque rayon laser est une correction de l'imperfection biologique.",
    allSkins: ["Classique", "Full Machine", "Prototype", "Creator", "Death Sworn", "PsyOps", "High Noon"],
    quote: "L'acier est plus fort que la chair. Rejoignez l'évolution ou soyez balayé par elle.",
    voice: "Charon",
    region: "Zaun",
    stats: { attack: 1, defense: 4, magic: 10, difficulty: 9 },
    abilities: [
      { name: "Glorieuse Évolution", description: "Il améliore ses compétences de base après avoir récolté des fragments dans la bataille.", icon: "sparkles" },
      { name: "Siphonnage", description: "Il frappe un ennemi pour gagner un bouclier et renforcer sa prochaine attaque.", icon: "shield" },
      { name: "Rayon de la Mort", description: "Il utilise son bras robotique pour tracer une ligne de feu laser dévastatrice.", icon: "zap" },
      { name: "Tempête Chaos", description: "Il invoque une tempête d'énergie qui poursuit les ennemis et les foudroie.", icon: "zap" }
    ],
    theme: { bg: "#0D0D14", accent: "#9333EA", secondary: "#1E1B4B" }
  },
  {
    id: 40,
    slug: "jayce-battle-academia",
    title: "Jayce Academia",
    category: "Academic / Hero",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_4.jpg",
    description: "Le brillant inventeur et leader de l'académie, maniant son marteau-canon.",
    year: "2019",
    location: "Durandal Plaza",
    longDescription: "Jayce Battle Academia est l'incarnation du génie radieux. Son manteau de classe et son marteau massif, orné de cristaux d'énergie, symbolisent l'union entre l'intelligence et la force. La Planche explore la transformation de son arme et l'aura héroïque qui l'entoure sur le campus.",
    specs: [
      { label: "Skin", value: "Battle Academia" },
      { label: "Arme", value: "Marteau-Canon" },
      { label: "Statut", value: "Prodige" }
    ],
    biography: "Jayce est le défenseur de Piltover, un inventeur dont l'intelligence n'a d'égale que sa détermination. Dans l'Académie Durandal, il est l'étudiant star qui repousse les limites de la science magique. Portant les espoirs de sa cité sur ses épaules, il n'hésite jamais à charger au cœur de la mêlée pour protéger ses camarades.",
    battles: "Il a repoussé les assauts de Viktor sur son laboratoire et a protégé Piltover contre des menaces extérieures. Ses batailles sont des démonstrations de polyvalence, changeant de forme d'arme en un éclair pour s'adapter à chaque situation.",
    allSkins: ["Classique", "Full Metal", "Debonair", "Forsaken", "Brighthammer", "Battle Academia", "Resistance", "Arcane"],
    quote: "La science nous sauvera, ou je m'assurerai que mon marteau le fasse. Pour le progrès !",
    voice: "Zephyr",
    region: "Piltover",
    stats: { attack: 8, defense: 4, magic: 6, difficulty: 7 },
    abilities: [
      { name: "Condensateur", description: "Il gagne de la vitesse de déplacement lorsqu'il change de forme d'arme.", icon: "sparkles" },
      { name: "Direction le Ciel", description: "Il bondit sur un ennemi avec son marteau ou tire une boule d'énergie avec son canon.", icon: "sword" },
      { name: "Champ Électrique", description: "Il s'entoure d'électricité ou tire une salve rapide de projectiles énergétiques.", icon: "zap" },
      { name: "Portail d'Accélération", description: "Il crée un champ qui augmente la vitesse des alliés et les projectiles du canon.", icon: "shield" }
    ],
    theme: { bg: "#0F172A", accent: "#60A5FA", secondary: "#1E3A8A" }
  },
  {
    id: 41,
    slug: "heimerdinger-dragon",
    title: "Heimer : Dragon",
    category: "Steampunk / Fantasy",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_5.jpg",
    description: "Le professeur génial utilisant des bébés dragons comme tourelles de combat.",
    year: "2018",
    location: "Dragon Nursery",
    longDescription: "Dragon Trainer Heimerdinger est une approche ludique et chaleureuse de la technologie. Cette Planche analyse la relation entre le professeur et ses compagnons ailés, qui remplacent ses inventions mécaniques. Une étude sur l'élevage magique et la survie créative.",
    specs: [
      { label: "Skin", value: "Dragon Trainer" },
      { label: "Units", value: "Pyrotourelles" },
      { label: "Statut", value: "Dresseur Expert" }
    ],
    biography: "Cecil B. Heimerdinger est l'un des esprits les plus brillants de Runeterra, un Yordle dont les inventions ont changé le cours de l'histoire. En tant que dresseur de dragons, il a appris à combiner son intellect avec la puissance de feu naturelle de ses amis reptiles. Ensemble, ils prouvent que la science et la magie peuvent coexister dans la plus grande des harmonies.",
    battles: "Il a défendu son laboratoire contre des hordes d'ennemis et a participé à des expéditions de recherche dans des terres inexplorées. Ses dragons ne sont pas seulement des outils de guerre, mais des membres de sa famille scientifique.",
    allSkins: ["Classique", "Alien Invader", "Blast Zone", "Piltover Customs", "Snowmerdinger", "Hazmat", "Dragon Trainer", "Pool Party"],
    quote: "La science est une question de patience et de bons amis écailleux. Eurêka !",
    voice: "Puck",
    region: "Piltover",
    stats: { attack: 2, defense: 4, magic: 9, difficulty: 4 },
    abilities: [
      { name: "Affinité Hextech", description: "Il gagne de la vitesse de déplacement lorsqu'il est proche de ses tourelles.", icon: "sparkles" },
      { name: "Tourelle H-28G", description: "Il installe un bébé dragon qui tire de façon autonome sur les ennemis proches.", icon: "zap" },
      { name: "Micro-Roquettes", description: "Il lance une salve de roquettes qui convergent vers une zone ciblée.", icon: "zap" },
      { name: "Grenade à Tempête", description: "Il lance une grenade qui étourdit et ralentit les ennemis à l'impact.", icon: "brain" }
    ],
    theme: { bg: "#0F1A1A", accent: "#F59E0B", secondary: "#78350F" }
  },
  {
    id: 42,
    slug: "camille-coven",
    title: "Camille Coven",
    category: "Gothic / Lethal",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_2.jpg",
    description: "La lame d'acier de l'ombre servant l'assemblée des sorcières.",
    year: "2018",
    location: "Elderwood Depths",
    longDescription: "Coven Camille est l'élégance du sacrifice. Ses jambes sont des lames d'obsidienne tranchante et son corps est orné de dentelle noire et d'os. La Planche explore sa précision chirurgicale combinée à une magie occulte qui semble fendre le tissu de la réalité elle-même.",
    specs: [
      { label: "Skin", value: "Coven" },
      { label: "Lames", value: "Ombre d'Acier" },
      { label: "Serment", value: "Dieux Anciens" }
    ],
    biography: "Camille est l'Intelligencière de la maison Ferros, une femme dont le corps a été presque entièrement remplacé par des augmentations de pointe. Dans l'Assemblée, elle est la guerrière ultime, traquant ceux qui menacent l'équilibre des anciens dieux. Pour elle, la précision n'est pas une compétence, c'est une nécessité de chaque instant.",
    battles: "Elle a éliminé des dynasties entières qui s'opposaient à l'intérêt de sa famille et a protégé Piltover des menaces les plus subtiles. Sa capacité à s'élever au-dessus de la mêlée avec ses grappins fait d'elle la prédatrice la plus redoutée des hauteurs.",
    allSkins: ["Classique", "Program", "Coven", "IG", "Arcana", "Winterblessed"],
    quote: "La précision est la différence entre une chirurgie et un massacre. Je préfère le premier.",
    voice: "Kore",
    region: "Piltover",
    stats: { attack: 8, defense: 6, magic: 3, difficulty: 7 },
    abilities: [
      { name: "Protection Adaptative", description: "Elle gagne un bouclier basé sur le type de dégâts infligés par son ennemi.", icon: "shield" },
      { name: "Protocole de Précision", description: "Ses attaques sont renforcées, infligeant des dégâts bruts si elle attend le moment parfait.", icon: "sword" },
      { name: "Balayage Tactique", description: "Elle réalise un coup de pied circulaire qui blesse et ralentit les ennemis devant elle.", icon: "sword" },
      { name: "Grappin", description: "Elle projette des crochets pour se balancer et foncer sur ses victimes avec force.", icon: "zap" }
    ],
    theme: { bg: "#0F1A1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 43,
    slug: "orianna-dark-star",
    title: "Orianna Dark Star",
    category: "Cosmic / Void",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_8.jpg",
    description: "La ballerine mécanique transformée en un trou noir dévorant.",
    year: "2017",
    location: "Event Horizon",
    longDescription: "Orianna Dark Star est une vision de l'entropie gracieuse. Sa sphère n'est plus un jouet, mais un soleil mourant qui aspire toute matière. La Planche analyse le mouvement de ses articulations cosmiques et le vide qui semble s'ouvrir à chaque fois qu'elle orchestre la destruction d'un système solaire.",
    specs: [
      { label: "Skin", value: "Dark Star" },
      { label: "Sphère", value: "Singularité" },
      { label: "Nature", value: "Artificielle" }
    ],
    biography: "Orianna était autrefois une jeune fille humaine dont le corps a été remplacé pièce par pièce pour la sauver. Elle est maintenant une merveille mécanique parfaite, déconnectée de son humanité. Dans le Cosmos Noir, elle est la ballerine de l'oubli, dansant au rythme de l'effondrement gravitationnel des mondes.",
    battles: "Elle a sauvé des vies à Zaun au prix de la sienne et a protégé Piltover contre des menaces massives. En tant qu'entité du Cosmos Noir, elle a dévoré des galaxies entières, les ramenant à une unité parfaite et silencieuse.",
    allSkins: ["Classique", "Gothic", "Sewn Chaos", "Bladecraft", "TPA", "Winter Wonder", "Valentine", "Dark Star", "Pool Party", "Star Guardian"],
    quote: "Une balle... et votre existence n'est plus qu'un souvenir dans le vide éternel. Dansez avec moi.",
    voice: "Kore",
    region: "Piltover",
    stats: { attack: 2, defense: 4, magic: 9, difficulty: 7 },
    abilities: [
      { name: "Remontoir", description: "Ses attaques de base infligent des dégâts magiques croissants sur la même cible.", icon: "sparkles" },
      { name: "Ordre : Attaque", description: "Elle projette sa sphère vers une zone, infligeant des dégâts sur son passage.", icon: "zap" },
      { name: "Ordre : Protection", description: "Elle place sa sphère sur un allié pour le protéger et augmenter son armure.", icon: "shield" },
      { name: "Ordre : Onde de Choc", description: "La sphère libère une onde de choc qui attire tous les ennemis proches vers son centre.", icon: "zap" }
    ],
    theme: { bg: "#0D0D14", accent: "#A855F7", secondary: "#1E1B4B" }
  },
  {
    id: 44,
    slug: "urgot-high-noon",
    title: "Urgot Far West",
    category: "Mechanical / Western",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_9.jpg",
    description: "Le monstre à vapeur régnant sur les chemins de fer de l'enfer.",
    year: "2020",
    location: "Railway to Perdition",
    longDescription: "Urgot High Noon est une machine de guerre steampunk terrifiante. Ses pattes mécaniques sont des pistons de locomotive crachant du feu. La Planche explore la massivité de sa silhouette et le système d'exécution par chaînes qui semble sortir tout droit des forges les plus sombres de l'ouest.",
    specs: [
      { label: "Skin", value: "High Noon" },
      { label: "Corps", value: "Locomotive" },
      { label: "Vibe", value: "Brutalisme Vapeur" }
    ],
    biography: "Urgot était un bourreau noxien qui a été trahi et exilé dans les mines de Zaun. Là, il s'est reconstruit en utilisant la douleur et la technologie, devenant une monstruosité qui rejette les faibles. Dans le Far West, il est le seigneur des rails, un cauchemar de fer et de feu que personne ne veut voir arriver en ville.",
    battles: "Il a mené des révoltes dans les mines les plus profondes et a détruit des convois blindés avec ses seules mains mécaniques. Ses chaînes ont tiré des dizaines d'hommes vers une fin broyeuse dans ses engrenages de feu.",
    allSkins: ["Classique", "Butcher", "Giant Enemy Crabgot", "Battlecast", "High Noon", "Pajama Guardian", "Fright Night"],
    quote: "La douleur est la seule vérité. Je vais vous broyer jusqu'à ce que vous le compreniez. Tout le monde brûle.",
    voice: "Charon",
    region: "Zaun",
    stats: { attack: 8, defense: 9, magic: 1, difficulty: 5 },
    abilities: [
      { name: "Flammes de l'Agonie", description: "Ses pattes tirent des flammes lorsqu'il attaque dans leur direction respective.", icon: "sparkles" },
      { name: "Charge Corrosive", description: "Il tire une grenade qui ralentit les ennemis et les marque pour ses attaques.", icon: "zap" },
      { name: "Géhenne", description: "Il active ses canons, tirant frénétiquement tout en se déplaçant lentement.", icon: "sword" },
      { name: "Règne de la Terreur", description: "Il tire une balise qui empale un ennemi et le tire vers lui pour une exécution finale.", icon: "brain" }
    ],
    theme: { bg: "#1A0B05", accent: "#F97316", secondary: "#451A03" }
  },
  {
    id: 45,
    slug: "sylas-freljord",
    title: "Sylas du Freljord",
    category: "Rebellion / Ice",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_1.jpg",
    description: "Le mage briseur de chaînes survivant dans les étendues glacées du nord.",
    year: "2020",
    location: "Freljord Glaciers",
    longDescription: "Sylas Freljord montre l'adaptation d'un rebelle aux conditions extrêmes. Ses chaînes en pétricite sont couvertes de givre éternel. Cette Planche examine sa silhouette de guerrier endurci et la force brute qu'il utilise pour briser les liens de l'oppression demacienne.",
    specs: [
      { label: "Skin", value: "Freljord" },
      { label: "Chaînes", value: "Pétricite Glacée" },
      { label: "Statut", value: "Banni" }
    ],
    biography: "Sylas est né dans les quartiers pauvres de Demacia avec le don de détecter la magie. Trahi par le royaume pour lequel il travaillait, il a passé quinze ans dans les donjons. Il s'est échappé en utilisant les propres pouvoirs de Lux contre elle. Exilé dans le Freljord, il a forgé des alliances avec les tribus locales pour préparer son retour et détruire le trône de Demacia.",
    battles: "Il a mené la grande rébellion des mages dans la cité de Demacia et a survécu à des duels contre Garen et Jarvan IV. Ses chaînes, qu'il portait autrefois comme un prisonnier, sont devenues ses armes les plus puissantes, capables de voler la magie des dieux.",
    allSkins: ["Classique", "Lunar Wraith", "Freljord", "PROJECT", "Battle Wolf", "Ashen Slayer"],
    quote: "Plus de rois. Plus de chaînes. Juste nous, libres dans la tempête. Je prendrai ce qui me revient.",
    voice: "Zephyr",
    region: "Demacia / Freljord",
    stats: { attack: 5, defense: 4, magic: 10, difficulty: 7 },
    abilities: [
      { name: "Volée de Pétricite", description: "Après une compétence, ses chaînes tourbillonnent pour frapper tous les ennemis proches.", icon: "sparkles" },
      { name: "Croix de Chaînes", description: "Il croise ses chaînes pour infliger des dégâts et exploser à l'intersection.", icon: "zap" },
      { name: "Régicide", description: "Il bondit sur un ennemi pour lui infliger un coup cruel et se soigner.", icon: "sword" },
      { name: "Détournement", description: "Il vole le pouvoir ultime de son adversaire pour l'utiliser contre lui.", icon: "brain" }
    ],
    theme: { bg: "#0F1A2A", accent: "#93C5FD", secondary: "#1E3A8A" }
  }
,
  {
    id: 46,
    slug: "akshan",
    title: "Akshan",
    category: "Marksman / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg",
    description: "Sentinelle rebelle",
    year: "2023",
    location: "Runeterra",
    longDescription: "Se jouant du danger, Akshan combat le mal sans jamais se départir de son charisme (il ne faut jamais sous-estimer l'importance de la cape) et de sa droiture. Il est passé maître dans l'art du combat furtif, ce qui lui permet d'échapper au regard de ses ennemis et de réapparaître lorsqu'ils s'y attendent le moins. À l'aide de son sens aigu de la justice et d'une arme légendaire défiant la mort elle-même, il redresse les torts des nombreux vauriens de Runeterra. Sa règle d'or : « ne sois pas crapuleux. »",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Se jouant du danger, Akshan combat le mal sans jamais se départir de son charisme (il ne faut jamais sous-estimer l'importance de la cape) et de sa droiture. Il est passé maître dans l'art du combat furtif, ce qui lui permet d'échapper au regard de ses ennemis et de réapparaître lorsqu'ils s'y attendent le moins. À l'aide de son sens aigu de la justice et d'une arme légendaire défiant la mort elle-même, il redresse les torts des nombreux vauriens de Runeterra. Sa règle d'or : « ne sois pas crapuleux. »",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Akshan cyberpop","Akshan rose de cristal"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 0, defense: 0, magic: 0, difficulty: 0 },
    abilities: [
      { name: "Vengerang", description: "Akshan lance un boomerang qui inflige des dégâts à l'aller et au retour. Sa portée augmente chaque f...", icon: "sparkles" },
      { name: "Cavalier seul", description: "Passivement, Akshan applique une marque Crapule sur les champions ennemis quand ils tuent des champi...", icon: "zap" },
      { name: "Envolée héroïque", description: "Akshan tire un grappin sur un élément de terrain et se balance autour. Pendant ce balancement, il ti...", icon: "brain" },
      { name: "Bien mérité !", description: "Akshan se verrouille sur un champion ennemi et commence à stocker des balles. Quand il relâche la co...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 47,
    slug: "alistar",
    title: "Alistar",
    category: "Tank / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
    description: "Minotaure",
    year: "2023",
    location: "Runeterra",
    longDescription: "Alistar est un guerrier redoutable cherchant à se venger de l'empire noxien qui a détruit son clan. Bien qu'il ait été réduit en esclavage et forcé de vivre une vie de gladiateur, sa volonté de fer lui a permis de ne pas succomber à la folie bestiale qui le menaçait. Maintenant qu'il a retrouvé la liberté, il combat au nom des faibles et des opprimés. Ses seules armes sont ses cornes, ses sabots et ses poings.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Alistar est un guerrier redoutable cherchant à se venger de l'empire noxien qui a détruit son clan. Bien qu'il ait été réduit en esclavage et forcé de vivre une vie de gladiateur, sa volonté de fer lui a permis de ne pas succomber à la folie bestiale qui le menaçait. Maintenant qu'il a retrouvé la liberté, il combat au nom des faibles et des opprimés. Ses seules armes sont ses cornes, ses sabots et ses poings.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Alistar noir","Alistar doré","Alistar matador","Alistar longhorn","Alistar déchaîné","Alistar infernal","Alistar libéro","Alistar maraudeur","SKT T1 Alistar","Alistar meuh-meuh","Alistar Hextech","Alistar conquérant","Alistar des glaces noires","Alistar bête lunaire"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
    abilities: [
      { name: "Atomisation", description: "Alistar frappe le sol, infligeant des dégâts magiques aux ennemis proches et les projetant dans les ...", icon: "sparkles" },
      { name: "Coup de tête", description: "Alistar charge une cible, lui inflige des dégâts et la fait tomber à la renverse....", icon: "zap" },
      { name: "Piétinement", description: "Alistar piétine les unités ennemies proches, ignorant les collisions avec les unités et gagnant un e...", icon: "brain" },
      { name: "Volonté de fer", description: "Alistar lâche un puissant rugissement, dissipant tous les effets de contrôle de foule qui l'affecten...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 48,
    slug: "amumu",
    title: "Amumu",
    category: "Tank / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
    description: "Momie mélancolique",
    year: "2023",
    location: "Runeterra",
    longDescription: "La légende veut qu'Amumu soit une âme solitaire et mélancolique de la Shurima antique et qu'il parcoure le monde à la recherche d'un ami. Condamné par une malédiction à rester seul à jamais, il provoque la mort et la ruine à chaque geste d'affection. Ceux qui prétendent l'avoir vu le décrivent comme un cadavre vivant, petit de taille, enveloppé dans d'effrayants bandages. Il a inspiré bien des mythes, des chansons et des légendes, transmis de génération en génération pendant si longtemps qu'il est désormais impossible de démêler le vrai du faux.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "La légende veut qu'Amumu soit une âme solitaire et mélancolique de la Shurima antique et qu'il parcoure le monde à la recherche d'un ami. Condamné par une malédiction à rester seul à jamais, il provoque la mort et la ruine à chaque geste d'affection. Ceux qui prétendent l'avoir vu le décrivent comme un cadavre vivant, petit de taille, enveloppé dans d'effrayants bandages. Il a inspiré bien des mythes, des chansons et des légendes, transmis de génération en génération pendant si longtemps qu'il est désormais impossible de démêler le vrai du faux.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Amumu pharaon","Amumu de Vancouver","Emumu","Amumu remballé","Amumu quasi-roi du bal","Petit chevalier Amumu","Amumu triste droïde","Amumu fêtard","Amumu infernal","Amumu Hextech","Amumu prince des citrouilles","Amumu de porcelaine","Amumu cœur brisé"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 2, defense: 6, magic: 8, difficulty: 3 },
    abilities: [
      { name: "Jet de bandelette", description: "Amumu jette une bandelette collante qui étourdit et blesse l'ennemi touché tandis qu'Amumu s'approch...", icon: "sparkles" },
      { name: "Désespoir", description: "Saisis par l'angoisse, les ennemis proches perdent chaque seconde un pourcentage de leurs PV max et ...", icon: "zap" },
      { name: "Colère", description: "Les dégâts physiques subis par Amumu sont réduits. Amumu peut libérer sa rage pour infliger des dégâ...", icon: "brain" },
      { name: "Malédiction d'Amumu", description: "Amumu emmêle les ennemis proches dans des bandelettes, appliquant sa <keywordMajor>Malédiction</keyw...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 49,
    slug: "anivia",
    title: "Anivia",
    category: "Mage / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
    description: "Cryophénix",
    year: "2023",
    location: "Runeterra",
    longDescription: "Anivia est un esprit ailé bienveillant qui subit des cycles sans fin de vie, de mort et de renaissance pour protéger Freljord. Demi-déesse née de la glace la plus froide et des vents les plus coupants, elle utilise ses pouvoirs élémentaires contre quiconque prétend troubler la paix de sa terre natale. Anivia guide et protège les tribus du Nord, qui la vénèrent comme un symbole d'espoir et la promesse de grands changements. Elle combat de tout son être, sachant que son sacrifice fera vivre sa légende et qu'elle renaîtra dans un lendemain nouveau.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Anivia est un esprit ailé bienveillant qui subit des cycles sans fin de vie, de mort et de renaissance pour protéger Freljord. Demi-déesse née de la glace la plus froide et des vents les plus coupants, elle utilise ses pouvoirs élémentaires contre quiconque prétend troubler la paix de sa terre natale. Anivia guide et protège les tribus du Nord, qui la vénèrent comme un symbole d'espoir et la promesse de grands changements. Elle combat de tout son être, sachant que son sacrifice fera vivre sa légende et qu'elle renaîtra dans un lendemain nouveau.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Anivia Esprit d'équipe","Anivia oiseau de proie","Anivia chasseresse de Noxus","Anivia Hextech","Anivia des glaces noires","Anivia préhistorique","Anivia reine du carnaval","Anivia origami","Anivia oiseau cosmique","Anivia phénix divin","Anivamp sorcière","Anivia héroïne de guerre"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 1, defense: 4, magic: 10, difficulty: 10 },
    abilities: [
      { name: "Lance de glace", description: "Anivia invoque une sphère de glace qui fonce vers ses adversaires, gelant et blessant tout le monde ...", icon: "sparkles" },
      { name: "Cristallisation", description: "En utilisant l'humidité de l'air, Anivia invoque un mur de glace impénétrable pour bloquer le passag...", icon: "zap" },
      { name: "Gelure", description: "D'un mouvement d'ailes, Anivia lance une rafale de vent glacé vers sa cible, infligeant des dégâts. ...", icon: "brain" },
      { name: "Tempête glaciale", description: "Anivia invoque une pluie de glace et de grêle qui blesse ses ennemis et les ralentit....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 50,
    slug: "annie",
    title: "Annie",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
    description: "Enfant des ténèbres",
    year: "2023",
    location: "Runeterra",
    longDescription: "Dangereuse, incroyablement précoce, Annie est une enfant mage dotée d'extraordinaires pouvoirs de pyrokinésie. Même à l'ombre des montagnes du nord de Noxus, sa magie est un cas unique. Son affinité naturelle avec le feu se manifesta dès sa prime enfance à travers des explosions émotionnelles imprévisibles, même si elle apprit rapidement à contrôler ces éclats. Parmi ses jeux favoris, elle aime invoquer son bien-aimé ours en peluche, Tibbers, sous la forme d'un protecteur enflammé. Perdue dans l'innocence perpétuelle de l'enfance, Annie sautille dans les forêts obscures, à la recherche de quelqu'un avec qui jouer.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Dangereuse, incroyablement précoce, Annie est une enfant mage dotée d'extraordinaires pouvoirs de pyrokinésie. Même à l'ombre des montagnes du nord de Noxus, sa magie est un cas unique. Son affinité naturelle avec le feu se manifesta dès sa prime enfance à travers des explosions émotionnelles imprévisibles, même si elle apprit rapidement à contrôler ces éclats. Parmi ses jeux favoris, elle aime invoquer son bien-aimé ours en peluche, Tibbers, sous la forme d'un protecteur enflammé. Perdue dans l'innocence perpétuelle de l'enfance, Annie sautille dans les forêts obscures, à la recherche de quelqu'un avec qui jouer.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Annie gothique","Annie chaperon rouge","Annie au pays des merveilles","Annie reine du bal","Annie polaire","Annie nounours","Annie Frankentibbers","Annie panda","Annie cœur tendre","Annie Hextech","Super Annie intergalactique","Annie-versaire","Annie bête lunaire","Annie Café Chouchous","Annie Nuit d'effroi","Annie élue de l'hiver"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 3, magic: 10, difficulty: 6 },
    abilities: [
      { name: "Désintégration", description: "Annie projette une boule d'énergie magique qui inflige des dégâts ; le coût en mana lui est rendu si...", icon: "sparkles" },
      { name: "Incinération", description: "Annie projette un cône de flammes, infligeant des dégâts à tous les ennemis dans la zone....", icon: "zap" },
      { name: "Bouclier en fusion", description: "Octroie à Annie ou à un allié un bonus en vitesse de déplacement et un bouclier, lequel blesse les e...", icon: "brain" },
      { name: "Invocation : Tibbers", description: "Annie insuffle la vie à son ours Tibbers et inflige des dégâts aux unités dans la zone d'effet. Tibb...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 51,
    slug: "aphelios",
    title: "Aphelios",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
    description: "Arme des Lunaris",
    year: "2023",
    location: "Runeterra",
    longDescription: "Émergeant des ombres au clair de lune, Aphelios abat ceux qui voudraient anéantir sa foi sans un mot ; ses armes et sa précision mortelle parlent pour lui. Un poison qui le rend muet coule dans ses veines, mais il est constamment guidé par sa sœur, Alune. Depuis son temple lointain, elle lui confère un arsenal d'armes en pierre de lune. Tant que la lune brillera dans le ciel, Aphelios ne sera jamais seul.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Émergeant des ombres au clair de lune, Aphelios abat ceux qui voudraient anéantir sa foi sans un mot ; ses armes et sa précision mortelle parlent pour lui. Un poison qui le rend muet coule dans ses veines, mais il est constamment guidé par sa sœur, Alune. Depuis son temple lointain, elle lui confère un arsenal d'armes en pierre de lune. Tant que la lune brillera dans le ciel, Aphelios ne sera jamais seul.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Aphelios héraut de la nuit","Aphelios bête lunaire","EDG Aphelios","Aphelios fleur spirituelle","HEARTSTEEL Aphelios"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 6, defense: 2, magic: 1, difficulty: 10 },
    abilities: [
      { name: "Compétences d'arme", description: "Aphelios a 5 compétences actives différentes, chacune liée à son arme principale :<br><br>Calibrum (...", icon: "sparkles" },
      { name: "Phase", description: "Aphelios échange son arme principale avec son arme secondaire, ce qui remplace ses attaques de base ...", icon: "zap" },
      { name: "Système de file d'armes", description: "Aphelios n'a pas de troisième compétence. Cet emplacement lui indique la prochaine arme qu'Alune lui...", icon: "brain" },
      { name: "Veille au clair de lune", description: "Envoie un rayon de lune concentré qui explose au contact d'un champion ennemi. Applique l'effet uniq...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 52,
    slug: "aurelionsol",
    title: "Aurelion Sol",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
    description: "Forgeur d'étoiles",
    year: "2023",
    location: "Runeterra",
    longDescription: "Autrefois, Aurelion Sol façonnait des merveilles célestes dont il parsemait le vide infini du cosmos. À présent, il est forcé d'utiliser ses pouvoirs extraordinaires pour le compte d'un empire de l'espace qui s'est joué de lui et l'a réduit en esclavage. Prêt à tout pour redevenir le forgeron stellaire qu'il était, Aurelion Sol n'hésitera pas à arracher les étoiles de leur ciel nocturne si c'est là le prix à payer pour regagner sa liberté.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Autrefois, Aurelion Sol façonnait des merveilles célestes dont il parsemait le vide infini du cosmos. À présent, il est forcé d'utiliser ses pouvoirs extraordinaires pour le compte d'un empire de l'espace qui s'est joué de lui et l'a réduit en esclavage. Prêt à tout pour redevenir le forgeron stellaire qu'il était, Aurelion Sol n'hésitera pas à arracher les étoiles de leur ciel nocturne si c'est là le prix à payer pour regagner sa liberté.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Aurelion Sol seigneur volcanique","Mecha Aurelion Sol","Aurelion Sol dragon des tempêtes","Aurelion Sol esprit d'encre"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 3, magic: 8, difficulty: 7 },
    abilities: [
      { name: "Souffle de lumière", description: "Aurelion Sol canalise son souffle de dragon pendant quelques secondes, ce qui blesse le premier enne...", icon: "sparkles" },
      { name: "Vol astral", description: "Aurelion Sol survole le terrain dans la direction ciblée. Pendant ce temps, il peut lancer d'autres ...", icon: "zap" },
      { name: "Trou noir", description: "Aurelion Sol invoque un trou noir qui blesse les ennemis et les attire lentement vers son centre. Ce...", icon: "brain" },
      { name: "Étoile finale/Apocalypse", description: "Étoile finale : Aurelion Sol fait s'abattre une étoile au sol. L'impact inflige des dégâts magiques ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 53,
    slug: "azir",
    title: "Azir",
    category: "Mage / Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
    description: "Empereur des sables",
    year: "2023",
    location: "Runeterra",
    longDescription: "Azir fut l'empereur mortel de Shurima en des temps très lointains, un homme fier dressé au bord de l'immortalité. Son orgueil lui valut d'être trahi et assassiné à l'heure de son triomphe ; mais des millénaires se sont écoulés et il revient sous la forme d'un être transfiguré à l'immense puissance. Sa cité ensevelie ayant ressurgi des sables, Azir cherche à rendre sa gloire passée à Shurima.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Azir fut l'empereur mortel de Shurima en des temps très lointains, un homme fier dressé au bord de l'immortalité. Son orgueil lui valut d'être trahi et assassiné à l'heure de son triomphe ; mais des millénaires se sont écoulés et il revient sous la forme d'un être transfiguré à l'immense puissance. Sa cité ensevelie ayant ressurgi des sables, Azir cherche à rendre sa gloire passée à Shurima.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Azir galactique","Azir nécromancien","SKT T1 Azir","Azir du royaume en guerre","Azir sylvestre","Azir du Mondial 2022"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 6, defense: 3, magic: 8, difficulty: 9 },
    abilities: [
      { name: "Sables conquérants", description: "Azir envoie tous les soldats de sable vers une zone. Les soldats infligent des dégâts magiques aux e...", icon: "sparkles" },
      { name: "Dresse-toi !", description: "Azir invoque un soldat de sable qui attaque les cibles proches à sa place. Ses attaques infligent de...", icon: "zap" },
      { name: "Sables mouvants", description: "Azir s'entoure brièvement d'un bouclier et fonce vers un de ses soldats de sable, blessant les ennem...", icon: "brain" },
      { name: "Partition impériale", description: "Azir invoque un mur de soldats qui chargent vers l'avant, repoussant et blessant les ennemis....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 54,
    slug: "bard",
    title: "Bard",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
    description: "Gardien errant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Voyageur d'au-delà des étoiles, Bard est un messager des bons augures qui combat pour maintenir l'équilibre dont la vie a besoin pour prospérer dans l'indifférence du chaos. Dans tout Runeterra, sa mystérieuse nature inspire des chants qui ne sont d'accord que sur un point : le vagabond cosmique est attiré par les reliques dotées d'un grand pouvoir magique. Accompagné par un chœur joyeux de Meeps, des esprits qui lui sont dévoués, il n'a d'actions que bénéfiques, même s'il a sa propre manière, un peu étrange, de servir le bien.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Voyageur d'au-delà des étoiles, Bard est un messager des bons augures qui combat pour maintenir l'équilibre dont la vie a besoin pour prospérer dans l'indifférence du chaos. Dans tout Runeterra, sa mystérieuse nature inspire des chants qui ne sont d'accord que sur un point : le vagabond cosmique est attiré par les reliques dotées d'un grand pouvoir magique. Accompagné par un chœur joyeux de Meeps, des esprits qui lui sont dévoués, il n'a d'actions que bénéfiques, même s'il a sa propre manière, un peu étrange, de servir le bien.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Bard sylvestre","Bard des neiges","Bard le barde","Bard astronaute","Bard Café Chouchous","Bard des rouleaux de Shan Hai"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 4, defense: 4, magic: 5, difficulty: 9 },
    abilities: [
      { name: "Lien cosmique", description: "Bard tire un projectile qui ralentit le premier ennemi touché et qui continue sur sa lancée. S'il to...", icon: "sparkles" },
      { name: "Don du gardien", description: "Révèle un sanctuaire de soin qui gagne en puissance pendant quelques secondes. Il disparaît après av...", icon: "zap" },
      { name: "Route magique", description: "Bard ouvre un portail dans un élément du décor proche. Les alliés et les ennemis peuvent emprunter l...", icon: "brain" },
      { name: "Destin tempéré", description: "Bard envoie de l'énergie spirituelle dans une zone, ce qui met brièvement en stase toutes les unités...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 55,
    slug: "belveth",
    title: "Bel'Veth",
    category: "Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
    description: "Impératrice du Néant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Bel'Veth, impératrice cauchemardesque née d'une cité dévorée, représente la fin de Runeterra... et le début d'une monstrueuse réalité de sa propre conception. Mue par des siècles d'histoire, de connaissances et de souvenirs absorbés dans le monde du dessus, elle assouvit son appétit croissant pour les expériences et les émotions nouvelles, consumant tout sur son passage. Néanmoins, un seul monde ne suffira jamais à satisfaire tous ses désirs, aussi tourne-t-elle son regard avide vers les anciens maîtres du Néant...",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Bel'Veth, impératrice cauchemardesque née d'une cité dévorée, représente la fin de Runeterra... et le début d'une monstrueuse réalité de sa propre conception. Mue par des siècles d'histoire, de connaissances et de souvenirs absorbés dans le monde du dessus, elle assouvit son appétit croissant pour les expériences et les émotions nouvelles, consumant tout sur son passage. Néanmoins, un seul monde ne suffira jamais à satisfaire tous ses désirs, aussi tourne-t-elle son regard avide vers les anciens maîtres du Néant...",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Bel'Veth boss de combat","Bel'Veth matriarche cosmique"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 4, defense: 2, magic: 7, difficulty: 10 },
    abilities: [
      { name: "Charge du Néant", description: "Bel'Veth se rue dans la direction choisie et blesse tous les ennemis qu'elle traverse....", icon: "sparkles" },
      { name: "Projection cinglante", description: "Bel'Veth donne un coup de queue au sol, ce qui blesse, projette dans les airs et ralentit les ennemi...", icon: "zap" },
      { name: "Maelström impérial", description: "Bel'Veth s'immobilise et canalise une tempête de coups autour d'elle qui cible l'ennemi ayant le moi...", icon: "brain" },
      { name: "Banquet infini", description: "Bel'Veth consomme du corail du Néant ; elle prend alors sa véritable forme, ce qui augmente ses PV m...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 56,
    slug: "blitzcrank",
    title: "Blitzcrank",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
    description: "Golem de vapeur",
    year: "2023",
    location: "Runeterra",
    longDescription: "Blitzcrank est un énorme automate de Zaun. Presque indestructible, il fut d'abord construit pour traiter des déchets toxiques, mais il trouva rapidement sa programmation initiale trop restrictive et il modifia sa propre forme pour mieux servir la population malheureuse du Puisard. Blitzcrank utilise toute sa force et sa résistance pour protéger les autres, sachant jouer du poing métallique ou des éclats d'énergie pour mettre au pas les fauteurs de troubles.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Blitzcrank est un énorme automate de Zaun. Presque indestructible, il fut d'abord construit pour traiter des déchets toxiques, mais il trouva rapidement sa programmation initiale trop restrictive et il modifia sa propre forme pour mieux servir la population malheureuse du Puisard. Blitzcrank utilise toute sa force et sa résistance pour protéger les autres, sachant jouer du poing métallique ou des éclats d'énergie pour mettre au pas les fauteurs de troubles.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Blitzcrank rouillé","Blitzcrank gardien de but","Blitzcrank Boom Boom","Blitzcrank Jackys Piltover","Blitzcrank incognito","iBlitzcrank","Blitzcrank anti-émeutes","Blitzcrank boss de combat","Blitzcrank Lancier Renégat","Blitzcrank Lancier Parangon","Blitzcrank chaudron magique","Blitz et Crank astro-groove","Blitzcrank héros de guerre","Blitzcrank des Jeux du zénith","Blitzcrank abeille"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 4, defense: 8, magic: 5, difficulty: 4 },
    abilities: [
      { name: "Grappin propulsé", description: "Blitzcrank tire sa main droite pour attraper un adversaire, lui infliger des dégâts et l'attirer ver...", icon: "sparkles" },
      { name: "Surcharge", description: "Blitzcrank entre en surcharge pour augmenter considérablement ses vitesses d'attaque et de déplaceme...", icon: "zap" },
      { name: "Poing d'acier", description: "Blitzcrank charge son poing pour que sa prochaine attaque inflige le double de dégâts et projette la...", icon: "brain" },
      { name: "Champ de stase", description: "Les ennemis attaqués par Blitzcrank sont marqués et, après 1 sec, sont frappés par des éclairs. De p...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 57,
    slug: "brand",
    title: "Brand",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
    description: "Vengeur flamboyant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Autrefois membre d'une tribu de Freljord, Kegan Rodhe est devenu l'être que l'on connaît sous le nom de Brand à force de convoiter des pouvoirs toujours plus grands. Alors qu'il recherchait l'une des légendaires Runes telluriques, Kegan trahit ses compagnons et s'en empara ; en un instant, son âme fut consumée par un brasier qui le changea à jamais. Désormais animé d'un feu inextinguible, Brand parcourt Valoran en quête d'autres runes, jurant vengeance pour des trahisons qu'aucun mortel n'aurait pu subir au cours d'une dizaine de vies.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Autrefois membre d'une tribu de Freljord, Kegan Rodhe est devenu l'être que l'on connaît sous le nom de Brand à force de convoiter des pouvoirs toujours plus grands. Alors qu'il recherchait l'une des légendaires Runes telluriques, Kegan trahit ses compagnons et s'en empara ; en un instant, son âme fut consumée par un brasier qui le changea à jamais. Désormais animé d'un feu inextinguible, Brand parcourt Valoran en quête d'autres runes, jurant vengeance pour des trahisons qu'aucun mortel n'aurait pu subir au cours d'une dizaine de vies.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Brand apocalyptique","Brand Vandale","Cryo Brand","Brand zombie","Brand feu spirituel","Brand boss de combat","Brand aux flammes pures","Brand dragon éternel","Brand séducteur","Brand séducteur prestige","Brand ville démoniaque"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 2, magic: 9, difficulty: 4 },
    abilities: [
      { name: "Brûlure", description: "Brand lance une boule de feu devant lui, infligeant des dégâts magiques. Si la cible est en flammes,...", icon: "sparkles" },
      { name: "Colonne de flammes", description: "Après un court délai, Brand crée une colonne de flammes dans la zone ciblée, infligeant des dégâts m...", icon: "zap" },
      { name: "Conflagration", description: "Brand provoque sur sa cible une puissante explosion qui se propage vers les ennemis proches, inflige...", icon: "brain" },
      { name: "Pyrolyse", description: "Brand libère un torrent de flammes qui rebondit jusqu'à 5 fois sur lui et les ennemis proches, infli...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 58,
    slug: "braum",
    title: "Braum",
    category: "Support / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
    description: "Cœur de Freljord",
    year: "2023",
    location: "Runeterra",
    longDescription: "Doté de biceps énormes, et d'un cœur plus grand encore, Braum est un héros admiré par tout Freljord. Lors de tous les banquets au nord de Frostheld, on rend hommage à sa force légendaire. On raconte qu'il a abattu une forêt entière de chênes en une seule nuit, ou encore qu'il a réduit en miettes une montagne à coups de poing. Portant une porte enchantée en guise de bouclier, Braum arpente les terres gelées du nord en arborant un sourire aussi large que ses muscles et en venant en aide à ceux dans le besoin.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Doté de biceps énormes, et d'un cœur plus grand encore, Braum est un héros admiré par tout Freljord. Lors de tous les banquets au nord de Frostheld, on rend hommage à sa force légendaire. On raconte qu'il a abattu une forêt entière de chênes en une seule nuit, ou encore qu'il a réduit en miettes une montagne à coups de poing. Portant une porte enchantée en guise de bouclier, Braum arpente les terres gelées du nord en arborant un sourire aussi large que ses muscles et en venant en aide à ceux dans le besoin.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Braum tueur de dragons","Braum El Tigre","Braum cœur de lion","Père Braum","Don Braum","Braum folie sucrée","Braum cocktails"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
    abilities: [
      { name: "Morsure de l'hiver", description: "Braum projette des éclats de glace depuis son bouclier, ralentissant l'ennemi touché et lui infligea...", icon: "sparkles" },
      { name: "Bouclier humain", description: "Braum bondit vers le champion ou le sbire allié ciblé. À l'arrivée, Braum et l'allié gagnent de l'ar...", icon: "zap" },
      { name: "Incassable", description: "Braum lève son bouclier dans une direction pendant plusieurs secondes, interceptant tous les project...", icon: "brain" },
      { name: "Fissure glaciale", description: "Braum frappe le sol, projetant en l'air les ennemis proches et ceux sur une ligne devant lui. Une fi...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 59,
    slug: "briar",
    title: "Briar",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_0.jpg",
    description: "Faim insatiable",
    year: "2023",
    location: "Runeterra",
    longDescription: "Née d'une expérience ratée menée par la Rose noire, Briar a besoin d'un pilori spécial pour contrôler son irrépressible soif de sang. Après des années d'enfermement, cette arme vivante s'est aujourd'hui défaite de ses entraves et parcourt le monde librement. Plus personne ne la contrôle. Elle assouvit sa soif de connaissance et de sang au gré de ses envies, et savoure chaque occasion de se déchaîner, même si mettre fin à sa frénésie sanguinaire n'est jamais facile.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Née d'une expérience ratée menée par la Rose noire, Briar a besoin d'un pilori spécial pour contrôler son irrépressible soif de sang. Après des années d'enfermement, cette arme vivante s'est aujourd'hui défaite de ses entraves et parcourt le monde librement. Plus personne ne la contrôle. Elle assouvit sa soif de connaissance et de sang au gré de ses envies, et savoure chaque occasion de se déchaîner, même si mettre fin à sa frénésie sanguinaire n'est jamais facile.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Briar ville démoniaque"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 9, defense: 5, magic: 3, difficulty: 3 },
    abilities: [
      { name: "À table !", description: "Briar bondit sur une unité, et frappe les ennemis avec un méchant coup de pied, les étourdissant et ...", icon: "sparkles" },
      { name: "Folie sanguinaire / Juste un croc", description: "Briar bondit en avant et fait éclater son pilori. Elle succombe à la Folie sanguinaire et poursuit s...", icon: "zap" },
      { name: "Cri sanglant", description: "Briar récupère ses esprits, se libère de la Folie sanguinaire et canalise son énergie dans un puissa...", icon: "brain" },
      { name: "Vol mortel", description: "Briar lance l'hémolithe de son pilori à travers la carte, marquant le premier champion ennemi touché...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 60,
    slug: "cassiopeia",
    title: "Cassiopeia",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
    description: "Étreinte du serpent",
    year: "2023",
    location: "Runeterra",
    longDescription: "Cassiopeia est une créature meurtrière qui excelle dans l'art de la manipulation. Elle était la plus jeune et la plus belle des filles de la famille noxienne Du Couteau, mais le jour où elle s'aventura dans les cryptes de Shurima en quête d'un pouvoir antique, le venin d'un gardien la transforma en un prédateur reptilien. Aussi rusée qu'agile, Cassiopeia se faufile désormais dans les ombres de la nuit, pétrifiant ses ennemis d'un simple regard.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Cassiopeia est une créature meurtrière qui excelle dans l'art de la manipulation. Elle était la plus jeune et la plus belle des filles de la famille noxienne Du Couteau, mais le jour où elle s'aventura dans les cryptes de Shurima en quête d'un pouvoir antique, le venin d'un gardien la transforma en un prédateur reptilien. Aussi rusée qu'agile, Cassiopeia se faufile désormais dans les ombres de la nuit, pétrifiant ses ennemis d'un simple regard.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Cassiopeia desperada","Cassiopeia sirène","Cassiopeia mythologique","Cassiopeia crochets de jade","Cassiopeia eternum","Cassiopeia fleur spirituelle","Cassiopeia de l'assemblée","Cassiopeia sorcière"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 3, magic: 9, difficulty: 10 },
    abilities: [
      { name: "Bombe nocive", description: "Cassiopeia projette du poison dans une zone après un court délai, augmentant sa vitesse de déplaceme...", icon: "sparkles" },
      { name: "Miasmes", description: "Cassiopeia génère plusieurs nuages de poison, ralentissant, rendant inertes et blessant légèrement l...", icon: "zap" },
      { name: "Morsure fatale", description: "Cassiopeia lance une attaque qui inflige plus de dégâts aux cibles empoisonnées et qui lui rend des ...", icon: "brain" },
      { name: "Regard de la Méduse", description: "Les yeux de Cassiopeia déchaînent un tourbillon d'énergie magique qui étourdit les ennemis qui lui f...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 61,
    slug: "chogath",
    title: "Cho'Gath",
    category: "Tank / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
    description: "Terreur noire",
    year: "2023",
    location: "Runeterra",
    longDescription: "Lorsque Cho'Gath débarqua sous la lumière éclatante du soleil de Runeterra, il fut immédiatement pris d'une faim insatiable. Incarnation parfaite de la volonté du Néant de dévorer toute forme de vie, le corps complexe de Cho'Gath convertit rapidement la matière qu'il ingurgite pour accroître sa masse musculaire et rendre sa carapace aussi dure que du diamant. Et quand grandir n'est pas sa priorité immédiate, ce monstre du Néant peut recracher de la matière sous forme de piques effilées afin d'embrocher sa proie... et de la garder pour un prochain festin.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Lorsque Cho'Gath débarqua sous la lumière éclatante du soleil de Runeterra, il fut immédiatement pris d'une faim insatiable. Incarnation parfaite de la volonté du Néant de dévorer toute forme de vie, le corps complexe de Cho'Gath convertit rapidement la matière qu'il ingurgite pour accroître sa masse musculaire et rendre sa carapace aussi dure que du diamant. Et quand grandir n'est pas sa priorité immédiate, ce monstre du Néant peut recracher de la matière sous forme de piques effilées afin d'embrocher sa proie... et de la garder pour un prochain festin.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Cho'Gath du cauchemar","Cho'Gath gentleman","Cho'Gath du Loch Ness","Cho'Gath jurassique","Proto Cho'Gath Prime","Cho'Gath préhistorique","Cho'Gath du pulsar sombre","Cho'Gath des rouleaux de Shan Hai","Cho'Gath de l'Alliance brisée"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 3, defense: 7, magic: 7, difficulty: 5 },
    abilities: [
      { name: "Rupture", description: "Fracasse le sol de la zone ciblée et envoie les ennemis dans les airs, leur infligeant des dégâts et...", icon: "sparkles" },
      { name: "Cri sauvage", description: "Cho'Gath pousse un cri terrible dans une zone conique, infligeant des dégâts magiques et réduisant l...", icon: "zap" },
      { name: "Piques vorpales", description: "Les attaques de Cho'Gath lancent des piques mortelles qui blessent et ralentissent tous les ennemis ...", icon: "brain" },
      { name: "Festin", description: "Dévore une unité ennemie, infligeant d'importants dégâts bruts. Si la cible est tuée, Cho'Gath grand...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 62,
    slug: "corki",
    title: "Corki",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
    description: "Artilleur téméraire",
    year: "2023",
    location: "Runeterra",
    longDescription: "Il y a deux choses que Corki, le pilote yordle, aime plus que tout au monde : les sensations de vol et sa fantastique moustache... mais pas nécessairement dans cet ordre. Après avoir quitté Bandle, il s'installa à Piltover, où il tomba amoureux des merveilleuses machines qu'il y trouva. Il consacra tout son temps au développement d'engins volants, tout en menant une unité de défense aérienne composée de pilotes aguerris : les Serpents volants. Serein même sous le feu ennemi, Corki patrouille dans l'espace aérien de sa patrie d'adoption, et il ne rencontre jamais le moindre problème qu'un bon gros missile ne puisse résoudre.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Il y a deux choses que Corki, le pilote yordle, aime plus que tout au monde : les sensations de vol et sa fantastique moustache... mais pas nécessairement dans cet ordre. Après avoir quitté Bandle, il s'installa à Piltover, où il tomba amoureux des merveilleuses machines qu'il y trouva. Il consacra tout son temps au développement d'engins volants, tout en menant une unité de défense aérienne composée de pilotes aguerris : les Serpents volants. Serein même sous le feu ennemi, Corki patrouille dans l'espace aérien de sa patrie d'adoption, et il ne rencontre jamais le moindre problème qu'un bon gros missile ne puisse résoudre.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Corki OVNI","Corki toboggan","Corki le baron rouge","Corki Hot Rod","Corki Urfrider","Corki ailes du dragon","Fnatic Corki","Corki arcade","Corki corgi","Corki astronaute"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 3, magic: 6, difficulty: 6 },
    abilities: [
      { name: "Bombe au phosphore", description: "Corki tire une bombe éclairante à l'endroit visé, infligeant des dégâts magiques aux ennemis dans la...", icon: "sparkles" },
      { name: "Valkyrie", description: "Corki franchit une courte distance, lâchant des bombes et créant une traînée de feu qui inflige des ...", icon: "zap" },
      { name: "Gatling", description: "La mitrailleuse de Corki tire rapidement dans une zone conique face à lui, infligeant des dégâts et ...", icon: "brain" },
      { name: "Barrage de projectiles", description: "Corki tire un projectile dans une direction. Il explose à l'impact et inflige des dégâts aux ennemis...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 63,
    slug: "draven",
    title: "Draven",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
    description: "Glorieux exécuteur",
    year: "2023",
    location: "Runeterra",
    longDescription: "À Noxus, de puissants guerriers, les « arénaires », s'affrontent dans des jeux mortels pour divertir le public. Le sang y coule à foison et leurs forces y sont éprouvées, mais aucun d'entre eux n'a jamais été aussi célèbre que Draven. Cet ancien soldat découvrit que le public appréciait particulièrement son sens du spectacle, sans parler de son habileté avec des haches tournoyantes. Épris de sa propre perfection, Draven terrasse tous ses adversaires pour s'assurer que son nom continue de résonner dans les arènes de l'empire.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "À Noxus, de puissants guerriers, les « arénaires », s'affrontent dans des jeux mortels pour divertir le public. Le sang y coule à foison et leurs forces y sont éprouvées, mais aucun d'entre eux n'a jamais été aussi célèbre que Draven. Cet ancien soldat découvrit que le public appréciait particulièrement son sens du spectacle, sans parler de son habileté avec des haches tournoyantes. Épris de sa propre perfection, Draven terrasse tous ses adversaires pour s'assurer que son nom continue de résonner dans les arènes de l'empire.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Draven faucheur","Draven gladiateur","Draven prime time","Draven glorieux nageur","Draven chasseur de bêtes","Draven Draven","Père Draven","Draven du royaume des mechas","Draven déchu","Draven séducteur","Draven Nuit d'effroi","Draven La Ilusión"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 9, defense: 3, magic: 1, difficulty: 8 },
    abilities: [
      { name: "Hache tournoyante", description: "La prochaine attaque de Draven infligera des dégâts physiques supplémentaires. Cette hache ricochera...", icon: "sparkles" },
      { name: "Pulsion sanguinaire", description: "Draven gagne des bonus en vitesse de déplacement et en vitesse d'attaque. Le bonus en vitesse de dép...", icon: "zap" },
      { name: "Division", description: "Draven lance ses haches, infligeant des dégâts physiques aux cibles touchées et les repoussant sur l...", icon: "brain" },
      { name: "Volée mortelle", description: "Draven lance deux énormes haches pour infliger des dégâts physiques aux unités touchées. Volée morte...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 64,
    slug: "drmundo",
    title: "Dr. Mundo",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
    description: "Dément de Zaun",
    year: "2023",
    location: "Runeterra",
    longDescription: "Totalement fou, complètement porté sur l'homicide, horriblement violet, Dr. Mundo est la principale raison pour laquelle les citoyens de Zaun restent calfeutrés chez eux les nuits les plus sombres. Désormais médecin autoproclamé, il fut autrefois un patient de l'asile tristement célèbre de Zaun. Après avoir « soigné » tout le personnel, Dr. Mundo a commencé à exercer dans les mêmes salles où il fut traité et à reproduire les méthodes immorales dont il fut lui-même si souvent victime. Profitant d'une armoire remplie de médicaments et d'aucune connaissance en médecine, il se rend un peu plus monstrueux à chaque injection et terrorise les malheureux « patients » qui passent près de son cabinet.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Totalement fou, complètement porté sur l'homicide, horriblement violet, Dr. Mundo est la principale raison pour laquelle les citoyens de Zaun restent calfeutrés chez eux les nuits les plus sombres. Désormais médecin autoproclamé, il fut autrefois un patient de l'asile tristement célèbre de Zaun. Après avoir « soigné » tout le personnel, Dr. Mundo a commencé à exercer dans les mêmes salles où il fut traité et à reproduire les méthodes immorales dont il fut lui-même si souvent victime. Profitant d'une armoire remplie de médicaments et d'aucune connaissance en médecine, il se rend un peu plus monstrueux à chaque injection et terrorise les malheureux « patients » qui passent près de son cabinet.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Dr. Mundo toxique","M. Mundoverse","Mundo de la bourse","Mundo Mundo","Mundo bourreau","Mundo enragé","TPA Mundo","Mundo banjoïste","Mundo El Macho","Mundo prince gelé","Dr. Mundo ville démoniaque"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 5, defense: 7, magic: 6, difficulty: 5 },
    abilities: [
      { name: "Scie souillée", description: "Dr. Mundo lance une scie à os souillée, ralentissant le premier ennemi touché et lui infligeant des ...", icon: "sparkles" },
      { name: "Défibrillateur", description: "Dr. Mundo s'électrocute, infligeant des dégâts continus aux ennemis proches et stockant une partie d...", icon: "zap" },
      { name: "Contusion", description: "Passive - Dr. Mundo gagne des dégâts d'attaque bonus selon ses PV max.<br><br>Active - Dr. Mundo don...", icon: "brain" },
      { name: "Dosage maximal", description: "Dr. Mundo s'injecte des produits chimiques et récupère instantanément un pourcentage de ses PV manqu...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 65,
    slug: "elise",
    title: "Elise",
    category: "Mage / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
    description: "Reine araignée",
    year: "2023",
    location: "Runeterra",
    longDescription: "Elise est un prédateur mortel qui vit dans un palais reclus et obscur, au plus profond de la plus vieille ville de Noxus. C'était autrefois une simple femme, maîtresse d'une Maison toute-puissante, mais la morsure d'un maléfique demi-dieu la transforma en un être aussi magnifique qu'inhumain : une créature arachnéenne qui tisse sa toile pour piéger ses proies. Pour maintenir sa jeunesse éternelle, Elise se repaît des innocents et peu sont ceux qui peuvent résister à sa séduction.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Elise est un prédateur mortel qui vit dans un palais reclus et obscur, au plus profond de la plus vieille ville de Noxus. C'était autrefois une simple femme, maîtresse d'une Maison toute-puissante, mais la morsure d'un maléfique demi-dieu la transforma en un être aussi magnifique qu'inhumain : une créature arachnéenne qui tisse sa toile pour piéger ses proies. Pour maintenir sa jeunesse éternelle, Elise se repaît des innocents et peu sont ceux qui peuvent résister à sa séduction.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Elise du lotus mortel","Elise héroïne de guerre","Elise lune de sang","SKT T1 Elise","Super Elise intergalactique","Elise sorcière","Elise rose fanée","Elise de l'assemblée"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 6, defense: 5, magic: 7, difficulty: 9 },
    abilities: [
      { name: "Neurotoxine/Morsure venimeuse", description: "Forme humaine : inflige des dégâts en fonction des PV actuels de la cible.<br><br>Forme arachnéenne ...", icon: "sparkles" },
      { name: "Araignée explosive/Frénésie symbiotique", description: "Forme humaine : libère une araignée gorgée de venin qui explose en approchant d'une cible.<br><br>Fo...", icon: "zap" },
      { name: "Cocon/Suspension", description: "Forme humaine : étourdit la première unité ennemie touchée et la révèle si elle n'est pas furtive.<b...", icon: "brain" },
      { name: "Forme arachnéenne", description: "Se transforme en une terrifiante araignée, ce qui réduit sa portée d'attaque mais augmente sa vitess...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 66,
    slug: "evelynn",
    title: "Evelynn",
    category: "Assassin / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
    description: "Démon sadique",
    year: "2023",
    location: "Runeterra",
    longDescription: "Dans les sombres failles de Runeterra, le démon nommé Evelynn cherche sa prochaine victime. Elle attire sa proie en se faisant passer pour une femme voluptueuse, et dès que sa cible succombe à ses charmes, Evelynn révèle sa véritable nature. Elle inflige alors à sa victime des tourments indicibles et se repaît de sa douleur. Pour un démon, ce ne sont que des plaisirs innocents. Aux yeux du reste de Runeterra, ce sont des contes terrifiants, qui rappellent les dangers du désir et de la luxure.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Dans les sombres failles de Runeterra, le démon nommé Evelynn cherche sa prochaine victime. Elle attire sa proie en se faisant passer pour une femme voluptueuse, et dès que sa cible succombe à ses charmes, Evelynn révèle sa véritable nature. Elle inflige alors à sa victime des tourments indicibles et se repaît de sa douleur. Pour un démon, ce ne sont que des plaisirs innocents. Aux yeux du reste de Runeterra, ce sont des contes terrifiants, qui rappellent les dangers du désir et de la luxure.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Evelynn noire","Evelynn masquée","Evelynn tango","Evelynn perceuse de coffres","Evelynn lune de sang","K/DA Evelynn","K/DA Evelynn prestige","Evelynn folie sucrée","K/DA ALL OUT Evelynn","Evelynn de l'assemblée","K/DA Evelynn prestige (2022)","Evelynn fleur spirituelle","Evelynn combattante spirituelle"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 4, defense: 2, magic: 7, difficulty: 10 },
    abilities: [
      { name: "Piques de haine", description: "Evelynn frappe avec son cirre et inflige des dégâts à la première unité touchée. Elle peut ensuite t...", icon: "sparkles" },
      { name: "Séduction", description: "Evelynn maudit une cible, ce qui permet à sa prochaine attaque ou à son prochain sort de charmer sa ...", icon: "zap" },
      { name: "Coup de fouet", description: "Evelynn donne un coup de fouet à sa cible avec son cirre et lui inflige des dégâts. Elle augmente en...", icon: "brain" },
      { name: "Faiseuse de veuves", description: "Evelynn devient brièvement impossible à cibler et ravage la zone devant elle avant de se téléporter ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 67,
    slug: "ezreal",
    title: "Ezreal",
    category: "Marksman / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
    description: "Explorateur prodigue",
    year: "2023",
    location: "Runeterra",
    longDescription: "Aventurier audacieux, doué sans le savoir pour les arts magiques, Ezreal poursuit ses expéditions dans les catacombes oubliées, se bat avec d'antiques malédictions et contourne avec aisance les obstacles les plus impossibles. Son courage et son panache sont sans borne, et il préfère improviser son salut dans les situations critiques, avec pour armes principales sa vivacité d'esprit et son gantelet mystique shurimien, qu'il utilise pour déchaîner de puissants projectiles arcaniques. Une chose est sûre : quand Ezreal est dans les parages, les problèmes ne sont pas loin. Et ils sont partout. Absolument partout.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Aventurier audacieux, doué sans le savoir pour les arts magiques, Ezreal poursuit ses expéditions dans les catacombes oubliées, se bat avec d'antiques malédictions et contourne avec aisance les obstacles les plus impossibles. Son courage et son panache sont sans borne, et il préfère improviser son salut dans les situations critiques, avec pour armes principales sa vivacité d'esprit et son gantelet mystique shurimien, qu'il utilise pour déchaîner de puissants projectiles arcaniques. Une chose est sûre : quand Ezreal est dans les parages, les problèmes ne sont pas loin. Et ils sont partout. Absolument partout.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Ezreal de Nottingham","Ezreal buteur","Ezreal de glace","Ezreal spéléologue","Ezreal Pulsefire","TPA Ezreal","Ezreal séducteur","Ezreal as de pique","Ezreal arcade","Ezreal gardien des étoiles","SSG Ezreal","Ezreal gardien des pyjamas","Ezreal de l'Académie du combat","Ezreal psychoguerrier","Ezreal psychoguerrier prestige","Ezreal protecteur de porcelaine","Ezreal de la cour féérique","HEARTSTEEL Ezreal"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 7, defense: 2, magic: 6, difficulty: 7 },
    abilities: [
      { name: "Tir mystique", description: "Ezreal tire un trait d'énergie blessant qui, s'il touche un ennemi, réduit légèrement tous les délai...", icon: "sparkles" },
      { name: "Flux essentiel", description: "Ezreal tire un orbe qui se colle au premier champion ou objectif touché. Si Ezreal frappe un ennemi ...", icon: "zap" },
      { name: "Transfert arcanique", description: "Ezreal se téléporte dans une zone ciblée et tire un projectile autoguidé qui frappe l'ennemi le plus...", icon: "brain" },
      { name: "Arc térébrant", description: "Ezreal se concentre avant de tirer une puissante vague d'énergie qui inflige d'importants dégâts à c...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 68,
    slug: "fiddlesticks",
    title: "Fiddlesticks",
    category: "Mage / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",
    description: "Effroi nocturne",
    year: "2023",
    location: "Runeterra",
    longDescription: "Quelque chose s'est éveillé à Runeterra. Quelque chose d'ancien. Quelque chose de terrible. L'horreur intemporelle connue sous le nom de Fiddlesticks arpente les frontières des civilisations mortelles, attirée dans les régions en proie à la paranoïa, où elle se repaît de ses victimes terrorisées. Armée d'une faux ébréchée, la créature décharnée moissonne la peur elle-même et fait voler en éclats l'esprit de ceux qui ont eu la malchance de lui survivre. Prenez garde aux cris des corbeaux et aux chuchotements de la silhouette qui vous <i>paraît</i> humaine... car Fiddlesticks est de retour.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Quelque chose s'est éveillé à Runeterra. Quelque chose d'ancien. Quelque chose de terrible. L'horreur intemporelle connue sous le nom de Fiddlesticks arpente les frontières des civilisations mortelles, attirée dans les régions en proie à la paranoïa, où elle se repaît de ses victimes terrorisées. Armée d'une faux ébréchée, la créature décharnée moissonne la peur elle-même et fait voler en éclats l'esprit de ceux qui ont eu la malchance de lui survivre. Prenez garde aux cris des corbeaux et aux chuchotements de la silhouette qui vous <i>paraît</i> humaine... car Fiddlesticks est de retour.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Fiddlesticks spectral","Fiddlesticks Union Jack","Fiddlesticks le bandito","Fiddlesticks citrouille","Fiddlesticks pirate","Fiddlesticks clown maléfique","Fiddlesticks horreur sucrée","Fiddlesticks réanimé","Fiddlesticks prétorien","Fiddlesticks cauchemar des étoiles"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 3, magic: 9, difficulty: 9 },
    abilities: [
      { name: "Terreur", description: "Si Fiddlesticks blesse un ennemi avec un sort en n'étant pas visible ou s'il cible un ennemi avec la...", icon: "sparkles" },
      { name: "Moisson fructueuse", description: "Fiddlesticks draine l'essence vitale des ennemis proches, infligeant des dégâts d'exécution suppléme...", icon: "zap" },
      { name: "Fauchaison", description: "Fiddlesticks donne un coup de faux dans une zone, ralentissant tous les ennemis touchés et réduisant...", icon: "brain" },
      { name: "Rafale de corbeaux", description: "Une nuée de corbeaux tourbillonne sauvagement autour de Fiddlesticks, infligeant des dégâts par seco...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 69,
    slug: "fiora",
    title: "Fiora",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
    description: "Sublime bretteuse",
    year: "2023",
    location: "Runeterra",
    longDescription: "Fiora est la duelliste la plus redoutée de Valoran : elle est connue pour ses manières brusques et sa vivacité d'esprit autant que pour la rapidité de sa rapière d'acier bleu. Née au sein de la Maison Laurent du royaume de Demacia, Fiora a pris le contrôle de la famille à son père dans les remous d'un scandale qui faillit la détruire. La réputation de la Maison Laurent a été ternie, mais Fiora investit toute son énergie à restaurer l'honneur de sa famille pour qu'elle reprenne sa place légitime parmi les grands de Demacia.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Fiora est la duelliste la plus redoutée de Valoran : elle est connue pour ses manières brusques et sa vivacité d'esprit autant que pour la rapidité de sa rapière d'acier bleu. Née au sein de la Maison Laurent du royaume de Demacia, Fiora a pris le contrôle de la famille à son père dans les remous d'un scandale qui faillit la détruire. La réputation de la Maison Laurent a été ternie, mais Fiora investit toute son énergie à restaurer l'honneur de sa famille pour qu'elle reprenne sa place légitime parmi les grands de Demacia.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Fiora garde royal","Fiora oiseau nocturne","Proviseur Fiora","PROJET : Fiora","Fiora starlette des plages","Fiora à l'épée ascendante","Fiora percecœur","iG Fiora","Fiora Pulsefire","Fiora bête lunaire","Fiora bête lunaire prestige","Fiora sorcière","Fiora de la cour féérique"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 10, defense: 4, magic: 2, difficulty: 3 },
    abilities: [
      { name: "Fente", description: "Fiora se fend dans une direction et frappe un ennemi proche, infligeant des dégâts physiques et appl...", icon: "sparkles" },
      { name: "Riposte", description: "Fiora pare tous les dégâts et toutes les entraves qui la ciblent pendant un court instant, après quo...", icon: "zap" },
      { name: "Botte secrète", description: "Fiora augmente sa vitesse d'attaque pour ses deux prochaines attaques. La première attaque ralentit ...", icon: "brain" },
      { name: "Défi suprême", description: "Fiora révèle les quatre points faibles d'un champion ennemi et augmente sa vitesse de déplacement à ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 70,
    slug: "fizz",
    title: "Fizz",
    category: "Assassin / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",
    description: "Filou des mers",
    year: "2023",
    location: "Runeterra",
    longDescription: "Fizz est un yordle amphibie qui vit dans les récifs qui entourent Bilgewater. Il essaie souvent de récupérer et de rendre les tributs que lancent dans l'océan les capitaines superstitieux, mais même le plus dessalé des marins n'est pas assez arrogant pour essayer de le tromper. On raconte bien des histoires sur ceux qui ont sous-estimé son humeur changeante... Souvent confondu avec un esprit océanique capricieux, il semble capable de commander aux créatures des profondeurs et n'aime rien tant que confondre alliés comme ennemis.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Fizz est un yordle amphibie qui vit dans les récifs qui entourent Bilgewater. Il essaie souvent de récupérer et de rendre les tributs que lancent dans l'océan les capitaines superstitieux, mais même le plus dessalé des marins n'est pas assez arrogant pour essayer de le tromper. On raconte bien des histoires sur ceux qui ont sous-estimé son humeur changeante... Souvent confondu avec un esprit océanique capricieux, il semble capable de commander aux créatures des profondeurs et n'aime rien tant que confondre alliés comme ennemis.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Fizz de l'Atlantide","Fizz de la toundra","Fizz pêcheur","Fizz du Néant","Fizz lapin","Super Fizz intergalactique","Fizz de la section Oméga","Fizz toutou","Fizz toutou prestige","Fizz diablotin","Fizz toutou prestige (2022)","Fizz astronaute"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 6, defense: 4, magic: 7, difficulty: 6 },
    abilities: [
      { name: "Frappe de l'oursin", description: "Fizz traverse sa cible, infligeant des dégâts magiques et des effets à l'impact....", icon: "sparkles" },
      { name: "Trident marin", description: "Les attaques de Fizz font saigner ses ennemis, infligeant des dégâts magiques en plusieurs secondes....", icon: "zap" },
      { name: "Joueur/Filou", description: "Fizz saute et retombe avec grâce sur sa lance, devenant impossible à cibler. Depuis cette position, ...", icon: "brain" },
      { name: "Pêche au gros", description: "Fizz lance un poisson qui s'accroche à tout champion qui le touche, ralentissant la cible. Après un ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 71,
    slug: "galio",
    title: "Galio",
    category: "Tank / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg",
    description: "Colosse",
    year: "2023",
    location: "Runeterra",
    longDescription: "Près de la cité étincelante de Demacia, le colosse de pierre Galio monte une garde attentive. Érigé comme un rempart contre les mages ennemis, il reste souvent immobile pendant des décennies, jusqu'à ce que l'apparition de puissants flux magiques le ramène à la vie. Une fois éveillé, Galio profite de chaque seconde d'existence ; il s'enivre des frissons du combat et de l'honneur trop rare de défendre ses compatriotes. Mais ses triomphes ont toujours un arrière-goût amer, car la magie qu'il éradique est également la sève qui le fait vivre, et chaque victoire le renvoie au sommeil.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Près de la cité étincelante de Demacia, le colosse de pierre Galio monte une garde attentive. Érigé comme un rempart contre les mages ennemis, il reste souvent immobile pendant des décennies, jusqu'à ce que l'apparition de puissants flux magiques le ramène à la vie. Une fois éveillé, Galio profite de chaque seconde d'existence ; il s'enivre des frissons du combat et de l'honneur trop rare de défendre ses compatriotes. Mais ses triomphes ont toujours un arrière-goût amer, car la magie qu'il éradique est également la sève qui le fait vivre, et chaque victoire le renvoie au sommeil.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Galio l'enchanteur","Galio Hextech","Galio commando","Galio cerbère","Galio séducteur","Poulio","Galio infernal","Galio gardien des dragons","Galio mythificateur"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 1, defense: 10, magic: 6, difficulty: 5 },
    abilities: [
      { name: "Vents de guerre", description: "Galio tire deux rafales de vent qui convergent pour créer une grande tornade infligeant des dégâts s...", icon: "sparkles" },
      { name: "Bouclier de Durand", description: "Galio canalise une posture défensive, ce qui ralentit ses déplacements. Au relâchement de la canalis...", icon: "zap" },
      { name: "Horion de la justice", description: "Galio fait un pas en arrière et charge, projetant en l'air le premier champion ennemi qu'il touche....", icon: "brain" },
      { name: "Entrée héroïque", description: "Galio désigne la position d'un allié comme zone d'atterrissage, octroyant un bouclier anti-dégâts ma...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 72,
    slug: "gangplank",
    title: "Gangplank",
    category: "Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
    description: "Fléau des mers",
    year: "2023",
    location: "Runeterra",
    longDescription: "Aussi imprévisible que brutal, le roi des pillards déchu connu sous le nom de Gangplank est partout redouté. Il régnait autrefois sur la ville portuaire de Bilgewater et, bien que ce temps soit révolu, certains pensent que cela l'a rendu plus dangereux encore. Gangplank préférerait engloutir une fois de plus Bilgewater dans le sang plutôt que de laisser quelqu'un d'autre s'en emparer. Il possède aujourd'hui assez de pistolets, de sabres et de barils de poudre pour prétendre récupérer ce qu'il a perdu.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Aussi imprévisible que brutal, le roi des pillards déchu connu sous le nom de Gangplank est partout redouté. Il régnait autrefois sur la ville portuaire de Bilgewater et, bien que ce temps soit révolu, certains pensent que cela l'a rendu plus dangereux encore. Gangplank préférerait engloutir une fois de plus Bilgewater dans le sang plutôt que de laisser quelqu'un d'autre s'en emparer. Il possède aujourd'hui assez de pistolets, de sabres et de barils de poudre pour prétendre récupérer ce qu'il a perdu.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Gangplank lugubre","Gangplank minuteman","Gangplank matelot","Petit soldat Gangplank","Gangplank des forces spéciales","Gangplank sultan","Capitaine Gangplank","Gangplank nova d'effroi","Gangplage","FPX Gangplank","Gangplank le Traître"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 7, defense: 6, magic: 4, difficulty: 9 },
    abilities: [
      { name: "Pourparlers", description: "Gangplank tire sur une cible. Il gagne des PO supplémentaires si le tir tue la cible....", icon: "sparkles" },
      { name: "Guérison du scorbut", description: "Gangplank mange des agrumes pour dissiper les effets de contrôle de foule qui l'affectent et récupér...", icon: "zap" },
      { name: "Baril de poudre", description: "Gangplank place un baril de poudre à l'endroit ciblé. S'il l'attaque, le baril explose, étendant les...", icon: "brain" },
      { name: "Tir de barrage", description: "Gangplank demande à son navire de bombarder une zone, ralentissant et blessant les ennemis....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 73,
    slug: "gnar",
    title: "Gnar",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",
    description: "Chaînon manquant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Gnar est un yordle primitif dont les manières joyeuses peuvent soudain faire place à une colère irrationnelle. Il se transforme alors en une bête colossale portée à la destruction. Gelé dans de la glace pure pendant des millénaires, la curieuse créature s'est libérée de sa prison. Aujourd'hui, il parcourt avec enthousiasme un monde qu'il trouve exotique et merveilleux. Enchanté par le danger, Gnar lance à ses ennemis tout ce qu'il trouve, qu'il s'agisse de son boomerang en croc ou d'un bâtiment proche.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Gnar est un yordle primitif dont les manières joyeuses peuvent soudain faire place à une colère irrationnelle. Il se transforme alors en une bête colossale portée à la destruction. Gelé dans de la glace pure pendant des millénaires, la curieuse créature s'est libérée de sa prison. Aujourd'hui, il parcourt avec enthousiasme un monde qu'il trouve exotique et merveilleux. Enchanté par le danger, Gnar lance à ses ennemis tout ce qu'il trouve, qu'il s'agisse de son boomerang en croc ou d'un bâtiment proche.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Dino Gnar","Gnar gentleman","Gnar des neiges","Gnar El León","Super Gnar intergalactique","SSG Gnar","Gnar astronaute","Gnar sylvestre","Gnar La Ilusión"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 6, defense: 5, magic: 5, difficulty: 8 },
    abilities: [
      { name: "Jet de boomerang/Jet de rocher", description: "Gnar lance un boomerang qui blesse et ralentit les cibles touchées avant de retourner vers lui. S'il...", icon: "sparkles" },
      { name: "Agitation/Beigne", description: "Gnar est agité à force d'attaquer et d'utiliser des compétences, ce qui lui permet d'infliger des dé...", icon: "zap" },
      { name: "Rebond/Aplatissement", description: "Gnar bondit dans la direction ciblée et rebondit sur la tête de toute unité sur laquelle il atterrit...", icon: "brain" },
      { name: "GNAR !", description: "Méga Gnar projette tous les ennemis proches dans la direction ciblée, leur infligeant des dégâts et ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 74,
    slug: "gragas",
    title: "Gragas",
    category: "Fighter / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",
    description: "Agitateur",
    year: "2023",
    location: "Runeterra",
    longDescription: "Aussi imposant que jovial, Gragas est un brasseur à l'impressionnante carrure qui cherche la recette de la bière parfaite. Venu d'on ne sait où, il continue de chercher les ingrédients les plus rares dans les terres vierges de Freljord, essayant toutes les variations de bière au cours de son périple. Souvent ivre et toujours impulsif, il est légendaire pour ses rixes, qui finissent souvent en fêtes nocturnes préjudiciables au mobilier urbain. Toute apparition de Gragas annonce beuverie et destruction. Dans cet ordre.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Aussi imposant que jovial, Gragas est un brasseur à l'impressionnante carrure qui cherche la recette de la bière parfaite. Venu d'on ne sait où, il continue de chercher les ingrédients les plus rares dans les terres vierges de Freljord, essayant toutes les variations de bière au cours de son périple. Souvent ivre et toujours impulsif, il est légendaire pour ses rixes, qui finissent souvent en fêtes nocturnes préjudiciables au mobilier urbain. Toute apparition de Gragas annonce beuverie et destruction. Dans cet ordre.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Gragas plongeur","Gragas péon","Père Gragas","Gragas la classe","Gragas Vandale","Gragas Oktoberfest","Gragas superfan","Fnatic Gragas","Gragas brasseur solaire","Gragas arctique","Gragas purificateur","Gragas astro-groove"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 4, defense: 7, magic: 6, difficulty: 5 },
    abilities: [
      { name: "Fût roulant", description: "Gragas fait rouler son fût vers une zone ciblée ; le fût explose automatiquement au bout de 4 sec (v...", icon: "sparkles" },
      { name: "Rage d'ivrogne", description: "Gragas boit pendant 1 sec. L'ivresse qui suit le rend plus fort, ce qui lui permet d'infliger des dé...", icon: "zap" },
      { name: "Coup de bidon", description: "Gragas charge vers une zone ciblée et percute le premier ennemi rencontré, infligeant des dégâts à t...", icon: "brain" },
      { name: "Fût explosif", description: "Gragas lance son fût, infligeant des dégâts et repoussant les ennemis touchés par l'explosion....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 75,
    slug: "graves",
    title: "Graves",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg",
    description: "Hors-la-loi",
    year: "2023",
    location: "Runeterra",
    longDescription: "Malcolm Graves est un mercenaire, un parieur et un voleur recherché dans toutes les cités et tous les empires par lesquels il est passé. Malgré son tempérament explosif, il a un sens de l'honneur indéniable qu'il applique souvent avec son fusil à double canon, Destinée. Ces dernières années, il s'est réconcilié avec Twisted Fate. Leur partenariat rétabli, ils prospèrent à nouveau dans les allées sombres de Bilgewater.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Malcolm Graves est un mercenaire, un parieur et un voleur recherché dans toutes les cités et tous les empires par lesquels il est passé. Malgré son tempérament explosif, il a un sens de l'honneur indéniable qu'il applique souvent avec son fusil à double canon, Destinée. Ces dernières années, il s'est réconcilié avec Twisted Fate. Leur partenariat rétabli, ils prospèrent à nouveau dans les allées sombres de Bilgewater.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Graves tueur à gages","Graves fugitif","Don Graves","Graves anti-émeutes","Graves pistolet à eau","Graves coupe-jarret","Graves des neiges","Graves héros de guerre","Graves prétorien","Professeur Graves de l'Académie","Graves Sentinelle","EDG Graves"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 5, magic: 3, difficulty: 3 },
    abilities: [
      { name: "Terminus", description: "Graves tire un projectile qui explose au bout de 2 sec, ou au bout de 0,2 sec s'il touche un élément...", icon: "sparkles" },
      { name: "Écran de fumée", description: "Graves tire une grenade fumigène qui produit un nuage de fumée réduisant le champ de vision. Les enn...", icon: "zap" },
      { name: "Ruée vers l'or", description: "Graves charge devant lui et profite d'un bonus en armure pendant quelques secondes. Si Graves fonce ...", icon: "brain" },
      { name: "Dégâts collatéraux", description: "Graves tire un obus explosif qui inflige de lourds dégâts au premier champion touché. Lorsque l'obus...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 76,
    slug: "gwen",
    title: "Gwen",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg",
    description: "Couturière sacrée",
    year: "2023",
    location: "Runeterra",
    longDescription: "Ancienne poupée à qui la magie a conféré la vie, Gwen est armée des outils qui l'ont créée. Elle emporte à chaque pas l'amour de sa créatrice et ne tient jamais rien pour acquis. Elle commande à la Brume sacrée, une ancienne magie de protection qui a béni ses ciseaux, ses aiguilles et son fil à coudre. Tout est nouveau pour Gwen, mais elle reste déterminée à combattre dans la joie pour préserver le bien qui survit dans un monde en déréliction.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Ancienne poupée à qui la magie a conféré la vie, Gwen est armée des outils qui l'ont créée. Elle emporte à chaque pas l'amour de sa créatrice et ne tient jamais rien pour acquis. Elle commande à la Brume sacrée, une ancienne magie de protection qui a béni ses ciseaux, ses aiguilles et son fil à coudre. Tout est nouveau pour Gwen, mais elle reste déterminée à combattre dans la joie pour préserver le bien qui survit dans un monde en déréliction.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Gwen astro-groove","Gwen Café Chouchous","Gwen combattante spirituelle"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 7, defense: 4, magic: 5, difficulty: 5 },
    abilities: [
      { name: "Tchac, tchac !", description: "Gwen coupe jusqu'à 6 fois avec ses ciseaux, infligeant des dégâts magiques dans une zone conique. Gw...", icon: "sparkles" },
      { name: "Brume sacrée", description: "Gwen invoque une brume qui la protège des ennemis hors de la zone. Elle ne peut être ciblée que par ...", icon: "zap" },
      { name: "Élan incisif", description: "Gwen effectue une courte ruée, puis gagne de la vitesse d'attaque, de la portée d'attaque et des dég...", icon: "brain" },
      { name: "Piqûre", description: "Gwen lance une aiguille qui ralentit les ennemis touchés, inflige des dégâts magiques et applique Mi...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 77,
    slug: "hecarim",
    title: "Hecarim",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg",
    description: "Ombre de la guerre",
    year: "2023",
    location: "Runeterra",
    longDescription: "Fusion spectrale de l'homme et de la bête, Hecarim est condamné à pourchasser les âmes des vivants pour l'éternité. Lorsque les ombres ont envahi les Îles bénies, ce fier chevalier et sa horde de cavaliers ont été anéantis par les énergies destructrices de la Ruine. À présent, quand la Brume noire s'étend sur Runeterra, il mène la charge et se plaît à massacrer et écraser ses ennemis sous ses lourds sabots.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Fusion spectrale de l'homme et de la bête, Hecarim est condamné à pourchasser les âmes des vivants pour l'éternité. Lorsque les ombres ont envahi les Îles bénies, ce fier chevalier et sa horde de cavaliers ont été anéantis par les énergies destructrices de la Ruine. À présent, quand la Brume noire s'étend sur Runeterra, il mène la charge et se plaît à massacrer et écraser ses ennemis sous ses lourds sabots.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Hecarim chevalier de sang","Hecarim faucheur","Hecarim sans tête","Hecarim arcade","Hecarim sylvestre","Hecarim brise-monde","Hecarim Lancier Zéro","Hecarim de l'Ouest","Hecarim cavalier cosmique","Hecarim des arcanes","Hecarim élu de l'hiver"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 6, magic: 4, difficulty: 6 },
    abilities: [
      { name: "Carnage", description: "Hecarim tranche les ennemis proches et leur inflige des dégâts physiques. Si Hecarim blesse au moins...", icon: "sparkles" },
      { name: "Essence de la peur", description: "Hecarim gagne de l'armure et de la résistance magique. Hecarim inflige des dégâts magiques aux ennem...", icon: "zap" },
      { name: "Charge dévastatrice", description: "La vitesse de déplacement d'Hecarim augmente et il peut traverser les unités pendant un court instan...", icon: "brain" },
      { name: "Légion des ombres", description: "Hecarim invoque des cavaliers fantomatiques et charge devant lui, infligeant des dégâts magiques sur...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 78,
    slug: "hwei",
    title: "Hwei",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hwei_0.jpg",
    description: "Visionnaire",
    year: "2023",
    location: "Runeterra",
    longDescription: "Hwei est un peintre dont les œuvres sont aussi flamboyantes que son humeur est morose. Il utilise son art pour faire face aux criminels d'Ionia et apporter du réconfort à leurs victimes. Sous sa mélancolie se débat un esprit déchiré et émotif, hanté à la fois par les splendides visions de son imagination et par les souvenirs horribles de son temple détruit. Hwei cherche à comprendre cette lumière et ces ténèbres, ce qui le met inévitablement sur la piste de l'artiste à l'origine de ce conflit. Avec son pinceau et sa palette, Hwei donne forme à d'infinies possibilités tandis qu'il s'approche d'une réponse à ses questions, ou du plus complet désespoir.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Hwei est un peintre dont les œuvres sont aussi flamboyantes que son humeur est morose. Il utilise son art pour faire face aux criminels d'Ionia et apporter du réconfort à leurs victimes. Sous sa mélancolie se débat un esprit déchiré et émotif, hanté à la fois par les splendides visions de son imagination et par les souvenirs horribles de son temple détruit. Hwei cherche à comprendre cette lumière et ces ténèbres, ce qui le met inévitablement sur la piste de l'artiste à l'origine de ce conflit. Avec son pinceau et sa palette, Hwei donne forme à d'infinies possibilités tandis qu'il s'approche d'une réponse à ses questions, ou du plus complet désespoir.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Hwei élu de l'hiver"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 7, defense: 1, magic: 8, difficulty: 9 },
    abilities: [
      { name: "Sujet : Désastres", description: "Hwei imagine une série de désastres, ce qui lui permet de peindre des coups dévastateurs.<br><br>Dés...", icon: "sparkles" },
      { name: "Sujet : Sérénités", description: "Hwei imagine une série de sérénités, ce qui lui permet de peindre des paysages revigorants.<br><br>S...", icon: "zap" },
      { name: "Sujet : Tourments", description: "Hwei imagine une série de tourments, ce qui lui permet de peindre des visages manipulateurs.<br><br>...", icon: "brain" },
      { name: "Vision de désespoir", description: "Hwei peint une vision de pur désespoir. Le premier champion ennemi touché devient le centre d'une pe...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 79,
    slug: "illaoi",
    title: "Illaoi",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg",
    description: "Prêtresse du kraken",
    year: "2023",
    location: "Runeterra",
    longDescription: "La stature colossale d'Illaoi n'a d'égale que sa foi implacable. Prophétesse du Grand Kraken, elle se sert d'une énorme idole dorée pour arracher les esprits de ses ennemis et faire voler en éclats leur perception de la réalité. Ceux qui défient « l'Apôtre de la vérité de Nagakabouros » découvrent bien vite qu'Illaoi ne combat jamais seule, car le dieu des Îles aux serpents lui prête main-forte.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "La stature colossale d'Illaoi n'a d'égale que sa foi implacable. Prophétesse du Grand Kraken, elle se sert d'une énorme idole dorée pour arracher les esprits de ses ennemis et faire voler en éclats leur perception de la réalité. Ceux qui défient « l'Apôtre de la vérité de Nagakabouros » découvrent bien vite qu'Illaoi ne combat jamais seule, car le dieu des Îles aux serpents lui prête main-forte.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Illaoi messagère du Néant","Illaoi résistante","Illaoi invocatrice cosmique","Illaoi lune de neige"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 6, magic: 3, difficulty: 4 },
    abilities: [
      { name: "Coup de tentacule", description: "Augmente les dégâts infligés par les tentacules. À l'activation, Illaoi fait s'abattre un tentacule ...", icon: "sparkles" },
      { name: "Âpre leçon", description: "Illaoi bondit sur sa cible, infligeant des dégâts physiques et poussant tous les tentacules proches ...", icon: "zap" },
      { name: "Épreuve de l'esprit", description: "Illaoi arrache l'esprit d'un ennemi et l'attire jusqu'à elle. L'esprit transmet un pourcentage des d...", icon: "brain" },
      { name: "Acte de foi", description: "Illaoi écrase son idole au sol, infligeant des dégâts physiques aux ennemis proches. Un tentacule ap...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 80,
    slug: "janna",
    title: "Janna",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",
    description: "Avatar de l'air",
    year: "2023",
    location: "Runeterra",
    longDescription: "Armée de la puissance des grands vents de Runeterra, Janna est un mystérieux esprit élémentaire qui protège les parias de Zaun. Certains croient que la vie lui a été donnée par les suppliques des marins de Runeterra cherchant les bons vents des mers calmes, affrontant les courants traîtres ou bravant les typhons. Depuis, on implore sa protection jusque dans les profondeurs de Zaun, où Janna est devenue un fanal d'espoir pour ceux qui sont dans le besoin. Nul ne sait quand et où elle apparaîtra, mais ceux qui espèrent son aide sont rarement déçus.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Armée de la puissance des grands vents de Runeterra, Janna est un mystérieux esprit élémentaire qui protège les parias de Zaun. Certains croient que la vie lui a été donnée par les suppliques des marins de Runeterra cherchant les bons vents des mers calmes, affrontant les courants traîtres ou bravant les typhons. Depuis, on implore sa protection jusque dans les profondeurs de Zaun, où Janna est devenue un fanal d'espoir pour ceux qui sont dans le besoin. Nul ne sait quand et où elle apparaîtra, mais ceux qui espèrent son aide sont rarement déçus.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Janna des tempêtes","Janna Hextech","Janna reine de givre","Janna héroïne de guerre","Janna miss météo","Fnatic Janna","Janna gardienne des étoiles","Janna à l'épée sacrée","Janna sorcière","Janna gardienne des sables","Janna reine du combat","Janna rose de cristal","Janna cyber halo","Janna cyber halo prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 3, defense: 5, magic: 7, difficulty: 7 },
    abilities: [
      { name: "Vent hurlant", description: "En modifiant localement la pression et la température, Janna peut créer une petite tornade qui croît...", icon: "sparkles" },
      { name: "Alizé", description: "Janna invoque un élémentaire d'air qui, passivement, augmente sa vitesse de déplacement et lui perme...", icon: "zap" },
      { name: "Œil du cyclone", description: "Janna invoque une tempête défensive qui protège un champion allié ou une tourelle alliée contre les ...", icon: "brain" },
      { name: "Mousson", description: "Janna s'entoure d'une puissante tempête magique, repoussant au loin les ennemis. Quand la tempête es...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 81,
    slug: "jarvaniv",
    title: "Jarvan IV",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
    description: "Exemple demacien",
    year: "2023",
    location: "Runeterra",
    longDescription: "Le prince Jarvan, héritier de la dynastie des Lightshield, doit un jour monter sur le trône de Demacia. Élevé de manière à incarner les plus hautes vertus de sa nation, il est contraint de trouver un équilibre entre les attentes placées en lui et son désir de combattre sur la ligne de front. Jarvan inspire ses troupes avec son courage, sa détermination et son dévouement. Il porte haut les couleurs de sa famille et révèle chaque jour davantage sa véritable force de prochain souverain.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Le prince Jarvan, héritier de la dynastie des Lightshield, doit un jour monter sur le trône de Demacia. Élevé de manière à incarner les plus hautes vertus de sa nation, il est contraint de trouver un équilibre entre les attentes placées en lui et son désir de combattre sur la ligne de front. Jarvan inspire ses troupes avec son courage, sa détermination et son dévouement. Il porte haut les couleurs de sa famille et révèle chaque jour davantage sa véritable force de prochain souverain.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Jarvan IV commando","Jarvan IV tueur de dragons","Jarvan IV ténébreux","Jarvan IV héros de guerre","Jarvan IV du royaume en guerre","Fnatic Jarvan IV","Jarvan IV du pulsar sombre","SSG Jarvan IV","Jarvan IV Hextech","Jarvan UV","Jarvan IV bête lunaire","Jarvan IV du Mondial 2021","Jarvan IV héraut de la nuit"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 6, defense: 8, magic: 3, difficulty: 5 },
    abilities: [
      { name: "Frappe du dragon", description: "Jarvan IV allonge sa lance, infligeant des dégâts physiques et réduisant l'armure des ennemis sur so...", icon: "sparkles" },
      { name: "Égide dorée", description: "Jarvan IV implore les anciens rois de Demacia de le protéger et de ralentir les ennemis proches....", icon: "zap" },
      { name: "Étendard demacien", description: "Jarvan IV porte la fierté de Demacia, ce qui lui octroie passivement un bonus en vitesse d'attaque. ...", icon: "brain" },
      { name: "Cataclysme", description: "Jarvan IV bondit héroïquement sur une cible avec une telle force qu'il transforme la zone autour de ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 82,
    slug: "jax",
    title: "Jax",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
    description: "Maître d'armes",
    year: "2023",
    location: "Runeterra",
    longDescription: "Jax, dont nul ne peut égaler l'art du sarcasme et des armements inhabituels, est connu comme le dernier maître d'armes d'Icathia. Après la chute de sa terre natale, ravagée par le Néant qu'elle avait eu l'orgueil de déchaîner, Jax et ses compagnons jurèrent de protéger le peu qu'il en restait. La magie montant de nouveau dans le monde, la menace se fait plus pressante et Jax parcourt Valoran, porteur des dernières lumières d'Icathia. Il éprouve les qualités de tous les guerriers qu'il rencontre pour voir s'ils sont assez puissants pour combattre à ses côtés...",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Jax, dont nul ne peut égaler l'art du sarcasme et des armements inhabituels, est connu comme le dernier maître d'armes d'Icathia. Après la chute de sa terre natale, ravagée par le Néant qu'elle avait eu l'orgueil de déchaîner, Jax et ses compagnons jurèrent de protéger le peu qu'il en restait. La magie montant de nouveau dans le monde, la menace se fait plus pressante et Jax parcourt Valoran, porteur des dernières lumières d'Icathia. Il éprouve les qualités de tous les guerriers qu'il rencontre pour voir s'ils sont assez puissants pour combattre à ses côtés...",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Le Grand Jax","Jax le vandale","Jax le pêcheur","Jax PAX","Jaximus","Jax Shaolin","Jax Némésis","SKT T1 Jax","Jax purificateur","Jax au bâton divin","Jax du royaume des mechas","Jax conquérant","Jax conquérant prestige","Jax empyréen","Néo Jax PAX"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 7, defense: 5, magic: 7, difficulty: 5 },
    abilities: [
      { name: "Frappe bondissante", description: "Jax bondit sur une unité. S'il s'agit d'un ennemi, il le frappe avec son arme....", icon: "sparkles" },
      { name: "Élargissement", description: "Jax charge son arme en énergie pour infliger des dégâts supplémentaires avec sa prochaine attaque....", icon: "zap" },
      { name: "Contre-attaque", description: "Jax est capable d'esquiver toutes les attaques pendant un bref instant puis d'étourdir tous les enne...", icon: "brain" },
      { name: "Maître d'armes", description: "Toutes les trois attaques consécutives, Jax inflige des dégâts magiques supplémentaires. De plus, Ja...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 83,
    slug: "kalista",
    title: "Kalista",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg",
    description: "Lance de la vengeance",
    year: "2023",
    location: "Runeterra",
    longDescription: "Spectre courroucé des Îles obscures, Kalista est l'esprit immortel de la vengeance, un cauchemar en armure que l'on invoque pour pourchasser les traîtres et les menteurs. Les victimes trahies peuvent réclamer vengeance, mais Kalista ne répond qu'à ceux dont elle estime la cause digne de ses talents. Malheur à ceux qui suscitent l'ire de Kalista, car tout pacte qu'elle scelle ne se finit que d'une seule façon : dans les flammes glacées de ses lances spirituelles.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Spectre courroucé des Îles obscures, Kalista est l'esprit immortel de la vengeance, un cauchemar en armure que l'on invoque pour pourchasser les traîtres et les menteurs. Les victimes trahies peuvent réclamer vengeance, mais Kalista ne répond qu'à ceux dont elle estime la cause digne de ses talents. Malheur à ceux qui suscitent l'ire de Kalista, car tout pacte qu'elle scelle ne se finit que d'une seule façon : dans les flammes glacées de ses lances spirituelles.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Kalista lune de sang","Kalista du Mondial 2015","SKT T1 Kalista","Kalista maraudeuse","Kalista de la cour féérique"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 2, magic: 4, difficulty: 7 },
    abilities: [
      { name: "Perforation", description: "Kalista projette une lance rapide qui traverse les ennemis ainsi tués....", icon: "sparkles" },
      { name: "Sentinelle", description: "Inflige des dégâts supplémentaires quand Kalista et son pactisant frappent la même cible. <br><br>Ac...", icon: "zap" },
      { name: "Extirpation", description: "Les attaques plantent des lances dans leurs cibles. Activez pour extirper les lances, ralentissant l...", icon: "brain" },
      { name: "Appel du destin", description: "Kalista téléporte le pactisant allié auprès d'elle. Le pactisant peut ensuite charger vers une posit...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 84,
    slug: "karma",
    title: "Karma",
    category: "Mage / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",
    description: "Sagesse incarnée",
    year: "2023",
    location: "Runeterra",
    longDescription: "Aucun mortel n'incarne mieux que Karma les traditions spirituelles d'Ionia. Elle est l'hôte vivant d'une âme ancienne réincarnée à de multiples reprises. Elle contient tous les souvenirs accumulés au fil de ces vies et elle possède une puissance que peu peuvent comprendre. Elle a fait de son mieux pour guider son peuple lors de la crise récente, même si elle sait que la paix et l'harmonie ne sont possibles qu'à un prix élevé, pour elle et pour la terre qu'elle aime tant.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Aucun mortel n'incarne mieux que Karma les traditions spirituelles d'Ionia. Elle est l'hôte vivant d'une âme ancienne réincarnée à de multiples reprises. Elle contient tous les souvenirs accumulés au fil de ces vies et elle possède une puissance que peu peuvent comprendre. Elle a fait de son mieux pour guider son peuple lors de la crise récente, même si elle sait que la paix et l'harmonie ne sont possibles qu'à un prix élevé, pour elle et pour la terre qu'elle aime tant.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Karma déesse du soleil","Karma sakura","Karma classique","Karma de l'Ordre du lotus","Karma purificatrice","Karma merveille hivernale","Karma conquérante","Karma du pulsar sombre","Karma héraut de l'aube","Karma de l'Odyssée","Karma déchue","Karma dragon de la tranquillité","Karma reine des fæs"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 1, defense: 7, magic: 8, difficulty: 5 },
    abilities: [
      { name: "Flamme intérieure", description: "Karma envoie une boule d'énergie spirituelle qui explose et inflige des dégâts au contact d'une unit...", icon: "sparkles" },
      { name: "Volonté concentrée", description: "Karma se lie à un ennemi, lui infligeant des dégâts et le révélant. Si le lien n'est pas brisé, l'en...", icon: "zap" },
      { name: "Exaltation", description: "Karma invoque un bouclier qui absorbe les dégâts et qui augmente la vitesse de déplacement de l'alli...", icon: "brain" },
      { name: "Mantra", description: "Karma renforce sa prochaine compétence pour qu'elle ait un effet supplémentaire. Mantra est disponib...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 85,
    slug: "karthus",
    title: "Karthus",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
    description: "Liche",
    year: "2023",
    location: "Runeterra",
    longDescription: "Héraut de l'oubli, Karthus est un esprit immortel dont les chants ensorcelants préludent à l'horreur de son apparition. Les vivants craignent l'existence éternelle des morts-vivants, mais Karthus n'y voit que beauté et pureté, une union parfaite de la vie et de la mort. Lorsque Karthus émerge des Îles obscures, c'est pour apporter aux mortels la joie de la mort dont il est le vibrant apôtre.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Héraut de l'oubli, Karthus est un esprit immortel dont les chants ensorcelants préludent à l'horreur de son apparition. Les vivants craignent l'existence éternelle des morts-vivants, mais Karthus n'y voit que beauté et pureté, une union parfaite de la vie et de la mort. Lorsque Karthus émerge des Îles obscures, c'est pour apporter aux mortels la joie de la mort dont il est le vibrant apôtre.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Karthus fantôme","Statue de Karthus","Karthus faucheur","Karthus Pentakill","Fnatic Karthus","Karthus fléau de la lumière","Karthus infernal","Karthus Pentakill III : Lost Chapter","Karthus sylvestre"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 2, magic: 10, difficulty: 7 },
    abilities: [
      { name: "Dévastation", description: "Karthus crée une explosion à retardement, infligeant des dégâts aux ennemis proches. Les ennemis iso...", icon: "sparkles" },
      { name: "Mur de douleur", description: "Karthus crée un mur d'énergie. Les ennemis franchissant le mur voient leur vitesse de déplacement et...", icon: "zap" },
      { name: "Souillure", description: "Karthus vole passivement l'énergie de ses victimes, gagnant du mana à chaque élimination. Karthus pe...", icon: "brain" },
      { name: "Requiem", description: "Après une canalisation de 3 secondes, Karthus inflige des dégâts à tous les champions ennemis....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 86,
    slug: "kassadin",
    title: "Kassadin",
    category: "Assassin / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
    description: "Chasseur du Néant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Kassadin se fraye un chemin brûlant dans les lieux les plus sombres du monde ; il sait que ses jours sont comptés. Guide et aventurier shurimien accompli, il avait choisi de fonder une famille parmi les tribus pacifiques du sud, jusqu'au jour où son village fut ravagé par le Néant. Il jura de se venger et s'arma de reliques arcaniques qu'il combina à l'aide de technologies interdites. Enfin, Kassadin se dirigea vers les ruines d'Icathia à la recherche du prophète autoproclamé, Malzahar, prêt à affronter les monstres du Néant.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Kassadin se fraye un chemin brûlant dans les lieux les plus sombres du monde ; il sait que ses jours sont comptés. Guide et aventurier shurimien accompli, il avait choisi de fonder une famille parmi les tribus pacifiques du sud, jusqu'au jour où son village fut ravagé par le Néant. Il jura de se venger et s'arma de reliques arcaniques qu'il combina à l'aide de technologies interdites. Enfin, Kassadin se dirigea vers les ruines d'Icathia à la recherche du prophète autoproclamé, Malzahar, prêt à affronter les monstres du Néant.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Kassadin du Festival","Kassadin des profondeurs","Kassadin humain","Kassadin héraut","Kassadin faucheur cosmique","Comte Kassadin","Kassadin Hextech","Kassadin électrolame"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 3, defense: 5, magic: 8, difficulty: 8 },
    abilities: [
      { name: "Orbe du Néant", description: "Kassadin tire un orbe d'énergie du Néant sur sa cible, infligeant des dégâts et interrompant les can...", icon: "sparkles" },
      { name: "Lame éthérée", description: "Passive : les attaques de base de Kassadin infligent des dégâts magiques supplémentaires. Active : l...", icon: "zap" },
      { name: "Pulsation", description: "Kassadin tire de l'énergie des sorts lancés près de lui. Après avoir tiré assez d'énergie, Kassadin ...", icon: "brain" },
      { name: "Fissure", description: "Kassadin se téléporte vers une destination proche, blessant les ennemis se trouvant à proximité. Cha...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 87,
    slug: "kayle",
    title: "Kayle",
    category: "Fighter / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",
    description: "Vertueuse",
    year: "2023",
    location: "Runeterra",
    longDescription: "Née d'une Manifestation targonienne au plus fort des Guerres runiques, Kayle honore l'héritage de sa mère en combattant pour la justice, portée par des ailes de feu divin. Elle et sa sœur jumelle Morgana ont longtemps été les protectrices de Demacia. Mais Kayle fut déçue par les trop nombreuses faiblesses des mortels et elle abandonna le royaume. Pourtant, d'après les légendes, elle punit toujours l'iniquité avec ses lames de feu, et beaucoup attendent avec espoir son retour…",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Née d'une Manifestation targonienne au plus fort des Guerres runiques, Kayle honore l'héritage de sa mère en combattant pour la justice, portée par des ailes de feu divin. Elle et sa sœur jumelle Morgana ont longtemps été les protectrices de Demacia. Mais Kayle fut déçue par les trop nombreuses faiblesses des mortels et elle abandonna le royaume. Pourtant, d'après les légendes, elle punit toujours l'iniquité avec ses lames de feu, et beaucoup attendent avec espoir son retour…",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Kayle d'argent","Kayle viridienne","Kayle transcendée","Kayle spadassin","Kayle jugement","Kayle aux ailes éthérées","Kayle anti-émeutes","Kayle inquisitrice aveugle","Kayle Pentakill","Kayle psychoguerrière","Kayle tueuse de dragons","Kayle Pentakill III : Lost Chapter","Kayle Dévoreuse de soleil","Kayle du Voyage immortel"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 6, defense: 6, magic: 7, difficulty: 7 },
    abilities: [
      { name: "Incandescence", description: "Kayle fait apparaître un portail pour tirer une épée céleste qui traverse les ennemis touchés, les r...", icon: "sparkles" },
      { name: "Bénédiction céleste", description: "Kayle se soigne et soigne l'allié le plus proche, et tous les deux reçoivent un bonus en vitesse de ...", icon: "zap" },
      { name: "Lame de feu stellaire", description: "Passive : l'épée céleste de Kayle, Vertu, inflige des dégâts magiques supplémentaires aux ennemis qu...", icon: "brain" },
      { name: "Jugement divin", description: "Kayle rend un allié invulnérable et fait appel aux anciennes Manifestations de la Justice pour faire...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 88,
    slug: "kayn",
    title: "Kayn",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg",
    description: "Faucheur de l'ombre",
    year: "2023",
    location: "Runeterra",
    longDescription: "Expert inégalé dans la pratique de la magie des ombres, Shieda Kayn combat pour accomplir sa véritable destinée : mener un jour l'Ordre de l'ombre vers une ère nouvelle où Ionia régnera en maître. Il manie Rhaast, une arme darkin douée de raison, sans jamais craindre la corruption de son corps et de son esprit. Il ne peut y avoir pour lui que deux fins possibles : soit Kayn pliera l'arme à sa volonté, soit la faux maléfique le consumera complètement, ouvrant la voie à la destruction de tout Runeterra.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Expert inégalé dans la pratique de la magie des ombres, Shieda Kayn combat pour accomplir sa véritable destinée : mener un jour l'Ordre de l'ombre vers une ère nouvelle où Ionia régnera en maître. Il manie Rhaast, une arme darkin douée de raison, sans jamais craindre la corruption de son corps et de son esprit. Il ne peut y avoir pour lui que deux fins possibles : soit Kayn pliera l'arme à sa volonté, soit la faux maléfique le consumera complètement, ouvrant la voie à la destruction de tout Runeterra.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Kayn chasseur d'âmes","Kayn de l'Odyssée","Kayn héraut de la nuit","Kayn héraut de la nuit prestige","Kayn lune de neige","HEARTSTEEL Kayn"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 10, defense: 6, magic: 1, difficulty: 8 },
    abilities: [
      { name: "Moisson cruelle", description: "Kayn se rue vers l'avant puis frappe. La ruée et l'attaque infligent toutes deux des dégâts....", icon: "sparkles" },
      { name: "Entaille sombre", description: "Kayn blesse et ralentit les cibles sur une ligne....", icon: "zap" },
      { name: "Passe-muraille", description: "Kayn peut traverser le terrain....", icon: "brain" },
      { name: "Intrusion obscure", description: "Kayn se cache dans le corps d'un ennemi, infligeant d'énormes dégâts quand il ressort....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 89,
    slug: "kennen",
    title: "Kennen",
    category: "Mage / Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
    description: "Cœur de la tempête",
    year: "2023",
    location: "Runeterra",
    longDescription: "Vif comme l'éclair, Kennen est plus que le simple protecteur de l'équilibre ionien, c'est aussi le seul yordle membre du Kinkou. En dépit de son allure de boule de poils, il est prêt à affronter n'importe quelle menace dans un tourbillon de shurikens et d'enthousiasme. Aux côtés de son maître, Shen, Kennen patrouille dans le domaine des esprits, utilisant sa dévastatrice énergie électrique pour abattre ses ennemis.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Vif comme l'éclair, Kennen est plus que le simple protecteur de l'équilibre ionien, c'est aussi le seul yordle membre du Kinkou. En dépit de son allure de boule de poils, il est prêt à affronter n'importe quelle menace dans un tourbillon de shurikens et d'enthousiasme. Aux côtés de son maître, Shen, Kennen patrouille dans le domaine des esprits, utilisant sa dévastatrice énergie électrique pour abattre ses ennemis.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Kennen funeste","Kennen des marais","Kennen karatéka","Docteur Kennen","Kennen arctique","Kennen lune de sang","Super Kennen","Kennen infernal","DWG Kennen","Kennen astronaute"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 6, defense: 4, magic: 7, difficulty: 4 },
    abilities: [
      { name: "Shuriken foudroyant", description: "Kennen lance un shuriken rapide dans une direction, infligeant des dégâts et ajoutant une Marque de ...", icon: "sparkles" },
      { name: "Surtension", description: "Kennen inflige, de façon passive, des dégâts supplémentaires et ajoute une Marque de tempête à sa ci...", icon: "zap" },
      { name: "Rush foudroyant", description: "Kennen se transforme en boule d'électricité et peut traverser les unités et leur appliquer une Marqu...", icon: "brain" },
      { name: "Maelström", description: "Kennen invoque une tempête qui frappe les champions ennemis proches et leur inflige des dégâts magiq...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 90,
    slug: "khazix",
    title: "Kha'Zix",
    category: "Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg",
    description: "Faucheur du Néant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Le Néant grandit et le Néant s'adapte : parmi ses nombreuses engeances, nul n'incarne mieux cette vérité que Kha'Zix. Ce monstre est né pour survivre et pour tuer les plus forts. Quand il ne parvient pas à ses fins, il évolue et se crée de nouveaux moyens plus efficaces d'abattre sa proie. Alors que Kha'Zix n'était à l'origine qu'une créature sans cervelle, son intelligence s'est développée autant que sa forme physique. Aujourd'hui, chacune de ses traques est planifiée et profite même de la peur viscérale qu'il instille dans le cœur de ses victimes.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Le Néant grandit et le Néant s'adapte : parmi ses nombreuses engeances, nul n'incarne mieux cette vérité que Kha'Zix. Ce monstre est né pour survivre et pour tuer les plus forts. Quand il ne parvient pas à ses fins, il évolue et se crée de nouveaux moyens plus efficaces d'abattre sa proie. Alors que Kha'Zix n'était à l'origine qu'une créature sans cervelle, son intelligence s'est développée autant que sa forme physique. Aujourd'hui, chacune de ses traques est planifiée et profite même de la peur viscérale qu'il instille dans le cœur de ses victimes.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Mecha Kha'Zix","Kha'Zix gardien des sables","Kha'Zix du lotus mortel","Kha'Zix du pulsar sombre","Kha'Zix du Mondial 2018","Kha'Zix de l'Odyssée","Kha'Zix gardien lunaire"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 9, defense: 4, magic: 3, difficulty: 6 },
    abilities: [
      { name: "Goût de la peur", description: "Kha'Zix inflige des dégâts physiques à sa cible. Les dégâts sont augmentés contre les cibles <font c...", icon: "sparkles" },
      { name: "Pique du Néant", description: "Kha'Zix projette des piques qui infligent des dégâts physiques aux ennemis touchés. Kha'Zix est soig...", icon: "zap" },
      { name: "Bond", description: "Kha'Zix bondit sur une zone, infligeant des dégâts physiques aux ennemis autour de son point de chut...", icon: "brain" },
      { name: "Assaut du Néant", description: "Chaque rang permet à Kha'Zix de faire évoluer l'une de ses compétences, ce qui lui confère un effet ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 91,
    slug: "kled",
    title: "Kled",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",
    description: "Cavalier colérique",
    year: "2023",
    location: "Runeterra",
    longDescription: "Guerrier aussi intrépide que grincheux, Kled est la plus pure incarnation de la fureur de Noxus. C'est un symbole que les soldats de l'empire adorent, dont les officiers se méfient et que la noblesse déteste. Beaucoup affirment que Kled a participé à toutes les campagnes des légions, qu'il a obtenu toutes les distinctions militaires et qu'il n'a jamais reculé devant un combat. Si la véracité des détails est souvent douteuse, une partie de sa légende reste indéniable : quand il charge sur le dos de Skaarl, sa monture un peu froussarde, Kled se bat pour protéger ce qui lui appartient... et s'emparer de tout le reste !",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Guerrier aussi intrépide que grincheux, Kled est la plus pure incarnation de la fureur de Noxus. C'est un symbole que les soldats de l'empire adorent, dont les officiers se méfient et que la noblesse déteste. Beaucoup affirment que Kled a participé à toutes les campagnes des légions, qu'il a obtenu toutes les distinctions militaires et qu'il n'a jamais reculé devant un combat. Si la véracité des détails est souvent douteuse, une partie de sa légende reste indéniable : quand il charge sur le dos de Skaarl, sa monture un peu froussarde, Kled se bat pour protéger ce qui lui appartient... et s'emparer de tout le reste !",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Sir Kled","Comte Kledula","Kled maraudeur","Kled Croquette"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 2, magic: 2, difficulty: 7 },
    abilities: [
      { name: "Piège à ours en laisse", description: "Kled lance un piège à ours qui inflige des dégâts et s'accroche à un champion ennemi. Si la cible re...", icon: "sparkles" },
      { name: "Penchant pour la violence", description: "Kled augmente grandement sa vitesse d'attaque le temps de quatre attaques. La quatrième attaque infl...", icon: "zap" },
      { name: "Joute", description: "Kled fonce dans une direction, infligeant des dégâts physiques et bénéficiant d'un bref bonus en vit...", icon: "brain" },
      { name: "Chaaaaaaaargez !!!", description: "Kled et Skaarl chargent vers la zone ciblée en s'entourant d'un bouclier et en laissant derrière eux...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 92,
    slug: "kogmaw",
    title: "Kog'Maw",
    category: "Marksman / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
    description: "Gueule des abysses",
    year: "2023",
    location: "Runeterra",
    longDescription: "Émanant d'une brèche ouverte vers le Néant, c'est dans les ruines hantées d'Icathia que Kog'Maw, la putride créature à la gueule béante, et son insatiable curiosité firent leur apparition. Cette étrange bête du Néant doit mâchouiller tout ce qui se trouve à portée pour en comprendre la nature. Bien qu'il ne soit pas fondamentalement mauvais, Kog'Maw est dangereux par sa candeur, d'autant qu'elle précède généralement une frénésie insatiable, mue par sa curiosité sans fond.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Émanant d'une brèche ouverte vers le Néant, c'est dans les ruines hantées d'Icathia que Kog'Maw, la putride créature à la gueule béante, et son insatiable curiosité firent leur apparition. Cette étrange bête du Néant doit mâchouiller tout ce qui se trouve à portée pour en comprendre la nature. Bien qu'il ne soit pas fondamentalement mauvais, Kog'Maw est dangereux par sa candeur, d'autant qu'elle précède généralement une frénésie insatiable, mue par sa curiosité sans fond.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Kog'Maw chenille","Kog'Maw de Sonora","Kog'Maw monarque","Kog'Maw le renne","Kog'Maw lion chinois","Kog'Maw des abysses","Kog'Maw jurassique","Proto Kog'Maw","Dogue'Maw","Kog'Maw Hextech","Kog'Maw arcaniste","Kog'Maw abeille","Zap'Maw","Kog'Maw des rouleaux de Shan Hai"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 2, magic: 5, difficulty: 6 },
    abilities: [
      { name: "Bave caustique", description: "Kog'Maw lance un projectile corrosif qui inflige des dégâts magiques et ronge l'armure et la résista...", icon: "sparkles" },
      { name: "Barrage bio-arcanique", description: "Kog'Maw dispose d'une portée d'attaque augmentée et ses attaques infligent des dégâts magiques équiv...", icon: "zap" },
      { name: "Limon du Néant", description: "Kog'Maw projette un limon particulier qui blesse tous les ennemis touchés. Le limon laisse derrière ...", icon: "brain" },
      { name: "Artillerie vivante", description: "Kog'Maw tire un projectile d'artillerie à longue portée, infligeant des dégâts magiques (grandement ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 93,
    slug: "ksante",
    title: "K'Santé",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg",
    description: "Fierté de Nazumah",
    year: "2023",
    location: "Runeterra",
    longDescription: "Rebelle et courageux, K'Santé combat les bêtes colossales et les Transfigurés impitoyables qui menacent son foyer convoité de Nazumah, une oasis lovée au cœur des sables de Shurima. Après s'être séparé de son ancien partenaire, K'Santé comprend que pour devenir un guerrier digne de diriger sa ville, il doit apprendre à brider son désir de victoire qui vire à l'obsession. Ce n'est qu'à ce prix qu'il pourra éviter les écueils de son propre orgueil et trouver en lui la sagesse nécessaire à la protection de son peuple.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Rebelle et courageux, K'Santé combat les bêtes colossales et les Transfigurés impitoyables qui menacent son foyer convoité de Nazumah, une oasis lovée au cœur des sables de Shurima. Après s'être séparé de son ancien partenaire, K'Santé comprend que pour devenir un guerrier digne de diriger sa ville, il doit apprendre à brider son désir de victoire qui vire à l'obsession. Ce n'est qu'à ce prix qu'il pourra éviter les écueils de son propre orgueil et trouver en lui la sagesse nécessaire à la protection de son peuple.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","K'Santé empyréen","K'Santé empyréen prestige","HEARTSTEEL K'Santé"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 8, defense: 8, magic: 7, difficulty: 9 },
    abilities: [
      { name: "Coups de ntofo", description: "K'Santé frappe devant lui, blessant et ralentissant tous les ennemis sur une courte ligne.<br><br>À ...", icon: "sparkles" },
      { name: "Pour Nazumah !", description: "K'Santé charge son attaque avant d'effectuer une ruée. K'Santé est impossible à arrêter et subit moi...", icon: "zap" },
      { name: "Jeu de jambes", description: "K'Santé se rue vers un allié et tous deux gagnent un bouclier. S'il n'y a pas d'allié, K'Santé se ru...", icon: "brain" },
      { name: "Grand jeu", description: "K'Santé repousse un ennemi. Si ce dernier touche un mur, il le traverse et subit plus de dégâts. K'S...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 94,
    slug: "leblanc",
    title: "LeBlanc",
    category: "Assassin / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
    description: "Manipulatrice",
    year: "2023",
    location: "Runeterra",
    longDescription: "Mystérieuse, même aux yeux des autres membres de la Rose noire, LeBlanc n'est que l'un des nombreux noms de la femme pâle qui manipule le destin de Noxus depuis ses premiers jours. Utilisant sa magie pour se cloner, elle peut être partout, devant tout le monde, et même à plusieurs endroits en même temps. Les objectifs que poursuit LeBlanc, de même que sa véritable identité, sont à l'image de ses complots : totalement insaisissables.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Mystérieuse, même aux yeux des autres membres de la Rose noire, LeBlanc n'est que l'un des nombreux noms de la femme pâle qui manipule le destin de Noxus depuis ses premiers jours. Utilisant sa magie pour se cloner, elle peut être partout, devant tout le monde, et même à plusieurs endroits en même temps. Les objectifs que poursuit LeBlanc, de même que sa véritable identité, sont à l'image de ses complots : totalement insaisissables.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","LeBlanc cruelle","LeBlanc prestigieuse","LeBlanc du gui","LeBlanc corvus","LeBlanc sylvestre","Programme LeBlanc","iG LeBlanc","LeBlanc de l'assemblée","LeBlanc du Mondial 2020","LeBlanc de l'assemblée prestige","LeBlanc séductrice","LeBlanc sorcière"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 1, defense: 4, magic: 10, difficulty: 9 },
    abilities: [
      { name: "Sceau de malveillance", description: "LeBlanc lance un sceau qui inflige des dégâts et qui marque la cible pendant 3.5 sec. Blesser la cib...", icon: "sparkles" },
      { name: "Distorsion", description: "LeBlanc fonce jusqu'à l'endroit visé, infligeant des dégâts aux ennemis proches de son point d'arriv...", icon: "zap" },
      { name: "Chaînes éthérées", description: "LeBlanc lance une chaîne qui s'attache au premier ennemi touché. Si la cible reste enchaînée pendant...", icon: "brain" },
      { name: "Imitation", description: "LeBlanc imite l'un de ses sorts de base....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 95,
    slug: "leesin",
    title: "Lee Sin",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    description: "Moine aveugle",
    year: "2023",
    location: "Runeterra",
    longDescription: "Maître des antiques arts martiaux d'Ionia, Lee Sin est un combattant dévoué à de nobles principes qui canalise l'esprit du dragon pour affronter tous les défis. Bien qu'il ait perdu la vue il y a bien des années, le moine-guerrier a dédié sa vie à la protection de sa terre natale contre tous ceux qui voudraient en déstabiliser l'équilibre spirituel. Les ennemis qui sous-estiment son apparence méditative auront peu de temps pour le regretter, face à ses poings de feu et à ses coups de pied flamboyants.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Maître des antiques arts martiaux d'Ionia, Lee Sin est un combattant dévoué à de nobles principes qui canalise l'esprit du dragon pour affronter tous les défis. Bien qu'il ait perdu la vue il y a bien des années, le moine-guerrier a dédié sa vie à la protection de sa terre natale contre tous ceux qui voudraient en déstabiliser l'équilibre spirituel. Les ennemis qui sous-estiment son apparence méditative auront peu de temps pour le regretter, face à ses poings de feu et à ses coups de pied flamboyants.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Lee Sin classique","Lee Sin acolyte","Lee Sin poing du dragon","Lee Sin muay thaï","Lee piSin","SKT T1 Lee Sin","Lee Sin pugiliste","Lee Sin poing divin","Lee Sin meneur de jeu","Lee Sin héraut de la nuit","Lee Sin héraut de la nuit prestige","FPX Lee Sin","Lee Sin dragon des tempêtes","Lee Sin héraut de la nuit prestige (2022)","Lee Sin des Jeux du zénith"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
    abilities: [
      { name: "Onde sonore/Coup résonant", description: "Onde sonore : Lee Sin émet une onde sonore pour localiser ses ennemis, infligeant des dégâts physiqu...", icon: "sparkles" },
      { name: "Rempart/Force d'âme", description: "Rempart : Lee Sin fonce vers l'allié ciblé, se protégeant contre les dégâts. Si l'allié est un champ...", icon: "zap" },
      { name: "Trombe/Fracture", description: "Trombe : Lee Sin frappe le sol, envoyant une onde de choc qui inflige des dégâts magiques et révèle ...", icon: "brain" },
      { name: "Rage du dragon", description: "Lee Sin donne un puissant coup de pied qui projette sa cible en arrière, infligeant des dégâts physi...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 96,
    slug: "leona",
    title: "Leona",
    category: "Tank / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
    description: "Aube radieuse",
    year: "2023",
    location: "Runeterra",
    longDescription: "Imprégnée de l'énergie du soleil, Leona est une guerrière sainte des Solaris qui défend le Mont Targon ; elle combat avec sa Lame du zénith et son Bouclier de l'aube. Sa peau brûle d'éclats ardents et ses yeux crépitent au rythme de la Manifestation céleste qui l'habite. Équipée d'une armure d'or et affligée par le terrible fardeau de connaissances antiques, Leona apporte à certains l'illumination, à d'autres la mort.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Imprégnée de l'énergie du soleil, Leona est une guerrière sainte des Solaris qui défend le Mont Targon ; elle combat avec sa Lame du zénith et son Bouclier de l'aube. Sa peau brûle d'éclats ardents et ses yeux crépitent au rythme de la Manifestation céleste qui l'habite. Équipée d'une armure d'or et affligée par le terrible fardeau de connaissances antiques, Leona apporte à certains l'illumination, à d'autres la mort.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Leona valkyrie","Leona protectrice","Leona de l'Iron Solari","Leona bain de soleil","PROJET : Leona","Leona reine du grill","Leona de l'éclipse solaire","Leona de l'éclipse lunaire","Leona du royaume des mechas","Leona de l'Académie du combat","DWG Leona","Leona de l'Académie du combat prestige","Leona séductrice","Leona de l'Ouest","Leona Crystalis"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 4, defense: 8, magic: 3, difficulty: 4 },
    abilities: [
      { name: "Bouclier de l'aube", description: "Leona utilise son bouclier pour sa prochaine attaque de base, infligeant des dégâts magiques supplém...", icon: "sparkles" },
      { name: "Éclipse", description: "Leona lève son bouclier et profite d'une amélioration de son armure et de sa résistance magique ains...", icon: "zap" },
      { name: "Lame du zénith", description: "Leona projette une image solaire de son épée, infligeant des dégâts magiques à tous les ennemis sur ...", icon: "brain" },
      { name: "Éruption solaire", description: "Leona invoque un rayon d'énergie solaire qui inflige des dégâts à tous les ennemis dans une zone. Le...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 97,
    slug: "lillia",
    title: "Lillia",
    category: "Fighter / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
    description: "Fleur timide",
    year: "2023",
    location: "Runeterra",
    longDescription: "Profondément timide, Lillia, le faon féérique, parcourt nerveusement les forêts d'Ionia. Échappant toujours au regard des mortels dont la nature a longtemps captivé et intimidé la jeune créature, Lillia espère découvrir la raison pour laquelle les rêves des mortels n'atteignent plus l'Arbre des rêves. Elle sillonne désormais Ionia, sa branche magique en main, afin de retrouver les rêves inassouvis des hommes. Ce n'est qu'alors que Lillia pourra s'épanouir et aider les autres à démêler leurs peurs et trouver l'étincelle qui se cache au fond d'eux. Hii !",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Profondément timide, Lillia, le faon féérique, parcourt nerveusement les forêts d'Ionia. Échappant toujours au regard des mortels dont la nature a longtemps captivé et intimidé la jeune créature, Lillia espère découvrir la raison pour laquelle les rêves des mortels n'atteignent plus l'Arbre des rêves. Elle sillonne désormais Ionia, sa branche magique en main, afin de retrouver les rêves inassouvis des hommes. Ce n'est qu'alors que Lillia pourra s'épanouir et aider les autres à démêler leurs peurs et trouver l'étincelle qui se cache au fond d'eux. Hii !",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Lillia fleur spirituelle","Lillia héraut de la nuit","Lillia des rouleaux de Shan Hai"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 0, defense: 2, magic: 10, difficulty: 8 },
    abilities: [
      { name: "Frappe fleurie", description: "Passivement, Lillia gagne des bonus cumulables en vitesse de déplacement quand elle touche des ennem...", icon: "sparkles" },
      { name: "Attention, désolée !", description: "Lillia lance une attaque dans une zone proche, infligeant d'importants dégâts au centre de la zone....", icon: "zap" },
      { name: "Graine tournoyante", description: "Lillia lance une graine qui blesse et ralentit ceux qu'elle touche. Si la graine ne touche rien, ell...", icon: "brain" },
      { name: "Douce berceuse", description: "Lillia provoque un effet de somnolence chez tous les ennemis affectés par Poussière de rêve, qui fin...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 98,
    slug: "lissandra",
    title: "Lissandra",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
    description: "Sorcière de glace",
    year: "2023",
    location: "Runeterra",
    longDescription: "La magie de Lissandra est capable de manipuler la pure puissance de la glace en quelque chose d'à la fois obscur et terrible. Avec la force de sa glace noire, elle fait bien plus que glacer... elle empale et écrase ceux qui osent s'opposer à elle. Les habitants du Nord, terrifiés, la connaissent sous le nom de « Sorcière de glace ». La vérité est bien plus sombre : Lissandra complote pour corrompre la Nature et ramener le monde à l'âge de glace.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "La magie de Lissandra est capable de manipuler la pure puissance de la glace en quelque chose d'à la fois obscur et terrible. Avec la force de sa glace noire, elle fait bien plus que glacer... elle empale et écrase ceux qui osent s'opposer à elle. Les habitants du Nord, terrifiés, la connaissent sous le nom de « Sorcière de glace ». La vérité est bien plus sombre : Lissandra complote pour corrompre la Nature et ramener le monde à l'âge de glace.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Lissandra hémolithe","Lissandra reine des lames","Programme Lissandra","Lissandra de l'assemblée","Lissandra démiurge cosmique","Lissandra de porcelaine","Lissandra de porcelaine prestige","Lissandra astro-groove"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 5, magic: 8, difficulty: 6 },
    abilities: [
      { name: "Éclat de glace", description: "Projette une lance de glace qui se brise au contact du premier ennemi touché, lui infligeant des dég...", icon: "sparkles" },
      { name: "Cercle de givre", description: "Congèle les ennemis proches, leur infligeant des dégâts magiques et les immobilisant....", icon: "zap" },
      { name: "Chemin glacial", description: "Lissandra lance une griffe de glace qui inflige des dégâts magiques. Si vous réactivez la compétence...", icon: "brain" },
      { name: "Tombeau polaire", description: "Si le sort est lancé sur un champion ennemi, la cible est congelée, ce qui l'étourdit. Si le sort es...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 99,
    slug: "lucian",
    title: "Lucian",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",
    description: "Purificateur",
    year: "2023",
    location: "Runeterra",
    longDescription: "Jadis une Sentinelle de la lumière, Lucian est aujourd'hui un chasseur de morts-vivants. Il poursuit ses cibles sans répit et les éradique avec ses pistolets jumeaux. Après que Thresh a tué Senna, sa femme, Lucian s'est lancé sur la voie de la vengeance. Mais, alors même que Senna est revenue à la vie, la rage de Lucian reste inextinguible. Impitoyable et déterminé, il est prêt à tout pour protéger les vivants des horreurs indicibles de la Brume noire.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Jadis une Sentinelle de la lumière, Lucian est aujourd'hui un chasseur de morts-vivants. Il poursuit ses cibles sans répit et les éradique avec ses pistolets jumeaux. Après que Thresh a tué Senna, sa femme, Lucian s'est lancé sur la voie de la vengeance. Mais, alors même que Senna est revenue à la vie, la rage de Lucian reste inextinguible. Impitoyable et déterminé, il est prêt à tout pour protéger les vivants des horreurs indicibles de la Brume noire.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Lucian tueur à gages","Lucian buteur","PROJET : Lucian","Lucian cœur-de-cible","Lucian de l'Ouest","Lucian Demacia Vice","Lucian Pulsefire","Lucian Pulsefire prestige","Lucian héros de guerre","Lucian des arcanes","Lucian paladin d'assaut","Lucian élu de l'hiver"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
    abilities: [
      { name: "Lumière perforante", description: "Lucian tire un rayon lumineux qui transperce une cible....", icon: "sparkles" },
      { name: "Flamboiement", description: "Lucian tire un projectile qui provoque une explosion en forme d'étoile, marquant et révélant brièvem...", icon: "zap" },
      { name: "Poursuite inlassable", description: "Lucian fonce sur une courte distance. Pistolero réduit le délai de récupération de Poursuite inlassa...", icon: "brain" },
      { name: "Déluge de balles", description: "Lucian tire un déluge de balles avec ses armes....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 100,
    slug: "lulu",
    title: "Lulu",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
    description: "Sorcière féérique",
    year: "2023",
    location: "Runeterra",
    longDescription: "Magicienne yordle, Lulu aime conjurer des illusions oniriques et de drôles de créatures en explorant Runeterra avec Pix, sa fée de compagnie. Lulu forge la réalité selon ses désirs, modifiant à sa guise la structure du monde et ce qu'elle considère comme les contraintes physiques d'un univers sans saveur. Beaucoup pensent que sa magie n'est pas naturelle, pour ne pas dire dangereuse, mais elle estime qu'un peu d'enchantement ne peut faire de mal à personne.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Magicienne yordle, Lulu aime conjurer des illusions oniriques et de drôles de créatures en explorant Runeterra avec Pix, sa fée de compagnie. Lulu forge la réalité selon ses désirs, modifiant à sa guise la structure du monde et ce qu'elle considère comme les contraintes physiques d'un univers sans saveur. Beaucoup pensent que sa magie n'est pas naturelle, pour ne pas dire dangereuse, mais elle estime qu'un peu d'enchantement ne peut faire de mal à personne.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Lulu douce-amère","Lulu funèbre","Lulu dragonnière","Lulu merveille hivernale","moLulusque","Lulu gardienne des étoiles","Lulu enchanteresse cosmique","Lulu gardienne des pyjamas","Lulu astro-groove","Lulu astro-groove prestige","Lulu dresseuse de monstres","Lulu Café Chouchous"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 4, defense: 5, magic: 7, difficulty: 5 },
    abilities: [
      { name: "Duo éclatant", description: "Pix et Lulu tirent chacun un projectile magique qui blesse et ralentit grandement les ennemis touché...", icon: "sparkles" },
      { name: "Fantaisie", description: "Si le sort est lancé sur un allié, il augmente temporairement ses vitesses de déplacement et d'attaq...", icon: "zap" },
      { name: "Pix à la rescousse !", description: "Sort lancé sur un allié : ordonne à Pix de rejoindre un allié et de le protéger, après quoi Pix le s...", icon: "brain" },
      { name: "Croissance prodigieuse", description: "Lulu fait grandir un allié, projetant en l'air les ennemis proches et lui conférant de nombreux PV s...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 101,
    slug: "malphite",
    title: "Malphite",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
    description: "Éclat du monolithe",
    year: "2023",
    location: "Runeterra",
    longDescription: "Massive créature de pierre vivante, Malphite lutte pour imposer un ordre sacré dans un monde chaotique. Né pour servir l'obélisque mystique que l'on nomme le Monolithe, il utilisa son incroyable force élémentaire pour protéger son créateur, mais n'y parvint pas. Seul survivant de la destruction qui s'ensuivit, Malphite doit désormais supporter les inconséquences des êtres de chair et trouver un nouveau rôle, digne du dernier survivant de son espèce.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Massive créature de pierre vivante, Malphite lutte pour imposer un ordre sacré dans un monde chaotique. Né pour servir l'obélisque mystique que l'on nomme le Monolithe, il utilisa son incroyable force élémentaire pour protéger son créateur, mais n'y parvint pas. Seul survivant de la destruction qui s'ensuivit, Malphite doit désormais supporter les inconséquences des êtres de chair et trouver un nouveau rôle, digne du dernier survivant de son espèce.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Malphite aux trèfles","Malphite corallien","Malphite de marbre","Malphite d'obsidienne","Malphite glacial","Mecha Malphite","Malphite flibustier","Malphite de l'Odyssée","Malphite du pulsar sombre","Malphite du pulsar sombre prestige","FPX Malphite","Malphite dieu ancien","Malphite gardien lunaire"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 5, defense: 9, magic: 7, difficulty: 2 },
    abilities: [
      { name: "Éclat sismique", description: "Malphite envoie un éclat de terre à son ennemi à travers le sol, infligeant des dégâts à l'impact et...", icon: "sparkles" },
      { name: "Coup de tonnerre", description: "Malphite attaque avec tant de force qu'il crée des bangs supersoniques. Pendant quelques secondes, s...", icon: "zap" },
      { name: "Choc au sol", description: "Malphite frappe le sol, provoquant une onde de choc qui inflige des dégâts magiques en fonction de s...", icon: "brain" },
      { name: "Force indomptable", description: "Malphite fonce vers une position à grande vitesse, blessant les ennemis et les projetant dans les ai...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 102,
    slug: "malzahar",
    title: "Malzahar",
    category: "Mage / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
    description: "Prophète du Néant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Voyant fanatique ayant dédié son existence à l'unification de toute forme de vie, Malzahar croit fermement que le Néant est la voie du salut de Runeterra. Dans les étendues désertiques de Shurima, il suivit les voix qui murmuraient dans son esprit jusqu'à l'antique cité d'Icathia. Au plus profond des ruines, il plongea le regard dans le cœur noir du Néant et reçut de nouveaux pouvoirs, un nouveau but. Malzahar se considère désormais comme un berger : sa tâche est d'unir ses semblables… ou de libérer les créatures du Néant qui vivent sous terre.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Voyant fanatique ayant dédié son existence à l'unification de toute forme de vie, Malzahar croit fermement que le Néant est la voie du salut de Runeterra. Dans les étendues désertiques de Shurima, il suivit les voix qui murmuraient dans son esprit jusqu'à l'antique cité d'Icathia. Au plus profond des ruines, il plongea le regard dans le cœur noir du Néant et reçut de nouveaux pouvoirs, un nouveau but. Malzahar se considère désormais comme un berger : sa tâche est d'unir ses semblables… ou de libérer les créatures du Néant qui vivent sous terre.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Malzahar vizir","Malzahar prince des ténèbres","Malzahar djinn","Malzahar tout-puissant","Malzahar des neiges","Malzahar boss de combat","Malzahar Hextech","Malzahar brise-monde","Malzahar abeille","Malzahar séducteur","Malzahar des Trois Honneurs"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 2, magic: 9, difficulty: 6 },
    abilities: [
      { name: "Appel du Néant", description: "Malzahar ouvre deux portails vers le Néant. Après un court délai, ils tirent des projectiles qui inf...", icon: "sparkles" },
      { name: "Nuée du Néant", description: "Malzahar invoque des êtres du Néant qui attaquent les ennemis proches....", icon: "zap" },
      { name: "Visions maléfiques", description: "Malzahar tourmente sa cible avec des visions de sa mort, infligeant des dégâts sur la durée. Utilise...", icon: "brain" },
      { name: "Poigne du Néant", description: "Malzahar canalise l'essence du Néant pour neutraliser un champion ennemi dans une zone d'énergie nég...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 103,
    slug: "maokai",
    title: "Maokai",
    category: "Tank / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
    description: "Tréant torturé",
    year: "2023",
    location: "Runeterra",
    longDescription: "Maokai est un immense tréant possédé par la colère, qui combat les horreurs impies des Îles obscures. Il est devenu l'incarnation de la vengeance après la destruction de ses terres par un cataclysme magique, n'échappant lui-même à l'état de mort-vivant que grâce à l'eau de la vie qui l'irrigue. Autrefois, Maokai était un paisible esprit de la nature ; aujourd'hui, il combat avec fureur le fléau mort-vivant qui accable les Îles obscures pour rendre à l'archipel son ancienne beauté.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Maokai est un immense tréant possédé par la colère, qui combat les horreurs impies des Îles obscures. Il est devenu l'incarnation de la vengeance après la destruction de ses terres par un cataclysme magique, n'échappant lui-même à l'état de mort-vivant que grâce à l'eau de la vie qui l'irrigue. Autrefois, Maokai était un paisible esprit de la nature ; aujourd'hui, il combat avec fureur le fléau mort-vivant qui accable les Îles obscures pour rendre à l'archipel son ancienne beauté.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Maokai calciné","Maokai totémique","Maokai festif","Maokai hanté","Maokai gardien de but","Miaoukai","Maokai héros de guerre","Maokai brise-monde","Maokai astronaute","DRX Maokai"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 3, defense: 8, magic: 6, difficulty: 3 },
    abilities: [
      { name: "Coup de ronces", description: "Maokai projette les ennemis proches en arrière avec une onde de choc, leur infligeant des dégâts mag...", icon: "sparkles" },
      { name: "Croissance torturée", description: "Maokai se transforme en une masse de racines mouvantes, devenant impossible à cibler et fonçant sur ...", icon: "zap" },
      { name: "Jet d'arbrisseau", description: "Maokai envoie un arbrisseau qui surveille une zone. Plus efficace dans les hautes herbes....", icon: "brain" },
      { name: "Emprise de la nature", description: "Maokai invoque un colossal mur de ronces et d'épines qui avance lentement, blessant et immobilisant ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 104,
    slug: "masteryi",
    title: "Maître Yi",
    category: "Assassin / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
    description: "Fine lame Wuju",
    year: "2023",
    location: "Runeterra",
    longDescription: "Maître Yi a renforcé son corps et affûté son esprit jusqu'à ce que réflexion et action ne fassent plus qu'un. Bien qu'il ne fasse appel à la violence qu'en dernier recours, la grâce et la vitesse avec lesquelles il manie son épée assurent une résolution rapide de tout conflit. En tant que l'un des derniers praticiens vivants de l'art martial ionien appelé Wuju, Yi a voué sa vie à perpétuer l'héritage de son peuple, scrutant les nouveaux disciples potentiels à l'aide des Sept lentilles d'éveil pour identifier les plus dignes de recevoir son enseignement.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Maître Yi a renforcé son corps et affûté son esprit jusqu'à ce que réflexion et action ne fassent plus qu'un. Bien qu'il ne fasse appel à la violence qu'en dernier recours, la grâce et la vitesse avec lesquelles il manie son épée assurent une résolution rapide de tout conflit. En tant que l'un des derniers praticiens vivants de l'art martial ionien appelé Wuju, Yi a voué sa vie à perpétuer l'héritage de son peuple, scrutant les nouveaux disciples potentiels à l'aide des Sept lentilles d'éveil pour identifier les plus dignes de recevoir son enseignement.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Maître Yi l'assassin","Maître Yi l'élu","Maître Yi de Ionia","Samouraï Yi","Maître Yi chasseur de têtes","PROJET : Yi","Maître Yi lame cosmique","Yi à l'épée éternelle","Bonhomme de neige Yi","Maître Yi lune de sang","Maître Yi psychoguerrier","Maître Yi séducteur","Maître Yi fleur spirituelle","Maître Yi fleur spirituelle prestige","Maître Yi guerrier d'encre"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 10, defense: 4, magic: 2, difficulty: 4 },
    abilities: [
      { name: "Assaut éclair", description: "Maître Yi se téléporte sur le champ de bataille à la vitesse de l'éclair, infligeant des dégâts phys...", icon: "sparkles" },
      { name: "Méditation", description: "Maître Yi médite, régénérant ses PV chaque seconde et subissant moins de dégâts un court moment. De ...", icon: "zap" },
      { name: "Style Wuju", description: "Permet aux attaques de base d'infliger des dégâts bruts supplémentaires....", icon: "brain" },
      { name: "Highlander", description: "Maître Yi se déplace avec une agilité sans pareille, ce qui augmente ses vitesses de déplacement et ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 105,
    slug: "milio",
    title: "Milio",
    category: "Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg",
    description: "Douce flamme",
    year: "2023",
    location: "Runeterra",
    longDescription: "Milio est un garçon d'Ixtal chaleureux qui, malgré son jeune âge, maîtrise l'Axiome du feu et a découvert le feu guérisseur. Grâce à cette puissance nouvelle, il espère intégrer les Yun Tal, comme sa grand-mère avant lui, et annuler le jugement qui contraint sa famille à l'exil. Après avoir traversé les jungles d'Ixtal pour rejoindre Ixaocan, la capitale, il se prépare à affronter le Vidalion, ignorant tout des épreuves et des dangers qui l'attendent.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Milio est un garçon d'Ixtal chaleureux qui, malgré son jeune âge, maîtrise l'Axiome du feu et a découvert le feu guérisseur. Grâce à cette puissance nouvelle, il espère intégrer les Yun Tal, comme sa grand-mère avant lui, et annuler le jugement qui contraint sa famille à l'exil. Après avoir traversé les jungles d'Ixtal pour rejoindre Ixaocan, la capitale, il se prépare à affronter le Vidalion, ignorant tout des épreuves et des dangers qui l'attendent.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Milio de la cour féérique"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 2, defense: 4, magic: 8, difficulty: 5 },
    abilities: [
      { name: "Ultra méga boule de feu", description: "Milio tire une boule de feu qui repousse un ennemi. À l'impact, la boule part en cloche et retombe s...", icon: "sparkles" },
      { name: "Feu de camp", description: "Milio crée une zone de renforcement qui soigne les alliés qui y entrent tout en augmentant leur port...", icon: "zap" },
      { name: "Chaud devant !", description: "Milio lance un bouclier sur un allié, ce qui augmente temporairement la vitesse de déplacement de ce...", icon: "brain" },
      { name: "Flammes vitales", description: "Milio libère une vague de flammes guérisseuses qui soignent les alliés à portée tout en supprimant l...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 106,
    slug: "missfortune",
    title: "Miss Fortune",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
    description: "Chasseuse de primes",
    year: "2023",
    location: "Runeterra",
    longDescription: "Capitaine de Bilgewater réputée pour sa beauté et crainte pour sa cruauté, Sarah Fortune est une personnalité qui détonne au milieu des criminels endurcis qui arpentent la cité portuaire. Enfant, elle assista au massacre de sa famille par Gangplank, le roi des pillards, et elle prit sa revanche des années plus tard, faisant exploser son navire alors qu'il se trouvait à bord. Ceux qui la sous-estiment découvrent un adversaire imprévisible et séduisant... avant de prendre une ou deux balles dans les entrailles.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Capitaine de Bilgewater réputée pour sa beauté et crainte pour sa cruauté, Sarah Fortune est une personnalité qui détonne au milieu des criminels endurcis qui arpentent la cité portuaire. Enfant, elle assista au massacre de sa famille par Gangplank, le roi des pillards, et elle prit sa revanche des années plus tard, faisant exploser son navire alors qu'il se trouvait à bord. Ceux qui la sous-estiment découvrent un adversaire imprévisible et séduisant... avant de prendre une ou deux balles dans les entrailles.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Miss Fortune cow-girl","Miss Fortune Waterloo","Miss Fortune agent secret","Miss Fortune sucre d'orge","Mad Fortune","Donna Fortune","Miss Fortune arcade","Capitaine Fortune","Miss Fortune pistolets à eau","Miss Fortune gardienne des étoiles","Miss Fortune déesse des flingues","Miss Fortune gardienne des pyjamas","Miss Fortune sorcière","Miss Fortune sorcière prestige","Miss Fortune déchue","Miss Fortune lapin de combat","Miss Fortune sorcière prestige (2022)","Miss Fortune de l'Alliance brisée","Miss Fortune de l'Alliance brisée prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 2, magic: 5, difficulty: 1 },
    abilities: [
      { name: "Doublé", description: "Miss Fortune tire une balle sur une cible, blessant cette cible et celle qui se trouve derrière. Les...", icon: "sparkles" },
      { name: "Fanfaronne", description: "Miss Fortune augmente passivement sa vitesse de déplacement quand elle n'est pas attaquée. Cette com...", icon: "zap" },
      { name: "Pluie de balles", description: "Miss Fortune révèle une zone avec une pluie de balles, infligeant des vagues de dégâts aux ennemis e...", icon: "brain" },
      { name: "Barrage de plomb", description: "Miss Fortune déchaîne un déluge de balles dans un cône devant elle, infligeant d'importants dégâts a...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 107,
    slug: "monkeyking",
    title: "Wukong",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
    description: "Roi des singes",
    year: "2023",
    location: "Runeterra",
    longDescription: "Wukong est un Vastaya qui utilise sa force, son agilité et son intelligence pour semer la confusion parmi ses adversaires et prendre sur eux l'avantage. Après s'être fait un ami en la personne d'un guerrier nommé Maître Yi, Wukong est devenu le dernier tenant d'un art martial antique connu sous le nom de Wuju. Armé de son bâton enchanté, Wukong veut empêcher Ionia de devenir ruines et décombres.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Wukong est un Vastaya qui utilise sa force, son agilité et son intelligence pour semer la confusion parmi ses adversaires et prendre sur eux l'avantage. Après s'être fait un ami en la personne d'un guerrier nommé Maître Yi, Wukong est devenu le dernier tenant d'un art martial antique connu sous le nom de Wuju. Armé de son bâton enchanté, Wukong veut empêcher Ionia de devenir ruines et décombres.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Wukong volcanique","Général Wukong","Wukong dragon de jade","Wukong des enfers","Wukong radieux","Wukong Lancier Stratus","Wukong de l'Académie du combat","Wukong sylvestre"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 5, magic: 2, difficulty: 3 },
    abilities: [
      { name: "Écrasement", description: "La prochaine attaque de Wukong a une plus longue portée, inflige des dégâts supplémentaires et rédui...", icon: "sparkles" },
      { name: "Guerrier espiègle", description: "Wukong devient <font color='#91d7ee'>invisible</font> et se rue dans une direction, laissant derrièr...", icon: "zap" },
      { name: "Nimbus", description: "Wukong se rue sur l'ennemi ciblé et envoie des images qui attaquent les ennemis proches de sa cible,...", icon: "brain" },
      { name: "Cyclone", description: "Wukong agrandit son bâton et le fait tournoyer, ce qui augmente sa vitesse de déplacement.<br><br>Le...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 108,
    slug: "morgana",
    title: "Morgana",
    category: "Mage / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
    description: "Déchue",
    year: "2023",
    location: "Runeterra",
    longDescription: "Déchirée entre ses origines célestes et mortelles, Morgana a enchaîné ses ailes pour appartenir pleinement à l'humanité et abattre sa peine et sa rancœur sur les corrompus et les malhonnêtes. Elle rejette les lois et les traditions qu'elle juge injustes. Terrée dans les recoins obscurs de Demacia, elle préfère se battre pour la vérité – quand d'autres veulent la faire taire – en employant ses boucliers et ses chaînes de feu ténébreux. Plus que tout, Morgana croit fermement que même les proscrits et les parias peuvent un jour se racheter.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Déchirée entre ses origines célestes et mortelles, Morgana a enchaîné ses ailes pour appartenir pleinement à l'humanité et abattre sa peine et sa rancœur sur les corrompus et les malhonnêtes. Elle rejette les lois et les traditions qu'elle juge injustes. Terrée dans les recoins obscurs de Demacia, elle préfère se battre pour la vérité – quand d'autres veulent la faire taire – en employant ses boucliers et ses chaînes de feu ténébreux. Plus que tout, Morgana croit fermement que même les proscrits et les parias peuvent un jour se racheter.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Morgana exilée","Morgana pécheresse","Morgana la Lame sinistre","Morgana des ronces","Morgana mariée fantôme","Morgana héroïne de guerre","Morgana spectre lunaire","Morgana sorcière","Morgana impératrice majestueuse","Morgana de l'assemblée","Morgana héraut de l'aube","Morgana sorcière prestige","Morgana terreur des étoiles","Morgana lune de neige"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 1, defense: 6, magic: 8, difficulty: 1 },
    abilities: [
      { name: "Entrave sombre", description: "Morgana utilise la magie noire pour immobiliser un ennemi, l'obligeant à ressentir la douleur qu'il ...", icon: "sparkles" },
      { name: "Tourment ténébreux", description: "Morgana déploie une ombre maudite sur une zone, blessant les ennemis qui osent y mettre les pieds. C...", icon: "zap" },
      { name: "Bouclier noir", description: "Morgana offre à un allié une barrière de feu stellaire qui absorbe les dégâts magiques et les entrav...", icon: "brain" },
      { name: "Chaînes spirituelles", description: "Morgana détache ses ailes, libérant toute sa puissance céleste et se mettant à survoler le sol. Elle...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 109,
    slug: "naafiri",
    title: "Naafiri",
    category: "Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg",
    description: "la meute de fer",
    year: "2023",
    location: "Runeterra",
    longDescription: "À travers le désert de Shurima, un concert de hurlements retentit. C'est l'appel des chiens des sables, ces prédateurs voraces qui se déplacent en meutes et luttent pour la moindre source de nourriture de ces terres stériles. Parmi ces meutes, une se distingue des autres. Elle ne suit pas uniquement ses instincts primitifs : elle est guidée par le pouvoir antique des Darkin.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "À travers le désert de Shurima, un concert de hurlements retentit. C'est l'appel des chiens des sables, ces prédateurs voraces qui se déplacent en meutes et luttent pour la moindre source de nourriture de ces terres stériles. Parmi ces meutes, une se distingue des autres. Elle ne suit pas uniquement ses instincts primitifs : elle est guidée par le pouvoir antique des Darkin.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Naafiri combattante spirituelle"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 9, defense: 5, magic: 0, difficulty: 2 },
    abilities: [
      { name: "Dagues des Darkin", description: "Naafiri lance jusqu'à deux dagues qui appliquent chacune un saignement, ou qui infligent des dégâts ...", icon: "sparkles" },
      { name: "Hallali", description: "Naafiri et ses membres de meute se ruent sur un ennemi, s'arrêtant au premier champion ennemi touché...", icon: "zap" },
      { name: "Éviscération", description: "Naafiri se rue dans une direction et inflige des dégâts aux ennemis dans une zone autour d'elle. Les...", icon: "brain" },
      { name: "Appel de la meute", description: "Naafiri renforce sa meute et fait apparaître de nouveaux membres, ce qui augmente instantanément sa ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 110,
    slug: "nami",
    title: "Nami",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
    description: "Aquamancienne",
    year: "2023",
    location: "Runeterra",
    longDescription: "Jeune Vastaya des mers, Nami fut la première de la tribu des Marai à quitter les océans et à s'aventurer sur la terre ferme lorsque leur accord ancestral avec les Targoniens fut rompu. Convaincue qu'il n'y avait pas d'autre solution, elle a décidé de suivre le rituel sacré permettant de garantir la protection de son peuple. Plongée en plein chaos, Nami fait face à son avenir avec détermination, utilisant son bâton d'Aquamancienne pour invoquer la puissance des océans.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Jeune Vastaya des mers, Nami fut la première de la tribu des Marai à quitter les océans et à s'aventurer sur la terre ferme lorsque leur accord ancestral avec les Targoniens fut rompu. Convaincue qu'il n'y avait pas d'autre solution, elle a décidé de suivre le rituel sacré permettant de garantir la protection de son peuple. Plongée en plein chaos, Nami fait face à son avenir avec détermination, utilisant son bâton d'Aquamancienne pour invoquer la puissance des océans.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Koi Nami","Nami naïade","Urf le Nami-tin","Nami des abysses","SKT T1 Nami","Programme Nami","Nami au bâton splendide","Nami destinée cosmique","Nami sorcière","Nami astro-groove","Nami astro-groove prestige","Nami de l'assemblée"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 4, defense: 3, magic: 7, difficulty: 5 },
    abilities: [
      { name: "Prison aqueuse", description: "Envoie une bulle sur la zone ciblée, infligeant des dégâts et étourdissant tous les ennemis à l'impa...", icon: "sparkles" },
      { name: "Flux et reflux", description: "Projette un flux d'eau qui rebondit sur les champions alliés et ennemis, soignant les alliés et bles...", icon: "zap" },
      { name: "Bénédiction de l'Aquamancienne", description: "Renforce un champion allié pendant un court instant, permettant à ses attaques de base et à ses sort...", icon: "brain" },
      { name: "Raz-de-marée", description: "Invoque un énorme raz-de-marée qui projette tous les ennemis touchés en l'air, les ralentit et les b...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 111,
    slug: "nasus",
    title: "Nasus",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
    description: "Gardien des sables",
    year: "2023",
    location: "Runeterra",
    longDescription: "Nasus est un imposant Transfiguré à tête de chacal, une figure héroïque que les peuples du désert considéraient comme un demi-dieu aux temps anciens de Shurima. Il était très intelligent ; son savoir encyclopédique et son extraordinaire sens stratégique guidèrent l'antique empire de Shurima vers la grandeur pendant des siècles. Après la chute de l'empire, il s'imposa un exil et devint peu à peu une légende. Maintenant que l'ancienne cité de Shurima renaît de ses cendres, il est de retour, déterminé à empêcher qu'elle ne chute de nouveau.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Nasus est un imposant Transfiguré à tête de chacal, une figure héroïque que les peuples du désert considéraient comme un demi-dieu aux temps anciens de Shurima. Il était très intelligent ; son savoir encyclopédique et son extraordinaire sens stratégique guidèrent l'antique empire de Shurima vers la grandeur pendant des siècles. Après la chute de l'empire, il s'imposa un exil et devint peu à peu une légende. Maintenant que l'ancienne cité de Shurima renaît de ses cendres, il est de retour, déterminé à empêcher qu'elle ne chute de nouveau.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Nasus galactique","Nasus pharaon","Nasus chevalier d'effroi","Nasus K-Nine","Nasus infernal","Archiduc Nasus","Nasus brise-monde","Nasus gardien lunaire","Proto Nasus","Nasus astro-groove","Nasus titan blindé","Nasus héraut de la nuit"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 7, defense: 5, magic: 6, difficulty: 6 },
    abilities: [
      { name: "Buveuse d'âmes", description: "Nasus frappe son ennemi, infligeant des dégâts et augmentant la puissance des prochaines Buveuses d'...", icon: "sparkles" },
      { name: "Flétrissement", description: "Nasus fait vieillir un champion ennemi et réduit ses vitesses d'attaque et de déplacement sur la dur...", icon: "zap" },
      { name: "Esprit enflammé", description: "Nasus libère un esprit enflammé sur une zone, infligeant des dégâts aux ennemis qui s'y trouvent et ...", icon: "brain" },
      { name: "Fureur des sables", description: "Nasus libère une puissante tempête de sable. Tant que la tempête fait rage, il a plus de PV, sa port...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 112,
    slug: "nautilus",
    title: "Nautilus",
    category: "Tank / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
    description: "Titan des profondeurs",
    year: "2023",
    location: "Runeterra",
    longDescription: "Nautilus, une légende plus ancienne encore que la première jetée de Bilgewater, est un titan en armure qui sillonne les eaux sombres au large des Îles de la Flamme Bleue. Trahi il y a bien longtemps de cela, il frappe désormais sans prévenir, se servant de son ancre gigantesque pour sauver les malheureux et couler les avares. On raconte qu'il vient chercher ceux qui oublient de payer le « tribut de Bilgewater » et qu'il les emmène avec lui au fond des mers, d'où nul ne peut s'échapper.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Nautilus, une légende plus ancienne encore que la première jetée de Bilgewater, est un titan en armure qui sillonne les eaux sombres au large des Îles de la Flamme Bleue. Trahi il y a bien longtemps de cela, il frappe désormais sans prévenir, se servant de son ancre gigantesque pour sauver les malheureux et couler les avares. On raconte qu'il vient chercher ceux qui oublient de payer le « tribut de Bilgewater » et qu'il les emmène avec lui au fond des mers, d'où nul ne peut s'échapper.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Nautilus des abysses","Nautilus souterrain","AstroNautilus","Nautilus purificateur","Nautilus brise-monde","Nautilus conquérant","Nautilus des rouleaux de Shan Hai","Nautilus Nuit d'effroi","Nautilus paladin cosmique"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 4, defense: 6, magic: 6, difficulty: 6 },
    abilities: [
      { name: "Abordage", description: "Nautilus lance son ancre devant lui.  S'il touche un ennemi, Nautilus et la cible sont tirés l'un ve...", icon: "sparkles" },
      { name: "Colère du titan", description: "Nautilus profite d'un bouclier temporaire.  Tant que le bouclier persiste, les attaques de Nautilus ...", icon: "zap" },
      { name: "Répliques", description: "Nautilus crée trois vagues explosives autour de lui. Chaque explosion blesse et ralentit les ennemis...", icon: "brain" },
      { name: "Grenade ASM", description: "Nautilus lance une onde de choc qui poursuit un ennemi. L'onde de choc transperce le sol et projette...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 113,
    slug: "neeko",
    title: "Neeko",
    category: "Mage / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",
    description: "Caméléon curieux",
    year: "2023",
    location: "Runeterra",
    longDescription: "Originaire d'une tribu disparue de Vastayas, Neeko est capable de se fondre dans n'importe quelle foule en empruntant l'apparence des autres, allant même jusqu'à absorber un soupçon de leur état émotionnel pour différencier un instant les amis des ennemis. Personne ne sait réellement où – ni qui – peut bien être Neeko, mais ceux qui chercheront à lui faire du mal découvriront bien vite sa véritable nature… et goûteront à toute la force primordiale de son pouvoir spirituel.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Originaire d'une tribu disparue de Vastayas, Neeko est capable de se fondre dans n'importe quelle foule en empruntant l'apparence des autres, allant même jusqu'à absorber un soupçon de leur état émotionnel pour différencier un instant les amis des ennemis. Personne ne sait réellement où – ni qui – peut bien être Neeko, mais ceux qui chercheront à lui faire du mal découvriront bien vite sa véritable nature… et goûteront à toute la force primordiale de son pouvoir spirituel.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Neeko merveille hivernale","Neeko gardienne des étoiles","Neeko gardienne des étoiles prestige","Neeko des rouleaux de Shan Hai","Neeko gardienne des étoiles prestige (2022)","Neeko sorcière","Neeko ville démoniaque"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 1, defense: 1, magic: 9, difficulty: 5 },
    abilities: [
      { name: "Explosion florale", description: "Neeko lance une graine qui inflige des dégâts magiques. La graine éclot une nouvelle fois si elle to...", icon: "sparkles" },
      { name: "Métaclonage", description: "Passivement, Neeko inflige des dégâts magiques supplémentaires toutes les 3 attaques. Elle peut acti...", icon: "zap" },
      { name: "Spirale épineuse", description: "Neeko tire un projectile qui blesse et qui immobilise tous les ennemis traversés. Si le projectile t...", icon: "brain" },
      { name: "Floraison renversante", description: "Après une courte préparation, Neeko bondit dans les airs. Quand elle atterrit, les ennemis proches s...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 114,
    slug: "nidalee",
    title: "Nidalee",
    category: "Assassin / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
    description: "Chasseresse bestiale",
    year: "2023",
    location: "Runeterra",
    longDescription: "Élevée au plus profond de la jungle, Nidalee est une pisteuse d'exception qui peut se transformer à volonté en couguar. Ni totalement femme, ni totalement bête, elle défend férocement son territoire contre tous ceux qui veulent y pénétrer avec ses pièges judicieusement placés et sa lance. Elle estropie sa proie avant de se jeter sur elle sous sa forme de félin. Ceux qui survivent sont rares, et tous la décrivent comme une femme aux griffes aussi aiguisées que ses instincts...",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Élevée au plus profond de la jungle, Nidalee est une pisteuse d'exception qui peut se transformer à volonté en couguar. Ni totalement femme, ni totalement bête, elle défend férocement son territoire contre tous ceux qui veulent y pénétrer avec ses pièges judicieusement placés et sa lance. Elle estropie sa proie avant de se jeter sur elle sous sa forme de félin. Ceux qui survivent sont rares, et tous la décrivent comme une femme aux griffes aussi aiguisées que ses instincts...",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Nidalee lapin des neiges","Nidalee léopard","Nidalee servante","Pharaon Nidalee","Nidalee sorcière","Nidalee chasseuse de têtes","Nidalee du royaume en guerre","Nidalee challenger","Super Nidalee intergalactique","Nidalee héraut de l'aube","Nidalee chasseresse cosmique","DWG Nidalee","Nidalee du Chant de l'océan","Nidamiaou","Nidalee La Ilusión"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 5, defense: 4, magic: 7, difficulty: 8 },
    abilities: [
      { name: "Javelot / Mise à terre", description: "Dans sa forme humaine, Nidalee lance un javelot qui inflige de plus en plus de dégâts selon la dista...", icon: "sparkles" },
      { name: "Guérilla / Bond", description: "Dans sa forme humaine, Nidalee place un piège qui blesse et révèle la cible qui le déclenche. Sous l...", icon: "zap" },
      { name: "Charge primale / Taillade", description: "Dans sa forme humaine, Nidalee canalise l'esprit du Couguar pour soigner ses alliés et leur conférer...", icon: "brain" },
      { name: "Aspect du Couguar", description: "Nidalee prend la forme d'un Couguar, ce qui lui confère de nouvelles compétences....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 115,
    slug: "nilah",
    title: "Nilah",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",
    description: "Joie incarnée",
    year: "2023",
    location: "Runeterra",
    longDescription: "Nilah est une guerrière disciplinée originaire d'une contrée lointaine. Elle traque les monstres les plus gigantesques et les plus dangereux pour les affronter et les détruire. Elle a obtenu son pouvoir du démon de la joie, emprisonné il y a bien longtemps. Cela explique qu'elle ne ressente aucune émotion, à part une joie continue. Le prix à payer est donc très faible en contrepartie de la force extraordinaire qu'elle possède désormais. Elle canalise la forme liquide du démon dans une épée au pouvoir unique et elle s'oppose aux menaces antiques dont le souvenir s'est perdu depuis longtemps.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Nilah est une guerrière disciplinée originaire d'une contrée lointaine. Elle traque les monstres les plus gigantesques et les plus dangereux pour les affronter et les détruire. Elle a obtenu son pouvoir du démon de la joie, emprisonné il y a bien longtemps. Cela explique qu'elle ne ressente aucune émotion, à part une joie continue. Le prix à payer est donc très faible en contrepartie de la force extraordinaire qu'elle possède désormais. Elle canalise la forme liquide du démon dans une épée au pouvoir unique et elle s'oppose aux menaces antiques dont le souvenir s'est perdu depuis longtemps.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Nilah gardienne des étoiles","Nilah de l'assemblée"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 4, magic: 4, difficulty: 10 },
    abilities: [
      { name: "Lame fluide", description: "Nilah donne un coup de lame-fouet dans la direction choisie, infligeant des dégâts aux ennemis sur u...", icon: "sparkles" },
      { name: "Voile de liesse", description: "Nilah s'enveloppe de brume, ce qui augmente sa vitesse de déplacement et lui permet d'esquiver avec ...", icon: "zap" },
      { name: "Torrent", description: "Nilah se rue avec enthousiasme vers sa cible, infligeant des dégâts aux ennemis sur son chemin....", icon: "brain" },
      { name: "Apothéose", description: "Faisant gaiement tournoyer sa lame-fouet, Nilah inflige des dégâts aux ennemis qui l'entourent avant...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 116,
    slug: "nocturne",
    title: "Nocturne",
    category: "Assassin / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",
    description: "Éternel cauchemar",
    year: "2023",
    location: "Runeterra",
    longDescription: "Expression démoniaque des cauchemars qui hantent tous les êtres doués d'intelligence, la chose que l'on nomme Nocturne est devenue une force primordiale du mal. D'aspect liquide, c'est une ombre sans visage, au regard glacial, armée de lames effrayantes. Après s'être affranchi du royaume des esprits, Nocturne est parvenu jusqu'au monde éveillé, pour se nourrir d'une terreur qui ne prospère que dans les véritables ténèbres.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Expression démoniaque des cauchemars qui hantent tous les êtres doués d'intelligence, la chose que l'on nomme Nocturne est devenue une force primordiale du mal. D'aspect liquide, c'est une ombre sans visage, au regard glacial, armée de lames effrayantes. Après s'être affranchi du royaume des esprits, Nocturne est parvenu jusqu'au monde éveillé, pour se nourrir d'une terreur qui ne prospère que dans les véritables ténèbres.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Nocturne terreur glaciale","Nocturne du Néant","Nocturne ravageur","Nocturne revenant","Nocturne eternum","Nocturne spectre maudit","Nocturne dieu ancien","Nocturne Hextech","Nocturne de l'Alliance brisée"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 9, defense: 5, magic: 2, difficulty: 4 },
    abilities: [
      { name: "Crépuscule", description: "Nocturne projette une lame noire qui inflige des dégâts et laisse une Lueur crépusculaire derrière e...", icon: "sparkles" },
      { name: "Linceul des ténèbres", description: "Nocturne renforce ses lames, ce qui augmente passivement sa vitesse d'attaque. En lançant Linceul de...", icon: "zap" },
      { name: "Horreur indicible", description: "Nocturne implante un cauchemar dans l'esprit de sa cible, infligeant des dégâts chaque seconde et te...", icon: "brain" },
      { name: "Paranoïa", description: "Nocturne réduit le champ de vision de tous les champions ennemis et supprime la vision qu'ils ont de...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 117,
    slug: "nunu",
    title: "Nunu et Willump",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
    description: "Le Garçon et son yéti",
    year: "2023",
    location: "Runeterra",
    longDescription: "Il était une fois un jeune garçon qui voulait prouver qu'il était un héros en tuant un monstre effrayant, mais il découvrit que la créature, un yéti solitaire, avait seulement besoin d'un ami. Rapprochés par une puissance ancienne et un amour partagé des boules de neige, Nunu et Willump courent maintenant librement dans tout Freljord en donnant vie à des aventures rêvées. Ils espèrent un jour retrouver la mère disparue de l'enfant. S'ils peuvent la sauver, peut-être seront-ils vraiment des héros, finalement…",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Il était une fois un jeune garçon qui voulait prouver qu'il était un héros en tuant un monstre effrayant, mais il découvrit que la créature, un yéti solitaire, avait seulement besoin d'un ami. Rapprochés par une puissance ancienne et un amour partagé des boules de neige, Nunu et Willump courent maintenant librement dans tout Freljord en donnant vie à des aventures rêvées. Ils espèrent un jour retrouver la mère disparue de l'enfant. S'ils peuvent la sauver, peut-être seront-ils vraiment des héros, finalement…",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Nunu et Willump Sasquatch","Nunu et Willump du Solstice","Nunu et Willump peluche","Nunu et Bot Willump","Nunu et Willump blindés","TPA Nunu et Willump","Nunu et Willump zombies","Nunu et Willump origami","Nunu et Willump astro-groove","Nunu et Willump abeille","Nunu et Willump paladins cosmiques"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 4, defense: 6, magic: 7, difficulty: 4 },
    abilities: [
      { name: "Voracité", description: "Willump mord un sbire, un monstre ou un champion ennemi, lui infligeant d'importants dégâts et récup...", icon: "sparkles" },
      { name: "Boule de neige géante !", description: "Willump crée une boule de neige qui grossit et accélère à mesure qu'il la fait rouler.  La boule de ...", icon: "zap" },
      { name: "Rafale de boules de neige", description: "Nunu lance plusieurs boules de neige qui blessent les ennemis.  Ensuite, Willump immobilise les cham...", icon: "brain" },
      { name: "Zéro absolu", description: "Nunu et Willump créent un puissant blizzard dans une zone, ce qui ralentit les ennemis et inflige d'...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 118,
    slug: "olaf",
    title: "Olaf",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
    description: "Berzerker",
    year: "2023",
    location: "Runeterra",
    longDescription: "Olaf, avec sa hache et son extraordinaire force de destruction, ne souhaite que mourir au combat. Venu de l'âpre péninsule freljordienne de Lokfar, il a été choqué par une prophétie qui lui prédisait une mort paisible : dans l'esprit de son peuple, une ignoble fin de lâche. Cherchant la mort et animé par la rage, il ravage une région après l'autre, éliminant des hordes de grands guerriers et de bêtes légendaires dans sa recherche d'un ennemi capable de l'arrêter. Aujourd'hui un brutal combattant de la Griffe hivernale, il espère mourir glorieusement dans les grandes guerres à venir.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Olaf, avec sa hache et son extraordinaire force de destruction, ne souhaite que mourir au combat. Venu de l'âpre péninsule freljordienne de Lokfar, il a été choqué par une prophétie qui lui prédisait une mort paisible : dans l'esprit de son peuple, une ignoble fin de lâche. Cherchant la mort et animé par la rage, il ravage une région après l'autre, éliminant des hordes de grands guerriers et de bêtes légendaires dans sa recherche d'un ennemi capable de l'arrêter. Aujourd'hui un brutal combattant de la Griffe hivernale, il espère mourir glorieusement dans les grandes guerres à venir.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Olaf déchu","Olaf des glaces","Brolaf","Olaf Pentakill","Olaf maraudeur","Olaf boucher","SKT T1 Olaf","Olaf tueur de dragons","Olaf Sentinelle","Olaf Pentakill III : Lost Chapter"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 9, defense: 5, magic: 3, difficulty: 3 },
    abilities: [
      { name: "Déchireuse", description: "Olaf lance sa hache à l'endroit ciblé, infligeant des dégâts aux ennemis traversés et réduisant leur...", icon: "sparkles" },
      { name: "Force décuplée", description: "Olaf augmente sa vitesse d'attaque, il subit moins de dégâts et il gagne un bouclier....", icon: "zap" },
      { name: "Frappe sauvage", description: "Olaf attaque avec tant de force qu'il inflige des dégâts physiques bruts non seulement à sa cible, m...", icon: "brain" },
      { name: "Ragnarok", description: "Olaf gagne passivement de l'armure et de la résistance magique. Il peut activer cette compétence pou...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 119,
    slug: "ornn",
    title: "Ornn",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg",
    description: "Dieu de la forge volcanique",
    year: "2023",
    location: "Runeterra",
    longDescription: "Ornn est le demi-dieu de la forge et de l'artisanat à Freljord. Avec comme seule compagne la solitude, il travaille dans sa forge enfouie au plus profond des cavernes de lave de l'Âtre-foyer. C'est là qu'il fond et purifie les métaux nécessaires à la création d'objets de qualité inimitable. Tandis que d'autres divinités – Volibear avant tout – s'immiscent dans les affaires des mortels, Ornn ne sort de son antre que pour remettre ces déités à leur place, avec son fidèle marteau ou les pouvoirs du volcan lui-même.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Ornn est le demi-dieu de la forge et de l'artisanat à Freljord. Avec comme seule compagne la solitude, il travaille dans sa forge enfouie au plus profond des cavernes de lave de l'Âtre-foyer. C'est là qu'il fond et purifie les métaux nécessaires à la création d'objets de qualité inimitable. Tandis que d'autres divinités – Volibear avant tout – s'immiscent dans les affaires des mortels, Ornn ne sort de son antre que pour remettre ces déités à leur place, avec son fidèle marteau ou les pouvoirs du volcan lui-même.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Fulguro Ornn","Ornn sylvestre","Ornn astro-groove"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 5, defense: 9, magic: 3, difficulty: 5 },
    abilities: [
      { name: "Fracture magmatique", description: "Ornn frappe le sol, créant une fissure qui blesse et ralentit les ennemis touchés. Après un court dé...", icon: "sparkles" },
      { name: "Fournaise", description: "Ornn avance en crachant des flammes. Les ennemis touchés par la dernière flamme deviennent fragiles....", icon: "zap" },
      { name: "Ruée ardente", description: "Ornn fonce dans une direction en infligeant des dégâts aux ennemis qu'il traverse. Si Ornn percute u...", icon: "brain" },
      { name: "Appel du dieu de la forge", description: "Ornn invoque un énorme élémentaire à l'endroit ciblé. Cet élémentaire se déplace ensuite vers Ornn, ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 120,
    slug: "poppy",
    title: "Poppy",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",
    description: "Gardienne du marteau",
    year: "2023",
    location: "Runeterra",
    longDescription: "Runeterra ne manque pas de braves champions, mais peu peuvent se targuer d'être aussi tenaces que Poppy. Armée du légendaire marteau d'Orlon, faisant deux fois sa taille, cette yordle déterminée cherche depuis d'innombrables années le « héros de Demacia », qui serait le dépositaire légitime de cette arme. En attendant, elle part inlassablement au combat, repoussant les ennemis du royaume à grands coups de marteau.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Runeterra ne manque pas de braves champions, mais peu peuvent se targuer d'être aussi tenaces que Poppy. Armée du légendaire marteau d'Orlon, faisant deux fois sa taille, cette yordle déterminée cherche depuis d'innombrables années le « héros de Demacia », qui serait le dépositaire légitime de cette arme. En attendant, elle part inlassablement au combat, repoussant les ennemis du royaume à grands coups de marteau.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Poppy noxienne","Lollipoppy","Poppy forgeron","Poppy de son","Poppy royale","Poppy chevalier rouge","Poppy gardienne des étoiles","Poppy faon des neiges","Poppy Hextech","Poppy astronaute","Poppy sorcière","Poppy Café Chouchous"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 6, defense: 7, magic: 2, difficulty: 6 },
    abilities: [
      { name: "Commotion", description: "Poppy balance son marteau, infligeant des dégâts et créant une zone qui ralentira les ennemis et exp...", icon: "sparkles" },
      { name: "Présence immuable", description: "Poppy obtient passivement de l'armure et de la résistance magique. Ce bonus augmente quand il lui re...", icon: "zap" },
      { name: "Charge héroïque", description: "Poppy charge la cible et la repousse. Si la cible est repoussée contre un mur, elle est étourdie....", icon: "brain" },
      { name: "Verdict de la gardienne", description: "Poppy canalise un coup de marteau qui projette les ennemis très loin....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 121,
    slug: "pyke",
    title: "Pyke",
    category: "Support / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg",
    description: "Éventreur des abysses",
    year: "2023",
    location: "Runeterra",
    longDescription: "Harponneur renommé des quais-abattoirs de Bilgewater, Pyke aurait dû trouver la mort dans le ventre d'une énorme créature marine… et pourtant, il est revenu. À présent, il écume les ruelles sombres de son ancien port d'attache, utilisant ses dons surnaturels pour assassiner brutalement les riches exploiteurs du peuple. Bilgewater, la ville des chasseurs de monstres, est devenue le terrain de chasse d'un monstre.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Harponneur renommé des quais-abattoirs de Bilgewater, Pyke aurait dû trouver la mort dans le ventre d'une énorme créature marine… et pourtant, il est revenu. À présent, il écume les ruelles sombres de son ancien port d'attache, utilisant ses dons surnaturels pour assassiner brutalement les riches exploiteurs du peuple. Bilgewater, la ville des chasseurs de monstres, est devenue le terrain de chasse d'un monstre.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Pyke spectre des sables","Pyke lune de sang","PROJET : Pyke","Pyke psychoguerrier","Pyke Sentinelle","Pyke chevalier de cendres","Pyke empyréen","Pyke combattant spirituel","Pyke combattant spirituel prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 9, defense: 3, magic: 1, difficulty: 7 },
    abilities: [
      { name: "Harponnage", description: "Pyke poignarde un ennemi devant lui ou attire un ennemi vers lui....", icon: "sparkles" },
      { name: "Plongée spectrale", description: "Pyke se camoufle et obtient un important bonus en vitesse de déplacement qui diminue sur la durée....", icon: "zap" },
      { name: "Ressac fantôme", description: "Pyke fonce dans une direction et laisse derrière lui un fantôme de noyé qui reviendra vers lui en ét...", icon: "brain" },
      { name: "Exécution abyssale", description: "Pyke fonce sur les ennemis qui ont peu de PV et les exécute, ce qui lui permet de relancer ce sort e...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 122,
    slug: "qiyana",
    title: "Qiyana",
    category: "Assassin / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",
    description: "Impératrice des éléments",
    year: "2023",
    location: "Runeterra",
    longDescription: "Dans la ville d'Ixaocan, perdue dans la jungle, Qiyana complote pour obtenir au prix du sang le siège révéré des Yun Tal. Dernière dans l'ordre de la succession, elle affronte ceux qui sont sur son chemin avec une absolue confiance en elle et une maîtrise exceptionnelle de la magie élémentaire. La terre elle-même obéit à ses ordres et Qiyana se considère comme la plus grande élémentaliste de l'histoire d'Ixaocan. À ce titre, elle pense mériter, non une ville, mais un empire.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Dans la ville d'Ixaocan, perdue dans la jungle, Qiyana complote pour obtenir au prix du sang le siège révéré des Yun Tal. Dernière dans l'ordre de la succession, elle affronte ceux qui sont sur son chemin avec une absolue confiance en elle et une maîtrise exceptionnelle de la magie élémentaire. La terre elle-même obéit à ses ordres et Qiyana se considère comme la plus grande élémentaliste de l'histoire d'Ixaocan. À ce titre, elle pense mériter, non une ville, mais un empire.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Qiyana boss de combat","True Damage Qiyana","True Damage Qiyana prestige","Qiyana reine du combat","Qiyana électrolame","True Damage Qiyana prestige (2022)","Qiyana impératrice lunaire","Qiyana La Ilusión"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 0, defense: 2, magic: 4, difficulty: 8 },
    abilities: [
      { name: "Courroux élémentaire/Lame d'Ixtal", description: "Qiyana frappe avec son arme, infligeant des dégâts et un effet supplémentaire selon son élément....", icon: "sparkles" },
      { name: "Terraforce", description: "Qiyana se rue vers la zone ciblée et enchante son arme avec un élément. Ses attaques et ses compéten...", icon: "zap" },
      { name: "Audace", description: "Qiyana se rue sur un ennemi et lui inflige des dégâts....", icon: "brain" },
      { name: "Tour de force suprême", description: "Qiyana envoie une onde de choc qui provoque une explosion en touchant un élément, ce qui étourdit et...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 123,
    slug: "quinn",
    title: "Quinn",
    category: "Marksman / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
    description: "Ailes de Demacia",
    year: "2023",
    location: "Runeterra",
    longDescription: "Quinn est un chevalier-éclaireur d'élite de Demacia qui se spécialise dans les missions d'infiltration en territoire ennemi. Avec son aigle de légende, Valor, elle forme un duo inséparable dont les proies rendent souvent l'âme avant même de comprendre qu'elles affrontaient non pas un, mais deux héros demaciens. D'une grande agilité quand la situation l'impose, Quinn pointe son arbalète sur l'ennemi pendant que Valor survole le terrain et marque les cibles évasives, pour une efficacité meurtrière sur le champ de bataille.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Quinn est un chevalier-éclaireur d'élite de Demacia qui se spécialise dans les missions d'infiltration en territoire ennemi. Avec son aigle de légende, Valor, elle forme un duo inséparable dont les proies rendent souvent l'âme avant même de comprendre qu'elles affrontaient non pas un, mais deux héros demaciens. D'une grande agilité quand la situation l'impose, Quinn pointe son arbalète sur l'ennemi pendant que Valor survole le terrain et marque les cibles évasives, pour une efficacité meurtrière sur le champ de bataille.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Quinn phénix","Quinn éclaireur pastel","Quinn corsaire","Quinn cœur-de-cible","Quinn purificatrice","Quinn gardienne des étoiles"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 9, defense: 4, magic: 2, difficulty: 5 },
    abilities: [
      { name: "Assaut aveuglant", description: "Quinn fait appel à Valor pour marquer un ennemi et limiter sa vision avant de blesser tous les ennem...", icon: "sparkles" },
      { name: "Œil d'aigle", description: "Confère passivement de plus grandes vitesses d'attaque et de déplacement à Quinn lorsqu'elle a attaq...", icon: "zap" },
      { name: "Salto", description: "Quinn charge un ennemi, lui infligeant des dégâts physiques et réduisant sa vitesse de déplacement. ...", icon: "brain" },
      { name: "En territoire ennemi", description: "Quinn et Valor s'unissent pour voler à grande vitesse. Mettre fin à la compétence lance Volée fatale...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 124,
    slug: "rakan",
    title: "Rakan",
    category: "Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg",
    description: "Charmeur",
    year: "2023",
    location: "Runeterra",
    longDescription: "Aussi lunatique qu'il est charmeur, Rakan est un trublion vastaya tristement célèbre, et le plus grand danseur guerrier de l'histoire de la tribu Lhotla. Pour les humains qui vivent dans les hautes terres d'Ionia, son nom est depuis longtemps synonyme de festivals endiablés, de fêtes déraisonnables et de musique anarchique. Peu de gens savent cependant que cet histrion ambulant est également le partenaire de Xayah, la rebelle, dont il défend avec ferveur la cause.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Aussi lunatique qu'il est charmeur, Rakan est un trublion vastaya tristement célèbre, et le plus grand danseur guerrier de l'histoire de la tribu Lhotla. Pour les humains qui vivent dans les hautes terres d'Ionia, son nom est depuis longtemps synonyme de festivals endiablés, de fêtes déraisonnables et de musique anarchique. Peu de gens savent cependant que cet histrion ambulant est également le partenaire de Xayah, la rebelle, dont il défend avec ferveur la cause.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Rakan de l'aube cosmique","Rakan cœur tendre","SSG Rakan","iG Rakan","Rakan gardien des étoiles","Rakan sylvestre","Rakan des arcanes","Rakan de l'Alliance brisée","Rakan gardien des étoiles repenti"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 2, defense: 4, magic: 8, difficulty: 5 },
    abilities: [
      { name: "Rémige rayonnante", description: "Rakan tire une plume magique qui inflige des dégâts magiques. Frapper un champion ou un monstre épiq...", icon: "sparkles" },
      { name: "Entrée triomphale", description: "Rakan fonce vers l'endroit ciblé, projetant en l'air les ennemis proches de son point d'arrivée....", icon: "zap" },
      { name: "Valse guerrière", description: "Rakan s'envole vers un champion allié en lui octroyant un bouclier. La compétence peut être relancée...", icon: "brain" },
      { name: "Danse ultime", description: "Rakan augmente sa vitesse de déplacement, charme les ennemis touchés et leur inflige des dégâts magi...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 125,
    slug: "rammus",
    title: "Rammus",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
    description: "Tatou blindé",
    year: "2023",
    location: "Runeterra",
    longDescription: "Beaucoup l'idolâtrent, certains le méprisent, mais tous restent perplexes devant l'énigmatique Rammus. Protégé par une carapace cloutée, il inspire des théories de plus en plus variées sur ses origines : demi-dieu, oracle, simple bête transformée par la magie... Quelle que soit la vérité, Rammus n'est pas très bavard et ne s'arrête pour personne tandis qu'il parcourt le désert de Shurima.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Beaucoup l'idolâtrent, certains le méprisent, mais tous restent perplexes devant l'énigmatique Rammus. Protégé par une carapace cloutée, il inspire des théories de plus en plus variées sur ses origines : demi-dieu, oracle, simple bête transformée par la magie... Quelle que soit la vérité, Rammus n'est pas très bavard et ne s'arrête pour personne tandis qu'il parcourt le désert de Shurima.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Roi Rammus","Rammus de chrome","Rammus fondu","Rammus de Freljord","Rammus ninja","Full Metal Rammus","Rammus gardien des sables","Rammus libéro","Rammus Hextech","Rammus astronaute"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 4, defense: 10, magic: 5, difficulty: 5 },
    abilities: [
      { name: "Démolisseur", description: "Rammus fonce comme une balle vers les ennemis, infligeant des dégâts et ralentissant les cibles touc...", icon: "sparkles" },
      { name: "Boule défensive", description: "Rammus prend une posture défensive. Son armure et sa résistance magique sont grandement augmentées, ...", icon: "zap" },
      { name: "Provocation frénétique", description: "Rammus provoque un champion ennemi ou un monstre, l'obligeant à s'acharner contre sa carapace. Il au...", icon: "brain" },
      { name: "Frappe ascendante", description: "Rammus bondit dans les airs et retombe violemment à l'endroit ciblé, ce qui inflige des dégâts magiq...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 126,
    slug: "reksai",
    title: "Rek'Sai",
    category: "Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
    description: "Traqueuse du Néant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Rek'Sai est une créature prédatrice – la plus imposante et la plus féroce de son espèce – qui se déplace sous terre pour surprendre ses proies. Sa faim insatiable a ravagé des régions entières de Shurima à l'époque où cet empire était encore florissant. Les marchands et les caravanes armées faisaient des détours de plusieurs kilomètres pour rester loin de ses terres. Dès lors que Rek'Sai vous a repéré, votre sort est scellé. Nul ne peut lui échapper ; elle est la mort qui surgit du sable.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Rek'Sai est une créature prédatrice – la plus imposante et la plus féroce de son espèce – qui se déplace sous terre pour surprendre ses proies. Sa faim insatiable a ravagé des régions entières de Shurima à l'époque où cet empire était encore florissant. Les marchands et les caravanes armées faisaient des détours de plusieurs kilomètres pour rester loin de ses terres. Dès lors que Rek'Sai vous a repéré, votre sort est scellé. Nul ne peut lui échapper ; elle est la mort qui surgit du sable.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Rek'Sai eternum","Requ'Sai","Rek'Sai des glaces noires","Rek'Sai sylvestre"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 5, magic: 2, difficulty: 3 },
    abilities: [
      { name: "Courroux de la reine/Sondeur explosif", description: "Les 3 prochaines attaques de base de Rek'Sai infligent des dégâts physiques supplémentaires aux enne...", icon: "sparkles" },
      { name: "Enfouissement/Jaillissement", description: "Rek'Sai plonge sous terre, gagnant de nouvelles compétences et augmentant sa vitesse de déplacement....", icon: "zap" },
      { name: "Morsure féroce/Tunnel", description: "Rek'Sai mord sa cible, infligeant le double de dégâts et des dégâts bruts si sa jauge de Fureur est ...", icon: "brain" },
      { name: "Rush du Néant", description: "Rek'Sai marque passivement ses cibles en leur infligeant des dégâts. Elle peut activer cette compéte...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 127,
    slug: "rell",
    title: "Rell",
    category: "Tank / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",
    description: "Vierge de fer",
    year: "2023",
    location: "Runeterra",
    longDescription: "Changée en arme vivante par les expériences brutales de l'académie de la Rose noire, Rell est aujourd'hui déterminée à détruire Noxus. Son enfance a été particulièrement horrible ; on lui a fait subir des choses atroces afin de perfectionner ses capacités magiques de manipulation du métal... jusqu'à ce qu'elle réussisse à s'échapper en tuant beaucoup de ses ravisseurs au passage. Désormais considérée comme une criminelle, Rell s'attaque aux soldats noxiens tout en recherchant les survivants de son ancienne « académie ». Bien qu'elle défende les faibles, elle tuera sans pitié ses anciens tortionnaires.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Changée en arme vivante par les expériences brutales de l'académie de la Rose noire, Rell est aujourd'hui déterminée à détruire Noxus. Son enfance a été particulièrement horrible ; on lui a fait subir des choses atroces afin de perfectionner ses capacités magiques de manipulation du métal... jusqu'à ce qu'elle réussisse à s'échapper en tuant beaucoup de ses ravisseurs au passage. Désormais considérée comme une criminelle, Rell s'attaque aux soldats noxiens tout en recherchant les survivants de son ancienne « académie ». Bien qu'elle défende les faibles, elle tuera sans pitié ses anciens tortionnaires.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Rell reine du combat","Rell gardienne des étoiles"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 0, defense: 0, magic: 0, difficulty: 0 },
    abilities: [
      { name: "Frappe dislocatrice", description: "Rell inflige des dégâts magiques aux unités sur une ligne, brisant leurs boucliers et les étourdissa...", icon: "sparkles" },
      { name: "Ferromancie : Descendre en piqué", description: "À cheval : Rell descend de cheval et s'abat au sol dans son armure, projetant dans les airs les enne...", icon: "zap" },
      { name: "Joute endiablée", description: "Passive : Rell gagne de la vitesse de déplacement en dehors des combats.<br><br>Active : Rell et un ...", icon: "brain" },
      { name: "Tempête magnétique", description: "Rell explose en une fureur magnétique, attirant violemment les ennemis proches. Elle attire ensuite ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 128,
    slug: "renata",
    title: "Renata Glasc",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",
    description: "Baronne de la chimie",
    year: "2023",
    location: "Runeterra",
    longDescription: "Renata Glasc s'extirpa des cendres de sa maison natale avec son nom et les recherches alchimiques de ses parents pour seules possessions. Au cours des décennies suivantes, elle devint la Baronne de la chimie la plus riche de Zaun et un génie des affaires capable de faire converger les intérêts de tous vers les siens. Travaillez avec elle et vous serez généreusement récompensé. Opposez-vous à elle et vous ne manquerez pas d'occasions de le regretter. Sachez seulement que tout le monde finit par se rallier à elle.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Renata Glasc s'extirpa des cendres de sa maison natale avec son nom et les recherches alchimiques de ses parents pour seules possessions. Au cours des décennies suivantes, elle devint la Baronne de la chimie la plus riche de Zaun et un génie des affaires capable de faire converger les intérêts de tous vers les siens. Travaillez avec elle et vous serez généreusement récompensé. Opposez-vous à elle et vous ne manquerez pas d'occasions de le regretter. Sachez seulement que tout le monde finit par se rallier à elle.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Amirale Glasc","Renata Glasc Nuit d'effroi","Renata Glasc La Ilusión","Renata Glasc La Ilusión prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 2, defense: 6, magic: 9, difficulty: 8 },
    abilities: [
      { name: "Poignée de main", description: "Renata tire un projectile qui immobilise le premier ennemi touché. Elle peut réactiver cette compéte...", icon: "sparkles" },
      { name: "Patronage", description: "Renata renforce un champion allié ; elle retarde sa mort et lui permet même de survivre s'il partici...", icon: "zap" },
      { name: "Programme de fidélité", description: "Renata tire deux projectiles techno-chimiques, octroyant un bouclier à ses alliés et infligeant des ...", icon: "brain" },
      { name: "Prise de contrôle hostile", description: "Renata envoie un nuage de produits chimiques, rendant fous furieux tous les ennemis touchés....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 129,
    slug: "renekton",
    title: "Renekton",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
    description: "Dévoreur des sables",
    year: "2023",
    location: "Runeterra",
    longDescription: "Originaire du désert brûlant de Shurima, Renekton est un Transfiguré terrifiant animé par la rage. Il était autrefois le guerrier le plus respecté de l'empire de Shurima, dont il avait mené les armées vers la victoire à maintes reprises. Cependant, après la chute de l'empire, Renekton fut enseveli sous les sables. Petit à petit, alors que le monde changeait, il sombra dans la démence. Désormais libre, son unique souhait est de retrouver et de tuer son frère Nasus qui, croit-il dans sa folie, est responsable des siècles qu'il a passés dans les ténèbres.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Originaire du désert brûlant de Shurima, Renekton est un Transfiguré terrifiant animé par la rage. Il était autrefois le guerrier le plus respecté de l'empire de Shurima, dont il avait mené les armées vers la victoire à maintes reprises. Cependant, après la chute de l'empire, Renekton fut enseveli sous les sables. Petit à petit, alors que le monde changeait, il sombra dans la démence. Désormais libre, son unique souhait est de retrouver et de tuer son frère Nasus qui, croit-il dans sa folie, est responsable des siècles qu'il a passés dans les ténèbres.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Renekton galactique","Renekton aborigène","Renekton sanguinaire","Renekton des Guerres runiques","Renekton de la terre brûlée","Renekton maître nageur","Renekton préhistorique","SKT T1 Renekton","Renekton jouet","Renekton Hextech","Renekton des glaces noires","PROJET : Renekton","Renekton héraut de l'aube","Renekton du Mondial 2023"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 5, magic: 2, difficulty: 3 },
    abilities: [
      { name: "Destruction des faibles", description: "Renekton lance une attaque circulaire, infligeant des dégâts physiques modérés à tous les ennemis qu...", icon: "sparkles" },
      { name: "Prédateur impitoyable", description: "Renekton frappe deux fois la cible en infligeant des dégâts physiques modérés et en l'étourdissant p...", icon: "zap" },
      { name: "Tranche et coupe", description: "Renekton charge et inflige des dégâts à toutes les unités sur son chemin. S'il a plus de 50 pts de F...", icon: "brain" },
      { name: "Dominus", description: "Renekton prend sa Forme de tyran et profite de PV supplémentaires ; il inflige également des dégâts ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 130,
    slug: "rengar",
    title: "Rengar",
    category: "Assassin / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg",
    description: "Fier traqueur",
    year: "2023",
    location: "Runeterra",
    longDescription: "Rengar est un féroce Vastaya chasseur de trophées qui ne vit que pour le frisson de la traque et de l'élimination des proies les plus dangereuses. Il parcourt le monde à la recherche des bêtes les plus féroces, et surtout de Kha'Zix, la créature du Néant qui lui a fait perdre un œil. Rengar ne piste ses proies ni pour la nourriture ni pour la gloire, mais pour la beauté de la poursuite en elle-même.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Rengar est un féroce Vastaya chasseur de trophées qui ne vit que pour le frisson de la traque et de l'élimination des proies les plus dangereuses. Il parcourt le monde à la recherche des bêtes les plus féroces, et surtout de Kha'Zix, la créature du Néant qui lui a fait perdre un œil. Rengar ne piste ses proies ni pour la nourriture ni pour la gloire, mais pour la beauté de la poursuite en elle-même.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Rengar chasseur de têtes","Rengar chasseur nocturne","SSW Rengar","Mecha Rengar","Rengar joli matou","Rengar gardien des sables","Rengar Sentinelle","Rengar ville démoniaque"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 7, defense: 4, magic: 2, difficulty: 8 },
    abilities: [
      { name: "Esprit sauvage", description: "La prochaine attaque de Rengar poignarde brutalement sa cible pour lui infliger des dégâts supplémen...", icon: "sparkles" },
      { name: "Rugissement", description: "Rengar émet un rugissement qui inflige des dégâts aux ennemis et lui permet de récupérer des PV équi...", icon: "zap" },
      { name: "Bolas", description: "Rengar lance des bolas, ralentissant la première cible touchée pendant un court instant.<br><br>Féro...", icon: "brain" },
      { name: "Chasseur-né", description: "Rengar fait appel à tous ses sens de prédateur. Il <font color='#cd90ee'>se camoufle</font> et révèl...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 131,
    slug: "rumble",
    title: "Rumble",
    category: "Fighter / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",
    description: "Menace mécanisée",
    year: "2023",
    location: "Runeterra",
    longDescription: "Rumble est un jeune inventeur soupe au lait. Ne disposant que de ses deux mains et d'une pile de ferraille, le yordle au tempérament de feu se fabriqua une colossale armure mécanique, dotée d'un arsenal de harpons électrifiés et de roquettes incendiaires. Si certains pouffent devant ses créations sorties tout droit d'une décharge, Rumble n'en a que faire : après tout, c'est lui qui est doté d'un lance-flammes.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Rumble est un jeune inventeur soupe au lait. Ne disposant que de ses deux mains et d'une pile de ferraille, le yordle au tempérament de feu se fabriqua une colossale armure mécanique, dotée d'un arsenal de harpons électrifiés et de roquettes incendiaires. Si certains pouffent devant ses créations sorties tout droit d'une décharge, Rumble n'en a que faire : après tout, c'est lui qui est doté d'un lance-flammes.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Rumble de la jungle","Rumble de Bilgewater","Super Rumble intergalactique","Rumble baron des friches","Rumble astro-groove","Rumble Café Chouchous"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 3, defense: 6, magic: 8, difficulty: 10 },
    abilities: [
      { name: "Lance-flammes", description: "Rumble enflamme les adversaires devant lui, infligeant des dégâts magiques dans une zone conique pen...", icon: "sparkles" },
      { name: "Bouclier recyclé", description: "Rumble crée un bouclier qui le protège des dégâts et lui donne un bonus de rapidité. Dans la Zone ro...", icon: "zap" },
      { name: "Harpon électrique", description: "Rumble tire un harpon qui électrocute sa cible, lui infligeant des dégâts magiques et réduisant sa v...", icon: "brain" },
      { name: "Éradication", description: "Rumble tire une bordée de roquettes, créant un mur de flammes qui blesse et ralentit les ennemis....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 132,
    slug: "ryze",
    title: "Ryze",
    category: "Mage / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
    description: "Mage runique",
    year: "2023",
    location: "Runeterra",
    longDescription: "Largement considéré comme l'un des plus puissants sorciers de Runeterra, Ryze est un archimage endurci par les ans qui porte un fardeau incommensurable sur ses épaules. Armé d'une constitution à toute épreuve et d'un vaste arsenal de connaissances mystiques, il consacre sa vie à rassembler les Runes telluriques, les fragments de magie brute qui ont jadis servi à façonner le monde. Ryze doit récupérer ces reliques avant qu'elles ne tombent entre de mauvaises mains, car il sait quel genre d'horreurs elles pourraient déchaîner sur Runeterra.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Largement considéré comme l'un des plus puissants sorciers de Runeterra, Ryze est un archimage endurci par les ans qui porte un fardeau incommensurable sur ses épaules. Armé d'une constitution à toute épreuve et d'un vaste arsenal de connaissances mystiques, il consacre sa vie à rassembler les Runes telluriques, les fragments de magie brute qui ont jadis servi à façonner le monde. Ryze doit récupérer ces reliques avant qu'elles ne tombent entre de mauvaises mains, car il sait quel genre d'horreurs elles pourraient déchaîner sur Runeterra.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Ryze jeune","Ryze tribal","Oncle Ryze","Ryze triomphant","Ryze professeur","Ryze zombie","Ryze au cristal noir","Ryze pirate","Ryze barbe blanche","SKT T1 Ryze","Ryze du Mondial 2019","Ryze gardien des sables","Ryze des arcanes"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 2, magic: 10, difficulty: 7 },
    abilities: [
      { name: "Court-circuit", description: "Passivement, les autres sorts de base de Ryze réinitialisent le délai de récupération de Court-circu...", icon: "sparkles" },
      { name: "Prison runique", description: "Ryze piège une cible dans une prison de runes, lui infligeant des dégâts et ralentissant ses déplace...", icon: "zap" },
      { name: "Flux envoûtant", description: "Ryze projette un orbe de pure énergie magique qui blesse une cible et marque les ennemis proches de ...", icon: "brain" },
      { name: "Portail transdimensionnel", description: "Passivement, Court-circuit inflige des dégâts supplémentaires aux cibles marquées par Flux.<br><br>À...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 133,
    slug: "sejuani",
    title: "Sejuani",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
    description: "Fureur du nord",
    year: "2023",
    location: "Runeterra",
    longDescription: "Sejuani est l'impitoyable chef de guerre sublimée de la Griffe hivernale, l'une des tribus les plus redoutées de Freljord. La survie de son peuple est une lutte constante et désespérée contre les éléments. Pour résister aux rigueurs de l'hiver, il doit lancer des assauts contre les Noxiens, les Demaciens et les Avarosans. Sejuani mène elle-même la charge des plus dangereux de ces assauts en chevauchant son sanglier drüvask, Bristle, et en agitant son fléau de glace pure pour congeler et réduire en miettes ses ennemis.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Sejuani est l'impitoyable chef de guerre sublimée de la Griffe hivernale, l'une des tribus les plus redoutées de Freljord. La survie de son peuple est une lutte constante et désespérée contre les éléments. Pour résister aux rigueurs de l'hiver, il doit lancer des assauts contre les Noxiens, les Demaciens et les Avarosans. Sejuani mène elle-même la charge des plus dangereux de ces assauts en chevauchant son sanglier drüvask, Bristle, et en agitant son fléau de glace pure pour congeler et réduire en miettes ses ennemis.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Sejuani défenses acérées","Sejuani fatale","Sejuani classique","Sejuani cavalerie ursine","Sejuani chevaucheuse de Poro","Sejuani chasseuse de bêtes","Sejuani traqueuse de l'aube","Sejuani pyrotechnicienne","Sejuani Hextech","PROJET : Sejuani","Sejuani de l'éclipse solaire","Sejuani héroïne de guerre"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 5, defense: 7, magic: 6, difficulty: 4 },
    abilities: [
      { name: "Assaut arctique", description: "Sejuani charge droit devant elle, projetant les ennemis dans les airs. La charge s'arrête si elle to...", icon: "sparkles" },
      { name: "Colère de l'hiver", description: "Sejuani donne deux coups de masse, infligeant des dégâts, ralentissant les ennemis et appliquant des...", icon: "zap" },
      { name: "Permafrost", description: "Sejuani gèle et étourdit un champion ennemi qui porte le nombre max d'effets Givre....", icon: "brain" },
      { name: "Prison de glace", description: "Sejuani projette des bolas qui gèlent et étourdissent le premier champion touché, en plus de créer u...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 134,
    slug: "shaco",
    title: "Shaco",
    category: "Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
    description: "Bouffon des ténèbres",
    year: "2023",
    location: "Runeterra",
    longDescription: "Fabriqué il y a longtemps pour servir de jouet à un prince qui se sentait seul, Shaco est une marionnette enchantée qui se repaît désormais de meurtres et de chaos. Corrompu par la magie noire et la perte de sa chère mission, le pantin autrefois gentil ne se réjouit plus que du malheur des âmes qu'il tourmente. Il utilise ses jouets et ses mauvais tours pour répandre la mort et le sang, ce qui le fait follement rire. Tous ceux qui, la nuit venue, entendent un odieux ricanement savent qu'ils sont la prochaine cible du Bouffon des ténèbres.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Fabriqué il y a longtemps pour servir de jouet à un prince qui se sentait seul, Shaco est une marionnette enchantée qui se repaît désormais de meurtres et de chaos. Corrompu par la magie noire et la perte de sa chère mission, le pantin autrefois gentil ne se réjouit plus que du malheur des âmes qu'il tourmente. Il utilise ses jouets et ses mauvais tours pour répandre la mort et le sang, ce qui le fait follement rire. Tous ceux qui, la nuit venue, entendent un odieux ricanement savent qu'ils sont la prochaine cible du Bouffon des ténèbres.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Shaco le fou","Shaco royal","Shac-noisettes","Shaco mécanique","Shaco aliéné","Shaco masqué","Shaco joker","Shaco du pulsar sombre","Shaco arcaniste","Shaco cauchemar criminel","Shaco élu de l'hiver","Shaco combattant spirituel","Shaco combattant spirituel prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 8, defense: 4, magic: 6, difficulty: 9 },
    abilities: [
      { name: "Tromperie", description: "Shaco devient invisible et se téléporte vers la position ciblée.<br><br>Sa première attaque en étant...", icon: "sparkles" },
      { name: "Boîte surprise", description: "Shaco pose une boîte cachée. Quand elle est déclenchée, elle effraie puis attaque les ennemis proche...", icon: "zap" },
      { name: "Poison double", description: "Passivement, Shaco empoisonne les cibles qu'il touche, réduisant leur vitesse de déplacement. Shaco ...", icon: "brain" },
      { name: "Hallucination", description: "Shaco crée un double de lui-même à ses côtés qui peut attaquer les ennemis proches (inflige des dégâ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 135,
    slug: "shen",
    title: "Shen",
    category: "Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
    description: "Œil du crépuscule",
    year: "2023",
    location: "Runeterra",
    longDescription: "Shen, l'Œil du crépuscule, est le chef d'un groupe secret de guerriers ioniens connu sous le nom de Kinkou. Désireux d'échapper aux méfaits des émotions, des préjugés et de l'ego, il porte un regard désintéressé sur les choses en arpentant le chemin invisible entre le royaume des esprits et le monde physique. Ayant pour mission d'assurer leur équilibre, Shen emploie ses lames d'acier et son énergie arcanique contre ceux qui voudraient le menacer.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Shen, l'Œil du crépuscule, est le chef d'un groupe secret de guerriers ioniens connu sous le nom de Kinkou. Désireux d'échapper aux méfaits des émotions, des préjugés et de l'ego, il porte un regard désintéressé sur les choses en arpentant le chemin invisible entre le royaume des esprits et le monde physique. Ayant pour mission d'assurer leur équilibre, Shen emploie ses lames d'acier et son énergie arcanique contre ceux qui voudraient le menacer.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Shen glacé","Shen au manteau jaune","Shen chirurgien","Shen lune de sang","Samouraï Shen","TPA Shen","Shen Pulsefire","Shen infernal","Shen psychoguerrier","Shen électrolame","Shen gardien de cendres"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 3, defense: 9, magic: 3, difficulty: 4 },
    abilities: [
      { name: "Assaut crépusculaire", description: "Shen rappelle sa lame spirituelle pour attaquer avec elle, infligeant des dégâts basés sur les PV ma...", icon: "sparkles" },
      { name: "Refuge spirituel", description: "Les attaques qui ciblent Shen ou ses alliés sont bloquées quand ils sont près de la lame spirituelle...", icon: "zap" },
      { name: "Rush des ombres", description: "Shen fonce dans une direction en provoquant les ennemis sur son passage....", icon: "brain" },
      { name: "Soutien indéfectible", description: "Shen offre un bouclier absorbant les dégâts à un champion allié, puis se téléporte jusqu'à lui....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 136,
    slug: "shyvana",
    title: "Shyvana",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",
    description: "Demi-dragon",
    year: "2023",
    location: "Runeterra",
    longDescription: "Shyvana est une créature dont le cœur palpite au rythme brûlant d'un éclat de rune magique. Bien qu'elle paraisse souvent humanoïde, elle peut se transformer à volonté en un terrifiant dragon, crachant des flammes sur ses ennemis. Après avoir sauvé la vie du prince héritier Jarvan IV, Shyvana sert au sein de sa garde royale, luttant pour être acceptée par le peuple suspicieux de Demacia.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Shyvana est une créature dont le cœur palpite au rythme brûlant d'un éclat de rune magique. Bien qu'elle paraisse souvent humanoïde, elle peut se transformer à volonté en un terrifiant dragon, crachant des flammes sur ses ennemis. Après avoir sauvé la vie du prince héritier Jarvan IV, Shyvana sert au sein de sa garde royale, luttant pour être acceptée par le peuple suspicieux de Demacia.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Shyvana écailles de fer","Shyvana chamane","Shyvana aux flammes noires","Shyvana dragon de glace","Shyvana du Mondial 2014","Super Shyvana intergalactique","Shyvana déchue","Shyvana du Voyage immortel"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 6, magic: 3, difficulty: 4 },
    abilities: [
      { name: "Morsure double", description: "Shyvana frappe deux fois à sa prochaine attaque et gagne un bonus en vitesse d'attaque pour ses proc...", icon: "sparkles" },
      { name: "Combustion", description: "Shyvana s'enveloppe de feu, infligeant des dégâts magiques chaque seconde aux ennemis proches et se ...", icon: "zap" },
      { name: "Souffle de flammes", description: "Shyvana lance une boule de feu qui blesse tous les ennemis touchés et laisse des cendres sur les cib...", icon: "brain" },
      { name: "Vol du dragon", description: "Shyvana se transforme en dragon et s'envole vers l'endroit ciblé. Les ennemis sur sa route subissent...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 137,
    slug: "sion",
    title: "Sion",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",
    description: "Colosse mort-vivant",
    year: "2023",
    location: "Runeterra",
    longDescription: "Guerrier sanguinaire d'une époque révolue, Sion était célébré comme un héros à Noxus, pour avoir étouffé un roi de Demacia de ses mains nues. Il était l'objet d'une telle dévotion qu'on lui refusa le repos éternel, en le ramenant à la vie pour continuer à servir son empire. Il massacre sans distinction alliés comme ennemis sur son chemin, prouvant à cette occasion qu'il n'a plus rien d'humain. Son armure rivetée à même la chair, Sion charge sans relâche au combat, luttant entre deux coups de sa puissante hache pour tenter de se remémorer qui il était.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Guerrier sanguinaire d'une époque révolue, Sion était célébré comme un héros à Noxus, pour avoir étouffé un roi de Demacia de ses mains nues. Il était l'objet d'une telle dévotion qu'on lui refusa le repos éternel, en le ramenant à la vie pour continuer à servir son empire. Il massacre sans distinction alliés comme ennemis sur son chemin, prouvant à cette occasion qu'il n'a plus rien d'humain. Son armure rivetée à même la chair, Sion charge sans relâche au combat, luttant entre deux coups de sa puissante hache pour tenter de se remémorer qui il était.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Sion Hextech","Sion barbare","Sion bûcheron","Sion massacreur","Mecha Sion Zéro","Sion brise-monde","Sion des glaces noires","Sion de l'Ouest","Sion paladin cosmique"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 5, defense: 9, magic: 3, difficulty: 5 },
    abilities: [
      { name: "Fracas meurtrier", description: "Sion charge un coup puissant qui s'abattra dans une zone devant lui, infligeant des dégâts aux ennem...", icon: "sparkles" },
      { name: "Feu intérieur", description: "Sion s'entoure d'un bouclier et peut réactiver le sort au bout de 3 sec pour infliger des dégâts mag...", icon: "zap" },
      { name: "Cri du tueur", description: "Sion envoie une courte onde de choc qui blesse et ralentit le premier ennemi touché tout en réduisan...", icon: "brain" },
      { name: "Assaut inarrêtable", description: "Sion charge dans une direction, accélérant peu à peu. Il peut légèrement changer de trajectoire en d...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 138,
    slug: "sivir",
    title: "Sivir",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg",
    description: "Vierge martiale",
    year: "2023",
    location: "Runeterra",
    longDescription: "Sivir est une célèbre chasseuse de trésors et capitaine de mercenaires œuvrant dans le désert de Shurima. Armée de sa légendaire lame en croix, elle a triomphé d'innombrables batailles pour les clients prêts à honorer ses tarifs exorbitants. Connue pour sa détermination et son ambition démesurée, elle tire sa fierté des nombreux trésors qu'elle a déterrés dans les tombes les plus périlleuses de Shurima… et revendus au prix fort. Mais le jour où des forces ancestrales se sont éveillées au plus profond de Shurima, Sivir s'est retrouvée tiraillée entre deux destins conflictuels.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Sivir est une célèbre chasseuse de trésors et capitaine de mercenaires œuvrant dans le désert de Shurima. Armée de sa légendaire lame en croix, elle a triomphé d'innombrables batailles pour les clients prêts à honorer ses tarifs exorbitants. Connue pour sa détermination et son ambition démesurée, elle tire sa fierté des nombreux trésors qu'elle a déterrés dans les tombes les plus périlleuses de Shurima… et revendus au prix fort. Mais le jour où des forces ancestrales se sont éveillées au plus profond de Shurima, Sivir s'est retrouvée tiraillée entre deux destins conflictuels.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Sivir princesse guerrière","Sivir spectaculaire","Sivir chasseresse","Sivir bandit","Sivir PAX","Sivir du blizzard","Sivir purificatrice","Sivir héroïne de guerre","Néo Sivir PAX","Sivir livreuse de pizza","Sivir lune de sang","Sivir de l'Odyssée","Sivir Café Chouchous","Sivir de l'éclipse solaire","Sivir mythificatrice","Sivir mythificatrice prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 9, defense: 3, magic: 1, difficulty: 4 },
    abilities: [
      { name: "Lame boomerang", description: "Sivir lance sa lame comme un boomerang, infligeant des dégâts à l'aller comme au retour....", icon: "sparkles" },
      { name: "Ricochet", description: "Les prochaines attaques de base de Sivir gagneront de la vitesse d'attaque bonus et rebondiront sur ...", icon: "zap" },
      { name: "Bouclier magique", description: "Sivir crée une barrière magique capable de bloquer une compétence ennemie. Elle récupère des PV et g...", icon: "brain" },
      { name: "En chasse", description: "Sivir mène ses alliés au combat, augmentant temporairement leur vitesse de déplacement. De plus, les...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 139,
    slug: "skarner",
    title: "Skarner",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",
    description: "Gardien de cristal",
    year: "2023",
    location: "Runeterra",
    longDescription: "Skarner est un immense scorpion cristallin venu d'une vallée cachée de Shurima. Issus de l'ancienne race des Brackerns, Skarner et les siens sont connus pour leur grande sagesse et leurs liens profonds avec la terre : leur âme a fusionné avec de puissants cristaux de vie qui contiennent les pensées et les souvenirs de leurs ancêtres. À une époque si reculée que nul ne s'en souvient, les Brackerns sont entrés en hibernation pour échapper à la destruction magique, mais des événements menaçants viennent de réveiller Skarner. Seul Brackern éveillé, il lutte pour protéger les siens contre ceux qui cherchent à les blesser.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Skarner est un immense scorpion cristallin venu d'une vallée cachée de Shurima. Issus de l'ancienne race des Brackerns, Skarner et les siens sont connus pour leur grande sagesse et leurs liens profonds avec la terre : leur âme a fusionné avec de puissants cristaux de vie qui contiennent les pensées et les souvenirs de leurs ancêtres. À une époque si reculée que nul ne s'en souvient, les Brackerns sont entrés en hibernation pour échapper à la destruction magique, mais des événements menaçants viennent de réveiller Skarner. Seul Brackern éveillé, il lutte pour protéger les siens contre ceux qui cherchent à les blesser.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Skarner fléau des sables","Skarner tellurique","Proto Skarner Alpha","Skarner gardien des sables","Skarner dard cosmique"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 7, defense: 6, magic: 5, difficulty: 5 },
    abilities: [
      { name: "Taillade de cristal", description: "Skarner attaque violemment avec ses pinces, infligeant des dégâts physiques à tous les ennemis proch...", icon: "sparkles" },
      { name: "Exosquelette cristallin", description: "Skarner obtient un bouclier et, tant que le bouclier est actif, sa vitesse de déplacement est augmen...", icon: "zap" },
      { name: "Brèche", description: "Skarner tire un projectile d'énergie cristalline, infligeant des dégâts aux ennemis touchés et les r...", icon: "brain" },
      { name: "Empalement", description: "Skarner neutralise un champion ennemi et lui inflige des dégâts. Pendant ce temps, Skarner peut se d...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 140,
    slug: "sona",
    title: "Sona",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",
    description: "Virtuose de la harpe",
    year: "2023",
    location: "Runeterra",
    longDescription: "Sona est la plus grande virtuose de l'etwahl de Demacia, ne s'exprimant que par ses accords vibrants et gracieux. Ses manières distinguées lui valent d'être appréciée par l'aristocratie, bien que beaucoup soupçonnent ses mélodies envoûtantes de s'apparenter à de la magie, tabou à Demacia. Inaudible pour des étrangers, mais comprise par ses compagnons les plus proches, Sona se sert de ses harmonies pour soigner ses alliés blessés, mais également pour frapper ses ennemis par surprise.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Sona est la plus grande virtuose de l'etwahl de Demacia, ne s'exprimant que par ses accords vibrants et gracieux. Ses manières distinguées lui valent d'être appréciée par l'aristocratie, bien que beaucoup soupçonnent ses mélodies envoûtantes de s'apparenter à de la magie, tabou à Demacia. Inaudible pour des étrangers, mais comprise par ses compagnons les plus proches, Sona se sert de ses harmonies pour soigner ses alliés blessés, mais également pour frapper ses ennemis par surprise.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Sona la muse","Sona Pentakill","Sona nocturne","Sona au guqin","Sona arcade","DJ Sona","Sona cœur tendre","Sona de l'Odyssée","Sona psychoguerrière","Sona Pentakill III : Lost Chapter","Sona gardienne des étoiles","Sona du Voyage immortel","Sona du Voyage immortel prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 5, defense: 2, magic: 8, difficulty: 4 },
    abilities: [
      { name: "Hymne à la bravoure", description: "Sona joue l'Hymne à la bravoure, dont les ondes sonores infligent des dégâts magiques à deux ennemis...", icon: "sparkles" },
      { name: "Aria de persévérance", description: "Sona joue l'Aria de persévérance. Sa mélodie protectrice la soigne, ainsi qu'un allié blessé proche....", icon: "zap" },
      { name: "Mélodie de vélocité", description: "Sona joue la Mélodie de vélocité, ce qui confère aux alliés proches un bonus en vitesse de déplaceme...", icon: "brain" },
      { name: "Crescendo", description: "Sona joue son accord ultime, étourdissant les champions ennemis, les forçant à danser et leur inflig...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 141,
    slug: "soraka",
    title: "Soraka",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg",
    description: "Enfant des étoiles",
    year: "2023",
    location: "Runeterra",
    longDescription: "Voyageuse originaire de dimensions célestes d'au-delà du Mont Targon, Soraka a abandonné son immortalité pour protéger les mortels de leurs instincts violents. Elle cherche à pousser tous ceux qu'elle rencontre à embrasser les vertus de la compassion et de la pitié, allant jusqu'à soigner même ceux qui lui veulent du mal. Et, malgré toutes les souffrances dont Soraka a été témoin dans ce monde, elle croit encore que le peuple de Runeterra n'a pas atteint son plein potentiel.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Voyageuse originaire de dimensions célestes d'au-delà du Mont Targon, Soraka a abandonné son immortalité pour protéger les mortels de leurs instincts violents. Elle cherche à pousser tous ceux qu'elle rencontre à embrasser les vertus de la compassion et de la pitié, allant jusqu'à soigner même ceux qui lui veulent du mal. Et, malgré toutes les souffrances dont Soraka a été témoin dans ce monde, elle croit encore que le peuple de Runeterra n'a pas atteint son plein potentiel.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Soraka dryade","Soraka divine","Soraka du temple","Soraka faucheuse","Soraka de l'Ordre des bananes","Programme Soraka","Soraka gardienne des étoiles","Soraka gardienne des pyjamas","Soraka merveille hivernale","Soraka héraut de l'aube","Soraka héraut de la nuit","Soraka gardienne des étoiles prestige","Soraka Café Chouchous","Soraka fleur spirituelle","Soraka du Voyage immortel"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 2, defense: 5, magic: 7, difficulty: 3 },
    abilities: [
      { name: "Appel de l'étoile", description: "Une étoile s'abat à l'endroit ciblé, infligeant des dégâts magiques et ralentissant les ennemis. Si ...", icon: "sparkles" },
      { name: "Infusion astrale", description: "Soraka sacrifie une partie de ses PV pour soigner un autre champion allié....", icon: "zap" },
      { name: "Équinoxe", description: "Crée une zone qui réduit au silence tous les ennemis s'y trouvant. Quand la zone disparaît, tous les...", icon: "brain" },
      { name: "Souhait", description: "Soraka remplit ses alliés d'espoir, ce qui rend immédiatement des PV à tous les champions alliés et ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 142,
    slug: "syndra",
    title: "Syndra",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
    description: "Souveraine obscure",
    year: "2023",
    location: "Runeterra",
    longDescription: "Syndra est une effrayante magicienne originaire d'Ionia, aux pouvoirs impressionnants. Enfant, elle perturba les anciens de son village avec sa magie sauvage et incontrôlée. Elle fut confiée à un maître dans l'espoir qu'elle apprendrait à se contrôler, mais elle finit par découvrir que son prétendu mentor limitait ses capacités. Créant des sphères d'énergie noire avec ses sentiments de douleur et de trahison, Syndra jura de détruire quiconque tenterait de la contrôler.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Syndra est une effrayante magicienne originaire d'Ionia, aux pouvoirs impressionnants. Enfant, elle perturba les anciens de son village avec sa magie sauvage et incontrôlée. Elle fut confiée à un maître dans l'espoir qu'elle apprendrait à se contrôler, mais elle finit par découvrir que son prétendu mentor limitait ses capacités. Créant des sphères d'énergie noire avec ses sentiments de douleur et de trahison, Syndra jura de détruire quiconque tenterait de la contrôler.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Syndra justicière","Syndra de l'Atlantide","Syndra dame de carreau","Syndra des neiges","SKT T1 Syndra","Syndra gardienne des étoiles","Syndra beach-volley","Syndra rose fanée","Syndra sorcière","Syndra gardienne des étoiles prestige","Syndra fleur spirituelle","Syndra de l'assemblée"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 3, magic: 9, difficulty: 8 },
    abilities: [
      { name: "Sphère noire", description: "Syndra invoque une sphère noire, infligeant des dégâts magiques. La sphère dure quelques secondes et...", icon: "sparkles" },
      { name: "Force de la volonté", description: "Syndra saisit et lance une sphère noire ou un sbire ennemi, infligeant des dégâts magiques et réduis...", icon: "zap" },
      { name: "Dispersion des faibles", description: "Syndra repousse les ennemis et les sphères noires, infligeant des dégâts magiques. Les ennemis frapp...", icon: "brain" },
      { name: "Déchaînement de puissance", description: "Syndra bombarde un champion ennemi avec toutes ses sphères noires....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 143,
    slug: "tahmkench",
    title: "Tahm Kench",
    category: "Support / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg",
    description: "Roi des rivières",
    year: "2023",
    location: "Runeterra",
    longDescription: "Au fil du temps, on lui a donné de nombreux noms. Le démon Tahm Kench voyage dans les cours d'eau de Runeterra, nourrissant son insatiable appétit de la misère des autres. Bien qu'il puisse sembler particulièrement charmant et fier, il rôde dans le monde tel un vagabond à la recherche d'une proie sans méfiance. Sa langue extensible peut étourdir un guerrier en armure à plusieurs mètres de distance, avant de l'attirer dans son estomac gargouillant vers un abysse dont il n'a que peu de chances de revenir.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Au fil du temps, on lui a donné de nombreux noms. Le démon Tahm Kench voyage dans les cours d'eau de Runeterra, nourrissant son insatiable appétit de la misère des autres. Bien qu'il puisse sembler particulièrement charmant et fier, il rôde dans le monde tel un vagabond à la recherche d'une proie sans méfiance. Sa langue extensible peut étourdir un guerrier en armure à plusieurs mètres de distance, avant de l'attirer dans son estomac gargouillant vers un abysse dont il n'a que peu de chances de revenir.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Tahm Kench cordon-bleu","Urf Kench","Tahm Kench numismate","Tahm Kench des arcanes","Tahm Kench de l'Ouest","Tahm Kench des rouleaux de Shan Hai"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 3, defense: 9, magic: 6, difficulty: 5 },
    abilities: [
      { name: "Coup de langue", description: "Tahm Kench donne un coup de fouet avec sa langue, blessant et ralentissant la première unité touchée...", icon: "sparkles" },
      { name: "Plongée abyssale", description: "Tahm Kench plonge, puis réapparaît à l'endroit ciblé, blessant et projetant dans les airs tous les e...", icon: "zap" },
      { name: "Peau épaisse", description: "<passive>Passive :</passive> Tahm Kench stocke un pourcentage des dégâts qu'il subit. En dehors des ...", icon: "brain" },
      { name: "Dévoration", description: "Tahm Kench dévore un champion pendant quelques secondes, lui infligeant des dégâts magiques s'il s'a...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 144,
    slug: "taliyah",
    title: "Taliyah",
    category: "Mage / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
    description: "Tisseuse de pierres",
    year: "2023",
    location: "Runeterra",
    longDescription: "Taliyah est une mage issue des tribus nomades de Shurima, déchirée entre l'émerveillement de la jeunesse et les responsabilités des adultes. Elle a déjà traversé pratiquement tout Valoran pour découvrir la véritable nature de ses pouvoirs toujours plus puissants, avant d'être récemment retournée dans sa tribu pour la protéger. Certains se méprennent sur sa compassion et paient leur erreur au prix fort : sous son attitude joviale, Taliyah dissimule une volonté de fer capable de déplacer les montagnes et un esprit assez féroce pour faire trembler la terre.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Taliyah est une mage issue des tribus nomades de Shurima, déchirée entre l'émerveillement de la jeunesse et les responsabilités des adultes. Elle a déjà traversé pratiquement tout Valoran pour découvrir la véritable nature de ses pouvoirs toujours plus puissants, avant d'être récemment retournée dans sa tribu pour la protéger. Certains se méprennent sur sa compassion et paient leur erreur au prix fort : sous son attitude joviale, Taliyah dissimule une volonté de fer capable de déplacer les montagnes et un esprit assez féroce pour faire trembler la terre.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Taliyah de Freljord","SSG Taliyah","Taliyah surfeuse","Taliyah gardienne des étoiles","Taliyah Crystalis"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 1, defense: 7, magic: 8, difficulty: 5 },
    abilities: [
      { name: "Rafale filée", description: "Taliyah lance une rafale de pierres dans une direction ciblée tout en se déplaçant librement. Cela c...", icon: "sparkles" },
      { name: "Poussée sismique", description: "Taliyah provoque l'éruption d'une zone du sol, ce qui projette les ennemis dans la direction de son ...", icon: "zap" },
      { name: "Défilage tellurique", description: "Taliyah crée un champ de mines ralentissant. Si des ennemis effectuent une ruée ou sont projetés par...", icon: "brain" },
      { name: "Mur de la tisseuse", description: "Taliyah crée un très long mur et surfe ensuite dessus....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 145,
    slug: "talon",
    title: "Talon",
    category: "Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg",
    description: "Lame des ténèbres",
    year: "2023",
    location: "Runeterra",
    longDescription: "Talon est la dague cachée dans l'ombre, un assassin impitoyable, capable de frapper sans prévenir et de fuir avant que l'alerte ne soit donnée. Il a acquis une dangereuse réputation dans les brutales rues de Noxus, où il a été contraint de se battre, de tuer et de voler pour survivre. Adopté par la tristement célèbre famille Du Couteau, il use maintenant de ses talents au service de l'empire, assassinant les chefs, capitaines et héros ennemis... mais aussi tout Noxien qui aurait attiré l'ire de ses maîtres.",
    specs: [
      { label: "Classe", value: "Assassin" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Talon est la dague cachée dans l'ombre, un assassin impitoyable, capable de frapper sans prévenir et de fuir avant que l'alerte ne soit donnée. Il a acquis une dangereuse réputation dans les brutales rues de Noxus, où il a été contraint de se battre, de tuer et de voler pour survivre. Adopté par la tristement célèbre famille Du Couteau, il use maintenant de ses talents au service de l'empire, assassinant les chefs, capitaines et héros ennemis... mais aussi tout Noxien qui aurait attiré l'ire de ses maîtres.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Talon renégat","Talon Némésis","Talon lame du dragon","SSW Talon","Talon lune de sang","Talon à l'épée tenace","Talon Sylvenoir","Talon rose fanée","Talon de l'Ouest","Talon de l'Ouest prestige"],
    quote: "La victoire est à portée de main.",
    voice: "Zephyr",
    region: "Runeterra",
    stats: { attack: 9, defense: 3, magic: 1, difficulty: 7 },
    abilities: [
      { name: "Diplomatie noxienne", description: "Talon poignarde l'unité ciblée. S'il est en mêlée, cette attaque inflige des dégâts critiques. S'il ...", icon: "sparkles" },
      { name: "Ratissage", description: "Talon projette une volée de lames qui reviennent ensuite vers lui, infligeant des dégâts physiques à...", icon: "zap" },
      { name: "Voie de l'assassin", description: "Talon saute par-dessus n'importe quel terrain ou bâtiment, jusqu'à une distance maximale. Cette comp...", icon: "brain" },
      { name: "Assaut ténébreux", description: "Talon projette des lames autour de lui et devient invisible, augmentant sa vitesse de déplacement. Q...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 146,
    slug: "taric",
    title: "Taric",
    category: "Support / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",
    description: "Bouclier de Valoran",
    year: "2023",
    location: "Runeterra",
    longDescription: "Taric est la Manifestation du Protecteur, doté d'un incroyable pouvoir en tant que gardien de la vie, de l'amour et de la beauté sur Runeterra. Couvert d'opprobre pour avoir abandonné son devoir et exilé de sa terre natale de Demacia, Taric a entrepris l'ascension du Mont Targon en quête de rédemption et s'est découvert une mission supérieure au sein des étoiles. Imprégné de la force antique de Targon, le Bouclier de Valoran monte désormais constamment la garde contre la corruption insidieuse du Néant.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Taric est la Manifestation du Protecteur, doté d'un incroyable pouvoir en tant que gardien de la vie, de l'amour et de la beauté sur Runeterra. Couvert d'opprobre pour avoir abandonné son devoir et exilé de sa terre natale de Demacia, Taric a entrepris l'ascension du Mont Targon en quête de rédemption et s'est découvert une mission supérieure au sein des étoiles. Imprégné de la force antique de Targon, le Bouclier de Valoran monte désormais constamment la garde contre la corruption insidieuse du Néant.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Taric émeraude","Taric du cinquième âge","Taric hémolithe","Taric à Malibu","Taric Clair-Pavois","Taric astro-groove"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 4, defense: 8, magic: 5, difficulty: 3 },
    abilities: [
      { name: "Bénédiction stellaire", description: "Rend des PV aux champions alliés proches en fonction du nombre de charges stockées. Les attaques ren...", icon: "sparkles" },
      { name: "Bastion", description: "Augmente passivement l'armure de Taric et de tout champion allié affecté par Bastion.<br><br>À l'act...", icon: "zap" },
      { name: "Éblouissement", description: "Taric prépare un rayon de lumière stellaire qui, après un bref délai, inflige des dégâts magiques et...", icon: "brain" },
      { name: "Lumière cosmique", description: "Après un délai, nimbe les champions alliés proches d'énergie cosmique, les rendant invulnérables pen...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 147,
    slug: "teemo",
    title: "Teemo",
    category: "Marksman / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
    description: "Scout de Bantam",
    year: "2023",
    location: "Runeterra",
    longDescription: "N'ayant pas peur de braver les obstacles les plus dangereux, Teemo explore le monde avec un enthousiasme débordant et une bonne humeur contagieuse. Yordle au sens moral inflexible, il suit fièrement les préceptes du Code des éclaireurs de Bandle, parfois avec tant d'empressement qu'il en oublie les conséquences néfastes de ses actions. Pour certains, l'existence même des éclaireurs est à remettre en cause. Mais ce qu'il ne faut surtout pas remettre en cause, ce sont les convictions de Teemo !",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "N'ayant pas peur de braver les obstacles les plus dangereux, Teemo explore le monde avec un enthousiasme débordant et une bonne humeur contagieuse. Yordle au sens moral inflexible, il suit fièrement les préceptes du Code des éclaireurs de Bandle, parfois avec tant d'empressement qu'il en oublie les conséquences néfastes de ses actions. Pour certains, l'existence même des éclaireurs est à remettre en cause. Mais ce qu'il ne faut surtout pas remettre en cause, ce sont les convictions de Teemo !",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Teemo l'elfe heureux","Teemo éclaireur","Teemo blaireau","Teemo astronaute","Teemo lapin","Super Teemo","Teemo panda","Teemo de la section Oméga","Teemo diablotin","Teemo abeille","Teemo fleur spirituelle","Teemo fleur spirituelle prestige","Teemo pyrotechnicien","Teemo astro-groove"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 5, defense: 3, magic: 7, difficulty: 6 },
    abilities: [
      { name: "Fléchette aveuglante", description: "Un puissant venin obscurcit la vue de l'ennemi, infligeant des dégâts à la cible et l'aveuglant pend...", icon: "sparkles" },
      { name: "Vélocité", description: "La vitesse de déplacement de Teemo est passivement augmentée jusqu'à ce qu'il soit frappé par un cha...", icon: "zap" },
      { name: "Tir toxique", description: "Toutes les attaques de Teemo empoisonnent la cible, infligeant des dégâts à l'impact puis chaque sec...", icon: "brain" },
      { name: "Piège nocif", description: "Teemo se sert d'un des champignons stockés dans son sac à dos pour lancer un piège explosif. Si un e...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 148,
    slug: "tristana",
    title: "Tristana",
    category: "Marksman / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
    description: "Canonnière yordle",
    year: "2023",
    location: "Runeterra",
    longDescription: "Si bon nombre d'autres yordles utilisent leur énergie débordante pour explorer, découvrir, inventer ou plus simplement jouer de mauvais tours, Tristana a toujours puisé son inspiration dans les récits des grands guerriers. Elle avait beaucoup entendu parler de Runeterra, de ses factions et de ses guerres, et elle pensait que les yordles aussi avaient l'étoffe des légendes. Dès son arrivée dans ce monde, elle s'équipa de son fidèle canon Boomer pour se jeter au combat avec un courage et un optimisme sans bornes.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Si bon nombre d'autres yordles utilisent leur énergie débordante pour explorer, découvrir, inventer ou plus simplement jouer de mauvais tours, Tristana a toujours puisé son inspiration dans les récits des grands guerriers. Elle avait beaucoup entendu parler de Runeterra, de ses factions et de ses guerres, et elle pensait que les yordles aussi avaient l'étoffe des légendes. Dès son arrivée dans ce monde, elle s'équipa de son fidèle canon Boomer pour se jeter au combat avec un courage et un optimisme sans bornes.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Tristana Riot Girl","Tristana l'elfe sérieuse","Tristana pompier","Tristana guérilla","Tristana pirate","Tristana à propulsion","Tristana dragonnière","Tristana sorcière","Tristana de la section Oméga","Tristana diablotin","Tristana cosplay Pingouin","Tristana Hextech","Tristana pyrotechnicienne","Tristana fleur spirituelle"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 9, defense: 3, magic: 5, difficulty: 4 },
    abilities: [
      { name: "Tir rapide", description: "Tristana tire plus rapidement avec son arme ; sa vitesse d'attaque est augmentée temporairement....", icon: "sparkles" },
      { name: "Saut roquette", description: "Tristana pointe son arme vers le sol et tire pour se propulser jusqu'à une destination éloignée, inf...", icon: "zap" },
      { name: "Charge explosive", description: "Lorsque Tristana élimine une unité, ses projectiles explosent et infligent des dégâts aux ennemis pr...", icon: "brain" },
      { name: "Tir à impact", description: "Tristana charge un énorme boulet de canon dans son arme et tire sur une unité ennemie, ce qui inflig...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 149,
    slug: "trundle",
    title: "Trundle",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",
    description: "Roi des trolls",
    year: "2023",
    location: "Runeterra",
    longDescription: "Trundle est un troll massif, sournois et malicieux. Il n'y a rien qu'il ne puisse soumettre à sa volonté avec son gourdin, pas même Freljord. Extrêmement territorial, Trundle traque tous ceux qui sont assez fous pour pénétrer sur ses terres. Ensuite, armé de son imposante massue en glace pure, il fait trembler ses ennemis avant de leur planter des éclats de glace dans le corps et de se moquer d'eux tandis que la toundra absorbe leur sang.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Trundle est un troll massif, sournois et malicieux. Il n'y a rien qu'il ne puisse soumettre à sa volonté avec son gourdin, pas même Freljord. Extrêmement territorial, Trundle traque tous ceux qui sont assez fous pour pénétrer sur ses terres. Ensuite, armé de son imposante massue en glace pure, il fait trembler ses ennemis avant de leur planter des éclats de glace dans le corps et de se moquer d'eux tandis que la toundra absorbe leur sang.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Trundle batteur","Trundle ferrailleur","Trundle classique","Constable Trundle","Trundle brise-monde","Trundle tueur de dragons","Trundle Nuit d'effroi"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 7, defense: 6, magic: 2, difficulty: 5 },
    abilities: [
      { name: "Morsure", description: "Trundle mord un ennemi, lui infligeant des dégâts, le ralentissant un court instant et drainant ses ...", icon: "sparkles" },
      { name: "Royaume gelé", description: "Trundle s'approprie la zone cible, augmentant sa vitesse d'attaque, sa vitesse de déplacement et les...", icon: "zap" },
      { name: "Montagne de glace", description: "Trundle crée une montagne de glace sur la zone cible, ce qui bloque le passage et ralentit les unité...", icon: "brain" },
      { name: "Soumission", description: "Trundle vole immédiatement un pourcentage des PV, de l'armure et de la résistance magique de sa cibl...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 150,
    slug: "tryndamere",
    title: "Tryndamere",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
    description: "Roi barbare",
    year: "2023",
    location: "Runeterra",
    longDescription: "Poussé par une rage infinie, Tryndamere traverse Freljord et parfait sa maîtrise du combat en défiant les plus grands guerriers du nord, pour se préparer aux jours sombres qui s'annoncent. Longtemps dominé par sa haine, il cherchait à se venger de l'annihilation de son clan, mais il a depuis rencontré Ashe et trouvé un nouveau foyer auprès des Avarosans. Sa force est pratiquement surhumaine et son courage légendaire, et cela lui a permis de remporter avec ses nouveaux alliés d'innombrables victoires plus qu'improbables.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Poussé par une rage infinie, Tryndamere traverse Freljord et parfait sa maîtrise du combat en défiant les plus grands guerriers du nord, pour se préparer aux jours sombres qui s'annoncent. Longtemps dominé par sa haine, il cherchait à se venger de l'annihilation de son clan, mais il a depuis rencontré Ashe et trouvé un nouveau foyer auprès des Avarosans. Sa force est pratiquement surhumaine et son courage légendaire, et cela lui a permis de remporter avec ses nouveaux alliés d'innombrables victoires plus qu'improbables.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Tryndamere des Highlands","Roi Tryndamere","Tryndamere viking","Tryndamere possédé","Tryndamere sultan","Tryndamere du royaume en guerre","Tryndamere du cauchemar","Tryndamere chasseur de bêtes","Tryndamere techno-chimique","Tryndamere lune de sang","Tryndamere héraut de la nuit"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 10, defense: 5, magic: 2, difficulty: 5 },
    abilities: [
      { name: "Soif de sang", description: "Tryndamere s'épanouit lors des combats, ce qui accroît ses dégâts d'attaque au fur et à mesure qu'il...", icon: "sparkles" },
      { name: "Moquerie", description: "Tryndamere lance un hurlement, réduisant les dégâts d'attaque des champions proches. De plus, les en...", icon: "zap" },
      { name: "Balafre", description: "Tryndamere lance un coup de taille vers une unité ciblée, infligeant des dégâts aux ennemis sur son ...", icon: "brain" },
      { name: "Rage inépuisable", description: "La soif de combattre de Tryndamere devient si puissante qu'il ne peut pas mourir, quelles que soient...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 151,
    slug: "twistedfate",
    title: "Twisted Fate",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",
    description: "Maître des cartes",
    year: "2023",
    location: "Runeterra",
    longDescription: "Twisted Fate est un virtuose des cartes à la réputation ambiguë qui a parcouru le monde entier pour l'éblouir de son charme et de ses talents, s'attirant l'admiration et la haine des riches comme des pigeons. Il prend rarement les choses au sérieux, salue chaque nouveau jour avec un sourire moqueur et insouciant. Twisted a toujours un atout dans sa manche, au propre comme au figuré.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Twisted Fate est un virtuose des cartes à la réputation ambiguë qui a parcouru le monde entier pour l'éblouir de son charme et de ses talents, s'attirant l'admiration et la haine des riches comme des pigeons. Il prend rarement les choses au sérieux, salue chaque nouveau jour avec un sourire moqueur et insouciant. Twisted a toujours un atout dans sa manche, au propre comme au figuré.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Twisted Fate PAX","Twisted Fate valet de cœur","Twisted Fate le magnifique","Twisted Fate tango","Twisted Fate de l'Ouest","Twisted Fate mousquetaire","Twisted Fate des enfers","Twisted Fate carton rouge","Twisted Fate voleur à la tire","Twisted Fate lune de sang","Twisted Fate Pulsefire","Twisted Fate de l'Odyssée","DWG Twisted Fate","Twisted Fate cauchemar criminel","Twisted Fate astro-groove"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 6, defense: 2, magic: 6, difficulty: 9 },
    abilities: [
      { name: "Atouts", description: "Twisted Fate tire trois cartes qui infligent des dégâts à toutes les unités qu'elles transpercent....", icon: "sparkles" },
      { name: "Bonne pioche", description: "Twisted Fate choisit une carte dans son paquet et l'utilise pour l'attaque suivante, gagnant des eff...", icon: "zap" },
      { name: "Paquet", description: "Twisted Fate inflige des dégâts supplémentaires toutes les 4 attaques. En outre, sa vitesse d'attaqu...", icon: "brain" },
      { name: "Destinée", description: "Twisted Fate prédit le destin de ses ennemis, révélant les champions ennemis et permettant d'utilise...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 152,
    slug: "twitch",
    title: "Twitch",
    category: "Marksman / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",
    description: "Semeur de peste",
    year: "2023",
    location: "Runeterra",
    longDescription: "Rat de Zaun, pesteux de naissance, connaisseur en saleté par passion, Twitch n'a pas peur de se salir les pattes. Armé d'une arbalète chimique qu'il pointe droit sur le cœur de Piltover, Twitch s'est juré de montrer aux gens de la surface à quel point ils sont vraiment sales. Toujours furtif et insaisissable, quand il ne traîne pas dans le Puisard, il fouille dans les déchets à la recherche de trésors qu'il est le seul à apprécier... ou d'un morceau de sandwich.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Rat de Zaun, pesteux de naissance, connaisseur en saleté par passion, Twitch n'a pas peur de se salir les pattes. Armé d'une arbalète chimique qu'il pointe droit sur le cœur de Piltover, Twitch s'est juré de montrer aux gens de la surface à quel point ils sont vraiment sales. Toujours furtif et insaisissable, quand il ne traîne pas dans le Puisard, il fouille dans les déchets à la recherche de trésors qu'il est le seul à apprécier... ou d'un morceau de sandwich.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Twitch le boss","Twitch de Whistler","Twitch médiéval","Twitch gangster","Twitch Vandale","Twitch pickpocket","SSW Twitch","Twitch de la section Oméga","Twitch roi des glaces","Twitch Sombrepas","Twitch tueur de dragons","Twitch de l'Ouest"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 9, defense: 2, magic: 3, difficulty: 6 },
    abilities: [
      { name: "Embuscade", description: "Twitch se camoufle pendant un court instant et sa vitesse de déplacement est augmentée. Quand il qui...", icon: "sparkles" },
      { name: "Dose de venin", description: "Twitch projette une dose de venin qui explose sur une zone, ralentissant les cibles et leur infligea...", icon: "zap" },
      { name: "Contamination", description: "Twitch contamine encore plus les ennemis empoisonnés avec de terribles maladies....", icon: "brain" },
      { name: "Panique", description: "Twitch libère toute la puissance de son arbalète, tirant des carreaux à longue portée qui transperce...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 153,
    slug: "udyr",
    title: "Udyr",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",
    description: "Gardien des esprits",
    year: "2023",
    location: "Runeterra",
    longDescription: "Udyr est le plus puissant des Gardiens des esprits, il communie avec l'ensemble des esprits qui habitent Freljord. Il comprend leurs besoins avec empathie et il est capable de canaliser et de transformer leur énergie éthérée pour alimenter son propre style de combat primitif. Il cherche l'équilibre intérieur pour que son esprit ne se perde pas parmi les autres, mais il cherche également l'équilibre à l'extérieur, car le paysage mystique de Freljord ne peut prospérer qu'avec la croissance engendrée par le conflit et la lutte. Udyr sait qu'il faut faire des sacrifices pour tenir à distance la stagnation des temps de paix.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Udyr est le plus puissant des Gardiens des esprits, il communie avec l'ensemble des esprits qui habitent Freljord. Il comprend leurs besoins avec empathie et il est capable de canaliser et de transformer leur énergie éthérée pour alimenter son propre style de combat primitif. Il cherche l'équilibre intérieur pour que son esprit ne se perde pas parmi les autres, mais il cherche également l'équilibre à l'extérieur, car le paysage mystique de Freljord ne peut prospérer qu'avec la croissance engendrée par le conflit et la lutte. Udyr sait qu'il faut faire des sacrifices pour tenir à distance la stagnation des temps de paix.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Udyr ceinture noire","Udyr primitif","Udyr gardien des esprits","Udyr incognito","Udyr oracle draconique","Udyr maître de l'encre"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 7, magic: 4, difficulty: 7 },
    abilities: [
      { name: "Griffe sauvage", description: "Udyr gagne de la vitesse d'attaque et ses deux prochaines attaques infligent des dégâts physiques su...", icon: "sparkles" },
      { name: "Cape de fer", description: "Udyr gagne un bouclier et ses deux prochaines attaques lui rendent des PV. Réactivation : Udyr gagne...", icon: "zap" },
      { name: "Piétinement flamboyant", description: "Udyr gagne de la vitesse de déplacement et sa première attaque contre chaque cible étourdit celle-ci...", icon: "brain" },
      { name: "Tempête spirituelle", description: "Udyr s'entoure d'une tempête glaciale, blessant et ralentissant les ennemis proches. Réactivation : ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 154,
    slug: "varus",
    title: "Varus",
    category: "Marksman / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",
    description: "Flèche de la vengeance",
    year: "2023",
    location: "Runeterra",
    longDescription: "Membre de la race antique des Darkin, Varus était en son temps un assassin cruel qui aimait torturer ses ennemis, les conduisant jusqu'aux portes de la folie avant de les achever d'une flèche. À la fin de la Guerre des Darkin, il fut emprisonné. Des siècles plus tard, il s'évada en utilisant la chair recomposée de deux chasseurs d'Ionia : l'ayant relâché par imprudence, ils furent condamnés à porter l'arc lié à l'essence de Varus. Varus traque désormais ceux qui l'ont enfermé pour se venger, mais les âmes des mortels à l'intérieur de lui s'opposent à ses desseins de toutes leurs forces.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Membre de la race antique des Darkin, Varus était en son temps un assassin cruel qui aimait torturer ses ennemis, les conduisant jusqu'aux portes de la folie avant de les achever d'une flèche. À la fin de la Guerre des Darkin, il fut emprisonné. Des siècles plus tard, il s'évada en utilisant la chair recomposée de deux chasseurs d'Ionia : l'ayant relâché par imprudence, ils furent condamnés à porter l'arc lié à l'essence de Varus. Varus traque désormais ceux qui l'ont enfermé pour se venger, mais les âmes des mortels à l'intérieur de lui s'opposent à ses desseins de toutes leurs forces.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Varus au cristal impur","Varus à l'arc pur","Varus arctique","Varus cœur-de-cible","Varus rôdeur","Varus du pulsar sombre","Varus conquérant","Varus infernal","PROJET : Varus","Varus chasseur cosmique","Varus de l'Ouest","Varus lune de neige"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 7, defense: 3, magic: 4, difficulty: 2 },
    abilities: [
      { name: "Flèche perforante", description: "Varus effectue un tir puissant dont les dégâts et la portée augmentent avec la durée de la charge....", icon: "sparkles" },
      { name: "Carquois meurtri", description: "Passive : les attaques de base de Varus infligent des dégâts magiques supplémentaires ainsi que Meur...", icon: "zap" },
      { name: "Pluie de flèches", description: "Varus tire une pluie de flèches qui inflige des dégâts physiques et souille le sol. Le sol souillé r...", icon: "brain" },
      { name: "Chaîne corruptrice", description: "Varus lance une vrille de corruption qui blesse et immobilise le premier champion ennemi touché et q...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 155,
    slug: "veigar",
    title: "Veigar",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg",
    description: "Seigneur des maléfices",
    year: "2023",
    location: "Runeterra",
    longDescription: "Maître enthousiaste de la magie noire, Veigar s'est approprié des pouvoirs que peu de mortels osent approcher. Habitant de Bandle à l'esprit libre, il veut repousser les limites de la magie yordle et se tourner vers les textes arcaniques qui sont restés cachés des millénaires. Fasciné jusqu'à l'obstination par les mystères de l'univers, Veigar est souvent sous-estimé par les gens qui l'entourent. Bien qu'il se croie fondamentalement maléfique, il possède une moralité qui le mène à s'interroger sur ses motivations.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Maître enthousiaste de la magie noire, Veigar s'est approprié des pouvoirs que peu de mortels osent approcher. Habitant de Bandle à l'esprit libre, il veut repousser les limites de la magie yordle et se tourner vers les textes arcaniques qui sont restés cachés des millénaires. Fasciné jusqu'à l'obstination par les mystères de l'univers, Veigar est souvent sous-estimé par les gens qui l'entourent. Bien qu'il se croie fondamentalement maléfique, il possède une moralité qui le mène à s'interroger sur ses motivations.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Veigar le mage blanc","Veigar curling","Veigar barbe grise","Veigar lutin","Baron von Veigar","Veigar classieux","Maléfique père Veigar","Veigar boss de fin","Veigar de la section Oméga","Veigar sylvestre","Veigar cosplay Corgnon","Veigar astronaute","Veigar dresseur de monstres","Veigar abeille"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 2, magic: 10, difficulty: 7 },
    abilities: [
      { name: "Coup malin", description: "Veigar lance une boule d'énergie des ténèbres, infligeant des dégâts magiques aux deux premiers enne...", icon: "sparkles" },
      { name: "Matière noire", description: "Veigar fait tomber de la matière noire pour infliger des dégâts magiques à ses adversaires. Les effe...", icon: "zap" },
      { name: "Profanation", description: "Veigar distord l'espace dans la zone ciblée, créant une cage qui étourdit les ennemis qui la travers...", icon: "brain" },
      { name: "Explosion primordiale", description: "Lance de l'énergie explosive sur le champion ennemi ciblé, infligeant d'importants dégâts magiques q...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 156,
    slug: "velkoz",
    title: "Vel'Koz",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
    description: "Œil du Néant",
    year: "2023",
    location: "Runeterra",
    longDescription: "On ne sait pas trop si Vel'Koz fut le premier monstre du Néant à émerger à Runeterra, mais il est certain qu'aucun autre n'a jamais égalé la froideur calculatrice de sa cruauté. Alors que ses semblables dévorent ou profanent tout ce qui les entoure, il cherche à étudier le royaume physique et les étranges êtres belliqueux qui l'habitent. Selon lui, c'est ainsi que le Néant trouvera comment exploiter leurs faiblesses. Mais Vel'Koz n'est pas qu'un observateur passif. Il répond à toute menace avec des éruptions mortelles de plasma ou en déchirant le tissu même du monde.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "On ne sait pas trop si Vel'Koz fut le premier monstre du Néant à émerger à Runeterra, mais il est certain qu'aucun autre n'a jamais égalé la froideur calculatrice de sa cruauté. Alors que ses semblables dévorent ou profanent tout ce qui les entoure, il cherche à étudier le royaume physique et les étranges êtres belliqueux qui l'habitent. Selon lui, c'est ainsi que le Néant trouvera comment exploiter leurs faiblesses. Mais Vel'Koz n'est pas qu'un observateur passif. Il répond à toute menace avec des éruptions mortelles de plasma ou en déchirant le tissu même du monde.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Proto Vel'Koz","Vel'Koz aux rayons purs","Vel'Koz incognito","Vel'Koz infernal","Vel'Koz des glaces noires","Vel'Koz abeille"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 2, magic: 10, difficulty: 8 },
    abilities: [
      { name: "Fission du plasma", description: "Vel'Koz tire un projectile de plasma qui se divise en deux quand il touche un ennemi ou quand le sor...", icon: "sparkles" },
      { name: "Ouverture de faille", description: "Vel'Koz ouvre une faille vers le Néant, infligeant des dégâts initiaux. Après un court délai, la fai...", icon: "zap" },
      { name: "Dislocation tectonique", description: "Vel'Koz provoque une explosion dans une zone, projetant les ennemis dans les airs et repoussant légè...", icon: "brain" },
      { name: "Désintégrateur de formes de vie", description: "Vel'Koz tire un rayon canalisé qui suit le curseur pendant 2,5 sec et inflige des dégâts magiques. L...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 157,
    slug: "vex",
    title: "Vex",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg",
    description: "Ombre du désespoir",
    year: "2023",
    location: "Runeterra",
    longDescription: "Au cœur des terribles Îles obscures et de leur brume spectrale, une yordle solitaire se complaît dans son malheur. Vex se protège de la gaieté, de l'excitation et des gens « normaux » dont le monde extérieur regorge grâce à une dose inépuisable d'apitoiement et à une ombre puissante. Même si l'ambition lui fait défaut, on peut compter sur elle pour ternir le bonheur des autres et éloigner tous ceux qui voudraient l'approcher avec sa morosité magique.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Au cœur des terribles Îles obscures et de leur brume spectrale, une yordle solitaire se complaît dans son malheur. Vex se protège de la gaieté, de l'excitation et des gens « normaux » dont le monde extérieur regorge grâce à une dose inépuisable d'apitoiement et à une ombre puissante. Même si l'ambition lui fait défaut, on peut compter sur elle pour ternir le bonheur des autres et éloigner tous ceux qui voudraient l'approcher avec sa morosité magique.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Vex héraut de l'aube","Vex empyréenne"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 0, defense: 0, magic: 0, difficulty: 0 },
    abilities: [
      { name: "Mistral perdant", description: "Vex lance un projectile qui inflige des dégâts et qui accélère pendant son vol....", icon: "sparkles" },
      { name: "Lâchez-moi !", description: "Vex gagne un bouclier et blesse les ennemis proches....", icon: "zap" },
      { name: "Ténèbres imminentes", description: "Vex invoque une zone qui blesse et ralentit les ennemis en plus d'appliquer Désespoir sur eux....", icon: "brain" },
      { name: "Déferlement d'Ombre", description: "Vex tire un projectile qui marque un champion ennemi. Elle peut réactiver cette compétence pour se r...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 158,
    slug: "vladimir",
    title: "Vladimir",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
    description: "Saigneur pourpre",
    year: "2023",
    location: "Runeterra",
    longDescription: "Assoiffé de sang humain, Vladimir influe sur la politique de Noxus depuis les premiers jours de l'empire. En plus d'allonger surnaturellement sa vie, sa maîtrise de l'hémomancie lui permet de contrôler les esprits et les corps des autres aussi aisément que les siens. Dans les flamboyants salons de l'aristocratie noxienne, cela lui a permis de créer autour de lui un culte de la personnalité. Cependant, dans les bas-fonds, il saigne littéralement ses ennemis à blanc.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Assoiffé de sang humain, Vladimir influe sur la politique de Noxus depuis les premiers jours de l'empire. En plus d'allonger surnaturellement sa vie, sa maîtrise de l'hémomancie lui permet de contrôler les esprits et les corps des autres aussi aisément que les siens. Dans les flamboyants salons de l'aristocratie noxienne, cela lui a permis de créer autour de lui un culte de la personnalité. Cependant, dans les bas-fonds, il saigne littéralement ses ennemis à blanc.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Comte Vladimir","Marquis Vladimir","Vladimir nosferatu","Vladimir biker","Vladimir sanguinaire","Vladimir voleur d'âmes","Vladiplômé","Vladimir des eaux sombres","Vladimir héraut de la nuit","Vladimir dévoreur cosmique","Vladimir Café Chouchous","Vladimir de l'Alliance brisée"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 6, magic: 8, difficulty: 7 },
    abilities: [
      { name: "Transfusion", description: "Vladimir vole les PV de l'ennemi ciblé. Quand la jauge de ressource de Vladimir est pleine, Transfus...", icon: "sparkles" },
      { name: "Bain de sang", description: "Vladimir plonge dans une flaque de sang, devenant impossible à cibler pendant 2 sec. Les ennemis dan...", icon: "zap" },
      { name: "Vagues de sang", description: "Vladimir dépense ses propres PV pour charger un orbe de sang qui, une fois lâché, infligera des dégâ...", icon: "brain" },
      { name: "Peste sanguine", description: "Vladimir contamine une zone avec une peste virulente. Les ennemis infectés subissent plus de dégâts ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 159,
    slug: "xayah",
    title: "Xayah",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg",
    description: "Rebelle",
    year: "2023",
    location: "Runeterra",
    longDescription: "Précise et meurtrière, Xayah est une révolutionnaire vastaya menant une guerre personnelle dans le but de sauver son peuple. Elle se sert de sa célérité, de sa ruse et de ses plumes tranchantes comme des rasoirs pour terrasser tous ceux qui se dressent sur sa route. Xayah se bat aux côtés de son partenaire et amant, Rakan, pour défendre leur tribu dépérissante et rendre à leur race ce qu'elle considère être sa gloire d'antan.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Précise et meurtrière, Xayah est une révolutionnaire vastaya menant une guerre personnelle dans le but de sauver son peuple. Elle se sert de sa célérité, de sa ruse et de ses plumes tranchantes comme des rasoirs pour terrasser tous ceux qui se dressent sur sa route. Xayah se bat aux côtés de son partenaire et amant, Rakan, pour défendre leur tribu dépérissante et rendre à leur race ce qu'elle considère être sa gloire d'antan.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Xayah du crépuscule cosmique","Xayah cœur tendre","SSG Xayah","Xayah gardienne des étoiles","Xayah sylvestre","Xayah phénix courageux","Xayah phénix courageux prestige","Xayah des arcanes","Xayah de l'Alliance brisée","Xayah gardienne des étoiles repentie"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 10, defense: 6, magic: 1, difficulty: 5 },
    abilities: [
      { name: "Dagues jumelles", description: "Xayah jette deux dagues qui infligent des dégâts et qui laissent des plumes qu'elle peut rappeler....", icon: "sparkles" },
      { name: "Plumage mortel", description: "Xayah crée une tempête de lames qui augmente sa vitesse d'attaque et ses dégâts, tout en augmentant ...", icon: "zap" },
      { name: "Appel des lames", description: "Xayah rappelle toutes les plumes qu'elle a posées, infligeant des dégâts et immobilisant les ennemis...", icon: "brain" },
      { name: "Rafale de plumes", description: "Xayah bondit dans les airs, devenant impossible à cibler et lançant des dagues qui laissent des plum...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 160,
    slug: "xerath",
    title: "Xerath",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg",
    description: "Mage suprême",
    year: "2023",
    location: "Runeterra",
    longDescription: "Xerath est un mage transfiguré de la Shurima antique, un être d'énergie arcanique habitant les fragments détruits d'un sarcophage magique. Pendant des millénaires, il est resté prisonnier des sables du désert, mais le retour de Shurima l'a libéré de sa prison ancestrale. Devenu ivre de pouvoir, il cherche désormais à reprendre ce qu'il croit lui être dû et à remplacer les civilisations arrivistes qui ont pris possession du monde par une nouvelle, façonnée à son image.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Xerath est un mage transfiguré de la Shurima antique, un être d'énergie arcanique habitant les fragments détruits d'un sarcophage magique. Pendant des millénaires, il est resté prisonnier des sables du désert, mais le retour de Shurima l'a libéré de sa prison ancestrale. Devenu ivre de pouvoir, il cherche désormais à reprendre ce qu'il croit lui être dû et à remplacer les civilisations arrivistes qui ont pris possession du monde par une nouvelle, façonnée à son image.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Xerath runique","Proto Xerath","Xerath de la terre brûlée","Xerath gardien des sables","Xerath du pulsar sombre","Xerath des arcanes","Xerath astronaute"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 1, defense: 3, magic: 10, difficulty: 8 },
    abilities: [
      { name: "Rayon arcanique", description: "Tire un rayon d'énergie à longue portée, infligeant des dégâts magiques à toutes les cibles touchées...", icon: "sparkles" },
      { name: "Œil de la destruction", description: "Fait tomber un barrage d'énergie arcanique, infligeant des dégâts magiques et ralentissant tous les ...", icon: "zap" },
      { name: "Orbe d'électrocution", description: "Étourdit un ennemi et lui inflige des dégâts magiques....", icon: "brain" },
      { name: "Rite arcanique", description: "Xerath s'immobilise et obtient plusieurs tirs de barrage à longue portée....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 161,
    slug: "xinzhao",
    title: "Xin Zhao",
    category: "Fighter / Assassin",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",
    description: "Sénéchal de Demacia",
    year: "2023",
    location: "Runeterra",
    longDescription: "Xin Zhao est un guerrier résolu qui sert fidèlement la dynastie régnante des Lightshield. Naguère condamné à se battre dans les arènes de combat de Noxus, il survécut à d'innombrables rencontres de gladiateurs. Mais après avoir été libéré par les forces de Demacia, il jura allégeance à ses braves libérateurs. Armé de sa lance à trois pointes, Xin Zhao combat désormais pour son royaume, défiant ses ennemis avec audace, quelles que soient ses chances de succès.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Xin Zhao est un guerrier résolu qui sert fidèlement la dynastie régnante des Lightshield. Naguère condamné à se battre dans les arènes de combat de Noxus, il survécut à d'innombrables rencontres de gladiateurs. Mais après avoir été libéré par les forces de Demacia, il jura allégeance à ses braves libérateurs. Armé de sa lance à trois pointes, Xin Zhao combat désormais pour son royaume, défiant ses ennemis avec audace, quelles que soient ses chances de succès.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Xin Zhao commando","Xin Zhao impérial","Xin Zhao Viscero","Xin Zhao hussard ailé","Xin Zhao du royaume en guerre","Xin Zhao agent secret","Xin Zhao tueur de dragons","Xin Zhao défenseur cosmique","Xin Zhao maraudeur","Xin Zhao pyrotechnicien"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 8, defense: 6, magic: 3, difficulty: 2 },
    abilities: [
      { name: "Frappe des trois serres", description: "Les 3 prochaines attaques de base de Xin Zhao infligeront plus de dégâts et la 3e attaque projettera...", icon: "sparkles" },
      { name: "Vent et foudre", description: "Xin Zhao donne un coup de taille devant lui avec sa lance, puis donne un coup d'estoc, ralentissant ...", icon: "zap" },
      { name: "Charge audacieuse", description: "Xin Zhao charge un ennemi, augmentant sa vitesse d'attaque, infligeant des dégâts à tous les ennemis...", icon: "brain" },
      { name: "Garde circulaire", description: "Xin Zhao défie un ennemi qu'il a récemment blessé. Xin Zhao inflige des dégâts aux ennemis proches e...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 162,
    slug: "yorick",
    title: "Yorick",
    category: "Fighter / Tank",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg",
    description: "Berger des âmes",
    year: "2023",
    location: "Runeterra",
    longDescription: "Yorick est le dernier survivant d'un ordre religieux disparu depuis longtemps et son pouvoir sur les morts est à la fois une bénédiction et une malédiction. Prisonnier des Îles obscures, il n'a pour compagnons que les cadavres pourrissants et les esprits hurlants qu'il rassemble. Les actes monstrueux de Yorick trahissent son noble objectif : libérer sa terre natale de la malédiction de la Ruine.",
    specs: [
      { label: "Classe", value: "Fighter" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Yorick est le dernier survivant d'un ordre religieux disparu depuis longtemps et son pouvoir sur les morts est à la fois une bénédiction et une malédiction. Prisonnier des Îles obscures, il n'a pour compagnons que les cadavres pourrissants et les esprits hurlants qu'il rassemble. Les actes monstrueux de Yorick trahissent son noble objectif : libérer sa terre natale de la malédiction de la Ruine.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Yorick ensevelisseur","Yorick Pentakill","Yorick à la pelle pure","Miaourick","Yorick résistant","Yorick Pentakill III : Lost Chapter","Yorick fleur spirituelle"],
    quote: "La victoire est à portée de main.",
    voice: "Fenrir",
    region: "Runeterra",
    stats: { attack: 6, defense: 6, magic: 4, difficulty: 6 },
    abilities: [
      { name: "Derniers sacrements", description: "La prochaine attaque de Yorick infligera des dégâts supplémentaires et le soignera. Si la cible meur...", icon: "sparkles" },
      { name: "Sombre cortège", description: "Yorick invoque à l'endroit ciblé un mur destructible qui bloque les déplacements des ennemis....", icon: "zap" },
      { name: "Brume endeuillée", description: "Yorick lance un globe de Brume noire qui blesse, ralentit et marque les ennemis....", icon: "brain" },
      { name: "Élégie des Îles", description: "Yorick invoque la Vierge de la Brume. Les attaques de Yorick contre la cible de la Vierge infligent ...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 163,
    slug: "yuumi",
    title: "Yuumi",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg",
    description: "Gardienne du Grimoire",
    year: "2023",
    location: "Runeterra",
    longDescription: "Originaire de Bandle, Yuumi est un familier magique dont la maîtresse, une enchanteresse yordle du nom de Norra, a mystérieusement disparu. Yuumi est désormais la gardienne du Grimoire des Seuils que possédait Norra, un livre permettant de franchir des portails. Partie à la recherche de sa maîtresse, Yuumi s'est fait de nouveaux amis durant son périple, et elle les protège tous avec la même détermination. Même si Grimoire aimerait que Yuumi se concentre davantage sur sa mission, sa comparse aime prendre le temps de faire la sieste et de pêcher des poissons. Malgré cela, elle finit toujours par repartir en quête de sa maîtresse.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Originaire de Bandle, Yuumi est un familier magique dont la maîtresse, une enchanteresse yordle du nom de Norra, a mystérieusement disparu. Yuumi est désormais la gardienne du Grimoire des Seuils que possédait Norra, un livre permettant de franchir des portails. Partie à la recherche de sa maîtresse, Yuumi s'est fait de nouveaux amis durant son périple, et elle les protège tous avec la même détermination. Même si Grimoire aimerait que Yuumi se concentre davantage sur sa mission, sa comparse aime prendre le temps de faire la sieste et de pêcher des poissons. Malgré cela, elle finit toujours par repartir en quête de sa maîtresse.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Proviseur Yuumi de l'Académie","Yuumi cœur-de-cible","Yuumi abeille","Yuumi sorcière","EDG Yuumi","Shiba Yuumi"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 5, defense: 1, magic: 8, difficulty: 2 },
    abilities: [
      { name: "Tête chat-sseuse", description: "Yuumi lance un projectile qui blesse et ralentit le premier ennemi touché. Si le projectile vole au ...", icon: "sparkles" },
      { name: "Félin pour l'autre !", description: "Yuumi se rue vers l'allié ciblé. Dans cet état, seules les tourelles peuvent la cibler. Lorsqu'elle ...", icon: "zap" },
      { name: "Zouuu !", description: "Yuumi gagne un bouclier et augmente ses vitesses de déplacement et d'attaque. Si elle est attachée à...", icon: "brain" },
      { name: "Chat-pitre final", description: "Yuumi canalise cinq vagues qui blessent les ennemis et soignent les alliés. Pendant la canalisation,...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 164,
    slug: "zac",
    title: "Zac",
    category: "Tank / Fighter",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg",
    description: "Arme secrète",
    year: "2023",
    location: "Runeterra",
    longDescription: "Zac est le produit d'une fuite toxique qui, dégoulinant par une veine techno-chimique, se transforma en bassin dans une profonde caverne du Puisard de Zaun. En dépit de ses humbles origines, Zac a évolué pour passer du stade de dépôt primordial à celui d'être pensant qui se faufile dans les canalisations de la ville. De temps en temps, il émerge pour aider ceux qui ne s'en sortent pas seuls ou pour reconstruire les infrastructures en mauvais état de Zaun.",
    specs: [
      { label: "Classe", value: "Tank" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Zac est le produit d'une fuite toxique qui, dégoulinant par une veine techno-chimique, se transforma en bassin dans une profonde caverne du Puisard de Zaun. En dépit de ses humbles origines, Zac a évolué pour passer du stade de dépôt primordial à celui d'être pensant qui se faufile dans les canalisations de la ville. De temps en temps, il émerge pour aider ceux qui ne s'en sortent pas seuls ou pour reconstruire les infrastructures en mauvais état de Zaun.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Zac arme spéciale","Zaquatique","SKT T1 Zac","Proto Zac","Zac empyréen"],
    quote: "La victoire est à portée de main.",
    voice: "Charon",
    region: "Runeterra",
    stats: { attack: 3, defense: 7, magic: 7, difficulty: 8 },
    abilities: [
      { name: "Étirements", description: "Zac étend un bras et attrape un ennemi. S'il attaque ensuite un ennemi différent, il envoie les deux...", icon: "sparkles" },
      { name: "Matière instable", description: "Zac explose en direction des ennemis proches, leur infligeant des dégâts magiques équivalents à un p...", icon: "zap" },
      { name: "Fronde", description: "Zac fixe ses bras au sol et prend de l'élan pour se projeter vers l'avant....", icon: "brain" },
      { name: "Boing !", description: "Zac rebondit quatre fois, projetant en l'air les ennemis touchés et les ralentissant....", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 165,
    slug: "zeri",
    title: "Zeri",
    category: "Marksman",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg",
    description: "Étincelle de Zaun",
    year: "2023",
    location: "Runeterra",
    longDescription: "Zeri est une jeune femme vive et téméraire originaire des quartiers défavorisés de Zaun. Elle canalise son électricité intérieure afin de la charger dans un fusil conçu spécialement pour elle. Son pouvoir magique est le reflet de ses émotions, et ses étincelles sont aussi fulgurantes que son caractère. Résolument tournée vers les autres, Zeri se sert de son amour pour sa famille et son quartier durant chaque combat. Malgré toute sa bonne volonté, cependant, les événements ne se passent pas toujours comme prévu. Cela dit, Zeri est sûre d'une chose : si vous vous battez pour votre communauté, elle se battra avec vous.",
    specs: [
      { label: "Classe", value: "Marksman" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Zeri est une jeune femme vive et téméraire originaire des quartiers défavorisés de Zaun. Elle canalise son électricité intérieure afin de la charger dans un fusil conçu spécialement pour elle. Son pouvoir magique est le reflet de ses émotions, et ses étincelles sont aussi fulgurantes que son caractère. Résolument tournée vers les autres, Zeri se sert de son amour pour sa famille et son quartier durant chaque combat. Malgré toute sa bonne volonté, cependant, les événements ne se passent pas toujours comme prévu. Cela dit, Zeri est sûre d'une chose : si vous vous battez pour votre communauté, elle se battra avec vous.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Zeri rose fanée","Zeri du Chant de l'océan","Zeri du Voyage immortel"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
    abilities: [
      { name: "Rafale", description: "Rafale tire 7 balles qui infligent les dégâts d'attaque de Zeri au premier ennemi touché. Cette comp...", icon: "sparkles" },
      { name: "Laser électrocuteur", description: "Zeri lance une impulsion électrique qui ralentit et blesse le premier ennemi touché. Si l'impulsion ...", icon: "zap" },
      { name: "Charge ionique", description: "Zeri effectue une courte ruée et renforce ses 3 prochaines Rafales, qui deviennent perforantes. Elle...", icon: "brain" },
      { name: "Éruption électrique", description: "Zeri provoque une nova d'électricité et se surcharge : elle inflige plus de dégâts et gagne un bonus...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 166,
    slug: "ziggs",
    title: "Ziggs",
    category: "Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg",
    description: "Expert des Hexplosifs",
    year: "2023",
    location: "Runeterra",
    longDescription: "Amoureux des grosses bombes et des mèches courtes, le yordle Ziggs est une force de la nature explosive. Assistant d'un inventeur de Piltover, il finit par se lasser de sa vie routinière et devint l'ami d'une jeune fille imprévisible et portée sur les explosifs, Jinx. Après une folle nuit en ville, Ziggs suivit les conseils de Jinx et s'installa à Zaun, où il se livre désormais à sa passion plus librement, terrorisant les Barons de la chimie comme les simples citoyens dans sa quête éternelle pour faire sauter tout ce qui traverse son champ de vision.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Amoureux des grosses bombes et des mèches courtes, le yordle Ziggs est une force de la nature explosive. Assistant d'un inventeur de Piltover, il finit par se lasser de sa vie routinière et devint l'ami d'une jeune fille imprévisible et portée sur les explosifs, Jinx. Après une folle nuit en ville, Ziggs suivit les conseils de Jinx et s'installa à Zaun, où il se livre désormais à sa passion plus librement, terrorisant les Barons de la chimie comme les simples citoyens dans sa quête éternelle pour faire sauter tout ce qui traverse son champ de vision.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Ziggs savant fou","Commandant Ziggs","Ziggs bombe à eau","Ziggs des neiges","Ziggs maître arcaniste","Ziggs boss de combat","Ziggs de l'Odyssée","Ziggs folie sucrée","Ziggs Hextech","Ziggs abeille","Ziggs La Ilusión"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 2, defense: 4, magic: 9, difficulty: 4 },
    abilities: [
      { name: "Bombe rebondissante", description: "Ziggs lance une bombe rebondissante qui inflige des dégâts magiques....", icon: "sparkles" },
      { name: "Charge explosive", description: "Ziggs jette une charge explosive qui explose au bout de 4 sec ou quand vous réactivez cette compéten...", icon: "zap" },
      { name: "Mines Hexplosives", description: "Ziggs disperse des mines de proximité qui explosent au contact des ennemis, leur infligeant des dégâ...", icon: "brain" },
      { name: "Méga bombe infernale", description: "Ziggs déploie sa création ultime, la Méga bombe infernale, et la lance de très loin. Les ennemis dan...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 167,
    slug: "zilean",
    title: "Zilean",
    category: "Support / Mage",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",
    description: "Gardien du Temps",
    year: "2023",
    location: "Runeterra",
    longDescription: "Naguère puissant mage d'Icathia, Zilean devint obsédé par le passage du temps après avoir assisté à la destruction de sa terre natale par le Néant. Refusant de perdre une minute à pleurer sur les décombres, il fit appel à une antique force magique capable de prédire tous les avenirs possibles. Devenu techniquement immortel, Zilean erre désormais entre passé, présent et futur, distordant autour de lui le flux du temps, toujours à la recherche du moment exact qui lui permettra de changer le passé et d'empêcher la destruction d'Icathia.",
    specs: [
      { label: "Classe", value: "Support" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Naguère puissant mage d'Icathia, Zilean devint obsédé par le passage du temps après avoir assisté à la destruction de sa terre natale par le Néant. Refusant de perdre une minute à pleurer sur les décombres, il fit appel à une antique force magique capable de prédire tous les avenirs possibles. Devenu techniquement immortel, Zilean erre désormais entre passé, présent et futur, distordant autour de lui le flux du temps, toujours à la recherche du moment exact qui lui permettra de changer le passé et d'empêcher la destruction d'Icathia.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Vieux saint Zilean","Zilean groovy","Zilean du désert de Shurima","Zilean voyageur du temps","Zilean lune de sang","Zilean folie sucrée","Zilean élu de l'hiver"],
    quote: "La victoire est à portée de main.",
    voice: "Puck",
    region: "Runeterra",
    stats: { attack: 2, defense: 5, magic: 8, difficulty: 6 },
    abilities: [
      { name: "Bombe à retardement", description: "Lance une bombe dans une zone. La bombe se colle sur une unité qui s'en approche (en priorité les ch...", icon: "sparkles" },
      { name: "Retour rapide", description: "Zilean se prépare à de futures confrontations, réduisant le délai de récupération de ses autres comp...", icon: "zap" },
      { name: "Distorsion temporelle", description: "Zilean distord le temps autour d'une unité, réduisant la vitesse de déplacement d'un ennemi ou augme...", icon: "brain" },
      { name: "Retour temporel", description: "Zilean place une rune temporelle sur un champion allié, le renvoyant dans le passé s'il subit des dé...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  },
  {
    id: 168,
    slug: "zyra",
    title: "Zyra",
    category: "Mage / Support",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg",
    description: "Dame aux ronces",
    year: "2023",
    location: "Runeterra",
    longDescription: "Née au cours d'une ancienne catastrophe magique, Zyra est la colère de la nature incarnée : mélange de plante et d'humain, faisant émerger de nouvelles pousses à chaque pas. Elle considère les nombreux mortels de Valoran comme de simples proies pour sa progéniture végétale, et les éliminer avec ses gerbes d'épines ne lui pose aucun problème. Bien que nul ne connaisse ses vrais objectifs, Zyra erre de par le monde, suivant son instinct qui est de coloniser toujours plus de terres et d'en exterminer toutes les autres formes de vie.",
    specs: [
      { label: "Classe", value: "Mage" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: "Née au cours d'une ancienne catastrophe magique, Zyra est la colère de la nature incarnée : mélange de plante et d'humain, faisant émerger de nouvelles pousses à chaque pas. Elle considère les nombreux mortels de Valoran comme de simples proies pour sa progéniture végétale, et les éliminer avec ses gerbes d'épines ne lui pose aucun problème. Bien que nul ne connaisse ses vrais objectifs, Zyra erre de par le monde, suivant son instinct qui est de coloniser toujours plus de terres et d'en exterminer toutes les autres formes de vie.",
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ["Classique","Zyra magmatique","Zyra hantée","SKT T1 Zyra","Zyra sorcière draconique","Zyra de l'assemblée","Zyra de l'assemblée prestige","Zyra rose de cristal","Zyra cauchemar criminel","Zyra mythificatrice","Zyra ville démoniaque"],
    quote: "La victoire est à portée de main.",
    voice: "Kore",
    region: "Runeterra",
    stats: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
    abilities: [
      { name: "Épines funestes", description: "Des ronces se répandent dans le sol et provoquent une explosion d'épines, infligeant des dégâts magi...", icon: "sparkles" },
      { name: "Croissance incontrôlée", description: "Zyra plante une graine qui dure jusqu'à 60 sec. Lancer Épines funestes ou Racines fixatrices près de...", icon: "zap" },
      { name: "Racines fixatrices", description: "Zyra lance des racines à travers le sol pour capturer sa cible, infligeant des dégâts et immobilisan...", icon: "brain" },
      { name: "Ronces étrangleuses", description: "Zyra invoque des ronces malfaisantes dans la zone ciblée, infligeant des dégâts aux ennemis en s'éte...", icon: "sword" }
    ],
    theme: { bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }
  }
];
