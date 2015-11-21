$(document).ready(function() {

	$("#accordion").accordion({
		heightStyle: "content" 
	});
	
	
	/*form "Contact us" in the footer*/
	$( ".contactUs-title span" ).click(function(){
		$( ".footer form" ).slideToggle( 70, function() {
			$("input.userName").focus(); //for Firefox
		});
		$(".contactUs-title").toggleClass("up", 70);
	});



	/*side menu*/
	$('.menu-off').click(function(){
		$('.menu-on').show( "blind", {direction: 'horizontal'}, 70 );
	});
	$('.close-menu').click(function(){
		$('.menu-on').hide( "blind", {direction: 'horizontal'}, 70 );
		return false;
	});
	
});

	