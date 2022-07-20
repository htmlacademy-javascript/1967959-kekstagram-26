import '../nouislider/nouislider.js';

const NONE = 'none';
const CHROME = 'chrome';
const SEPIA = 'sepia';
const MARVIN = 'marvin';
const PHOBOS = 'phobos';
const HEAT = 'heat';

/**
 * Словарь фильтров.
 */
const filterByEffect = {
  [NONE]: '',
  [CHROME]: 'grayscale(0)',
  [SEPIA]: 'sepia(0)',
  [MARVIN]: 'invert(0%)',
  [PHOBOS]: 'blur(0px)',
  [HEAT]: 'brightness(0)'
};

/**
 * Словарь диапазонов.
 */
const rangeByEffect = {
  [NONE]: [0, 100, 1],
  [CHROME]: [0, 1, .1],
  [SEPIA]: [0, 1, .1],
  [MARVIN]: [0, 100, 1],
  [PHOBOS]: [0, 3, .1],
  [HEAT]: [1, 3, .1]
};

/**
 * Вернёт настройки диапазона для заданного эффекта.
 * @param {string} effect
 */
const getRangeOptions = (effect) => {
  const [min, max, step] = rangeByEffect[effect];
  return {
    start: max,
    step,
    range: {min, max}
  };
};

/**
 * Нарисует слайдер насыщенности эффекта.
 * @param {HTMLElement} element
 * @param {Object} options
 */
const renderEffectSlider = (element, options) => {
  /**
   * Эффект по умолчанию.
   */
  const defaultEffect = NONE;

  /**
   * Текущий эффект.
   */
  let currentEffect = defaultEffect;

  /**
   * Настройки форматирования.
   */
  const format = {
    // Получение значения
    to: (value) => filterByEffect[currentEffect].replace('0', value),
    // Установка значения
    from: (value) => value
  };

  /**
   * Слайдер диапазона.
   */
  const rangeSlider = noUiSlider.create(element, {
    ...getRangeOptions(defaultEffect),
    animate: false,
    behaviour: 'snap',
    connect: 'lower',
    format,
    ...options
  });

  return Object.assign(rangeSlider, {
    defaultEffect,

    /**
     * Обновит настройки диапазона для заданного эффекта.
     * @param {string} effect
     */
    updateRangeOptions(effect) {
      currentEffect = effect;
      this.updateOptions(getRangeOptions(effect));
    }
  });
};

export default renderEffectSlider;
