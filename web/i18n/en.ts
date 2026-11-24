// SEED placeholder — content-author replaces this with the full en text.
import type { SiteContent } from './types';

const content: SiteContent = {
  locale: 'en',
  meta: { title: 'Атлас непереводимых образов', description: 'TODO' },
  nav: [
    { id: 'intro', label: 'Intro' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'origins', label: 'Origins' },
    { id: 'adaptation', label: 'Adaptation' },
    { id: 'themes', label: 'Themes' },
    { id: 'false-friends', label: 'False friends' },
    { id: 'reading', label: 'Reading' },
    { id: 'travelling', label: 'Travelling words' },
    { id: 'about', label: 'About' },
  ],
  ui: { langSwitch: 'RU', readingTime: '12 min', scrollHint: 'Scroll', backToTop: 'Top', flipHint: 'Tap to flip' },
  hero: {
    kicker: 'Franco-English Edition',
    title: 'The Atlas of Untranslatable Images',
    subtitle: 'TODO subtitle',
    author: 'Valeria Burkhovetskaya',
    supervisor: 'Sergey Tolstikov',
    school: 'Lyceum of Information Technologies',
  },
  intro: { title: 'Two Shores of the Channel', paragraphs: ['TODO paragraph one.', 'TODO paragraph two.'], pullQuote: 'TODO quote' },
  timeline: {
    title: 'Waves of borrowing',
    lead: 'TODO',
    events: [
      { year: '1066', title: 'Norman Conquest', text: 'TODO', examples: ['court', 'judge', 'beef'], intensity: 5 },
      { year: '1337–1453', title: "Hundred Years' War", text: 'TODO', examples: ['army', 'enemy'], intensity: 3 },
      { year: 'XVIII', title: 'Enlightenment', text: 'TODO', examples: ['etiquette', 'salon'], intensity: 2 },
      { year: 'Today', title: 'Today', text: 'TODO', examples: ['café', 'chef'], intensity: 1 },
    ],
  },
  origins: {
    title: 'Family tree of words',
    lead: 'TODO',
    shares: [
      { label: 'French', value: 29, key: 'french' },
      { label: 'Latin', value: 29, key: 'latin' },
      { label: 'Germanic', value: 26, key: 'germanic' },
      { label: 'Greek', value: 6, key: 'greek' },
      { label: 'Other', value: 10, key: 'other' },
    ],
    sourceNote: 'Finkenstaedt & Wolff, 1973',
    doublets: { title: 'On the hoof / on the plate', pairs: [{ germanic: 'cow', french: 'beef', gloss: 'boeuf' }, { germanic: 'pig', french: 'pork', gloss: 'porc' }] },
  },
  adaptation: {
    title: 'How words adapt',
    lead: 'TODO',
    levels: [
      { id: 'meaning', title: 'Meaning', text: 'TODO', example: { from: 'chef — head', to: 'chef — cook' } },
      { id: 'pronunciation', title: 'Pronunciation', text: 'TODO', example: { from: 'garage /gaʁaʒ/', to: 'garage /ˈɡærɑːʒ/' } },
      { id: 'spelling', title: 'Spelling', text: 'TODO', example: { from: 'café', to: 'cafe' } },
      { id: 'word-formation', title: 'Word formation', text: 'TODO', example: { from: 'beauté', to: 'beautiful' } },
    ],
    types: { title: 'Types of borrowing', items: [{ name: 'Loanwords', text: 'TODO', examples: ['ballet'] }, { name: 'Calques', text: 'TODO', examples: ['marriage of convenience'] }, { name: 'Semantic borrowings', text: 'TODO', examples: ['dream'] }] },
  },
  themes: {
    title: 'Thematic blocks',
    lead: 'TODO',
    blocks: [
      { id: 'cuisine', emoji: '🥐', title: 'Cookery', lead: 'TODO', takeaway: 'TODO', words: [{ en: 'cuisine', fr: 'cuisine', ipa: 'kwɪˈziːn', meaning: 'style of cooking', note: 'TODO', since: 'XVIII' }] },
      { id: 'fashion-art', emoji: '🎨', title: 'Fashion & Art', lead: 'TODO', takeaway: 'TODO', words: [{ en: 'ballet', fr: 'ballet', ipa: 'ˈbæleɪ', meaning: 'dance', note: 'TODO', since: '1667' }] },
      { id: 'politics-law', emoji: '⚖️', title: 'Politics & Law', lead: 'TODO', takeaway: 'TODO', words: [{ en: 'regime', fr: 'régime', ipa: 'reɪˈʒiːm', meaning: 'government', note: 'TODO', since: '1792' }] },
    ],
  },
  falseFriends: {
    title: 'Beware of false friends!',
    lead: 'TODO',
    items: [
      { fr: 'demander', frMeaning: 'to ask', en: 'to demand', enMeaning: 'to require firmly', correct: 'to demand → exiger' },
      { fr: 'librairie', frMeaning: 'bookshop', en: 'library', enMeaning: 'place to borrow books', correct: 'library → bibliothèque' },
    ],
  },
  reading: {
    title: 'How to read them',
    lead: 'TODO',
    rules: [{ pattern: '-age', sound: '/ɑːʒ/', examples: ['garage', 'massage'], hint: 'TODO' }],
  },
  travelling: {
    title: 'Travelling words',
    lead: 'TODO',
    words: [{ word: 'ballet', route: ['Italy', 'France', 'England', 'World'], note: 'TODO' }],
  },
  conclusion: { title: 'Conclusion', paragraphs: ['TODO'] },
  about: {
    title: 'About the project',
    aim: 'TODO',
    objectives: ['TODO'],
    methods: [{ category: 'Theoretical', methods: 'TODO', purpose: 'TODO' }],
    author: 'Valeria Burkhovetskaya, 10A',
    supervisor: 'Sergey Tolstikov',
  },
  sources: { title: 'Sources', items: [{ author: 'Cambridge Dictionary', title: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/' }] },
  footer: { text: '© 2026' },
};

export default content;
