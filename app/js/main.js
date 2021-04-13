$(document).ready(function () {
	$('.menu__icon').click(function (event) {
		$('.menu__icon,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function () {
	$('.header__link').click(function (event) {
		$('.menu__icon,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});