const generateThumbnailsMarkup = ({url, likes, comments}) => `<a href="#" class="picture">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const insertThumbnailsMarkup = (photosData) => {
  photosContainer.insertAdjacentHTML('beforeend', photosData.map((photo) => generateThumbnailsMarkup(photo))
    .join(''));
};

const photosContainer = document.querySelector('.pictures');

export {insertThumbnailsMarkup};
