import openModal from './modal.js';
import createConstrainer from './upload-constrainer.js';

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
 * Методы установки ограничений для Hashtags и описаний.
 */
const constraints = createConstrainer(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text__error'
});

/**
 * Откроет окно редактирования.
 * @param {Event} event
 */
const handleFileChange = () => {
  openModal(overlayElement);
};

openModal(overlayElement);

formElement.filename.addEventListener('change', handleFileChange);

// Ограничения для меток и описания.
constraints
  .setHashtagsSyntax()
  .setHashtagsRepetitionConstraint()
  .setHashtagsMaxItemLength(20)
  .setHashtagsMaxItems(5)
  .setDescriptionMaxLength(140);

