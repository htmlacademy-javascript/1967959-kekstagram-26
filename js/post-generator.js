import './post.js';
import {getIntegerInRange, getItemFromArray} from './utilities.js';

/**
 * Диапазон количества комментариев.
 */
const COMMENTS_RANGE = [0, 15];

/**
 * Диапазон нумерации аватаров.
 */
const AVATARS_RANGE = [1, 6];

/**
 * Варианты комментариев.
 */
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

/**
 * Варианты имён.
 */
const NAMES = [
  'Артём',
  'Женя',
  'Слава',
  'Ольга',
  'Кирилл',
  'Лиза',
  'Даша'
];

/**
 * Диапазон количество лайков.
 */
const LIKES_RANGE = [15, 200];

/**
 * Варианты описаний публикации.
 */
const DESCRIPTIONS = [
  'Отлично провожу время',
  'Всем привет',
  'Катаемся на велосипеде',
  'В гостях у бабули'
];

/**
 * Сгенерирует комментарий.
 * @param {number} id
 * @returns {PostComment}
 */
const generateComment = (id) => ({
  id,
  avatar: `img/avatar-${getIntegerInRange(...AVATARS_RANGE)}.svg`,
  message: getItemFromArray(COMMENTS),
  name: getItemFromArray(NAMES)
});

/**
 * Сгенерирует список комментариев.
 * @param {number} length Длина списка.
 */
const generateComments = (length) =>
  Array.from({length}, (item, index) => generateComment(index + 1));

/**
 * Сгенерирует публикацию.
 * @param {number} id
 * @returns {Post}
 */
const generatePost = (id) => ({
  id,
  url: `photos-${id}.jpg`,
  description: getItemFromArray(DESCRIPTIONS),
  likes: getIntegerInRange(...LIKES_RANGE),
  comments: generateComments(getIntegerInRange(...COMMENTS_RANGE))
});

/**
 * Сгенерирует список публикаций.
 * @param {number} length Длина списка.
 */
const generatePosts = (length = 25) =>
  Array.from({length}, (item, index) => generatePost(index + 1));

export default generatePosts;

