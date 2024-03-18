import { getRandomInteger, getRandomArrayElement, getPhotoId } from './util';

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

const idNumbers = {
  MIN: 1,
  MAX: PHOTOS_NUMBER * comments.MAX
};

const createComment = () => ({
  id: getPhotoId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = (index) => ({
  id: `${index + 1}`,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(likes.MIN, likes.MAX),
  comments: Array.from({ length: getRandomInteger(comments.MIN, comments.MAX) }, createComment)
});

const createPhotos = (number) => Array.from({ length: number }, (_, index) => createPhoto(index));

export {createPhotos,idNumbers, PHOTOS_NUMBER};
