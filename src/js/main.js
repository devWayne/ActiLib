$(function() {
	$('.header').stickyNavbar();
	$('#docs').click(function() {
		$('html,body').animate({
			scrollTop: $('#end').offset().top
		}, 2000);
		return false;
	});
});