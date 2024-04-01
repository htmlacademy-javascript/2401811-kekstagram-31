const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
}, true);

const validateCommentSize = () => form.querySelector('.text__description').value.length <= 140;

pristine.addValidator(
  form.querySelector('.text__description'),
  validateCommentSize,
  'Превышено количество допустимых символов'
);

const validateHashtags = () => {
  const hashtags = form.querySelector('.text__hashtags').value;
  return (hashtags === '' || hashtags.split(' ').every((hashtag) => REGEXP.test(hashtag)));
};

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtags,
  'Введён невалидный хэштег'
);

const validateHashtagsLength = () => form.querySelector('.text__hashtags').value.split(' ').length <= 5;

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtagsLength,
  'Превышено количество хэштегов'
);

const validateHashtagsUniq = () => {
  const hashtagsArray = form.querySelector('.text__hashtags').value.split(' ');
  const newHashtagsArray = hashtagsArray.map((hashtag) => hashtag.toLowerCase());
  return (new Set(newHashtagsArray)).size === newHashtagsArray.length;
};

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtagsUniq,
  'Хэштеги не должны повторяться'
);

const validateForm = () => pristine.validate;

export { validateForm };
