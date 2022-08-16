const servicesButtons = document.querySelectorAll('.services-button');
const servicesItems = document.querySelectorAll('.services-item');

servicesButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.services-button.is-active').classList.remove('is-active');
    document.querySelector('.services-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    servicesItems[index].classList.add('is-active');
  });
})

const sliderButtons = document.querySelectorAll('.slider-pagination-button');
const sliderItems = document.querySelectorAll('.slider-item');

const sliderButtonNext = document.querySelector('.slider-next');
const sliderButtonPrev = document.querySelector('.slider-prev');

let index = 0;

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.slider-pagination-button.is-active').classList.remove('is-active');
    document.querySelector('.slider-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    sliderItems[index].classList.add('is-active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is-active');
  sliderItems[index].classList.remove('is-active');
  if (index === sliderButtons.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  sliderButtons[index].classList.add('is-active');
  sliderItems[index].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is-active');
  sliderItems[index].classList.remove('is-active');
  if (!index) {
    index = sliderButtons.length - 1;
  } else {
    index = index - 1;
  }
  sliderButtons[index].classList.add('is-active');
  sliderItems[index].classList.add('is-active');
});

const deliveryLink = document.querySelector('.delivery-link');
const modalCloseButton = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

deliveryLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('is-open');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});

document.addEventListener('click', (evt) => {
  if ( evt.target === modal) {
   modal.classList.remove('is-open');
  }
});
