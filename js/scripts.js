$(window).on('load resize', function() {
	$('.programs-i ul li h4 span').each(function() {
		if ( $(this).outerHeight() >= 58 ) {
			$(this).parent().addClass('big');
		} else {
			$(this).parent().removeClass('big');
		}
	});
});
$(window).trigger('resize');
$(function() {
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.specialists-i > div > div').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		adaptiveHeight: true
	});
	$('.reviews-i > div > div').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		adaptiveHeight: true
	});
	$('.statictics-i > div').on('mouseenter', function() {
		$(this).find('li').each(function() {
			$(this).css({
				'-webkit-transform': 'rotate('+(0.5-Math.random())*45+45+'deg)',
				'transform': 'rotate('+(0.5-Math.random())*45+45+'deg)'
			});
		});
	});
	$('.statictics-i > div').on('mouseleave', function() {
		$(this).find('li').css({
			'-webkit-transform': 'rotate(0deg)',
			'transform': 'rotate(0deg)'
		});
	});
});
$(function() {
	var t = $('.gallery-i > div > div');
	t.slick({
		slidesToShow: 11,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		adaptiveHeight: true,
		centerMode: true
	});
	function coverFlow(nextSlide) {
			t.find('[data-slick-index]').removeClass('hidden');
			t.find('[data-slick-index="'+eval(nextSlide-5)+'"]').addClass('hidden');
			t.find('[data-slick-index="'+eval(nextSlide+5)+'"]').addClass('hidden');
			t.find('[data-slick-index="'+eval(nextSlide)+'"]').css({
				'transform': 'translateX(0)',
				'z-index': 10,
			});;
			for ( var i=1; i<=4; i++ ) {
				t.find('[data-slick-index="'+eval(nextSlide-i)+'"]').css({
					'transform': 'translateX(-40px)',
					'z-index': 5-i,
				});
			}
			for ( var i=1; i<=4; i++ ) {
				t.find('[data-slick-index="'+eval(nextSlide+i)+'"]').css({
					'transform': 'translateX(40px)',
					'z-index': 10-i,
				});
			}
	}
	coverFlow(0);
	t.on('beforeChange', function(event,slick,currentSlide,nextSlide) {
		coverFlow(nextSlide);
	});
});
