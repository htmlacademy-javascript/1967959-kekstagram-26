/**
 * Вернёт целое число в диапазоне `min`, `max`.
 * @param {number} min Целое положительное число.
 * @param {number} max Целое положительное число, большее или равное `min`.
 */
const getIntegerInRange = (min, max) => {
  const range = [min, max];

  if (!range.every(Number.isInteger)) {
    throw new RangeError(`Нецелочисленный диапазон: [${range}]`);
  }
  if (min < 0 || max < 0 || min > max) {
    throw new RangeError(`Неподдерживаемый диапазон: [${range}]`);
  }
  const value = (max - min) * Math.random() + min;
  return Math.round(value);
};

/**
 * Проверит максимальную длину строки.
 * @param {string} value Проверяемая строка.
 * @param {number} maxLength Максимальная длина строки.
 */
const validateMaxLength = (value, maxLength = 140) => {
  if (typeof value !== 'string') {
    throw new Error(`Не является строкой: ${value}`);
  }
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new Error(`Неверно задан параметр maxLength: ${maxLength}`);
  }
  return value.length <= maxLength;
};

validateMaxLength('');

/**
 * Вернёт случайный элемент массива.
 * @template Item
 * @param {Item[]} items
 */
const getItemFromArray = (items) => {
  if (!Array.isArray(items)) {
    throw new Error(`Не является массивом: ${items}`);
  }
  const lastIndex = Math.max(0, items.length - 1);
  const index = getIntegerInRange(0, lastIndex);
  return items[index];
};

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

generatePosts();

/**
 * Комментарий к публикации.
 * @typedef PostComment
 * @prop {number} id Идентификатор комментария.
 * @prop {string} avatar URL-адрес аватарки.
 * @prop {string} message Текст комментария.
 * @prop {string} name Имя автора.
 */

/**
 * Публикация.
 * @typedef Post
 * @prop {number} id Идентификатор публикации.
 * @prop {string} url URL-адрес изображения.
 * @prop {string} description Описание изображения.
 * @prop {number} likes Количество лайков.
 * @prop {PostComment[]} comments Список комментариев.
 */
