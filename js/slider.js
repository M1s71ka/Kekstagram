import {Filter, FilterEffect} from './constants.js';

const EFFECT_CLASS_POSITION = 1;
const effectSlider = document.querySelector('.effect-level__slider');
const effectsContainer = document.querySelector('.effects__list');
const previewImage = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');

let effectParametr = '';

const updateSliderOptions = (minValue, maxValue, startValue, stepValue) => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue
    },
    start: startValue,
    step: stepValue
  });
};

const removeEffect = () => {
  if (previewImage.classList.item(EFFECT_CLASS_POSITION)) {
    previewImage.classList.remove(previewImage.classList.item(EFFECT_CLASS_POSITION));
  }
};

const changeImageEffect = (effect, symbol = '') => {
  effectSlider.noUiSlider.off();
  removeEffect();
  if (effect !== FilterEffect.NONE) {
    previewImage.classList.add(`effects__preview--${effect}`);
    effectSlider.classList.remove('hidden');
  } else {
    effectSlider.classList.add('hidden');
  }
  effectSlider.noUiSlider.on('update', () => {
    previewImage.style.filter = (effect !== 'none') ? `${effect}(${effectSlider.noUiSlider.get()}${symbol})` : 'none';
    effectLevel.value = effectSlider.noUiSlider.get();
  });
};

function onEffectContainerClick(evt) {
  effectParametr = evt.target.id;
  switch (effectParametr) {
    case Filter.NONE:
      updateSliderOptions(1, 100, 100, 1);
      changeImageEffect(FilterEffect.NONE);
      break;
    case Filter.CHROME:
      updateSliderOptions(0, 1, 1, 0.1);
      changeImageEffect(FilterEffect.GRAYSCALE);
      break;
    case Filter.SEPIA:
      updateSliderOptions(0, 1, 1, 0.1);
      changeImageEffect(FilterEffect.SEPIA);
      break;
    case Filter.MARVIN:
      updateSliderOptions(0, 100, 100, 1);
      changeImageEffect(FilterEffect.INVERT, '%');
      break;
    case Filter.PHOBOS:
      updateSliderOptions(0, 3, 3, 0.1);
      changeImageEffect(FilterEffect.BLUR, 'px');
      break;
    case Filter.HEAT:
      updateSliderOptions(1, 3, 3, 0.1);
      changeImageEffect(FilterEffect.BRIGHTNESS);
      break;
  }
}

const createSlider = () => {
  effectsContainer.addEventListener('click', onEffectContainerClick);
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
  effectSlider.classList.add('hidden');
};

export {createSlider, removeEffect};
