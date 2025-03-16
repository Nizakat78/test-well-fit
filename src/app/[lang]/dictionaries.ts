

const dictionaries = {
  'en-US': () => import('./dictionaries/en.json').then((module) => module.default),
  'de-ES': () => import('./dictionaries/de.json').then((module) => module.default), // German dictionary
  'de': () => import('./dictionaries/de.json').then((module) => module.default), // Alias for German dictionary
};

export const getDictionary = async (locale: 'en-US' | 'de-ES' | 'de') => {
  const loadDictionary = dictionaries[locale];

  if (!loadDictionary) {
    console.error(`No dictionary found for locale: ${locale}`);
    throw new Error(`No dictionary found for locale: ${locale}`);
  }

  try {
    return await loadDictionary();
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    throw new Error(`Failed to load dictionary for locale: ${locale}`);
  }
};
