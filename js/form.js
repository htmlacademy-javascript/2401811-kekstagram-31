import { addEffectsListener, removeEffectsListener } from './effects.js';
import { addScaleListeners, removeScaleListeners } from './scale.js';
import { pristine } from './validate.js';
import { sendData } from './api.js';
import { cloneTemplate } from './util.js';

const form = document.querySelector('.img-upload__form');
const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');
const body = document.querySelector('body');
const imgUploadCancelElement = document.querySelector('.img-upload__cancel');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');

const resetOptions = () => {
  imgUploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', OutsideClickHandler);
  imgUploadCancelElement.removeEventListener('click', CloseButtonClickHandler);
  form.removeEventListener('submit', onSubmitForm);
  removeScaleListeners();
  removeEffectsListener();
  if (body.contains(document.querySelector('.success'))) {
    document.querySelector('.success').remove();
  }
  pristine.reset();
  form.reset();
};

const resetErrorOptions = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', documentKeydownModalHandler);
  document.removeEventListener('click', OutsideClickHandler);
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  const hashtags = form.querySelector('.text__hashtags');
  const description = form.querySelector('.text__description');
  if (evt.key === 'Escape' && document.activeElement !== hashtags && document.activeElement !== description) {
    evt.preventDefault();
    resetOptions();
  }
}

function documentKeydownModalHandler(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    resetErrorOptions();
  }
}

function OutsideClickHandler(evt) {
  if (evt.target === document.querySelector('.success')) {
    document.querySelector('.success').remove();
    resetOptions();
  } else if (evt.target === document.querySelector('.error')) {
    resetErrorOptions();
  }
}

function CloseButtonClickHandler(evt) {
  if (evt.target === document.querySelector('.success__button')) {
    document.querySelector('.success').remove();
    resetOptions();
  } else if (evt.target === document.querySelector('.error__button')) {
    resetErrorOptions();
  } else {
    resetOptions();
  }
}

const onSuccess = () => {
  body.classList.remove('modal-open');
  cloneTemplate('success');
  document.addEventListener('click', OutsideClickHandler);
  document.querySelector('.success__button').addEventListener('click', CloseButtonClickHandler);
};

const onError = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  cloneTemplate('error');
  document.addEventListener('keydown', documentKeydownModalHandler);
  document.addEventListener('click', OutsideClickHandler);
  document.querySelector('.error__button').addEventListener('click', CloseButtonClickHandler);
};

function onSubmitForm(evt) {
  evt.preventDefault();
  const isValid = pristine.validate();
  const requestBody = new FormData(evt.target);
  if (isValid) {
    const submitButtonElement = form.querySelector('.img-upload__submit');
    submitButtonElement.disabled = true;
    sendData(requestBody, onSuccess, onError)
      .finally(() => {
        submitButtonElement.disabled = false;
      });
  }
}

document.querySelector('.img-upload__input').addEventListener('change', (evt) => {
  imgUploadOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  imgUploadCancelElement.addEventListener('click', CloseButtonClickHandler);
  form.addEventListener('submit', onSubmitForm);
  addScaleListeners();
  addEffectsListener();

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
