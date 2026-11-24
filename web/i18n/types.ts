// Content contract shared by all tracks.
// content-author fills ru.ts / en.ts; ui-builder and infographics only READ this shape.
// Changing this file = changing the contract: do it on main, then rebase worktrees.

export type Locale = 'ru' | 'en';

/** A borrowed word shown as a card. */
export interface WordCard {
  /** Word as used in English, e.g. "ballet" */
  en: string;
  /** French source form, e.g. "ballet" */
  fr: string;
  /** IPA for English pronunciation, without slashes, e.g. "ˈbæleɪ" */
  ipa: string;
  /** Short meaning in the page language */
  meaning: string;
  /** One-sentence note: era / how it changed / fun fact (page language) */
  note: string;
  /** Approximate year or century of entry into English, e.g. "XIII" or "1667" */
  since?: string;
}

export interface ThemeBlock {
  id: 'cuisine' | 'fashion-art' | 'politics-law';
  emoji: string;
  title: string;
  lead: string;
  words: WordCard[];
  /** Short takeaway paragraph */
  takeaway: string;
}

export interface FalseFriend {
  fr: string;
  /** What the French word really means (in page language + English gloss) */
  frMeaning: string;
  en: string;
  /** What the English look-alike means */
  enMeaning: string;
  /** Correct translations, e.g. "to demand → exiger" */
  correct: string;
}

export interface TimelineEvent {
  /** Display label, e.g. "1066" or "1337–1453" */
  year: string;
  title: string;
  text: string;
  /** Example words that came in during this wave */
  examples: string[];
  /** Relative intensity of borrowing 1..5 (drives viz size) */
  intensity: 1 | 2 | 3 | 4 | 5;
}

export interface OriginShare {
  /** e.g. "Французский" / "French" */
  label: string;
  /** percent, all items should sum to ~100 */
  value: number;
  /** semantic key so viz can colour consistently */
  key: 'french' | 'latin' | 'germanic' | 'greek' | 'other';
}

export interface ReadingRule {
  /** Pattern, e.g. "-age", "ch-", "final -t" */
  pattern: string;
  /** How it is read, e.g. "/ɑːʒ/" */
  sound: string;
  examples: string[];
  hint: string;
}

export interface AdaptationLevel {
  id: 'meaning' | 'pronunciation' | 'spelling' | 'word-formation';
  title: string;
  text: string;
  /** e.g. { from: "chef (FR: head, chief)", to: "chef (EN: professional cook)" } */
  example: { from: string; to: string };
}

export interface Source {
  author: string;
  title: string;
  url?: string;
}

export interface SiteContent {
  locale: Locale;
  meta: { title: string; description: string };
  nav: { id: string; label: string }[];
  ui: {
    langSwitch: string; // label of the OTHER language, e.g. "EN" on ru page
    readingTime: string;
    scrollHint: string;
    backToTop: string;
    flipHint: string;
  };

  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    author: string;
    supervisor: string;
    school: string;
  };

  /** "Two shores of the Channel" — why this matters, the author's personal problem */
  intro: { title: string; paragraphs: string[]; pullQuote: string };

  /** Timeline of borrowing waves */
  timeline: { title: string; lead: string; events: TimelineEvent[] };

  /** "Family tree of words" — origin shares chart */
  origins: {
    title: string;
    lead: string;
    shares: OriginShare[];
    sourceNote: string;
    /** Famous doublets: animal (Germanic) vs meat (French) */
    doublets: { title: string; pairs: { germanic: string; french: string; gloss: string }[] };
  };

  /** How words adapt + types of borrowing */
  adaptation: {
    title: string;
    lead: string;
    levels: AdaptationLevel[];
    types: { title: string; items: { name: string; text: string; examples: string[] }[] };
  };

  themes: { title: string; lead: string; blocks: ThemeBlock[] };

  falseFriends: { title: string; lead: string; items: FalseFriend[] };

  /** Practical: how to read French borrowings in English */
  reading: { title: string; lead: string; rules: ReadingRule[] };

  /** Internationalisms: FR → EN → world */
  travelling: {
    title: string;
    lead: string;
    words: { word: string; route: string[]; note: string }[];
  };

  conclusion: { title: string; paragraphs: string[] };

  about: {
    title: string;
    aim: string;
    objectives: string[];
    methods: { category: string; methods: string; purpose: string }[];
    author: string;
    supervisor: string;
  };

  sources: { title: string; items: Source[] };

  footer: { text: string };
}
