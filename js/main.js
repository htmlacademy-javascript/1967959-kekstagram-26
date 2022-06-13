//Функция, возвращающая случайное целое число из переданного диапазона включительно ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  return 'Заданный диапазон не соответсвует условию!';
}
getRandomIntInclusive(0, 20);


//Функция для проверки максимальной длины строки, ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
function checkMaxLength(str, maxLength) {
  return str.length < maxLength;
}
checkMaxLength(100,140);
