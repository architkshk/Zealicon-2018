$(".view, .island, .grass1, .grass2").mouseover(function(){
	$('.island').addClass("islandHover");
	$('.grass1').addClass("grass1Hover");
	$('.grass2').addClass("grass2Hover");
});
$(document).keydown(function(e){
	if(e.keyCode==38){
		$('.island').addClass("islandHover");
		$('.grass1').addClass("grass1Hover");
		$('.grass2').addClass("grass2Hover");
	}
	else if(e.keyCode==40){
		$('.island').removeClass("islandHover");
		$('.grass1').removeClass("grass1Hover");
		$('.grass2').removeClass("grass2Hover");
	}
});