const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,
	initialSlide: 1,

	navigation: {
		// nextEl: '.swiper-button-next',
		// prevEl: '.swiper-button-prev',
		nextEl: '.slider__nav-button--next',
		prevEl: '.slider__nav-button--prev'
	}
});