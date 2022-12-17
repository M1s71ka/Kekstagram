const ERROR_MESSAGE_DURATION = 5000;

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

export {getRandomNumber, isLengthCorrect, isEscKeyDown, showAlert};
