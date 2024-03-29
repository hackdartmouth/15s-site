$(document).ready(function(){
	$('body').hide();
	$('body').fadeIn(1500);
});

jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	$('.navbar-brand').click(function(event) {
		event.preventDefault();
		var target = $(this).prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	})
});