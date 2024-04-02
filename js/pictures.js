import { allCreatedPhotos } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const picture = pictureTemplate.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const showThumbnail = () => {
  const picturesFragment = document.createDocumentFragment();
  allCreatedPhotos.forEach((postedPicture) => {
    const newPicture = picture.cloneNode(true);
    const newPictureImage = newPicture.querySelector('.picture__img');
    const newPictureComments = newPicture.querySelector('.picture__comments');
    const newPictureLikes = newPicture.querySelector('.picture__likes');

    newPicture.dataset.id = postedPicture.id;
    newPictureImage.src = postedPicture.url;
    newPictureImage.alt = postedPicture.description;
    newPictureComments.textContent = postedPicture.comments.length;
    newPictureLikes.textContent = postedPicture.likes;

    picturesFragment.append(newPicture);
  });

  pictures.append(picturesFragment);
};

export {showThumbnail, pictures};
