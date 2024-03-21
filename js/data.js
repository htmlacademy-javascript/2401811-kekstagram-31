import { getRandomInteger, createRandomIdGenerator } from './util';

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

const PHOTOS_NUMBER = 25;

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

const getPhotoId = createRandomIdGenerator(idPhotos.MIN, idPhotos.MAX);

const getCommentId = createRandomIdGenerator(1, Infinity);

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => ({
  id: getPhotoId(idPhotos.MIN, idPhotos.MAX),
  url: `photos/${getPhotoId(idPhotos.MIN, idPhotos.MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(likes.MIN, likes.MAX),
  comments: Array.from({ length: getRandomInteger(comments.MIN, comments.MAX) }, createComment)
});

const createPhotos = (number) => Array.from({ length: number }, createPhoto());

export { createPhotos, PHOTOS_NUMBER };
