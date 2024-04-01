import './effects.js';
import { addScaleListeners, removeScaleListeners } from './scale.js';
import { validateForm } from './validate.js';

const form = document.querySelector('.img-upload__form');
const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');
const body = document.querySelector('body');

const resetOptions = (callback) => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', callback);
  removeScaleListeners();
  form.reset();
};

const onDocumentKeydown = (evt) => {
  const hashtags = document.querySelector('.text__hashtags');
  const description = form.querySelector('.text__description');
  if (evt.key === 'Escape' && document.activeElement !== hashtags && document.activeElement !== description) {
    evt.preventDefault();
    resetOptions(onDocumentKeydown);
  }
};

const closeButtonHandler = () => {
  resetOptions(closeButtonHandler);
};

document.querySelector('.img-upload__input').addEventListener('change', (evt) => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.img-upload__cancel').addEventListener('click', closeButtonHandler);
  addScaleListeners();

  const picture = URL.createObjectURL(evt.target.files[0]);
  imgUploadPreviewImg.src = picture;
  const childs = document.querySelector('.effects__list').children;
  for (const child of childs) {
    child.querySelector('.effects__preview').style.backgroundImage = `url("${picture}")`;
  }
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  imgUploadPreviewImg.style.filter = '';
  imgUploadPreviewImg.style.transform = '';
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateForm();
});
