const FILTERS = {
  'chrome': {
    'min': 0,
    'max': 1,
    'step': 0.1
  },
  'sepia': {
    'min': 0,
    'max': 1,
    'step': 0.1
  },
  'marvin': {
    'min': 0,
    'max': 100,
    'step': 1
  },
  'phobos': {
    'min': 0,
    'max': 3,
    'step': 0.1
  },
  'heat': {
    'min': 1,
    'max': 3,
    'step': 0.1
  },
  'none': {
    'min': 0,
    'max': 0,
    'step': 0
  }
};

const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
let currentFilter = 'none';
const effectsList = document.querySelector('.effects__list');

const changeFilter = (effect, levelOfIntensity) => {
  switch (effect) {
    case 'chrome':
      imgUploadPreviewImg.style.filter = `grayscale(${levelOfIntensity})`;
      break;
    case 'sepia':
      imgUploadPreviewImg.style.filter = `sepia(${levelOfIntensity})`;
      break;
    case 'marvin':
      imgUploadPreviewImg.style.filter = `invert(${levelOfIntensity}%)`;
      break;
    case 'phobos':
      imgUploadPreviewImg.style.filter = `blur(${levelOfIntensity}px)`;
      break;
    case 'heat':
      imgUploadPreviewImg.style.filter = `brightness(${levelOfIntensity})`;
      break;
    case 'none':
      imgUploadPreviewImg.style.filter = '';
      break;
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: FILTERS.none.min,
    max: FILTERS.none.max
  },
  start: FILTERS.none.max,
  step: FILTERS.none.step,
  connect: 'lower'
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  changeFilter(currentFilter, valueElement.value);
});

effectsList.addEventListener('click', (evt) => {
  const currentElement = evt.target.closest('.effects__item');
  if (currentElement) {
    const currentElementInput = currentElement.querySelector('input');
    if (currentElementInput.hasAttribute('checked')) {
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
    } else {
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    }
    currentFilter = currentElementInput.value;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: FILTERS[currentFilter].min,
        max: FILTERS[currentFilter].max
      },
      start: FILTERS[currentFilter].max,
      step: FILTERS[currentFilter].step,
      connect: 'lower'
    });
  }
});
