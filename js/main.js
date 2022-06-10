function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive(0, 20);

function truncate(str) {
  const maxlegth = 140;
  if (str.length < maxlegth) {
    return true;
  } else {
    return false;
  }
}

truncate();
