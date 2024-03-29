import { allCreatedPhotos } from './data';
import { renderComments } from './show-comments';

const body = document.querySelector('body');
const fullPicture = document.querySelector('.big-picture');
const fullPictureCloseButton = fullPicture.querySelector('.big-picture__cancel');
const fullPictureImage = fullPicture.querySelector('.big-picture__img img');
const fullPictureLikes = fullPicture.querySelector('.likes-count');
const fullPictureDescription = fullPicture.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    fullPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const CloseButtonClickHandler = () => {
  fullPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  fullPictureCloseButton.removeEventListener('click', CloseButtonClickHandler);
};

const openModal = (pictureId) => {
  const photo = allCreatedPhotos.find((postedPicture) => postedPicture.id === parseInt(pictureId.dataset.id, 10));

  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  fullPictureImage.src = photo.url;
  fullPictureLikes.textContent = photo.likes;
  fullPictureDescription.textContent = photo.description;

  renderComments(photo);

  document.addEventListener('keydown', onDocumentKeydown);
  fullPictureCloseButton.addEventListener('click', CloseButtonClickHandler);
};

export { openModal };
