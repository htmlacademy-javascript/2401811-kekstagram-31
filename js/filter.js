import { getRandomArrayElement } from './util.js';

const NUMBER_OF_RANDOM_PHOTOS = 10;
const filterFormElement = document.querySelector('.img-filters__form');
const filterDefaultButton = filterFormElement.querySelector('#filter-default');
const filterRandomButton = filterFormElement.querySelector('#filter-random');
const filterDiscussedButton = filterFormElement.querySelector('#filter-discussed');

const changeOnActiveFilter = (active, others) => {
  others.forEach((other) => {
    if (other.classList.contains('img-filters__button--active')) {
      other.classList.remove('img-filters__button--active');
    }
  });
  active.classList.add('img-filters__button--active');
};

const clearPreviousRender = () => {
  const pictures = document.querySelector('.pictures');

  for (let picture in pictures) {
    picture = pictures.querySelector('.picture');
    if (pictures.contains(picture)) {
      picture.remove();
    }
  }
};

const filterDefault = (callback, data) => {
  changeOnActiveFilter(filterDefaultButton, [filterRandomButton, filterDiscussedButton]);
  callback(data);
};

const filterRandom = (callback, data) => {
  changeOnActiveFilter(filterRandomButton, [filterDefaultButton, filterDiscussedButton]);
  const randomPhotos = [];
  while (randomPhotos.length < NUMBER_OF_RANDOM_PHOTOS) {
    const randomArrayElement = getRandomArrayElement(data);
    if (!randomPhotos.includes(randomArrayElement)) {
      randomPhotos.push(randomArrayElement);
    }
  }
  callback(randomPhotos);
};

const filterDiscussed = (callback, data) => {
  changeOnActiveFilter(filterDiscussedButton, [filterDefaultButton, filterRandomButton]);
  const sortedArray = data.slice().sort((a, b) => b.comments.length - a.comments.length);
  callback(sortedArray);
};

const showFilters = (callback, data) => {
  filterFormElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target === filterDefaultButton) {
      filterDefault(callback, data);
    } else if (evt.target === filterRandomButton) {
      filterRandom(callback, data);
    } else if (evt.target === filterDiscussedButton) {
      filterDiscussed(callback, data);
    }
  });
};

export { showFilters, clearPreviousRender };
