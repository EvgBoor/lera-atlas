// English copy of the longread "The Atlas of Untranslatable Images: A Franco-English Edition".
// Etymology and dates follow Etymonline / OED; IPA is British (Cambridge / Oxford Learner's).
import type { SiteContent } from './types';

const content: SiteContent = {
  locale: 'en',

  meta: {
    title: 'The Atlas of Untranslatable Images — French Words in English',
    description:
      'A bilingual longread on French loanwords in English: how words crossed the Channel, why ballet and garage break the reading rules, false friends to watch out for and a practical pronunciation guide.',
  },

  nav: [
    { id: 'intro', label: 'Start' },
    { id: 'timeline', label: 'Waves' },
    { id: 'origins', label: 'Roots' },
    { id: 'adaptation', label: 'Adaptation' },
    { id: 'themes', label: 'Themes' },
    { id: 'false-friends', label: 'False friends' },
    { id: 'reading', label: 'How to read' },
    { id: 'travelling', label: 'Travellers' },
    { id: 'about', label: 'About' },
  ],

  ui: {
    langSwitch: 'RU',
    readingTime: '≈ 15 min read',
    scrollHint: 'Scroll down',
    backToTop: 'Back to top',
    flipHint: 'Tap to flip',
  },

  hero: {
    kicker: 'A Franco-English Edition',
    title: 'The Atlas of Untranslatable Images',
    subtitle:
      'How French words crossed the Channel, settled into English — and why they are so easy to misread.',
    author: 'Valeria Burkhovetskaya, Grade 10A',
    supervisor: 'Supervisor: Sergey Tolstikov',
    school: 'Lyceum of Information Technologies',
  },

  intro: {
    title: 'Two Shores of the Channel',
    paragraphs: [
      'It all started in English class. Some words simply refused to follow the reading rules: the stress landed in an awkward place, and the letters sounded nothing like we had been taught. Why is chef “shef” and not “chef”? Why does the final t in ballet go silent, and why does garage end in a soft “zh”?',
      'It turns out these words share a biography: almost all of them came into English from French. England and France are only about 33 kilometres apart at the narrowest point of the Channel, yet for nearly a thousand years that strip of water carried not just armies and goods but words — about food, fashion, art, law and power.',
      'Many of them kept a French “accent” in spelling and sound. Once you know where a word comes from, reading it stops being a puzzle. And for anyone learning French as a second foreign language, English suddenly becomes a cheat sheet: thousands of words are already familiar.',
      'In 2026, declared the Year of Unity of the Peoples of Russia, this story feels especially timely: languages that have traded words for centuries do not lose themselves — they grow richer. Diversity is not a barrier but a resource.',
    ],
    pullQuote: 'A word is a traveller that keeps a trace of its accent wherever it goes.',
  },

  timeline: {
    title: 'Waves of Borrowing',
    lead: 'French words did not arrive in a single stream but in waves — each with its own era, its own subjects and its own sound.',
    events: [
      {
        year: '1066',
        title: 'The Norman Conquest',
        text: 'William the Conqueror wins at Hastings. The new nobility, the court and the law speak the Norman dialect of French, while ordinary people speak English. Nearly three centuries of bilingualism begin.',
        examples: ['crown', 'duke', 'baron', 'court', 'prison'],
        intensity: 4,
      },
      {
        year: '12th–14th c.',
        title: 'Anglo-Norman and Middle English',
        text: 'The peak of borrowing. French is the language of power, law and the good life. English absorbs thousands of words and changes so much that linguists call this stage Middle English.',
        examples: ['government', 'parliament', 'judge', 'jury', 'beef', 'fashion'],
        intensity: 5,
      },
      {
        year: '1337–1453',
        title: "The Hundred Years' War",
        text: 'England is at war with France, and French loses prestige: English returns to the courts and to Parliament. But by now much of the military vocabulary is already French.',
        examples: ['army', 'enemy', 'soldier', 'battle', 'siege'],
        intensity: 3,
      },
      {
        year: '16th c.',
        title: 'The Renaissance',
        text: 'Learned words of Latin and Italian origin arrive through French — about machines, navigation, the army and fashion.',
        examples: ['machine', 'pilot', 'colonel', 'vogue', 'portrait'],
        intensity: 3,
      },
      {
        year: '17th–18th c.',
        title: 'Restoration and Enlightenment',
        text: 'Charles II returns from exile in France, and Versailles sets the fashion for all of Europe. French becomes the language of diplomacy, salons and good manners.',
        examples: ['ballet', 'etiquette', 'salon', 'routine', 'regime'],
        intensity: 3,
      },
      {
        year: '19th c.',
        title: 'Gastronomy and Chic',
        text: 'Paris is the capital of food and elegance. Restaurants and cafés bring their vocabulary with them — and it still sounds almost French.',
        examples: ['restaurant', 'menu', 'chef', 'gourmet', 'chic'],
        intensity: 2,
      },
      {
        year: '20th c. – today',
        title: 'Our Time',
        text: 'The stream has narrowed but not dried up: cars, art, cinema and street food bring new words, while older ones travel on into other languages of the world.',
        examples: ['garage', 'camouflage', 'déjà vu', 'collage', 'bistro'],
        intensity: 1,
      },
    ],
  },

  origins: {
    title: 'The Family Tree of Words',
    lead: 'English is Germanic in its grammar, but half Romance in its vocabulary. French and Latin roots together account for almost 60% of the word stock.',
    shares: [
      { label: 'French', value: 29, key: 'french' },
      { label: 'Latin', value: 29, key: 'latin' },
      { label: 'Germanic', value: 26, key: 'germanic' },
      { label: 'Greek', value: 6, key: 'greek' },
      { label: 'Other', value: 10, key: 'other' },
    ],
    sourceNote:
      'Rounded figures from T. Finkenstaedt & D. Wolff, “Ordered Profusion” (1973), based on about 80,000 dictionary entries. “Other” covers other languages, proper names and words of unknown origin. In everyday speech the Germanic share is much higher: the most frequent words (the, is, and, you) are native English.',
    doublets: {
      title: 'In the field it’s English, on the plate it’s French',
      pairs: [
        { germanic: 'cow', french: 'beef', gloss: 'Fr. bœuf — ox; beef' },
        { germanic: 'pig', french: 'pork', gloss: 'Fr. porc — pig; pork' },
        { germanic: 'sheep', french: 'mutton', gloss: 'Fr. mouton — sheep; mutton' },
        { germanic: 'calf', french: 'veal', gloss: 'Old Fr. veel (mod. veau) — calf; veal' },
        { germanic: 'deer', french: 'venison', gloss: 'Old Fr. venaison — game from the hunt' },
      ],
    },
  },

  adaptation: {
    title: 'How Words Settle In',
    lead: 'A borrowed word does not stay a foreigner forever. It shifts its meaning, sound and spelling — and starts producing new words by English rules.',
    levels: [
      {
        id: 'meaning',
        title: 'Meaning',
        text: 'A word often narrows or shifts its sense. French chef means any “head”, but English kept only one meaning — from chef de cuisine.',
        example: { from: 'chef (FR: head, chief)', to: 'chef (EN: professional cook)' },
      },
      {
        id: 'pronunciation',
        title: 'Pronunciation',
        text: 'Sounds adjust to English phonetics, and the stress often moves to the first syllable. The older the loan, the more anglicised it sounds.',
        example: { from: 'garage [ɡaʁaʒ]', to: 'garage ˈɡærɑːʒ / ˈɡærɪdʒ' },
      },
      {
        id: 'spelling',
        title: 'Spelling',
        text: 'Accents gradually disappear — an English keyboard has neither é nor ô.',
        example: { from: 'café, rôle, élite', to: 'cafe, role, elite' },
      },
      {
        id: 'word-formation',
        title: 'Word formation',
        text: 'Once at home, a French root takes English suffixes and forms hybrid words.',
        example: { from: 'beauty (Old Fr. beauté)', to: 'beautiful, beautify' },
      },
    ],
    types: {
      title: 'Three Types of Borrowing',
      items: [
        {
          name: 'Loanwords',
          text: 'The whole word moves across — form and meaning, sometimes even the French spelling.',
          examples: ['ballet', 'garage', 'bouquet', 'menu'],
        },
        {
          name: 'Calques (loan translations)',
          text: 'A phrase is translated piece by piece: English words, French construction.',
          examples: [
            'it goes without saying ← cela va sans dire',
            'point of view ← point de vue',
            'marriage of convenience ← mariage de convenance',
          ],
        },
        {
          name: 'Semantic borrowings',
          text: 'The word already exists in English but picks up a new meaning on a French model.',
          examples: [
            'left — the political left ← la gauche',
            'right — the political right ← la droite',
          ],
        },
      ],
    },
  },

  themes: {
    title: 'Thematic Blocks',
    lead: 'French words did not arrive at random: they filled the areas where France set the tone. The three biggest are food, fashion and art, and power and law.',
    blocks: [
      {
        id: 'cuisine',
        emoji: '🥐',
        title: 'Cookery and Gastronomy',
        lead: 'Anglo-Saxons tended the animals; Norman lords ate them. Ever since, anything served with style has sounded French.',
        words: [
          { en: 'cuisine', fr: 'cuisine', ipa: 'kwɪˈziːn', meaning: 'style of cooking', note: 'Goes back to Latin coquina, “kitchen”. In English it means a style of cooking, never the room.', since: '18th c.' },
          { en: 'menu', fr: 'menu', ipa: 'ˈmenjuː', meaning: 'list of dishes', note: 'French menu means “small, detailed” — a detailed list of dishes. Today apps have menus too.', since: '19th c.' },
          { en: 'restaurant', fr: 'restaurant', ipa: 'ˈrestərɒnt', meaning: 'place to eat out', note: 'Literally “restoring”: in 18th-century Paris it was the name of a fortifying broth.', since: '19th c.' },
          { en: 'chef', fr: 'chef', ipa: 'ʃef', meaning: 'professional cook', note: 'Short for chef de cuisine, “head of the kitchen”. Chief is an earlier borrowing of the very same word.', since: '19th c.' },
          { en: 'gourmet', fr: 'gourmet', ipa: 'ˈɡʊəmeɪ', meaning: 'connoisseur of food', note: 'In Old French it meant a servant who tasted wine. The final t is silent.', since: '19th c.' },
          { en: 'dessert', fr: 'dessert', ipa: 'dɪˈzɜːt', meaning: 'sweet course', note: 'From desservir, “to clear the table”: dessert came once the main dishes were gone. Not to be confused with desert!', since: '~1600' },
          { en: 'omelette', fr: 'omelette', ipa: 'ˈɒmlət', meaning: 'beaten-egg dish', note: 'British spelling omelette, American omelet. The stress moved to the first syllable.', since: '17th c.' },
          { en: 'croissant', fr: 'croissant', ipa: 'ˈkwæsɒ̃', meaning: 'crescent-shaped pastry', note: 'Literally “growing”, like a crescent moon. British English even keeps the nasal vowel.', since: '19th c.' },
          { en: 'soufflé', fr: 'soufflé', ipa: 'ˈsuːfleɪ', meaning: 'light baked dish', note: 'Past participle of souffler, “to blow” — as if the dish had been puffed up with air.', since: '19th c.' },
          { en: 'beef', fr: 'bœuf', ipa: 'biːf', meaning: 'meat of cattle', note: 'One of the first “meat” words. The living animal stayed English — cow.', since: '~1300' },
        ],
        takeaway: 'English cookery speaks French twice over: old words (beef, pork) are fully anglicised, while newer ones (soufflé, croissant) still sound as if they were ordered in Paris.',
      },
      {
        id: 'fashion-art',
        emoji: '🎨',
        title: 'Fashion and Art',
        lead: 'Since the days of Versailles, France has been the arbiter of taste. English borrowed not just words but the very idea of chic.',
        words: [
          { en: 'ballet', fr: 'ballet', ipa: 'ˈbæleɪ', meaning: 'theatrical dance', note: 'French took it from Italian balletto. The final t is silent, and the British stress the first syllable.', since: '17th c.' },
          { en: 'fashion', fr: 'façon', ipa: 'ˈfæʃən', meaning: 'popular style', note: 'Old French façon, “shape, manner”. It has been in English so long that it looks native.', since: '~1300' },
          { en: 'boutique', fr: 'boutique', ipa: 'buːˈtiːk', meaning: 'small stylish shop', note: 'In French it is simply “a shop”. English made it the word for a small, fashionable one.', since: '18th c.' },
          { en: 'chic', fr: 'chic', ipa: 'ʃiːk', meaning: 'stylish, elegant', note: 'Say “sheek”, not “chick”: ch = ʃ, i = iː.', since: '19th c.' },
          { en: 'beige', fr: 'beige', ipa: 'beɪʒ', meaning: 'pale sandy colour', note: 'First the name of a fabric of undyed wool, then of its colour.', since: '19th c.' },
          { en: 'silhouette', fr: 'silhouette', ipa: 'ˌsɪluˈet', meaning: 'dark outline', note: 'Named after finance minister Étienne de Silhouette, famous for penny-pinching: cheap shadow portraits were named after him.', since: '18th c.' },
          { en: 'genre', fr: 'genre', ipa: 'ˈʒɒ̃rə', meaning: 'category of art', note: 'Initial g = ʒ and a nasal vowel — nearly French.', since: '18th c.' },
          { en: 'collage', fr: 'collage', ipa: 'ˈkɒlɑːʒ', meaning: 'pasted-together artwork', note: 'From colle, “glue”. It arrived with the Cubists in the early 20th century.', since: '20th c.' },
          { en: 'couture', fr: 'couture', ipa: 'kuːˈtjʊə', meaning: 'high fashion, dressmaking', note: 'In French any “sewing”. In English it mostly appears in haute couture.', since: '20th c.' },
          { en: 'portrait', fr: 'portrait', ipa: 'ˈpɔːtreɪt', meaning: 'picture of a person', note: 'From portraire, “to depict”. Today it also names the upright orientation of a screen.', since: '16th c.' },
        ],
        takeaway: 'Fashion and art are the most “French” block: here words most often keep their original spelling and sound — because that is exactly what makes them stylish.',
      },
      {
        id: 'politics-law',
        emoji: '⚖️',
        title: 'Politics and Law',
        lead: 'After 1066 the courts, Parliament and the royal chancery spoke French. Legal English is still full of these words.',
        words: [
          { en: 'parliament', fr: 'parlement', ipa: 'ˈpɑːləmənt', meaning: 'legislative assembly', note: 'From parler, “to speak”: a parliament is a place for talking things over. The i in the English spelling is silent.', since: '~1300' },
          { en: 'government', fr: 'gouvernement', ipa: 'ˈɡʌvənmənt', meaning: 'ruling body', note: 'The root goes back to Latin gubernare, “to steer a ship”.', since: '14th c.' },
          { en: 'justice', fr: 'justice', ipa: 'ˈdʒʌstɪs', meaning: 'fairness; the legal system', note: 'One of the earliest legal words; the stress moved to the first syllable.', since: '12th c.' },
          { en: 'judge', fr: 'juge', ipa: 'dʒʌdʒ', meaning: 'person who decides cases', note: 'An early loan: j and g are read dʒ, as they were in Old French.', since: '14th c.' },
          { en: 'jury', fr: 'juree', ipa: 'ˈdʒʊəri', meaning: 'panel of citizens in court', note: 'From Anglo-Norman juree, “oath”: jurors swore to give a true verdict.', since: '~1300' },
          { en: 'attorney', fr: 'atorné', ipa: 'əˈtɜːni', meaning: 'lawyer, legal agent', note: 'Old French atorné, “appointed” to act for someone else.', since: '~1300' },
          { en: 'sovereign', fr: 'souverain', ipa: 'ˈsɒvrɪn', meaning: 'monarch; independent', note: 'The silent g crept into the English spelling by mistaken analogy with reign.', since: '~1300' },
          { en: 'regime', fr: 'régime', ipa: 'reɪˈʒiːm', meaning: 'system of government', note: 'The political sense entered English during the French Revolution.', since: '18th c.' },
          { en: "coup d'état", fr: "coup d'État", ipa: 'ˌkuːdeɪˈtɑː', meaning: 'sudden seizure of power', note: 'Literally “a blow to the state”. Often shortened to coup — with a silent p.', since: '17th c.' },
          { en: 'bureaucracy', fr: 'bureaucratie', ipa: 'bjʊəˈrɒkrəsi', meaning: 'rule by officials', note: 'A hybrid: French bureau (“office”, originally the cloth covering a desk) + Greek -cracy (“rule”).', since: '19th c.' },
        ],
        takeaway: 'The old legal words (judge, jury, justice) are fully anglicised, while later political ones (regime, coup d’état) still give away their French origin.',
      },
    ],
  },

  falseFriends: {
    title: 'Beware of False Friends!',
    lead: 'Look-alike words are not always the same word. These pairs look like twins but mean different things. Flip a card to test yourself.',
    items: [
      { fr: 'demander', frMeaning: 'to ask', en: 'to demand', enMeaning: 'to require firmly', correct: 'to demand → exiger; to ask → demander' },
      { fr: 'librairie', frMeaning: 'bookshop', en: 'library', enMeaning: 'place to borrow books', correct: 'library → bibliothèque; bookshop → librairie' },
      { fr: 'actuellement', frMeaning: 'currently, at present', en: 'actually', enMeaning: 'in fact, really', correct: 'actually → en fait; currently → actuellement' },
      { fr: 'attendre', frMeaning: 'to wait', en: 'to attend', enMeaning: 'to be present at', correct: 'to attend → assister à; to wait → attendre' },
      { fr: 'assister à', frMeaning: 'to attend, to be present at', en: 'to assist', enMeaning: 'to help', correct: 'to assist → aider; to attend → assister à' },
      { fr: 'sensible', frMeaning: 'sensitive', en: 'sensible', enMeaning: 'reasonable, practical', correct: 'sensible → raisonnable; sensitive → sensible' },
      { fr: 'location', frMeaning: 'renting, hire', en: 'location', enMeaning: 'place, position', correct: 'location → emplacement, lieu; rental → location' },
      { fr: 'éventuellement', frMeaning: 'possibly, if need be', en: 'eventually', enMeaning: 'in the end, finally', correct: 'eventually → finalement; possibly → éventuellement' },
      { fr: 'rester', frMeaning: 'to stay, to remain', en: 'to rest', enMeaning: 'to relax, to take a break', correct: 'to rest → se reposer; to stay → rester' },
      { fr: 'journée', frMeaning: 'day', en: 'journey', enMeaning: 'trip, travel', correct: 'journey → voyage, trajet; day → journée' },
      { fr: 'monnaie', frMeaning: 'change; currency', en: 'money', enMeaning: 'money in general', correct: 'money → argent; change → monnaie' },
      { fr: 'coin', frMeaning: 'corner', en: 'coin', enMeaning: 'piece of metal money', correct: 'coin → pièce (de monnaie); corner → coin' },
    ],
  },

  reading: {
    title: 'How to Read French Words in English',
    lead: 'The practical heart of the Atlas. If a word “doesn’t follow the rules”, ask yourself: could it be French? These nine tips cover most cases.',
    rules: [
      {
        pattern: 'Final stress',
        sound: 'ˈ on the last syllable',
        examples: ['police pəˈliːs', 'machine məˈʃiːn', 'hotel həʊˈtel', 'champagne ʃæmˈpeɪn', 'bizarre bɪˈzɑː'],
        hint: 'French stresses the last syllable, and many loans kept it. British English, though, often pulls the stress forward: ballet ˈbæleɪ, café ˈkæfeɪ (American English keeps it at the end).',
      },
      {
        pattern: '-age',
        sound: '/ɑːʒ/',
        examples: ['garage', 'massage', 'collage', 'montage', 'sabotage'],
        hint: 'A soft “-ahzh” marks a later loan. Older words have long been read the English way: village, courage, language — /ɪdʒ/.',
      },
      {
        pattern: 'ch',
        sound: '/ʃ/',
        examples: ['chef', 'machine', 'chic', 'brochure', 'moustache'],
        hint: 'In later loans ch = “sh”. In early ones (chair, change, chance) it is /tʃ/ — that is how ch sounded in Old French before the 13th century.',
      },
      {
        pattern: '-que, -ique',
        sound: '/k/, /iːk/',
        examples: ['unique', 'technique', 'antique', 'boutique', 'cheque'],
        hint: 'The letters -que give a plain /k/, and -ique also takes the stress: uˈnique, techˈnique.',
      },
      {
        pattern: 'Silent final -t / -s',
        sound: '-et → /eɪ/',
        examples: ['buffet ˈbʊfeɪ', 'debut ˈdeɪbjuː', 'bouquet buˈkeɪ', 'ballet ˈbæleɪ', 'corps kɔː'],
        hint: 'If a word ends in -et and feels French, the t is probably silent and -et sounds like /eɪ/. Old loans such as ticket are read the English way.',
      },
      {
        pattern: '-ette',
        sound: '/et/, stressed',
        examples: ['cigarette', 'baguette', 'silhouette', 'kitchenette', 'launderette'],
        hint: 'A French diminutive suffix. English even adds it to its own words: kitchen → kitchenette, a tiny kitchen.',
      },
      {
        pattern: 'Stressed -ine',
        sound: '/iːn/',
        examples: ['machine', 'cuisine', 'routine', 'magazine', 'limousine'],
        hint: 'When stressed, -ine is a long “-een”. Unstressed, it is short and English: medicine, famine (/ɪn/).',
      },
      {
        pattern: 'g before e, i',
        sound: '/ʒ/',
        examples: ['regime', 'beige', 'genre', 'prestige', 'mirage'],
        hint: 'Later loans keep the French “zh”. Early ones switched to English /dʒ/ long ago: gentle, general, judge.',
      },
      {
        pattern: '-eau',
        sound: '/əʊ/',
        examples: ['plateau', 'bureau', 'chateau', 'gateau'],
        hint: 'Three letters, one sound — “oh”. Both plurals are in use: bureaux and bureaus.',
      },
    ],
  },

  travelling: {
    title: 'Travelling Words',
    lead: 'Some French words did not stop in England. Carried by English — and often straight from French — they spread around the globe and became internationalisms.',
    words: [
      { word: 'ballet', route: ['It. balletto', 'Fr. ballet', 'Eng. ballet', 'World: балет, Ballett, ballet'], note: 'An Italian dance that became a French art at the court of Louis XIV.' },
      { word: 'cuisine', route: ['Lat. coquina', 'Fr. cuisine', 'Eng. cuisine', 'World: on menus from Tokyo to New York'], note: 'In English, a style of cooking: French cuisine, Asian cuisine.' },
      { word: 'elite', route: ['Lat. eligere “to choose”', 'Fr. élite', 'Eng. elite', 'World: элита, Elite, élite'], note: 'Literally “the chosen”. English dropped the accent on the e.' },
      { word: 'regime', route: ['Lat. regimen', 'Fr. régime', 'Eng. regime', 'World: режим, Regime, régimen'], note: 'The political sense took hold during the French Revolution.' },
      { word: 'restaurant', route: ['Fr. restaurer “to restore”', 'Fr. restaurant', 'Eng. restaurant', 'World: ресторан, Restaurant, restaurante'], note: 'The first Parisian restaurants were famous for their restorative broths.' },
      { word: 'menu', route: ['Lat. minutus “small”', 'Fr. menu', 'Eng. menu', 'World: in cafés and on smartphones'], note: 'From a list of dishes to a list of commands in a computer program.' },
      { word: 'garage', route: ['Fr. garer “to shelter”', 'Fr. garage', 'Eng. garage', 'World: гараж, Garage, garaje'], note: 'A word from the age of the first motor cars, the early 20th century.' },
      { word: 'souvenir', route: ['Lat. subvenire “to come to mind”', 'Fr. souvenir “to remember”', 'Eng. souvenir', 'World: сувенир, Souvenir, suvenir'], note: 'In French, “a memory”; in English, a keepsake.' },
    ],
  },

  conclusion: {
    title: 'In Conclusion',
    paragraphs: [
      'French loanwords are not foreign bodies in English. They are traces of a thousand-year dialogue between two cultures — of conquests and wars, royal courts and Parisian cafés.',
      'Knowing their history helps with reading — the stress and the “strange” letters become predictable — and with learning French: English turns into a bridge to the other shore of the Channel.',
      'Above all, this story shows that languages which share their words do not lose themselves. They grow richer — just like the people who learn them.',
    ],
  },

  about: {
    title: 'About the Project',
    aim: 'To identify and systematise the similarities and differences between French and English vocabulary, uncovering the mechanisms of intercultural interaction, and to create a visual guide that helps learners avoid reading and communication errors.',
    objectives: [
      'Review academic literature on etymology, lexicology and linguoculturology, and trace the history of linguistic contact between France and Britain.',
      'Select lexical units from authoritative sources (etymological and historical dictionaries, corpora) and arrange them into thematic blocks.',
      'Analyse the routes by which words migrated, their adaptation in pronunciation and spelling, and the cases where their meanings diverged.',
      'Explain why meanings were preserved or transformed in light of cultural and historical realities: the influence of the aristocracy, colonial history and diplomatic protocol.',
      'Design the booklet and longread “The Atlas of Untranslatable Images: A Franco-English Edition”, with infographics and a guide to false friends.',
    ],
    methods: [
      {
        category: 'Theoretical',
        methods: 'Historical and etymological analysis; the comparative method; linguocultural interpretation',
        purpose: 'To study the history of words and reveal routes of borrowing and cultural connotations',
      },
      {
        category: 'Empirical',
        methods: 'Continuous sampling; contextual analysis; work with corpora and reference databases (CNRTL, OED, BNC)',
        purpose: 'To gather material and analyse how words are used in authentic texts',
      },
      {
        category: 'Statistical',
        methods: 'Quantitative count of borrowings by thematic group; data visualisation',
        purpose: 'To test the hypothesis objectively and create infographics for the Atlas',
      },
    ],
    author: 'Author: Valeria Burkhovetskaya, Grade 10A, Lyceum of Information Technologies',
    supervisor: 'Supervisor: Sergey Tolstikov',
  },

  sources: {
    title: 'Sources',
    items: [
      { author: 'Соколова А. А. (Sokolova A. A.)', title: 'Французские заимствования в английском языке (French Borrowings in the English Language)', url: 'https://cyberleninka.ru/article/n/frantsuzskie-zaimstvovaniya-v-angliyskom-yazyke' },
      { author: 'Абдрахманова Г. А. (Abdrakhmanova G. A.)', title: 'Французские заимствования в английском языке // Актуальные вопросы классической и современной филологии; теории и практики перевода (French Borrowings in English, in: Current Issues in Classical and Modern Philology and Translation)' },
      { author: 'Горина В. А. (Gorina V. A.)', title: 'Французские заимствования в английском (в контексте овладения французским языком как вторым иностранным) (French Borrowings in English in the Context of Learning French as a Second Foreign Language)', url: 'https://cyberleninka.ru/article/n/frantsuzskie-zaimstvovaniya-v-angliyskom-yazyke-v-kontekste-ovladeniya-frantsuzskim-yazykom-kak-vtorym-inostrannym/viewer' },
      { author: 'Мезенцева М. В., Балуян С. Р. (Mezentseva M. V., Baluyan S. R.)', title: 'Французские заимствования XX века в английском языке: семантический анализ (20th-Century French Borrowings in English: A Semantic Analysis)', url: 'https://www.gramota.net/article/phil20161734/fulltext' },
      { author: 'Митчелл П. Дж., Ахтамбаев Р. П., Игнатов А. А. (Mitchell P. J., Akhtambaev R. P., Ignatov A. A.)', title: 'Влияние военных контактов на французские заимствования в английский язык (The Influence of Military Contacts on French Borrowings into English)', url: 'https://vital.lib.tsu.ru/vital/access/services/Download/vtls:000480750/SOURCE1?view=true' },
      { author: 'Институт стратегии развития образования (Institute for Strategy of Education Development)', title: 'Информационно-методическое письмо об особенностях преподавания учебного предмета «Иностранный язык» в 2025/2026 учебном году (Guidance Letter on Teaching Foreign Languages in the 2025/2026 School Year)', url: 'https://edsoo.ru/2026/08/17/informaczionno-metodicheskoe-pismo-ob-osobennostyah-prepodavaniya-uchebnogo-predmeta-inostrannyj-yazyk-v-2025-2026-uchebnom-godu/' },
      { author: 'Finkenstaedt T., Wolff D.', title: 'Ordered Profusion: Studies in Dictionaries and the English Lexicon. Heidelberg: C. Winter, 1973' },
      { author: 'Cambridge University Press', title: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/' },
      { author: 'Oxford University Press', title: 'Oxford English Dictionary', url: 'https://www.oed.com/' },
      { author: 'Harper D.', title: 'Online Etymology Dictionary', url: 'https://www.etymonline.com/' },
      { author: 'CNRS / ATILF', title: 'Centre National de Ressources Textuelles et Lexicales (CNRTL)', url: 'https://www.cnrtl.fr/' },
    ],
  },

  footer: {
    text: '© 2026 Valeria Burkhovetskaya · The Atlas of Untranslatable Images: A Franco-English Edition · Lyceum of Information Technologies',
  },
};

export default content;
