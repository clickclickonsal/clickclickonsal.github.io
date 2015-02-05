$(document).ready(function() {
  $(window).resize(function(){
		if( $(window).width() < 768 ){
			$(".nav-pills").addClass("nav-stacked");
		}
		else {
			$(".nav-pills").removeClass("nav-stacked");
		}
	});
	$(window).on("load", function() {
		if( $(window).width() < 768 ){
			$(".nav-pills").addClass("nav-stacked");
		}
	});
});