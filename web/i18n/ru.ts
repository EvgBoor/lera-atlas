// Русский текст лонгрида «Атлас непереводимых образов: Франко-английское издание».
// Этимология и даты — по Etymonline / OED, IPA — британский вариант (Cambridge / Oxford Learner's).
import type { SiteContent } from './types';

const content: SiteContent = {
  locale: 'ru',

  meta: {
    title: 'Атлас непереводимых образов — французские слова в английском языке',
    description:
      'Двуязычный лонгрид о французских заимствованиях в английском: как слова пересекали Ла-Манш, почему ballet и garage читаются «не по правилам», ложные друзья переводчика и памятка по чтению.',
  },

  nav: [
    { id: 'intro', label: 'Начало' },
    { id: 'timeline', label: 'Волны' },
    { id: 'origins', label: 'Корни' },
    { id: 'adaptation', label: 'Адаптация' },
    { id: 'themes', label: 'Темы' },
    { id: 'false-friends', label: 'Ложные друзья' },
    { id: 'reading', label: 'Как читать' },
    { id: 'travelling', label: 'Путешественники' },
    { id: 'about', label: 'О проекте' },
  ],

  ui: {
    langSwitch: 'EN',
    readingTime: '≈ 15 минут чтения',
    scrollHint: 'Листайте вниз',
    backToTop: 'Наверх',
    flipHint: 'Нажмите, чтобы перевернуть',
    labels: {
      aim: 'Цель',
      objectives: 'Задачи',
      methods: { category: 'Группа', methods: 'Методы', purpose: 'Зачем' },
      falseFriends: { fr: 'По-французски', en: 'По-английски', correct: 'Как правильно' },
      intensity: 'Интенсивность заимствований',
    },
  },

  hero: {
    kicker: 'Франко-английское издание',
    title: 'Атлас непереводимых образов',
    subtitle:
      'Как французские слова пересекли Ла-Манш, прижились в английском и почему их так легко прочитать неправильно.',
    author: 'Валерия Бурховецкая, 10 «А»',
    supervisor: 'Руководитель — Толстиков Сергей Викторович',
    school: 'МАОУ «Лицей информационных технологий»',
  },

  intro: {
    title: 'Два берега Ла-Манша',
    paragraphs: [
      'Всё началось с уроков английского. Некоторые слова упорно не слушались правил чтения: ударение падало «не туда», буквы произносились совсем не так, как учили. Почему chef — это «шеф», а не «чеф»? Почему в ballet не слышно последней t, а garage заканчивается на французское «ж»?',
      'Оказалось, у этих слов общая биография: почти все они пришли в английский из французского. Между Англией и Францией всего около 33 километров пролива, но почти тысячу лет через него шли не только армии и товары, но и слова — о еде, моде, искусстве, праве и власти.',
      'Многие из них сохранили французский «акцент» в написании и произношении. Если знать, откуда слово родом, его чтение перестаёт быть загадкой. А тем, кто учит французский как второй иностранный, английский внезапно становится подсказкой: тысячи слов уже знакомы.',
      'В 2026 году, объявленном Годом единства народов России, эта история звучит особенно: языки, которые веками обмениваются словами, не теряют себя, а становятся богаче. Разнообразие — не барьер, а ресурс.',
    ],
    pullQuote: 'Слово — путешественник, который везде немного сохраняет свой акцент.',
  },

  timeline: {
    title: 'Волны заимствований',
    lead: 'Французские слова приходили в английский не одним потоком, а волнами — каждая со своей эпохой, своими темами и своим «звучанием».',
    events: [
      {
        year: '1066',
        title: 'Нормандское завоевание',
        text: 'Вильгельм Завоеватель побеждает при Гастингсе. Новая знать, двор и суд говорят на нормандском диалекте французского, а народ — по-английски. Начинается почти трёхвековое двуязычие.',
        examples: ['crown', 'duke', 'baron', 'court', 'prison'],
        intensity: 4,
      },
      {
        year: 'XII–XIV вв.',
        title: 'Англо-нормандский и среднеанглийский',
        text: 'Пик заимствований. Французский — язык власти, права и «красивой жизни». Английский впитывает тысячи слов и меняется настолько, что лингвисты называют этот этап среднеанглийским.',
        examples: ['government', 'parliament', 'judge', 'jury', 'beef', 'fashion'],
        intensity: 5,
      },
      {
        year: '1337–1453',
        title: 'Столетняя война',
        text: 'Англия воюет с Францией, и престиж французского падает: английский возвращается в суды и парламент. Но военная лексика к этому времени уже во многом французская.',
        examples: ['army', 'enemy', 'soldier', 'battle', 'siege'],
        intensity: 3,
      },
      {
        year: 'XVI в.',
        title: 'Ренессанс',
        text: 'Через французский приходят «учёные» слова латинского и итальянского корня — о технике, мореплавании, армии и моде.',
        examples: ['machine', 'pilot', 'colonel', 'vogue', 'portrait'],
        intensity: 3,
      },
      {
        year: 'XVII–XVIII вв.',
        title: 'Реставрация и Просвещение',
        text: 'Карл II, проведший годы изгнания при французском дворе, возвращается на трон, Версаль задаёт моду всей Европе. Французский — язык дипломатии, салонов и хороших манер.',
        examples: ['ballet', 'etiquette', 'salon', 'routine', 'regime'],
        intensity: 3,
      },
      {
        year: 'XIX в.',
        title: 'Гастрономия и шик',
        text: 'Париж — столица кухни и элегантности. Вместе с ресторанами и кафе в английский приходит их словарь, и звучит он почти по-французски.',
        examples: ['restaurant', 'menu', 'chef', 'gourmet', 'chic'],
        intensity: 2,
      },
      {
        year: 'XX в. — сегодня',
        title: 'Наши дни',
        text: 'Поток стал тоньше, но не иссяк: автомобили, искусство, кино и уличная еда приносят новые слова, а старые уходят дальше — в другие языки мира.',
        examples: ['garage', 'camouflage', 'déjà vu', 'collage', 'bistro'],
        intensity: 1,
      },
    ],
  },

  origins: {
    title: 'Родословное древо слов',
    lead: 'По грамматике английский — германский язык, но по словарю он наполовину романский. Французские и латинские корни вместе дают более половины (около 56%) лексики.',
    shares: [
      { label: 'Французский', value: 28, key: 'french' },
      { label: 'Латынь', value: 28, key: 'latin' },
      { label: 'Германские языки', value: 25, key: 'germanic' },
      { label: 'Греческий', value: 5, key: 'greek' },
      { label: 'Другие', value: 14, key: 'other' },
    ],
    sourceNote:
      'Данные исследования T. Finkenstaedt & D. Wolff «Ordered Profusion» (1973), около 80 000 слов словаря. «Другие» — прочие языки, имена собственные и слова неясного происхождения. В живой речи доля германских слов заметно выше: самые частые слова (the, is, and, you) — исконно английские.',
    doublets: {
      animalLabel: 'На пастбище', meatLabel: 'На столе',
      title: 'На пастбище — по-английски, на столе — по-французски',
      pairs: [
        { germanic: 'cow', french: 'beef', gloss: 'фр. bœuf — бык; говядина' },
        { germanic: 'pig', french: 'pork', gloss: 'фр. porc — свинья; свинина' },
        { germanic: 'sheep', french: 'mutton', gloss: 'фр. mouton — баран; баранина' },
        { germanic: 'calf', french: 'veal', gloss: 'ст.-фр. veel (совр. veau) — телёнок; телятина' },
        { germanic: 'deer', french: 'venison', gloss: 'ст.-фр. venaison — охотничья добыча; оленина' },
      ],
    },
  },

  adaptation: {
    title: 'Как слова приживаются',
    lead: 'Заимствованное слово не остаётся «иностранцем» навсегда. Оно меняет значение, звучание, написание и начинает рождать новые слова — уже по английским законам.',
    levels: [
      {
        id: 'meaning',
        title: 'Значение',
        text: 'Слово часто сужает или сдвигает смысл. Французское chef — любой «глава», а в английском осталось только одно значение — от chef de cuisine.',
        example: { from: 'chef (фр.: глава, начальник)', to: 'chef (англ.: шеф-повар)' },
      },
      {
        id: 'pronunciation',
        title: 'Произношение',
        text: 'Звуки подстраиваются под английскую фонетику, а ударение часто уходит на первый слог. Чем старше заимствование, тем сильнее оно «обангличено».',
        example: { from: 'garage [ɡaʁaʒ]', to: 'garage ˈɡærɑːʒ / ˈɡærɪdʒ' },
      },
      {
        id: 'spelling',
        title: 'Написание',
        text: 'Диакритические знаки постепенно исчезают: на английской клавиатуре нет ни é, ни ô.',
        example: { from: 'café, rôle, élite', to: 'cafe, role, elite' },
      },
      {
        id: 'word-formation',
        title: 'Словообразование',
        text: 'Освоившись, французский корень присоединяет английские суффиксы и образует слова-гибриды.',
        example: { from: 'beauty (ст.-фр. beauté)', to: 'beautiful, beautifully' },
      },
    ],
    types: {
      title: 'Три типа заимствований',
      items: [
        {
          name: 'Собственно заимствования',
          text: 'Слово переходит целиком — с формой и значением, иногда даже с французским написанием.',
          examples: ['ballet', 'garage', 'bouquet', 'menu'],
        },
        {
          name: 'Кальки',
          text: 'Выражение переводится по частям: слова английские, а «конструкция» французская.',
          examples: [
            'it goes without saying ← cela va sans dire',
            'point of view ← point de vue',
            'marriage of convenience ← mariage de convenance',
          ],
        },
        {
          name: 'Семантические заимствования',
          text: 'Слово уже есть в языке, но получает новое значение по французскому образцу.',
          examples: [
            'left — «левые» в политике ← la gauche',
            'right — «правые» в политике ← la droite',
          ],
        },
      ],
    },
  },

  themes: {
    title: 'Тематические блоки',
    lead: 'Французские слова приходили не случайно: они заполняли сферы, где Франция задавала тон. Три главные — кухня, мода и искусство, политика и право.',
    blocks: [
      {
        id: 'cuisine',
        emoji: '🥐',
        title: 'Кухня и гастрономия',
        lead: 'Животных пасли англосаксы, а ели нормандские господа. С тех пор всё, что подаётся красиво, звучит по-французски.',
        words: [
          { en: 'cuisine', fr: 'cuisine', ipa: 'kwɪˈziːn', meaning: 'кухня, стиль приготовления', note: 'Восходит к латинскому coquina — «кухня». Сегодня в английском — про стиль готовки, а не про комнату.', since: 'XVIII в.' },
          { en: 'menu', fr: 'menu', ipa: 'ˈmenjuː', meaning: 'меню', note: 'Французское menu — «мелкий, подробный»: это подробный список блюд. Сегодня — ещё и меню в приложении.', since: 'XIX в.' },
          { en: 'restaurant', fr: 'restaurant', ipa: 'ˈrestərɒnt', meaning: 'ресторан', note: 'Буквально «восстанавливающий»: так в Париже XVIII века называли укрепляющий бульон.', since: 'XIX в.' },
          { en: 'chef', fr: 'chef', ipa: 'ʃef', meaning: 'шеф-повар', note: 'Сокращение от chef de cuisine — «глава кухни». «Начальник» по-английски — chief, более раннее заимствование того же слова.', since: 'XIX в.' },
          { en: 'gourmet', fr: 'gourmet', ipa: 'ˈɡʊəmeɪ', meaning: 'гурман, знаток еды', note: 'В старофранцузском так называли слугу, пробовавшего вино. Конечная t не читается.', since: 'XIX в.' },
          { en: 'dessert', fr: 'dessert', ipa: 'dɪˈzɜːt', meaning: 'десерт', note: 'От desservir — «убирать со стола»: десерт подавали, когда основные блюда уже унесли. Не путать с desert — «пустыня».', since: '~1600' },
          { en: 'omelette', fr: 'omelette', ipa: 'ˈɒmlət', meaning: 'омлет', note: 'Британцы пишут omelette, американцы — omelet. Ударение ушло на первый слог.', since: 'XVII в.' },
          { en: 'croissant', fr: 'croissant', ipa: 'ˈkwæsɒ̃', meaning: 'круассан', note: 'Буквально «растущий» — как молодой месяц. В британском произношении сохранился носовой гласный.', since: 'XIX в.' },
          { en: 'soufflé', fr: 'soufflé', ipa: 'ˈsuːfleɪ', meaning: 'суфле', note: 'Причастие от souffler — «дуть»: блюдо будто надули воздухом.', since: 'XIX в.' },
          { en: 'beef', fr: 'bœuf', ipa: 'biːf', meaning: 'говядина', note: 'Одно из первых «мясных» слов. Живая корова осталась английской — cow.', since: '~1300' },
        ],
        takeaway: 'Английская кухня говорит по-французски дважды: старые слова (beef, pork) давно обангличились, а новые (soufflé, croissant) до сих пор звучат как в Париже.',
      },
      {
        id: 'fashion-art',
        emoji: '🎨',
        title: 'Мода и искусство',
        lead: 'Со времён Версаля Франция — законодательница вкуса. Английский заимствовал не просто слова, а саму идею «шика».',
        words: [
          { en: 'ballet', fr: 'ballet', ipa: 'ˈbæleɪ', meaning: 'балет', note: 'Во французский пришло из итальянского balletto. Конечная t молчит, а британцы ставят ударение на первый слог.', since: 'XVII в.' },
          { en: 'fashion', fr: 'façon', ipa: 'ˈfæʃən', meaning: 'мода', note: 'Старофранцузское façon — «форма, манера». Слово так давно в английском, что выглядит родным.', since: '~1300' },
          { en: 'boutique', fr: 'boutique', ipa: 'buːˈtiːk', meaning: 'бутик, модный магазинчик', note: 'Во французском — просто «лавка». В английском стало словом про стильный маленький магазин.', since: 'XVIII в.' },
          { en: 'chic', fr: 'chic', ipa: 'ʃiːk', meaning: 'шикарный, стильный', note: 'Читается «шик», а не «чик»: ch = ʃ, i = iː.', since: 'XIX в.' },
          { en: 'beige', fr: 'beige', ipa: 'beɪʒ', meaning: 'бежевый', note: 'Сначала так называли ткань из некрашеной шерсти, потом — её цвет.', since: 'XIX в.' },
          { en: 'silhouette', fr: 'silhouette', ipa: 'ˌsɪluˈet', meaning: 'силуэт', note: 'По имени министра финансов Этьена де Силуэта, известного скупостью: дешёвые портреты-тени назвали в его честь.', since: 'XVIII в.' },
          { en: 'genre', fr: 'genre', ipa: 'ˈʒɒ̃rə', meaning: 'жанр', note: 'Начальное g = ʒ и носовой гласный — почти по-французски.', since: 'XVIII в.' },
          { en: 'collage', fr: 'collage', ipa: 'ˈkɒlɑːʒ', meaning: 'коллаж', note: 'От colle — «клей». Слово пришло вместе с кубистами начала XX века.', since: 'XX в.' },
          { en: 'couture', fr: 'couture', ipa: 'kuːˈtjʊə', meaning: 'высокая мода, пошив', note: 'Во французском — любое «шитьё». В английском чаще всего встречается в сочетании haute couture.', since: 'XX в.' },
          { en: 'portrait', fr: 'portrait', ipa: 'ˈpɔːtreɪt', meaning: 'портрет', note: 'От portraire — «изображать». Сегодня так называют и вертикальную ориентацию экрана.', since: 'XVI в.' },
        ],
        takeaway: 'Мода и искусство — самый «французский» блок: здесь слова чаще всего сохраняют исходное написание и звучание, ведь именно оно и делает их стильными.',
      },
      {
        id: 'politics-law',
        emoji: '⚖️',
        title: 'Политика и право',
        lead: 'После 1066 года суд, парламент и королевская канцелярия заговорили по-французски. Юридический английский до сих пор полон этих слов.',
        words: [
          { en: 'parliament', fr: 'parlement', ipa: 'ˈpɑːləmənt', meaning: 'парламент', note: 'От parler — «говорить»: парламент — место, где обсуждают. Буква i в английском написании не читается.', since: '~1300' },
          { en: 'government', fr: 'gouvernement', ipa: 'ˈɡʌvənmənt', meaning: 'правительство', note: 'Корень восходит к латинскому gubernare — «править кораблём».', since: 'XIV в.' },
          { en: 'justice', fr: 'justice', ipa: 'ˈdʒʌstɪs', meaning: 'правосудие, справедливость', note: 'Одно из самых ранних «правовых» слов; ударение перешло на первый слог.', since: 'XII в.' },
          { en: 'judge', fr: 'juge', ipa: 'dʒʌdʒ', meaning: 'судья; судить', note: 'Раннее заимствование: j и g читаются как dʒ — так они звучали в старофранцузском.', since: 'XIV в.' },
          { en: 'jury', fr: 'juree', ipa: 'ˈdʒʊəri', meaning: 'присяжные', note: 'Из англо-нормандского juree — «присяга»: присяжные давали клятву.', since: '~1300' },
          { en: 'attorney', fr: 'atorné', ipa: 'əˈtɜːni', meaning: 'поверенный, адвокат', note: 'Старофранцузское atorné — «назначенный» действовать за другого.', since: '~1300' },
          { en: 'sovereign', fr: 'souverain', ipa: 'ˈsɒvrɪn', meaning: 'монарх; суверенный', note: 'Немая g появилась в английском написании по ошибочной аналогии с reign — «царствовать».', since: '~1300' },
          { en: 'regime', fr: 'régime', ipa: 'reɪˈʒiːm', meaning: 'режим, строй', note: 'В значении «система правления» вошло в английский в эпоху Французской революции.', since: 'XVIII в.' },
          { en: "coup d’état", fr: "coup d’État", ipa: 'ˌkuːdeɪˈtɑː', meaning: 'государственный переворот', note: 'Буквально «удар по государству». Часто сокращают до coup — и p не читается.', since: 'XVII в.' },
          { en: 'bureaucracy', fr: 'bureaucratie', ipa: 'bjʊəˈrɒkrəsi', meaning: 'бюрократия', note: 'Гибрид: французское bureau («контора», изначально — сукно на письменном столе) + греческое -cratie («власть»).', since: 'XIX в.' },
        ],
        takeaway: 'Старые правовые слова (judge, jury, justice) полностью обангличились, а более поздние политические (regime, coup d’état) всё ещё выдают своё французское происхождение.',
      },
    ],
  },

  falseFriends: {
    title: 'Осторожно, ложные друзья!',
    lead: 'Похожие слова — не всегда одно и то же. Эти пары выглядят как близнецы, но значат разное. Переверните карточку, чтобы проверить себя.',
    items: [
      { fr: 'demander', frMeaning: 'просить, спрашивать (to ask)', en: 'to demand', enMeaning: 'требовать', correct: 'to demand → exiger; to ask → demander' },
      { fr: 'librairie', frMeaning: 'книжный магазин (bookshop)', en: 'library', enMeaning: 'библиотека', correct: 'library → bibliothèque; bookshop → librairie' },
      { fr: 'actuellement', frMeaning: 'сейчас, в настоящее время (currently)', en: 'actually', enMeaning: 'на самом деле', correct: 'actually → en fait; currently → actuellement' },
      { fr: 'attendre', frMeaning: 'ждать (to wait)', en: 'to attend', enMeaning: 'посещать, присутствовать', correct: 'to attend → assister à; to wait → attendre' },
      { fr: 'assister à', frMeaning: 'присутствовать на (to attend)', en: 'to assist', enMeaning: 'помогать', correct: 'to assist → aider; to attend → assister à' },
      { fr: 'sensible', frMeaning: 'чувствительный (sensitive)', en: 'sensible', enMeaning: 'разумный, благоразумный', correct: 'sensible → raisonnable; sensitive → sensible' },
      { fr: 'location', frMeaning: 'аренда, прокат (rental)', en: 'location', enMeaning: 'место, местоположение', correct: 'location → emplacement, lieu; rental → location' },
      { fr: 'éventuellement', frMeaning: 'возможно, при необходимости (possibly)', en: 'eventually', enMeaning: 'в конце концов', correct: 'eventually → finalement; possibly → éventuellement' },
      { fr: 'rester', frMeaning: 'оставаться (to stay)', en: 'to rest', enMeaning: 'отдыхать', correct: 'to rest → se reposer; to stay → rester' },
      { fr: 'journée', frMeaning: 'день (day)', en: 'journey', enMeaning: 'поездка, путешествие', correct: 'journey → voyage, trajet; day → journée' },
      { fr: 'monnaie', frMeaning: 'сдача, мелочь; валюта (change, currency)', en: 'money', enMeaning: 'деньги', correct: 'money → argent; change → monnaie' },
      { fr: 'coin', frMeaning: 'угол (corner)', en: 'coin', enMeaning: 'монета', correct: 'coin → pièce (de monnaie); corner → coin' },
    ],
  },

  reading: {
    title: 'Как читать французские слова в английском',
    lead: 'Главная практическая часть атласа. Если слово «не читается по правилам», проверьте: может, оно французское? Эти девять подсказок закрывают большинство случаев.',
    rules: [
      {
        pattern: 'Ударение в конце',
        sound: 'ˈ на последнем слоге',
        examples: ['police pəˈliːs', 'machine məˈʃiːn', 'hotel həʊˈtel', 'champagne ʃæmˈpeɪn', 'bizarre bɪˈzɑː'],
        hint: 'Во французском ударение падает на последний слог, и многие заимствования его сохранили. Но британцы часто переносят его вперёд: ballet ˈbæleɪ, café ˈkæfeɪ (в американском варианте — на последний слог).',
      },
      {
        pattern: '-age',
        sound: '/ɑːʒ/',
        examples: ['garage', 'massage', 'collage', 'montage', 'sabotage'],
        hint: 'Французское «-аж» — признак поздних заимствований. Старые слова давно читаются по-английски: village, courage, language — /ɪdʒ/.',
      },
      {
        pattern: 'ch',
        sound: '/ʃ/',
        examples: ['chef', 'machine', 'chic', 'brochure', 'moustache'],
        hint: 'В поздних заимствованиях ch = «ш». В ранних (chair, change, chance) — /tʃ/: так ch звучал в старофранцузском до XIII века.',
      },
      {
        pattern: '-que, -ique',
        sound: '/k/, /iːk/',
        examples: ['unique', 'technique', 'antique', 'boutique', 'cheque'],
        hint: 'Буквы -que дают просто /k/, а -ique ещё и забирает ударение: uˈnique, techˈnique.',
      },
      {
        pattern: 'Немая конечная -t / -s',
        sound: '-et → /eɪ/',
        examples: ['buffet ˈbʊfeɪ', 'debut ˈdeɪbjuː', 'bouquet buˈkeɪ', 'ballet ˈbæleɪ', 'corps kɔː'],
        hint: 'Если слово кончается на -et и «пахнет» Францией, t, скорее всего, молчит, а -et звучит как /eɪ/. Старые заимствования вроде ticket читаются по-английски.',
      },
      {
        pattern: '-ette',
        sound: '/et/, под ударением',
        examples: ['cigarette', 'baguette', 'silhouette', 'kitchenette', 'launderette'],
        hint: 'Французский уменьшительный суффикс. Английский присоединяет его и к своим словам: kitchen → kitchenette (маленькая кухня).',
      },
      {
        pattern: '-ine под ударением',
        sound: '/iːn/',
        examples: ['machine', 'cuisine', 'routine', 'magazine', 'limousine'],
        hint: 'Под ударением -ine читается как долгое «-ин». Без ударения — по-английски коротко: engine, famine (/ɪn/).',
      },
      {
        pattern: 'g перед e, i',
        sound: '/ʒ/',
        examples: ['regime', 'beige', 'genre', 'prestige', 'mirage'],
        hint: 'Поздние заимствования сохраняют французское «ж». Ранние давно получили английское /dʒ/: gentle, general, judge.',
      },
      {
        pattern: '-eau',
        sound: '/əʊ/',
        examples: ['plateau', 'bureau', 'chateau', 'gateau'],
        hint: 'Три буквы — один звук «оу». Во множественном числе встречаются оба варианта: bureaux и bureaus.',
      },
    ],
  },

  travelling: {
    title: 'Слова-путешественники',
    lead: 'Некоторые французские слова не остановились в Англии: вместе с английским (а часто и напрямую из французского) они разошлись по всему миру и стали интернационализмами.',
    words: [
      { word: 'ballet', route: ['итал. balletto', 'фр. ballet', 'англ. ballet', 'мир: балет, Ballett, ballet'], note: 'Итальянский танец, ставший французским искусством при дворе Людовика XIV.' },
      { word: 'cuisine', route: ['лат. coquina', 'фр. cuisine', 'англ. cuisine', 'мир: в меню от Токио до Нью-Йорка'], note: 'В английском — «стиль кухни»: French cuisine, Asian cuisine.' },
      { word: 'elite', route: ['лат. eligere «выбирать»', 'фр. élite', 'англ. elite', 'мир: элита, Elite, élite'], note: 'Буквально «избранные». В английском слово потеряло знак над e.' },
      { word: 'regime', route: ['лат. regimen', 'фр. régime', 'англ. regime', 'мир: режим, Regime, régimen'], note: 'Политическое значение закрепилось в эпоху Французской революции.' },
      { word: 'restaurant', route: ['фр. restaurer «восстанавливать»', 'фр. restaurant', 'англ. restaurant', 'мир: ресторан, Restaurant, restaurante'], note: 'Первые парижские рестораны славились укрепляющими бульонами.' },
      { word: 'menu', route: ['лат. minutus «маленький»', 'фр. menu', 'англ. menu', 'мир: меню — и в кафе, и в смартфоне'], note: 'Из списка блюд — в список команд компьютерной программы.' },
      { word: 'garage', route: ['фр. garer «ставить в укрытие»', 'фр. garage', 'англ. garage', 'мир: гараж, Garage, garaje'], note: 'Слово эпохи первых автомобилей, начало XX века.' },
      { word: 'souvenir', route: ['лат. subvenire «приходить на ум»', 'фр. (se) souvenir «вспоминать»', 'англ. souvenir', 'мир: сувенир, Souvenir, suvenir'], note: 'По-французски — «воспоминание»; в английском — вещица на память.' },
    ],
  },

  conclusion: {
    title: 'Вместо заключения',
    paragraphs: [
      'Французские заимствования — не «чужие» слова в английском, а следы тысячелетнего диалога двух культур: завоеваний и войн, королевских дворов и парижских кафе.',
      'Знание их истории помогает и в чтении — ударение и «странные» буквы становятся предсказуемыми, — и в изучении французского: английский превращается в мост, по которому можно перейти на другой берег Ла-Манша.',
      'А ещё эта история показывает главное: языки, которые делятся словами, не теряют себя. Они становятся богаче — так же, как и люди, которые их изучают.',
    ],
  },

  about: {
    title: 'О проекте',
    aim: 'Выявить и систематизировать сходства и различия французской и английской лексики, чтобы показать механизмы межкультурного взаимодействия и создать наглядное пособие, которое помогает избегать ошибок в чтении и общении.',
    objectives: [
      'Изучить научную литературу по этимологии, лексикологии и лингвокультурологии; рассмотреть историю языковых контактов Франции и Великобритании.',
      'Отобрать лексические единицы из авторитетных источников (этимологические и исторические словари, корпусы) и сгруппировать их по тематическим блокам.',
      'Проанализировать пути миграции слов, их фонетическую и графическую адаптацию, а также случаи расхождения значений.',
      'Объяснить причины сохранения или трансформации значений через призму культурно-исторических реалий: влияние аристократии, колониальная история, дипломатический протокол.',
      'Разработать буклет и лонгрид «Атлас непереводимых образов: Франко-английское издание» с инфографикой и памяткой по «ложным друзьям переводчика».',
    ],
    methods: [
      {
        category: 'Теоретические',
        methods: 'Историко-этимологический анализ; сравнительный метод; лингвокультурологическая интерпретация',
        purpose: 'Изучить историю слов, выявить пути заимствования и культурные коннотации',
      },
      {
        category: 'Эмпирические',
        methods: 'Сплошная выборка; контекстуальный анализ; работа с корпусами и справочными базами (CNRTL, OED, BNC)',
        purpose: 'Собрать материал и проанализировать употребление слов в аутентичных текстах',
      },
      {
        category: 'Статистические',
        methods: 'Количественный подсчёт заимствований по тематическим группам; визуализация данных',
        purpose: 'Объективно проверить гипотезу и создать инфографику для Атласа',
      },
    ],
    author: 'Автор: Валерия Бурховецкая, 10 «А», МАОУ «Лицей информационных технологий»',
    supervisor: 'Руководитель: Толстиков Сергей Викторович',
  },

  sources: {
    title: 'Источники',
    items: [
      { author: 'Соколова А. А.', title: 'Французские заимствования в английском языке', url: 'https://cyberleninka.ru/article/n/frantsuzskie-zaimstvovaniya-v-angliyskom-yazyke' },
      { author: 'Абдрахманова Г. А.', title: 'Французские заимствования в английском языке // Актуальные вопросы классической и современной филологии; теории и практики перевода' },
      { author: 'Горина В. А.', title: 'Французские заимствования в английском (в контексте овладения французским языком как вторым иностранным)', url: 'https://cyberleninka.ru/article/n/frantsuzskie-zaimstvovaniya-v-angliyskom-yazyke-v-kontekste-ovladeniya-frantsuzskim-yazykom-kak-vtorym-inostrannym/viewer' },
      { author: 'Мезенцева М. В., Балуян С. Р.', title: 'Французские заимствования XX века в английском языке: семантический анализ', url: 'https://www.gramota.net/article/phil20161734/fulltext' },
      { author: 'Митчелл П. Дж., Ахтамбаев Р. П., Игнатов А. А.', title: 'Влияние военных контактов на французские заимствования в английский язык', url: 'https://vital.lib.tsu.ru/vital/access/services/Download/vtls:000480750/SOURCE1?view=true' },
      { author: 'Институт стратегии развития образования', title: 'Информационно-методическое письмо об особенностях преподавания учебного предмета «Иностранный язык» в 2025/2026 учебном году', url: 'https://edsoo.ru/2026/08/17/informaczionno-metodicheskoe-pismo-ob-osobennostyah-prepodavaniya-uchebnogo-predmeta-inostrannyj-yazyk-v-2025-2026-uchebnom-godu/' },
      { author: 'Finkenstaedt T., Wolff D.', title: 'Ordered Profusion: Studies in Dictionaries and the English Lexicon. Heidelberg: C. Winter, 1973' },
      { author: 'Cambridge University Press', title: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/ru/' },
      { author: 'Oxford University Press', title: 'Oxford English Dictionary', url: 'https://www.oed.com/' },
      { author: 'Harper D.', title: 'Online Etymology Dictionary', url: 'https://www.etymonline.com/' },
      { author: 'CNRS / ATILF', title: 'Centre National de Ressources Textuelles et Lexicales (CNRTL)', url: 'https://www.cnrtl.fr/' },
    ],
  },

  footer: {
    text: '© 2026 Валерия Бурховецкая · Атлас непереводимых образов: Франко-английское издание · МАОУ «Лицей информационных технологий»',
  },
};

export default content;
