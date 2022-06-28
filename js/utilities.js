/**
 * Вернёт целое число в диапазоне `min`, `max`.
 * @param {number} min Целое положительное число.
 * @param {number} max Целое положительное число, большее или равное `min`.
 */
export const getIntegerInRange = (min, max) => {
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
export const validateMaxLength = (value, maxLength = 140) => {
  if (typeof value !== 'string') {
    throw new Error(`Не является строкой: ${value}`);
  }
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new Error(`Неверно задан параметр maxLength: ${maxLength}`);
  }
  return value.length <= maxLength;
};

/**
 * Вернёт случайный элемент массива.
 * @template Item
 * @param {Item[]} items
 */
export const getItemFromArray = (items) => {
  if (!Array.isArray(items)) {
    throw new Error(`Не является массивом: ${items}`);
  }
  const lastIndex = Math.max(0, items.length - 1);
  const index = getIntegerInRange(0, lastIndex);
  return items[index];
};
