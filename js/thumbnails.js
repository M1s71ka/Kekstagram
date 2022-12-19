import { popUpBigPicture } from './big-picture.js';
import { shuffleArray, debounce } from './utils.js';
import { MAX_COUNT_PHOTO } from './constants.js';
import { MAX_COUNT_RANDOM_PHOTOS } from './constants.js';

const photosContainer = document.querySelector('.pictures');
const filtersField = document.querySelector('.img-filters');
const filtersButtons = document.querySelectorAll('.img-filters__button');
const defaultPicturesButton = document.querySelector('#filter-default');
const randomPicturesButton = document.querySelector('#filter-random');
const discussedPicturesButton = document.querySelector('#filter-discussed');

let depictions = [];
let originThumbnails = [];
let isGotData = false;

const generateThumbnailsMarkup = ({ id, url, likes, comments }) => `<a href="#" class="picture" data-id="${id}">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const showFilters = () => {
  filtersField.classList.remove('img-filters--inactive');
  defaultPicturesButton.addEventListener('click', debounce(onDefaultButtonClick));
  randomPicturesButton.addEventListener('click', debounce(onRandomButtonClick));
  discussedPicturesButton.addEventListener('click', debounce(onDiscussedButtonClick));
};

const onThumbnailClick = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  const picture = target.closest('.picture');
  const pictureID = picture.dataset.id;
  const [depiction] = depictions.filter((item) => item.id === +pictureID);
  popUpBigPicture(depiction);
};

const createThumbnailsMarkup = () => {
  photosContainer.insertAdjacentHTML('beforeend', depictions.map((photo) => generateThumbnailsMarkup(photo))
    .join(''));
};

const initThumbnails = (photosData, currentCountPhoto = MAX_COUNT_PHOTO) => {
  depictions = photosData.slice(0, currentCountPhoto);
  createThumbnailsMarkup();
  if (!isGotData) {
    originThumbnails = photosData.slice();
    showFilters();
    isGotData = true;
  }
  const pictures = photosContainer.querySelectorAll('.picture');
  pictures.forEach((photo) => photo.addEventListener('click', onThumbnailClick));
};

const removeThumbnails = () => {
  for (const filterButton of filtersButtons) {
    if (filterButton.classList.contains('img-filters__button--active')) {
      filterButton.classList.remove('img-filters__button--active');
      const pictures = document.querySelectorAll('.picture');
      pictures.forEach((photo) => photo.remove());
      return;
    }
  }
};

function changePhotoFilter(evt) {
  let isChangedFilter = false;
  if (!evt.target.classList.contains('img-filters__button--active')) {
    removeThumbnails();
    evt.target.classList.add('img-filters__button--active');
    depictions = originThumbnails.slice();
    isChangedFilter = true;
  }
  return isChangedFilter;
}

function onDefaultButtonClick(evt) {
  if (changePhotoFilter(evt)) {
    initThumbnails(depictions);
  }
}

function onRandomButtonClick(evt) {
  if (changePhotoFilter(evt)) {
    initThumbnails(shuffleArray(depictions), MAX_COUNT_RANDOM_PHOTOS);
  }
}

function onDiscussedButtonClick(evt) {
  if (changePhotoFilter(evt)) {
    initThumbnails(depictions.sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length));
  }
}

export { initThumbnails };
