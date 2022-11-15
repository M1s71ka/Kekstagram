const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureContainer.querySelector('.likes-count');
const bigPictureCountComments = bigPictureContainer.querySelector('.comments-count');
const bigPictureComments = bigPictureContainer.querySelector('.social__comments');
const bigPictureDescription = bigPictureContainer.querySelector('.social__caption');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');

const generateCommentsMarkup = ({avatar, name, message}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
  </li>`;

const initComments = (commentaries) => {
  bigPictureComments.innerHTML='';
  bigPictureComments.insertAdjacentHTML('afterbegin', commentaries.map((comment) => generateCommentsMarkup(comment)).join(''));
};

const onCloseButton = () => {
  document.body.classList.remove('modal-open');
  bigPictureContainer.classList.add('hidden');
  closeButton.removeEventListener('click', onCloseButton);
  window.removeEventListener('click', onEscKeyDown);
};

function onEscKeyDown(evt){
  if (evt.keyCode === 27) {
    document.body.classList.remove('modal-open');
    bigPictureContainer.classList.add('hidden');
    closeButton.removeEventListener('click', onCloseButton);
    window.removeEventListener('keydown', onEscKeyDown);
  }
}

const popUpBigPicture = (picture) => {
  document.body.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
  bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');
  bigPictureImage.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureCountComments.textContent = picture.comments.length;
  const comments = picture.comments.slice();
  initComments(comments);
  bigPictureDescription.textContent = picture.description;
  closeButton.addEventListener('click', onCloseButton);
  window.addEventListener('keydown', onEscKeyDown);
};

export {popUpBigPicture};
