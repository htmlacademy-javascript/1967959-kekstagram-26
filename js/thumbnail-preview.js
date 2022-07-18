import './post.js';
import openModal from './modal.js';

/**
 * Окно просмотра публикации.
 * @type {HTMLDivElement}
 */
const modalElement = document.querySelector('.big-picture');

/**
 * Контейнер комментариев.
 * @type {HTMLUListElement}
 */
const commentsContainerElement = modalElement.querySelector('.social__comments');

/**
 * Шаблон комментария.
 * @type {HTMLLIElement}
 */
const commentTemplateElement = modalElement.querySelector('.social__comment');

/**
 * Счётчик показанных комментариев.
 * @type {HTMLSpanElement}
 */
const shownCommentsCountElement = modalElement.querySelector('.shown-comments-count');

/**
 * Счётчик общего числа комментариев.
 * @type {HTMLSpanElement}
 */
const сommentsCountElement = modalElement.querySelector('.comments-count');

/**
 * Кнопка "Загрузить ещё".
 * @type {HTMLButtonElement}
 */
const moreButtonElement = modalElement.querySelector('.comments-loader');

/**
 * Очередь комментариев для показа.
 * @type {PostComment[]}
 */
let enqueuedComments = [];

/**
 * Общее число комментариев для показа.
 */
let enqueuedTotal = 0;

/**
 * Число комментариев показа за раз.
 */
const COMMENTS_PER_PAGE = 5;


/**
 * Создаст DOM-элемент комментария к публикации.
 * @param {PostComment} comment
 */
const createCommentElement = (comment) => {
  const element = commentTemplateElement.cloneNode(true);

  element.querySelector('.social__picture').src = comment.avatar;
  element.querySelector('.social__picture').alt = comment.name;
  element.querySelector('.social__text').textContent = comment.message;

  return element;
};

/**
 * Покажет новую порцию комментариев.
 * @param {MouseEvent} event
 */
const handleMoreButtonClick = (event) => {
  // Новая порция комментариев
  const commentElements = enqueuedComments.splice(0, COMMENTS_PER_PAGE).map(createCommentElement);

  // Добавление/замена комментариев
  commentsContainerElement[event.isTrusted ? 'append' : 'replaceChildren'](...commentElements);

  // Число показанных комментариев
  shownCommentsCountElement.textContent = enqueuedTotal - enqueuedComments.length;

  // Общее число комментариев
  сommentsCountElement.textContent = enqueuedTotal;

  // Скрытие/показ кнопки
  moreButtonElement.classList.toggle('hidden', !enqueuedComments.length);
};

/**
 * Откроет публикацию в полноразмерном режиме.
 * @param {Post} post
 */
const openPreview = (post) => {
  modalElement.querySelector('.big-picture__img img').src = post.url;
  modalElement.querySelector('.likes-count').textContent = post.likes;
  modalElement.querySelector('.social__caption').textContent = post.description;

  enqueuedComments = [...post.comments];
  enqueuedTotal = enqueuedComments.length;

  moreButtonElement.addEventListener('click', handleMoreButtonClick);
  moreButtonElement.click();

  openModal(modalElement);
};


export default openPreview;
