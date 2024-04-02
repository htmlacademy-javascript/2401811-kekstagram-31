import { getRandomInteger, createRandomIdGenerator, getRandomArrayElement } from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Оксана',
  'Петя',
  'Ваня',
  'Женя',
  'Оливер',
  'Никита',
  'София',
  'Ильяс',
  'Гретта'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = ['#море', '#машины', '#веселье', '#искусство'];

const likes = {
  MIN: 15,
  MAX: 200
};

const comments = {
  MIN: 0,
  MAX: 30
};

const idPhotos = {
  MIN: 1,
  MAX: 25
};

const ALL_PHOTOS_COUNT = 25;

const getPhotoId = createRandomIdGenerator(idPhotos.MIN, idPhotos.MAX);
const generateUrlId = createRandomIdGenerator(idPhotos.MIN, idPhotos.MAX);
const getCommentId = createRandomIdGenerator();

const generateMessage = () => {
  const messageStringsAmount = getRandomInteger(1, 2);
  let message = '';
  for (let i = 0; i < messageStringsAmount; i++) {
    message += `${getRandomArrayElement(MESSAGES)} `;
  }
  return message.trim();
};

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: generateMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPostedPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(likes.MIN, likes.MAX),
  comments: Array.from({ length: getRandomInteger(comments.MIN, comments.MAX) }, createComment)
});

const allCreatedPhotos = Array.from({ length: ALL_PHOTOS_COUNT }, createPostedPhoto);

export { allCreatedPhotos };
