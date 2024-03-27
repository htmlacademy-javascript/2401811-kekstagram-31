import { showThumbnail, pictures } from './pictures';
import { openModal } from './fullsize-mode';

showThumbnail();

pictures.addEventListener('click', (evt) => {
  const pictureId = evt.target.closest('.picture');
  if (pictureId) {
    openModal(pictureId);
  }
});
