/**
 * Публикация.
 * @typedef Post
 * @prop {number} id Идентификатор публикации.
 * @prop {string} url URL-адрес изображения.
 * @prop {string} description Описание изображения.
 * @prop {number} likes Количество лайков.
 * @prop {PostComment[]} comments Список комментариев.
 */

/**
 * Комментарий к публикации.
 * @typedef PostComment
 * @prop {number} id Идентификатор комментария.
 * @prop {string} avatar URL-адрес аватарки.
 * @prop {string} message Текст комментария.
 * @prop {string} name Имя автора.
 */

