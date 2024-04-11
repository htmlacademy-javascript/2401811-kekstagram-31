import { showThumbnail, pictures } from './pictures.js';
import { openModal } from './fullsize-mode.js';
import './form.js';
import { getData } from './api.js';
import { showFilters } from './filter.js';
import { debounce } from './util.js';

const SHOW_FILTERS_TIMEOUT_DELAY = 500;

getData().then((data) => {
  if (data) {
    showThumbnail(data);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    showFilters(debounce(showThumbnail, SHOW_FILTERS_TIMEOUT_DELAY), data);
    pictures.addEventListener('click', (evt) => {
      const pictureId = evt.target.closest('.picture');
      if (pictureId) {
        openModal(data, pictureId);
      }
    });
  }
});
