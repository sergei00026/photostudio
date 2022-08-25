// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const decorationPageVideo = document.querySelector('.decoration-page__video');
const decorationPageButton = document.querySelector('.decoration-page__button');

function playVideo1() {
	if (decorationPageVideo.pause) {
		decorationPageVideo.play()
		decorationPageButton.style.display = 'none';
	} else {
		decorationPageVideo.pause()
	}
}

decorationPageButton.addEventListener("click", playVideo1);


function pauseVideo1() {
	if (decorationPageVideo.play) {
		decorationPageVideo.pause();
		decorationPageButton.style.display = 'block';

	} else {
		decorationPageVideo.play()
	}
}

decorationPageVideo.addEventListener("click", pauseVideo1);

const descriptionPageMore = document.querySelectorAll('.description-page__more');

const spollersTitle = document.querySelectorAll('.spollers__title');

spollersTitle.forEach((element, index) => {
	element.addEventListener("click", function (e) {
		if (!descriptionPageMore[index].closest('._spoller-active')) {
			console.log('true');
			descriptionPageMore[index].style.display = 'none';
		} else {
			descriptionPageMore[index].style.display = 'block';
		}
	});
});

/*
let slidActive = document.querySelector('.reviews-page__slide, .swiper-slide-active');

let mutation = new MutationObserver(mut => {

	if (slidActive.matches('.swiper-slide-active')) {
		slidActive.insertAdjacentHTML('beforeend', '<p>Привет</p>');
	}
});

mutation.observe(slidActive, {
	attributes: true,
	attributeFilter: ['class'],
})
// slidActive.insertAdjacentHTML('beforeend', '<p>Привет</p>');

*/


// меню бургер

const menuBody = document.querySelector('.menu__body');
const html = document.querySelector('html');
const body = document.querySelector('body');
// console.log(html);
document.addEventListener("click", function (e) {

	const targetElement = e.target;

	if (!targetElement.closest('.menu__body')) {
		// html.classList.remove('menu-open');
		// html.classList.remove('lock');

	}
	if (targetElement.closest('.menu__icon')) {
		// html.classList.toggle('menu-open');
		// html.classList.toggle('lock');
	}

});