import { renderComments } from './show-comments.js';

const body = document.querySelector('body');
const fullPicture = document.querySelector('.big-picture');
const fullPictureCloseButton = fullPicture.querySelector('.big-picture__cancel');
const fullPictureImage = fullPicture.querySelector('.big-picture__img img');
const fullPictureLikes = fullPicture.querySelector('.likes-count');
const fullPictureDescription = fullPicture.querySelector('.social__caption');

const resetOptions = () => {
  fullPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeModalHandler);
  fullPictureCloseButton.removeEventListener('click', closeModalClickHandler);
};

function closeModalHandler(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
  }
  resetOptions();
}

function closeModalClickHandler() {
  resetOptions();
}

const openModal = (images, imageId) => {
  const currentPhoto = images.find((image) => image.id === parseInt(imageId.dataset.id, 10));

  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  fullPictureImage.src = currentPhoto.url;
  fullPictureLikes.textContent = currentPhoto.likes;
  fullPictureDescription.textContent = currentPhoto.description;

  renderComments(currentPhoto);

  document.addEventListener('keydown', closeModalHandler);
  fullPictureCloseButton.addEventListener('click', closeModalClickHandler);
};

export { openModal };
