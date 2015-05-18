$("#myCarousel").carousel();
function autoplay(){
	if ($('.btn').text() === 'Autoplay OFF') {
		$("#myCarousel").carousel('pause');
		$('.btn').text('Autoplay ON');
	} else {
		$("#myCarousel").carousel();
		$('.btn').text('Autoplay OFF');
	}
	
}