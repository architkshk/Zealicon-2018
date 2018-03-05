

$(document).ready(function(){
	    if(window.innerHeight > window.innerWidth){
        alert("Please use Landscapemode for a better view!!");
        $('body').hide();
    }
    else{
		$('body').height(window.innerHeight);
		$('body').show();
		$(window).on('load',function() {
    		setTimeout(function(){
				$(".vidloader").fadeOut();
				$("#my_audio")[0].play();
			},100);
		});

        
        $(".view, .island, .grass1, .grass2").mouseover(function(){
          	// $("#my_audio")[0].play();
			/** $('.shore, .water, .bird, .bird_left, .pikachu, .pikachu_left .castle, .chipmunk, .tape, .leftplant').addClass("islandHover");
			$('.zealicon').addClass('zealiconhover');
			$('.grass3').addClass("grass3Hover");
			$('.castle').addClass("castlehover");
			$('.chipmunk').addClass("chipmunkhover");
			$('.jungle').addClass("junglehover");
			$('.shinchan').addClass("shinchanhover");
			$('.bottle').addClass("bottlehover");
			$('.boat').addClass("boathover");
			$('.sun').addClass("sunhover");
			$('.winnie').addClass("winniehover"); **/
			$('body').addClass("hover");
			$('.grass1').addClass("grass1Hover");
			$('.grass2').addClass("grass2Hover");
		});
		$(document).keydown(function(e){
			if(e.keyCode==38){
				/**$('.shore, .water, .bird, .pikachu, .chipmunk, .tape, .leftplant, .baloon, .lamp, .starfish').addClass("islandHover");
				$('.zealicon').addClass('zealiconhover');
				$('.grass3').addClass("grass3Hover");
				$('.castle').addClass("castlehover");
				$('.chipmunk').addClass("chipmunkhover");
				$('.jungle').addClass("junglehover");
				$('.shinchan').addClass("shinchanhover");
				$('.bottle').addClass("bottlehover");
				$('.boat').addClass("boathover");
				$('.sun').addClass("sunhover");
				$('.winnie').addClass("winniehover");**/
				$('body').addClass("hover");
				$('.grass1').addClass("grass1Hover");
				$('.grass2').addClass("grass2Hover");
			}
			else if(e.keyCode==40){
				/**$('.shore, .water, .bird, .pikachu, .castle, .chipmunk, .tape, .leftplant, .baloon, .lamp, .starfish').removeClass("islandHover");
				$('.zealicon').removeClass('zealiconhover');
				$('.grass3').removeClass("grass3Hover");
				$('.castle').removeClass("castlehover");
				$('.chipmunk').removeClass("chipmunkhover");
				$('.jungle').removeClass("junglehover");
				$('.shinchan').removeClass("shinchanhover");
				$('.bottle').removeClass("bottlehover");
				$('.boat').removeClass("boathover");
				$('.sun').removeClass("sunhover");
				$('.winnie').removeClass("winniehover");**/
				$('body').removeClass("hover");
				$('.grass1').removeClass("grass1Hover");
				$('.grass2').removeClass("grass2Hover");
			}
			else if(e.keyCode==9){
				return false;
			}
		});

		$('.menu-button').click(function(){
			$('.menu').css('display','block');
			$('a').focusout();
		});

		$('.abbtn, .abbtn-top').click(function(){
			$('#aboutpage').css('right','0');
			$('#homepage').css('right','100vw');
		});
		$('.abclose').click(function(){
			$('#aboutpage').css('right','-100vw');
			$('#homepage').css('right','0');
		});

		$('.spbtn').click(function(){
			$('#sponsorpage').css('right','0');
			$('#homepage').css('right','100vw');
		});
		$('.spclose').click(function(){
			$('#sponsorpage').css('right','-100vw');
			$('#homepage').css('right','0');
		});

		// $('.contbtn').click(function(){
		// 	$('#contactpage').css('right','0');
		// 	$('#homepage').css('right','100vw');
		// });
		// $('.contclose').click(function(){
		// 	$('#contactpage').css('right','-100vw');
		// 	$('#homepage').css('right','0');
		// });
		$('.schbtn').click(function(){
			$('#schedulepage').css('right','0');
			$('#homepage').css('right','100vw');
		});
		$('.scclose').click(function(){
			$('#schedulepage').css('right','-100vw');
			$('#homepage').css('right','0');
		});

    	$('.static').mouseover(function(){
    		$('.static').css('display','none');
    		$('.active').css('display','block');
    	});
    	$('.static').mouseleave(function(){
    		$('.static').css('display','block');
    		$('.active').css('display','none');
    	});
      }
    $( window ).on( "orientationchange", function( event ) {
      location.reload();
    });
    $("[data-toggle='tooltip']").tooltip();
});
