import {isEscKeyDown} from './utils.js';

const sucessMessage = `<section class="success pop-message">
<div class="success__inner message-part">
  <h2 class="success__title message-part">Изображение успешно загружено</h2>
  <button type="button" class="success__button">Круто!</button>
</div>
</section>`;

const errorMessage = `<section class="error pop-message">
<div class="error__inner message-part">
  <h2 class="error__title message-part">Ошибка загрузки файла</h2>
  <button type="button" class="error__button">Загрузить другой файл</button>
</div>
</section>`;

const removeSuccessMessage = () => {
  const message = document.querySelector('.pop-message');
  message.remove();
};

const removeErrorMessage = () => {
  const message = document.querySelector('.pop-message');
  if (message) {
    message.remove();
  }
  document.body.classList.add('modal-open');
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
};

const onErrorEscKeydown = () => {
  if (isEscKeyDown) {
    document.removeEventListener('keydown', onErrorEscKeydown);
    removeErrorMessage();
  }
};

const onSuccessEscKeydown = () => {
  if (isEscKeyDown) {
    document.removeEventListener('keydown', onSuccessEscKeydown);
    removeSuccessMessage();
  }
};

function onWindowSuccessClick (evt) {
  const target = evt.target;
  if (target.closest('.pop-message') && !target.classList.contains('message-part')) {
    document.removeEventListener('click', onWindowSuccessClick);
    removeSuccessMessage();
  }
}

function onWindowErrorClick (evt) {
  const target = evt.target;
  if (target.closest('.pop-message') && !target.classList.contains('message-part')) {
    document.removeEventListener('click', onWindowErrorClick);
    removeErrorMessage();
  }
}

export const getMessage = (isSuccess) => {
  document.body.insertAdjacentHTML('beforeend', isSuccess ? sucessMessage : errorMessage);

  if (isSuccess) {
    document.addEventListener('click', onWindowSuccessClick);
    document.addEventListener('keydown', onSuccessEscKeydown);
  } else {
    document.addEventListener('click', onWindowErrorClick);
    document.addEventListener('keydown', onErrorEscKeydown);
  }
};
