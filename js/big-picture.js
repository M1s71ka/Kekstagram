import {isEscKeyDown} from './utils.js';
import {COUNT_COMMENTS_BLOCK} from './constants.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureContainer.querySelector('.likes-count');
const bigPictureCountComments = bigPictureContainer.querySelector('.comments-count');
const bigPictureComments = bigPictureContainer.querySelector('.social__comments');
const bigPictureDescription = bigPictureContainer.querySelector('.social__caption');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');
const countComments = bigPictureContainer.querySelector('.social__comment-count');
const commentsButton = bigPictureContainer.querySelector('.comments-loader');

const generateCommentsMarkup = ({avatar, name, message}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
  </li>`;

const generateCountMarkup = (count) => `${count} из <span class="comments-count">${bigPictureCountComments.textContent}</span>
комментариев`;

let comments = [];
let currentCountComms = 0;

function onCommentsButtonClick() {
  if (bigPictureCountComments.textContent - currentCountComms <= COUNT_COMMENTS_BLOCK) {
    bigPictureComments.insertAdjacentHTML('beforeend', comments.slice(currentCountComms).map((comment) =>
      generateCommentsMarkup(comment)).join(''));
    countComments.innerHTML = generateCountMarkup(bigPictureCountComments.textContent);
    commentsButton.classList.add('hidden');
  } else {
    bigPictureComments.insertAdjacentHTML('beforeend', comments.slice(currentCountComms, currentCountComms + COUNT_COMMENTS_BLOCK).map((comment) =>
      generateCommentsMarkup(comment)).join(''));
    currentCountComms += COUNT_COMMENTS_BLOCK;
    countComments.innerHTML = generateCountMarkup(currentCountComms);
  }
}

const initComments = (commentaries) => {
  bigPictureComments.innerHTML='';
  if (parseInt(bigPictureCountComments.textContent, 10) <= parseInt(countComments.textContent[0], 10)) {
    countComments.innerHTML = generateCountMarkup(bigPictureCountComments.textContent);
    commentsButton.classList.add('hidden');
  } else {
    countComments.innerHTML = generateCountMarkup(COUNT_COMMENTS_BLOCK);
    commentsButton.classList.remove('hidden');
  }
  const slicedComments = commentaries.slice(0, COUNT_COMMENTS_BLOCK);
  bigPictureComments.insertAdjacentHTML('afterbegin', slicedComments.map((comment) => generateCommentsMarkup(comment)).join(''));
};

const closePopUp = () => {
  document.body.classList.remove('modal-open');
  bigPictureContainer.classList.add('hidden');
  countComments.innerHTML = '5 из <span class="comments-count">125</span> комментариев';
  closeButton.removeEventListener('click', onCloseButton);
  window.removeEventListener('keydown', onEscKeyDown);
};

function onCloseButton(evt) {
  evt.preventDefault();
  closePopUp();
}

function onEscKeyDown(evt) {
  if (isEscKeyDown(evt)) {
    closePopUp();
  }
}

const popUpBigPicture = (picture) => {
  document.body.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
  bigPictureImage.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureCountComments.textContent = picture.comments.length;
  comments = picture.comments.slice();
  initComments(comments);
  currentCountComms = COUNT_COMMENTS_BLOCK;
  commentsButton.addEventListener('click', onCommentsButtonClick);
  bigPictureDescription.textContent = picture.description;
  closeButton.addEventListener('click', onCloseButton);
  window.addEventListener('keydown', onEscKeyDown);
};

export {popUpBigPicture};
