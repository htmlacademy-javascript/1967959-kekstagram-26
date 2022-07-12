import openModal from './modal.js';
import createConstraints from './upload-constraints.js';

/**
 * Форма публикации.
 * @type {HTMLFormElement}
 */
const formElement = document.querySelector('#upload-select-image');

/**
 * Окно редактирования.
 * @type {HTMLDivElement}
 */
const overlayElement = formElement.querySelector('.img-upload__overlay');

/**
 * Методы установки ограничений для хэштэгов и описаний.
 */
const constraints = createConstraints(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text__error'
});

/**
 * Откроет окно редактирования.
 * @param {Event} event
 */
const handleFileChange = (event) => {
  openModal(overlayElement);
};

//openModal(overlayElement);

formElement.filename.addEventListener('change', handleFileChange);

// Ограничения для меток и описания.
constraints
  .setHashtagsSyntax()
  .setHashtagsRepetitionConstraint()
  .setHashtagsMaxItemLength(20)
  .setHashtagsMaxItems(5)
  .setDescriptionMaxLength(140);

