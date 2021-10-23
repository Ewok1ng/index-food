const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,
	initialSlide: 1,

	navigation: {
		nextEl: '.slider__nav-button--next',
		prevEl: '.slider__nav-button--prev'
	}
});