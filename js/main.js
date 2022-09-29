// Функция взята с сайта https://up.htmlacademy.ru/univer-js1/1/tasks/7 и доработана.
const getRandomNumber = (minimum, maximum) => {
  minimum = Math.ceil(Math.min(Math.abs(minimum), Math.abs(maximum)));
  maximum = Math.floor(Math.max(Math.abs(minimum), Math.abs(maximum)));
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

const isLengthCorrect = (comment, maxLength) => comment.length <= maxLength;

const PHOTOS = [undefined, undefined, undefined, undefined, undefined,
  undefined, undefined, undefined, undefined, undefined,
  undefined, undefined, undefined, undefined, undefined,
  undefined,undefined, undefined, undefined, undefined,
  undefined, undefined, undefined, undefined, undefined];

const COMMENTS = [undefined, undefined];

const DESCRIPTION = [
  'Крутая фотка',
  'Если бы мои мысли можно было отразить на фотке, то это было бы так',
  'Эмоции зашкаливают'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const COUNT_AVATAR = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Джон', 'Стив', 'Илон', 'Кассандра', 'София', 'Эбигейл'];

/* Предположим, что на нашем сайте зарегистрировано 1000 пользователей для того,
 чтобы каждому из них создать уникальный индентификатор
*/
const USERS_COUNT = 1000;

const createCommentData = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(1, COUNT_AVATAR)}.svg`,
  message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
  name: NAMES[getRandomNumber(0, NAMES.length - 1)]
});

const createComment = () => {
  const commentaries = [];
  for (let i = 0; i < COMMENTS.length; i++){
    if (i % 2 === 0) {
      commentaries[i] = createCommentData(getRandomNumber(1, USERS_COUNT / 2));
      continue;
    }
    commentaries[i] = createCommentData(getRandomNumber(Math.ceil(USERS_COUNT / 2 + 1), USERS_COUNT));
  }
  return commentaries;
};

const createPhotoData = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: createComment(),
});

const createDescription = (photos) => {
  const depictions = photos.map((element,index) => createPhotoData(index));
  return depictions;
};

createDescription(PHOTOS);

isLengthCorrect('Классная фотка', 20);
