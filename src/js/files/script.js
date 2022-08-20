// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const decorationPageVideo = document.querySelector('.decoration-page__video');
const decorationPageButton = document.querySelector('.decoration-page__button');

function playVideo() {
	if (decorationPageVideo.pause) {
		decorationPageVideo.play()
		decorationPageButton.style.display = 'none';
	} else {
		decorationPageVideo.pause()
	}
}

decorationPageButton.addEventListener("click", playVideo);


function pauseVideo() {
	if (decorationPageVideo.play) {
		decorationPageVideo.pause();
		decorationPageButton.style.display = 'block';

	} else {
		decorationPageVideo.play()
	}
}

decorationPageVideo.addEventListener("click", pauseVideo);