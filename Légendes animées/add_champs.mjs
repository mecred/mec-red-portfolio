import fs from 'fs';

async function main() {
  console.log("Fetching champions data...");
  const res = await fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/fr_FR/championFull.json');
  const data = await res.json();
  const champions = Object.values(data.data);

  const existingCode = fs.readFileSync('./src/constants.ts', 'utf-8');

  // Extract existing slugs to avoid duplicates
  const existingSlugs = [];
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = slugRegex.exec(existingCode)) !== null) {
    existingSlugs.push(match[1]);
  }

  // Find current max id
  let maxId = 0;
  const idRegex = /id:\s*(\d+)/g;
  while ((match = idRegex.exec(existingCode)) !== null) {
    maxId = Math.max(maxId, parseInt(match[1]));
  }

  console.log(`Found ${existingSlugs.length} existing champions. Max ID: ${maxId}`);

  let newEntries = [];

  for (const champ of champions) {
    const defaultSlug = champ.id.toLowerCase();

    // Check if we already have it (basic heuristic)
    if (existingSlugs.some(s => s.includes(defaultSlug))) {
      continue;
    }
    if (newEntries.length >= 150) break; // limit

    maxId++;

    // default voice
    const voiceMapping = { 'Assassin': 'Zephyr', 'Fighter': 'Fenrir', 'Mage': 'Kore', 'Marksman': 'Kore', 'Support': 'Puck', 'Tank': 'Charon' };
    const voice = voiceMapping[champ.tags[0]] || 'Zephyr';

    // skills
    const abilities = champ.spells.map((spell, i) => {
      const iconMap = ['sparkles', 'zap', 'brain', 'sword', 'shield'];
      return `{ name: ${JSON.stringify(spell.name)}, description: ${JSON.stringify(spell.description.substring(0, 100) + '...')}, icon: "${iconMap[i % 5]}" }`;
    });

    // skins
    const allSkins = champ.skins.map(s => s.name === 'default' ? 'Classique' : s.name);

    // theme
    const theme = `{ bg: "#0F0F1A", accent: "#93C5FD", secondary: "#1E3A8A" }`;

    const entry = `  {
    id: ${maxId},
    slug: "${defaultSlug}",
    title: ${JSON.stringify(champ.name)},
    category: "${champ.tags.join(' / ')}",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg",
    description: ${JSON.stringify(champ.title)},
    year: "2023",
    location: "Runeterra",
    longDescription: ${JSON.stringify(champ.lore)},
    specs: [
      { label: "Classe", value: "${champ.tags[0] || 'Unknown'}" },
      { label: "Rôle", value: "Champion" },
      { label: "Origine", value: "Inconnue" }
    ],
    biography: ${JSON.stringify(champ.lore)},
    battles: "Batailles légendaires dans la Faille de l'Invocateur.",
    allSkins: ${JSON.stringify(allSkins)},
    quote: "La victoire est à portée de main.",
    voice: "${voice}",
    region: "Runeterra",
    stats: { attack: ${champ.info.attack}, defense: ${champ.info.defense}, magic: ${champ.info.magic}, difficulty: ${champ.info.difficulty} },
    abilities: [
      ${abilities.join(',\n      ')}
    ],
    theme: ${theme}
  }`;
    newEntries.push(entry);
  }

  if (newEntries.length > 0) {
    const finalJoin = newEntries.join(',\n');
    const newCode = existingCode.replace(/];[\s\n]*$/, `,\n${finalJoin}\n];\n`);
    fs.writeFileSync('./src/constants.ts', newCode);
    console.log(`Added ${newEntries.length} new champions.`);
  } else {
    console.log("No new champions to add.");
  }
}

main().catch(console.error);
