const MAX_COUNT_PHOTOS = 25;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const COUNT_COMMENTS_BLOCK = 5;

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

const CountComments = {
  MIN: 0,
  MAX: 25,
};

const CountLike = {
  MIN: 15,
  MAX: 200,
};

const AvatarId = {
  MIN: 1,
  MAX: 6,
};

const DESCRIPTIONS = [
  'Крутая фотка',
  'Если бы мои мысли можно было отразить на фотке, то это было бы так',
  'Эмоции зашкаливают'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Джон', 'Стив', 'Илон', 'Кассандра', 'София', 'Эбигейл'];

export {MAX_COUNT_PHOTOS, CountComments, CountLike, AvatarId, DESCRIPTIONS, MESSAGES, NAMES, MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT,
  MAX_HASHTAG_LENGTH, ErrorMessage, COUNT_COMMENTS_BLOCK};
