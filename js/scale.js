const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imageUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imageUploadScale.querySelector('.scale__control--value');

const DIVIDER = 100;

const SCALE = {
  'min': 25,
  'max': 100,
  'step': 25
};

const onScaleControlSmaller = () => {
  if (parseInt(scaleControlValue.value, 10) > SCALE.min) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - SCALE.step}%`;
    imgUploadPreviewImg.style.transform = `scale(${parseInt(scaleControlValue.value, 10) / DIVIDER})`;
  }
};

const onScaleControlBigger = () => {
  if (parseInt(scaleControlValue.value, 10) < SCALE.max) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + SCALE.step}%`;
    imgUploadPreviewImg.style.transform = `scale(${parseInt(scaleControlValue.value, 10) / DIVIDER})`;
  }
};

const addScaleListeners = () => {
  scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
  scaleControlBigger.addEventListener('click', onScaleControlBigger);
};

const removeScaleListeners = () => {
  scaleControlSmaller.removeEventListener('click', onScaleControlSmaller);
  scaleControlBigger.removeEventListener('click', onScaleControlBigger);
};

export { addScaleListeners, removeScaleListeners };
