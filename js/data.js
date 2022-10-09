import {getRandomNumber} from './util';

const MAX_COUNT_PHOTOS = 25;
const MAX_COUNT_COMMENTS = 8;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const COUNT_AVATAR = 6;

const DESCRIPTION = [
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

const createCommentData = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(1, COUNT_AVATAR)}.svg`,
  message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
  name: NAMES[getRandomNumber(0, NAMES.length - 1)]
});

const createComment = () => {
  const comments = Array.from({length:MAX_COUNT_COMMENTS}).map((element, index) => createCommentData(index + 1));
  return comments;
};

const createPhotoData = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: createComment(),
});

const createDescription = () => {
  const depictions = Array.from({length:MAX_COUNT_PHOTOS}).map((element,index) => createPhotoData(index));
  return depictions;
};

export {createDescription};
