

$(document).ready(function(){
	    if(window.innerHeight > window.innerWidth){
        alert("Please use landscape mode!");
        $('body').hide();
    }
    else{

          	$('body').show();
          	$(".view, .island, .grass1, .grass2").mouseover(function(){
			$('.island, .water').addClass("islandHover");
			$('.zealicon').addClass('zealiconhover');
			$('.grass1').addClass("grass1Hover");
			$('.grass2').addClass("grass2Hover");
		});
		$(document).keydown(function(e){
			if(e.keyCode==38){
				$('.island, .water').addClass("islandHover");
				$('.zealicon').addClass('zealiconhover');
				$('.grass1').addClass("grass1Hover");
				$('.grass2').addClass("grass2Hover");
			}
			else if(e.keyCode==40){
				$('.island, .water').removeClass("islandHover");
				$('.zealicon').removeClass('zealiconhover');
				$('.grass1').removeClass("grass1Hover");
				$('.grass2').removeClass("grass2Hover");
			}
		});

		$('.menu-button').click(function(){
			$('.menu').css('display','block');
		});

		$('.abbtn').click(function(){
			$('#aboutpage').css('right','0');
			$('#homepage').css('right','100vw');
		});
		$('.abclose').click(function(){
			$('#aboutpage').css('right','-100vw');
			$('#homepage').css('right','0');
		});
      }
    $( window ).on( "orientationchange", function( event ) {
      location.reload();
    });    
});