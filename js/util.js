// Функция взята с сайта https://up.htmlacademy.ru/univer-js1/1/tasks/7 и доработана.
const getRandomNumber = (minimum, maximum) => {
  minimum = Math.ceil(Math.min(Math.abs(minimum), Math.abs(maximum)));
  maximum = Math.floor(Math.max(Math.abs(minimum), Math.abs(maximum)));
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

const isLengthCorrect = (comment, maxLength) => comment.length <= maxLength;

export {getRandomNumber, isLengthCorrect};
