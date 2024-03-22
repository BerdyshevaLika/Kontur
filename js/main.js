// Swiper slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  });

// Yandex Map

ymaps.ready(init);
function init(){
	// Создание карты.
	const map = new ymaps.Map('map', {
		center: [55.028894, 82.926493],
		zoom: 16,
	});

	const myPlacemark = new ymaps.Placemark(
		[55.028894, 82.926493],
		{
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Депутатская, 46</div>
					<div class="balloon__contacts">
						<a href="tel:+74993489396">+7 (499) 348 93 96</a>
					</div>
				</div>
			`,
		},
		{
			preset: 'islands#redIcon'
		}
	);

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(myPlacemark);
}

// Burger button

const burgerButton = document.querySelector('.burger-button');
const header = document.querySelector('.header');

burgerButton.addEventListener('click', () => header.classList.toggle('is-open'));

// Modal open

const button = document.querySelector('.slider__card-link');
const modalContainer = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal__close-button');

button.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.remove('modal-container-close');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.add('modal-container-close');
});

modalContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.modal__content')) {
    return
  }
  evt.preventDefault();
  modalContainer.classList.add('modal-container-close');
});