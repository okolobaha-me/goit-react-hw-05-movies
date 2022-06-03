const genres = {
  28: {
    en: 'Action',
    uk: 'Бойовик',
  },
  12: {
    en: 'Adventure',
    uk: 'Пригоди',
  },
  16: {
    en: 'Animation',
    uk: 'Анімація',
  },
  35: {
    en: 'Comedy',
    uk: 'Комедія',
  },
  80: {
    en: 'Crime',
    uk: 'Кримінальний',
  },
  99: {
    en: 'Documentary',
    uk: 'Документальний',
  },
  18: {
    en: 'Drama',
    uk: 'Драма',
  },
  10751: {
    en: 'Family',
    uk: 'Сімейний',
  },
  14: {
    en: 'Fantasy',
    uk: 'Фентазі',
  },
  36: {
    en: 'History',
    uk: 'Історичний',
  },
  27: {
    en: 'Horror',
    uk: 'Жахи',
  },
  10402: {
    en: 'Music',
    uk: 'Мюзикл',
  },
  9648: {
    en: 'Mystery',
    uk: 'Містичний',
  },
  10749: {
    en: 'Romance',
    uk: 'Мелодрама',
  },
  878: {
    en: 'Science Fiction',
    uk: 'Наукова фантастика',
  },
  10770: {
    en: 'TV Movie',
    uk: 'ТВ фільм',
  },
  53: {
    en: 'Thriller',
    uk: 'Трилер',
  },
  10752: {
    en: 'War',
    uk: 'Воєнний',
  },
  37: {
    en: 'Western',
    uk: 'Вестерн',
  },
};

export const getGenres = list => {
  if (!list.length) return '';
  const language = window.location.hash.substring(1);
  const g = [];

  for (const re of list) {
    if (g.length === 2) {
      g.push('...');
      break;
    }

    if (typeof re === 'object') {
      g.push(re.name);
      continue;
    }

    if (!genres[re]) continue;

    g.push(genres[re][language]);
  }

  return g.map(g => `${g}`).join(', ');
};
