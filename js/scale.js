const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imageUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imageUploadScale.querySelector('.scale__control--value');

const DIVIDER = 100;
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const onScaleControlSmaller = () => {
  if (parseInt(scaleControlValue.value, 10) > SCALE_MIN) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - SCALE_STEP}%`;
    imgUploadPreviewImg.style.transform = `scale(${parseInt(scaleControlValue.value, 10) / DIVIDER})`;
  }
};

const onScaleControlBigger = () => {
  if (parseInt(scaleControlValue.value, 10) < SCALE_MAX) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + SCALE_STEP}%`;
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
