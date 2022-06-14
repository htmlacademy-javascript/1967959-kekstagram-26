/**
 * Вернёт целое число в диапазоне `min`, `max`.
 * @param {number} min Целое положительное число.
 * @param {number} max Целое положительное число больше или равное `min`.
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

getIntegerInRange(1, 3);

/**
 * Проверит максимальную длину строки.
 * @param {string} value Проверяемая строка.
 * @param {number} maxLength Максимальная длинна строки.
 */
const validateMaxLength = (value, maxLength = 140) => {
  if (typeof value !== 'string') {
    throw new Error(`Не является строкой: ${value}`);
  }
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new Error(`Неверный параметр maxLength: ${maxLength}`);
  }
  return value.length <= maxLength;
};

validateMaxLength('');
