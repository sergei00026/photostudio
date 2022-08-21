/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectCoverflow, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.jobs-page__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.jobs-page__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, EffectCoverflow, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			slidesPerGroup: 1,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			parallax: true,
			// Активный слайд по центру
			centeredSlides: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,

			effect: 'coverflow',
			// Дополнение к coverflow
			coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 40,
				// Тень
				slideShadows: true,
				scale: 0.9,

			},
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.jobs-page-button-prev',
				nextEl: '.jobs-page-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
				},

				992: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 4,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.locations-page__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.locations-page__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			slidesPerGroup: 1,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			parallax: true,
			spaceBetween: 27,

			// Активный слайд по центру
			// centeredSlides: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,

			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.locations-page__prev',
				nextEl: '.locations-page__next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,

				},
				400: {
					slidesPerView: 2,
					spaceBetween: 27,

				},
				768: {
					slidesPerView: 3,
				},
			},
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});