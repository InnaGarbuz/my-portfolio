$(document).ready(function() {

$("#portfolio_grid").mixItUp();

$(".s_portfolio controls ul li").click(function() {
  $(".s_portfolio controls ul li").removeClass("active");
  $(this).addClass("active");
});

$(".popup").magnificPopup({type:"image"});
$(".popup_content").magnificPopup({type:"inline", midClick: true});


$(window).load(function() {
  $('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
});

$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
$(".toggle_mnu").animated("bounceInRight", "bounceInRight");

$(".animation_1").animated("slideInLeft", "slideOutLeft");
$(".animation_2").animated("zoomIn", "flipOutX");
$(".animation_3").animated("slideInRight", "slideOutRight");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

$("#nav-toggle").click(function() {
	if($(".top_menu").is(":visible")) {
		$(".top_menu").fadeOut(600);
		$(".top_menu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInUp animated");
	}
});

$( ".top_menu ul a" ).click( function() {
  $(".top_menu").fadeOut(600 );
  $("#nav-toggle").toggleClass( "active" );
});

$("#nav-toggle" ).on( "click", function() {
  $( this ).toggleClass( "active" );
});


});
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(900).fadeOut("slow");
});
