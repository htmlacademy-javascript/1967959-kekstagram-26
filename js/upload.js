import openModal from './modal.js';
import createConstrainer from './upload-constrainer.js';
import initScaleControl from './upload-scale-control.js';
import renderEffectSlider from './upload-effect-slider.js';


/**
 * Форма публикации.
 * @type {HTMLFormElement}
 */
const formElement = document.querySelector('#upload-select-image');

/**
 * Окно редактирования.
 * @type {HTMLDivElement}
 */
const modalElement = formElement.querySelector('.img-upload__overlay');

/**
 * Редактируемое изображение.
 * @type {HTMLImageElement}
 */
const imageElement = modalElement.querySelector('.img-upload__preview img');

/**
 * Выбор эффекта.
 * @type {HTMLFieldSetElement}
 */
const effectTabsElement = modalElement.querySelector('.img-upload__effects');

/**
 * Управление масштабом.
 */
const scaleControlElement = initScaleControl(
  modalElement.querySelector('.img-upload__scale')
);

/**
 * Управление насыщенностью эффекта.
 */
const effectSlider = renderEffectSlider(
  modalElement.querySelector('.effect-level__slider')
);

/**
 * Методы установки ограничений для Hashtags и описаний.
 */
const constrainer = createConstrainer(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text__error'
});

/**
 * Применит масштаб.
 * @param {CustomEvent} event
 */
const handleScaleControlUpdate = (event) => {
  imageElement.style.transform = `scale(${event.detail.percent / 100})`;
};

/**
 * Применит насыщенность эффекта.
 * @param {string[]} values
 */
const handleEffectSliderUpdate = ([value]) => {
  console.log(value);
  imageElement.style.filter = value;
  formElement['effect-level'].value = effectSlider.get(true);
};

/**
 * Применит выбранный эффект.
 * @param {Event} event
 */
const handleEffectTabsChange = (event) => {
  const effect = event.target.value;
  const isHidden = effectSlider.defaultEffect === effect;

  imageElement.className = `effects__preview--${effect}`;

  effectSlider.updateRangeOptions(effect);
  effectSlider.target.closest('.effect-level').classList.toggle('hidden', isHidden);
};


/**
 * Откроет окно редактирования.
 * @param {Event} event
 */
const handleFileChange = () => {
  openModal(modalElement);
};

openModal(modalElement);

// Реакция на выбор файла
formElement.filename.addEventListener('change', handleFileChange);

// Реакция на изменение масштаба
scaleControlElement.addEventListener('update', handleScaleControlUpdate);

// Реакция на изменение насыщенности эффекта
effectSlider.on('update', handleEffectSliderUpdate);

// Реакция на выбор эффекта
effectTabsElement.addEventListener('change', handleEffectTabsChange);


// Ограничения для меток и описания.
constrainer
  .setHashtagsSyntax()
  .setHashtagsRepetitionConstraint()
  .setHashtagsMaxItemLength(20)
  .setHashtagsMaxItems(5)
  .setDescriptionMaxLength(140);

