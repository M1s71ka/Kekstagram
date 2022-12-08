import {isEscKeyDown, isLengthCorrect} from './utils.js';
import {MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, ErrorMessage, SCALE_STEP, ScaleValue} from './constants.js';
import {createSlider, removeEffect} from './slider.js';

const form = document.querySelector('.img-upload__form');
const photoLoader = document.querySelector('#upload-file');
const photoEditor = document.querySelector('.img-upload__overlay');
const closeEditorButton = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('.img-upload__submit');
const fieldWrapper = document.querySelector('.img-upload__text');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const previewPhoto = document.querySelector('.img-upload__preview');
const effectSlider = document.querySelector('.effect-level__slider');
const regexp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

function onSmallerButtonClick() {
  biggerButton.disabled = false;
  scaleField.value = `${(+scaleField.value.slice(0, -1) - SCALE_STEP).toString()  }%`;
  previewPhoto.setAttribute('style', `filter: ${previewPhoto.style.filter}; transform: scale(${(+scaleField.value.slice(0, -1)) / 100});`);
  if (scaleField.value === ScaleValue.MIN) {
    smallerButton.disabled = true;
  }
}

function onBiggerButtonClick() {
  smallerButton.disabled = false;
  scaleField.value = `${(+scaleField.value.slice(0, -1) + SCALE_STEP).toString()  }%`;
  previewPhoto.setAttribute('style', `filter: ${previewPhoto.style.filter}; transform: scale(${(+scaleField.value.slice(0, -1)) / 100});`);
  if (scaleField.value === ScaleValue.MAX) {
    biggerButton.disabled = true;
  }
}

let errorMessage = '';

const getErrorMessage = () => errorMessage;

const isUniqueHashtags = (hashtags) => {
  for (let i = hashtags.length - 1; i >= 0; i--) {
    if (hashtags.length === 1) {
      return true;
    }
    for (let j = hashtags.length - 2; j >= 0; j--) {
      if (hashtags[i] === hashtags[j]) {
        return false;
      }
    }
    hashtags.pop();
  }
};

const isValidHashtag = (value) => {
  errorMessage = '';
  const inputHashtag = value.toLowerCase();
  if (inputHashtag.length === 0) {
    return true;
  }
  const hashtags = inputHashtag.split(/\s+/);
  const hashtagsCopy = hashtags.slice();
  if (hashtags.length === 0) {
    return true;
  }

  const errorCheckers = [
    {
      checker: hashtags.some((hash) => hash[0] !== '#'),
      error: ErrorMessage.STARTS_WITH_HASH,
    },
    {
      checker: hashtags.some((hash) => hash.length > MAX_HASHTAG_LENGTH),
      error: ErrorMessage.MAX_HASH_LENGTH,
    },
    {
      checker: hashtags.some((hash) => hash.indexOf('#', 1) >= 1),
      error: ErrorMessage.HASH_SPACE,
    },
    {
      checker: hashtags.length > MAX_HASHTAG_COUNT,
      error: ErrorMessage.MAX_HASH_COUNT,
    },
    {
      checker: hashtags.some((hash) => hash.length === 1),
      error: ErrorMessage.EMPTY_HASHTAG,
    },
    {
      checker: hashtags.some((hash) => !regexp.test(hash)),
      error: ErrorMessage.NO_PROHIBITED_SYMBOLS,
    },
    {
      checker: !isUniqueHashtags(hashtagsCopy),
      error: ErrorMessage.NO_REPEAT,
    }
  ];
  return errorCheckers.every((check) => {
    const isInvalid = check.checker;
    if (isInvalid){
      errorMessage = check.error;
    }
    return !isInvalid;
  });
};

const isValidComment = (value) => {
  errorMessage = '';
  const comment = value;
  if (comment.length === 0) {
    return true;
  }

  const errorChecker = {
    checker: !isLengthCorrect(comment, MAX_COMMENT_LENGTH),
    error: ErrorMessage.MAX_COMM_LENGTH,
  };
  const isInvalid = errorChecker.checker;
  if (isInvalid) {
    errorMessage = errorChecker.error;
  }
  return !isInvalid;
};

const validateForm = () => {
  pristine.addValidator(hashtagField, isValidHashtag, getErrorMessage);
  pristine.addValidator(commentField, isValidComment, getErrorMessage);
};

const onSubmitButton = () => {
  let isActive = true;
  for (const elem of fieldWrapper.children) {
    if (elem.classList.contains('has-danger')) {
      isActive = false;
    }
  }
  submitButton.disabled = !isActive;
};

const onHashtagInputField = () => {
  onSubmitButton();
};

const onCommentInputField = () => {
  onSubmitButton();
};

const closeEditor = () => {
  document.body.classList.remove('modal-open');
  photoEditor.classList.add('hidden');
  smallerButton.removeAttribute('disabled');
  biggerButton.removeAttribute('disabled');
  previewPhoto.removeAttribute('style');
  effectSlider.classList.add('hidden');
  removeEffect();
  hashtagField.removeEventListener('input', onHashtagInputField);
  commentField.removeEventListener('input', onCommentInputField);
  smallerButton.removeEventListener('click', onSmallerButtonClick);
  biggerButton.removeEventListener('click', onBiggerButtonClick);
  closeEditorButton.removeEventListener('click', onCloseEditorButton);
  window.removeEventListener('keydown', onEscKeyDown);
  form.reset();
};

const removeEscEvent = (field) => {
  field.addEventListener('focus', () => {
    window.removeEventListener('keydown', onEscKeyDown);
  });
  field.addEventListener('blur', () => {
    window.addEventListener('keydown', onEscKeyDown);
  });
};

const onUploadPhoto = () => {
  document.body.classList.add('modal-open');
  photoEditor.classList.remove('hidden');
  scaleField.value = ScaleValue.MAX;
  if (!effectSlider.hasChildNodes()) {
    createSlider();
  }
  hashtagField.addEventListener('input', onHashtagInputField);
  commentField.addEventListener('input', onCommentInputField);
  biggerButton.disabled = true;
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
  closeEditorButton.addEventListener('click', onCloseEditorButton);
  window.addEventListener('keydown', onEscKeyDown);
  removeEscEvent(hashtagField);
  removeEscEvent(commentField);
};

function onCloseEditorButton(evt) {
  evt.preventDefault();
  closeEditor();
}

function onEscKeyDown(evt) {
  if (isEscKeyDown(evt)) {
    closeEditor();
  }
}

const uploadPhoto = () => {
  photoLoader.addEventListener('change', onUploadPhoto);
  validateForm();
};

export {uploadPhoto};
