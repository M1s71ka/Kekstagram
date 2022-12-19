const ERROR_MESSAGE_DURATION = 5000;
const FILTER_BUTTON_CLICK_DELAY = 500;

const getRandomNumber = (minimum, maximum) => {
  minimum = Math.ceil(Math.min(Math.abs(minimum), Math.abs(maximum)));
  maximum = Math.floor(Math.max(Math.abs(minimum), Math.abs(maximum)));
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

const isLengthCorrect = (comment, maxLength) => comment.length <= maxLength;

const isEscKeyDown = (evt) => evt.keyCode === 27;

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff4040';
  alertContainer.textContent = 'Не удалось загрузить фотографии с сервера';
  document.body.append(alertContainer);
  setTimeout(() => alertContainer.remove(), ERROR_MESSAGE_DURATION);
};

const debounce = (callback, timeoutDelay = FILTER_BUTTON_CLICK_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export { getRandomNumber, isLengthCorrect, isEscKeyDown, showAlert, debounce, shuffleArray };
