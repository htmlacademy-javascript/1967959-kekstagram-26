import './post.js';

/**
 * Содержимое шаблона миниатюры публикации.
 * @type {DocumentFragment}
 */
const thumbnailTemplateContent = document.querySelector('#picture').content;

/**
 * Создаст DOM-элемент миниатюры публикации.
 * @param {Post} post
 */
const createThumbnailElement = (post) => {
  const element = thumbnailTemplateContent.querySelector('.picture').cloneNode(true);

  element.querySelector('.picture__img').src = post.url;
  element.querySelector('.picture__likes').textContent = post.likes;
  element.querySelector('.picture__comments').textContent = post.comments.length;

  return element;
};

/**
 * Создаст DOM-фрагмент миниатюр публикаций.
 * @param {Post[]} posts
 */
const createThumbnailsFragment = (posts) => {
  const fragment = new DocumentFragment;
  fragment.append(...posts.map(createThumbnailElement));
  return fragment;
};

export default createThumbnailsFragment;

