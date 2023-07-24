const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

const SCALE_CONTROL = {
  step: 25,
  maxValue: 100,
  minValue: 25,
  defaultValue: 100
};

const onButtonSmaller = () => {
  if (parseInt(scaleValue.value, 10) > SCALE_CONTROL.minValue) {
    scaleValue.value = `${parseInt(scaleValue.value, 10) - SCALE_CONTROL.step }%`;
    image.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100})`;
  }
};

const onButtonBigger = () => {
  if (parseInt(scaleValue.value, 10) < SCALE_CONTROL.maxValue) {
    scaleValue.value = `${parseInt(scaleValue.value, 10) + SCALE_CONTROL.step }%`;
    image.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100})`;
  }
};

const resizeImage = () => {
  buttonBigger.addEventListener('click', onButtonBigger);
  buttonSmaller.addEventListener('click', onButtonSmaller);
};

const deleteResizeImage = () => {
  image.removeAttribute('style');
  buttonBigger.removeEventListener('click', onButtonBigger);
  buttonSmaller.removeEventListener('click', onButtonSmaller);
};

export { resizeImage, deleteResizeImage };