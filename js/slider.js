const effectSlider = document.querySelector('.effect-level__slider');
const effectsContainer = document.querySelector('.effects__list');
const previewImage = document.querySelector('.img-upload__preview');
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

const updateImageStyle = (value, symbol = '') => {
  previewImage.style.filter = (value !== 'none') ? `${value}(${effectSlider.noUiSlider.get()}${symbol})` : 'none';
  effectLevel.value = `${effectSlider.noUiSlider.get()}${symbol}`;
};

const removeEffect = () => {
  if (previewImage.classList.item(1)) {
    previewImage.classList.remove(previewImage.classList.item(1));
  }
};

function onEffectClick(evt) {
  effectParametr = evt.target.id;
  switch (effectParametr) {
    case 'effect-none':
      updateSliderOptions(1, 100, 100, 1);
      removeEffect();
      effectSlider.noUiSlider.on('update', () => {
        updateImageStyle('none');
      });
      effectSlider.classList.add('hidden');
      break;
    case 'effect-chrome':
      updateSliderOptions(0, 1, 1, 0.1);
      effectSlider.classList.remove('hidden');
      removeEffect();
      previewImage.classList.add('.effects__preview--chrome');
      effectSlider.noUiSlider.on('update', () => {
        updateImageStyle('grayscale');
      });
      break;
    case 'effect-sepia':
      updateSliderOptions(0, 1, 1, 0.1);
      effectSlider.classList.remove('hidden');
      removeEffect();
      previewImage.classList.add('.effects__preview--sepia');
      effectSlider.noUiSlider.on('update', () => {
        updateImageStyle('sepia');
      });
      break;
    case 'effect-marvin':
      updateSliderOptions(0, 100, 100, 1);
      effectSlider.classList.remove('hidden');
      removeEffect();
      previewImage.classList.add('.effects__preview--marvin');
      effectSlider.noUiSlider.on('update', () => {
        updateImageStyle('invert', '%');
      });
      break;
    case 'effect-phobos':
      updateSliderOptions(0, 3, 3, 0.1);
      effectSlider.classList.remove('hidden');
      removeEffect();
      previewImage.classList.add('.effects__preview--phobos');
      effectSlider.noUiSlider.on('update', () => {
        updateImageStyle('blur', 'px');
      });
      break;
    case 'effect-heat':
      updateSliderOptions(1, 3, 3, 0.1);
      effectSlider.classList.remove('hidden');
      removeEffect();
      previewImage.classList.add('.effects__preview--heat');
      effectSlider.noUiSlider.on('update', () => {
        updateImageStyle('brightness');
      });
      break;
  }
}

const createSlider = () => {
  effectsContainer.addEventListener('click', onEffectClick);
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

export {createSlider};
