/**
 * Минимальный масштаб.
 */
const MIN = 25;

/**
 * Максимальный масштаб.
 */
const MAX = 100;

/**
 * Шаг масштабирования.
 */
const STEP = 25;

/**
 * Обновит значение масштаба при нажатии соответствующей кнопки.
 * @param {MouseEvent} event
 */
const handleScaleControlClick = (event) => {
  const group = event.currentTarget.elements;
  let value = Number.parseFloat(group.scale.value);

  if (event.target === group['scale-down']) {
    value = Math.max(value - STEP, MIN);

  } else if (event.target === group['scale-up']) {
    value = Math.min(value + STEP, MAX);
  }

  group.scale.value = `${value}%`;

  event.currentTarget.dispatchEvent(
    new CustomEvent('update', {detail: {percent: value}})
  );
};

/**
 * Инициализирует элемент управления масштабом.
 * @param {HTMLFieldSetElement} element
 */
const initScaleControl = (element) => {
  element.addEventListener('click', handleScaleControlClick);

  return element;
};

export default initScaleControl;
