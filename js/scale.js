const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imageUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imageUploadScale.querySelector('.scale__control--value');

const DIVIDER = 100;

const SCALE = {
  Min: 25,
  Max: 100,
  Step: 25
};

const onScaleControlSmaller = () => {
  if (parseInt(scaleControlValue.value, 10) > SCALE.Min) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - SCALE.Step}%`;
    imgUploadPreviewImg.style.transform = `scale(${parseInt(scaleControlValue.value, 10) / DIVIDER})`;
  }
};

const onScaleControlBigger = () => {
  if (parseInt(scaleControlValue.value, 10) < SCALE.Max) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + SCALE.Step}%`;
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
