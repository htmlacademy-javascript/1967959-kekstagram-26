import '../pristine/pristine.min.js';

/**
 * Вернёт методы установки ограничений для формы публикации.
 * @param {HTMLFormElement} formElement
 * @param {Object} options
 */
const createConstrainer = (formElement, options) => {
  const pristine = new Pristine(formElement, options);

  return {
    /**
     * Вернёт список хэштэгов.
     * @type {string[]}
     */
    get hashtags() {
      const value = formElement.hashtags.value.trim();
      return value.length ? value.split(/\s+/) : [];
    },

    /**
     * Установит синтаксис hashtags.
     */
    setHashtagsSyntax() {
      const message = 'Hashtags начинается с символа # и состоит из букв/чисел';
      const pattern = /^#[a-zа-яё0-9]+$/i;
      const isValid = () => this.hashtags.every((hashtag) => pattern.test(hashtag));

      pristine.addValidator(formElement.hashtags, isValid, message, 1, true);

      return this;
    },

    /**
     * Установит ограничение повтора Hashtags.
     */
    setHashtagsRepetitionConstraint() {
      const message = 'Hashtag не может повторяться';
      const isValid = () => {
        const hashtags = this.hashtags.map((hashtag) => hashtag.toLowerCase());

        return hashtags.length === new Set(hashtags).size;
      };

      pristine.addValidator(formElement.hashtags, isValid, message, 1, true);

      return this;
    },

    /**
     * Установит ограничение максимальной длинны Hashtag.
     * @param {number} maxLength
     */
    setHashtagsMaxItemLength(maxLength) {
      const message = `Hashtag не может быть более ${maxLength} символов`;
      const isValid = () => this.hashtags.every((hashtag) => hashtag.length <= maxLength);

      pristine.addValidator(formElement.hashtags, isValid, message, 1, true);

      return this;
    },

    /**
     * Установит ограничение количества Hashtag.
     * @param {number} maxLength
     */
    setHashtagsMaxItems(maxLength) {
      const message = `Не более ${maxLength} Hashtags`;
      const isValid = () => this.hashtags.length <= maxLength;

      pristine.addValidator(formElement.hashtags, isValid, message, 1, true);

      return this;
    },

    /**
     * Установит ограничения максимальной длинны описания.
     * @param {number} maxLength
     */
    setDescriptionMaxLength(maxLength) {
      const message = `Не более ${maxLength} символов`;
      const isValid = (value) => value.length <= maxLength;

      pristine.addValidator(formElement.description, isValid, message);

      return this;
    }
  };
};

export default createConstrainer;
