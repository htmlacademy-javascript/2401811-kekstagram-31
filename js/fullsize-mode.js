import { allCreatedPhotos } from './data';
import { renderComments } from './show-comments';

const body = document.querySelector('body');
const fullPicture = document.querySelector('.big-picture');
const fullPictureCloseButton = fullPicture.querySelector('.big-picture__cancel');
const fullPictureImage = fullPicture.querySelector('.big-picture__img img');
const fullPictureLikes = fullPicture.querySelector('.likes-count');
const fullPictureShownComments = fullPicture.querySelector('.social__comment-shown-count');
const fullPictureTotalComments = fullPicture.querySelector('.social__comment-total-count');
const fullPictureComments = fullPicture.querySelector('.social__comments');
const fullPictureDescription = fullPicture.querySelector('.social__caption');
const fullPictureCommentCount = fullPicture.querySelector('.social__comment-count');
const fullPictureCommentsLoader = fullPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    fullPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const CloseButtonClick = () => {
  fullPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  fullPictureCloseButton.removeEventListener('click', CloseButtonClick);
};

const openModal = (pictureId) => {
  const photo = allCreatedPhotos.find((postedPicture) => postedPicture.id === parseInt(pictureId.dataset.id, 10));

  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  fullPictureImage.src = photo.url;
  fullPictureLikes.textContent = photo.likes;
  fullPictureShownComments.textContent = photo.comments.length.toString();
  fullPictureTotalComments.textContent = photo.comments.length.toString();
  fullPictureComments.innerHTML = '';
  fullPictureDescription.textContent = photo.description;
  fullPictureCommentCount.classList.add('hidden');
  fullPictureCommentsLoader.classList.add('hidden');

  renderComments(photo);

  document.addEventListener('keydown', onDocumentKeydown);
  fullPictureCloseButton.addEventListener('click', CloseButtonClick);
};

export { openModal };
