import {getRandomNumber} from './utils.js';

import {MAX_COUNT_PHOTOS, MAX_COUNT_COMMENTS, CountLike, AvatarId, DESCRIPTIONS, MESSAGES, NAMES} from './constants.js';

const createCommentData = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(AvatarId.MIN, AvatarId.MAX)}.svg`,
  message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
  name: NAMES[getRandomNumber(0, NAMES.length - 1)]
});

const createComment = () => {
  const comments = Array.from({length:MAX_COUNT_COMMENTS}).map((_, index) => createCommentData(index + 1));
  return comments;
};

const createPhotoData = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
  likes: getRandomNumber(CountLike.MIN, CountLike.MAX),
  comments: createComment(),
});

const createDescription = () => Array.from({length:MAX_COUNT_PHOTOS}).map((_,index) => createPhotoData(index));

export {createDescription};
