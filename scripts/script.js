const detailsButton = document.querySelector('.header__button-details');
const leadSection = document.querySelector('.lead');

function handleDetailsButtonClick() {
  leadSection.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
}

detailsButton.addEventListener('click', handleDetailsButtonClick);


const swiperFeatures = new Swiper('.slider_place_features', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',

  // If we need pagination
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'slider__pagination-bullet_active'
  }
});

const swiperLead = new Swiper('.slider_place_lead', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    375: {
      spaceBetween: 45,
    }
  },
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',

  // If we need pagination
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'slider__pagination-bullet_active'
  }
});
