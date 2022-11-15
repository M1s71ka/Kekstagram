import {popUpBigPicture} from './big-picture.js';

let depictions = [];

const photosContainer = document.querySelector('.pictures');

const generateThumbnailsMarkup = ({id, url, likes, comments}) => `<a href="#" class="picture" data-id="${id}">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const onThumbnailClick = (evt) => {
	evt.preventDefault();
	const target = evt.target;
	const picture = target.closest('.picture');
	const pictureID = picture.dataset.id;
	const depiction = depictions[pictureID - 1];
	popUpBigPicture(depiction);
};

const createThumbnailsMarkup = () => {
  photosContainer.insertAdjacentHTML('beforeend', depictions.map((photo) => generateThumbnailsMarkup(photo))
    .join(''));
};

const initThumbnails = (photosData) => {
	depictions = photosData.slice();
	createThumbnailsMarkup();
	const pictures = photosContainer.querySelectorAll('.picture');
	pictures.forEach((photo) => photo.addEventListener('click', onThumbnailClick))
};

export {initThumbnails};
