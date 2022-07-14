import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

import * as pon from "./modules/jquery.magnific-popup.js"
pon.popupNew();


import * as sln from "./modules/slick.js";
sln.sliderNew();

$('.slider__inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1
});
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});
$('.menu__btn').on('click', function(){
	$('.menu__list').toggleClass('menu__list--active')
});