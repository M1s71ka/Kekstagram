import {getRandomNumber} from './utils.js';

import {MAX_COUNT_PHOTOS, MAX_COUNT_COMMENTS, COUNT_LIKES, AVATAR_ID, DESCRIPTION, MESSAGES, NAMES} from './constants.js';

const createCommentData = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(AVATAR_ID.MIN_ID, AVATAR_ID.MAX_ID)}.svg`,
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
  description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
  likes: getRandomNumber(COUNT_LIKES.MIN_LIKES, COUNT_LIKES.MAX_LIKES),
  comments: createComment(),
});

const createDescription = () => {
  const depictions = Array.from({length:MAX_COUNT_PHOTOS}).map((_,index) => createPhotoData(index));
  return depictions;
};

export {createDescription};
