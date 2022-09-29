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
const USERS_ID = [];

const createCommentData = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(1, COUNT_AVATAR)}.svg`,
  message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
  name: NAMES[getRandomNumber(0, NAMES.length - 1)]
});

const createComment = () => {
  const commentaries = [];
  for (let i = 1; i <= USERS_COUNT; i++) {
    USERS_ID.push(i);
  }
  for (let i = 0; i < COMMENTS.length; i++){
    const randomID = USERS_ID[getRandomNumber(0, USERS_ID.length - 1)];
    commentaries[i] = createCommentData(getRandomNumber(1, USERS_COUNT));
    USERS_ID[randomID, USERS_ID.length - 1] = USERS_ID[USERS_ID.length - 1, randomID];
    USERS_ID.pop();
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
