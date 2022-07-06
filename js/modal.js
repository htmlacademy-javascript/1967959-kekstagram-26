/**
 * Закроет модальное окно при нажатии кнопки `Escape` на клавиатуре.
 * @param {KeyboardEvent} event
 */
const handleKeydown = (event) => {
  if (event.key !== 'Escape') {
    return;
  }
  document.querySelector('.overlay:not(.hidden) .cancel').click();
};

/**
 * Закроет модальное окно по клику на кнопку закрытия.
 * @param {MouseEvent} event
 */
const handleCancelButtonClick = (event) => {
  event.target.closest('.overlay').classList.add('hidden');

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleKeydown);
};

/**
 * Откроет модальное окно.
 * @param {HTMLElement} element
 */
const openModal = (element) => {
  element.classList.remove('hidden');
  element.querySelector('.cancel').addEventListener('click', handleCancelButtonClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', handleKeydown);
};

export default openModal;
