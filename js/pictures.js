import { clearPreviousRender } from './filter.js';

const pictureTemplate = document.querySelector('#picture').content;
const picture = pictureTemplate.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const showThumbnail = (images) => {
  const picturesFragment = document.createDocumentFragment();
  images.forEach((image) => {
    const newPicture = picture.cloneNode(true);
    const newPictureImage = newPicture.querySelector('.picture__img');
    const newPictureComments = newPicture.querySelector('.picture__comments');
    const newPictureLikes = newPicture.querySelector('.picture__likes');

    newPicture.dataset.id = image.id;
    newPictureImage.src = image.url;
    newPictureImage.alt = image.description;
    newPictureComments.textContent = image.comments.length;
    newPictureLikes.textContent = image.likes;

    picturesFragment.append(newPicture);
  });
  clearPreviousRender();
  pictures.append(picturesFragment);
};

export { showThumbnail, pictures };
