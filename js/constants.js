const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const COUNT_COMMENTS_BLOCK = 5;
const MAX_COUNT_PHOTO = 25;
const MAX_COUNT_RANDOM_PHOTOS = 10;

const ErrorMessage = {
  STARTS_WITH_HASH: 'Хэш-тег начинается с символа #',
  MAX_HASH_LENGTH: `Максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая решётку`,
  NO_REPEAT: 'Хэш-теги не должны повторяться',
  MAX_HASH_COUNT: `Максимальное количество хэш-тегов: ${MAX_HASHTAG_COUNT}.`,
  NO_PROHIBITED_SYMBOLS: 'В хэш-теги используются запрещённые символы (пробелы, спецсимволы, символы пунктуации, эмодзи и т.д.',
  HASH_SPACE: 'Хэш-теги разделяются пробелами',
  MAX_COMM_LENGTH: `Максимальная длина комментария - ${MAX_COMMENT_LENGTH} символов.`,
  EMPTY_HASHTAG: 'Хэш-тег не может быть пустым',
};

const Scale = {
  MIN: '25%',
  MAX: '100%',
  STEP: 25,
};

const Filter = {
  NONE: 'effect-none',
  CHROME: 'effect-chrome',
  SEPIA: 'effect-sepia',
  MARVIN: 'effect-marvin',
  PHOBOS: 'effect-phobos',
  HEAT: 'effect-heat',
};

const FilterEffect = {
  NONE: 'none',
  GRAYSCALE: 'grayscale',
  SEPIA: 'sepia',
  INVERT: 'invert',
  BLUR: 'blur',
  BRIGHTNESS: 'brightness',
};

const Url = {
  'GET': 'https://26.javascript.pages.academy/kekstagram/data',
  'POST': 'https://26.javascript.pages.academy/kekstagram',
};

export {
  MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, ErrorMessage,
  COUNT_COMMENTS_BLOCK, Scale, Filter, FilterEffect, Url, MAX_COUNT_PHOTO, MAX_COUNT_RANDOM_PHOTOS
};
