import { showThumbnail, pictures } from './pictures.js';
import { openModal } from './fullsize-mode.js';
import './form.js';

showThumbnail();

pictures.addEventListener('click', (evt) => {
  const pictureId = evt.target.closest('.picture');
  if (pictureId) {
    openModal(pictureId);
  }
});
