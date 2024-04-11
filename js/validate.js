const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const COMMENT_MAX_LENGTH = 140;
const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
}, true);

const createNewHashtags = (hashtagsArray) => {
  const newHashtags = [];
  hashtagsArray.forEach((hashtag) => {
    if (hashtag !== '') {
      newHashtags.push(hashtag.toLowerCase());
    }
  });
  return newHashtags;
};

const validateHashtags = () => {
  const hashtags = form.querySelector('.text__hashtags').value;
  const splitedHashtags = hashtags.split(' ');
  return (hashtags === '' || createNewHashtags(splitedHashtags).every((hashtag) => REGEXP.test(hashtag)));
};
pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtags,
  'Введён невалидный хэштег'
);

const validateHashtagsLength = () => {
  const splitedHashtags = form.querySelector('.text__hashtags').value.split(' ');
  return createNewHashtags(splitedHashtags).length <= 5;
};
pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtagsLength,
  'Превышено количество хэштегов'
);

const validateHashtagsUniqueness = () => {
  const splitedHashtags = form.querySelector('.text__hashtags').value.split(' ');
  return (new Set(createNewHashtags(splitedHashtags))).size === createNewHashtags(splitedHashtags).length;
};
pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtagsUniqueness,
  'Хэштеги повторяются'
);

const validateCommentLength = () => form.querySelector('.text__description').value.length <= COMMENT_MAX_LENGTH;
pristine.addValidator(
  form.querySelector('.text__description'),
  validateCommentLength,
  'Превышено количество допустимых символов'
);

export { pristine };
