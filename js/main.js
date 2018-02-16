

$(document).ready(function(){
	    if(window.innerHeight > window.innerWidth){
        alert("Please use landscape mode!");
        $('body').hide();
    }
    else{

    	$(window).on('load',function() {
    		setTimeout(function(){
    			$(".vidloader").fadeOut();
	            $('#whiteScreen').fadeIn();
	            var typed = new Typed('#welcome', {
				  strings: ["","Welcome to the 90's",""],
				  typeSpeed: 40
				});
	    	},3000);
    		
			setTimeout(function(){
				$('#whiteScreen').fadeOut();
	            $("#pages").css({
	              display: "block"
	          })
	        },6500);	
	        $('body').show();
          	$(".view, .island, .grass1, .grass2").mouseover(function(){
			$('.island, .water, .bird, .pikachu, .castle, .chipmunk, .tape, .leftplant').addClass("islandHover");
			$('.zealicon').addClass('zealiconhover');
			$('.grass1').addClass("grass1Hover");
			$('.grass2').addClass("grass2Hover");
			$('.grass3').addClass("grass3Hover");
			$('.castle').addClass("castlehover");
			$('.chipmunk').addClass("chipmunkhover");
			$('.jungle').addClass("junglehover");
			$('.shinchan').addClass("shinchanhover");
			$('.bottle').addClass("bottlehover");
			$('.boat').addClass("boathover");
			$('.sun').addClass("sunhover");
			$('.winnie').addClass("winniehover");
		});
		$(document).keydown(function(e){
			if(e.keyCode==38){
				$('.island, .water, .bird, .pikachu, .chipmunk, .tape, .leftplant, .baloon, .lamp, .starfish').addClass("islandHover");
				$('.zealicon').addClass('zealiconhover');
				$('.grass1').addClass("grass1Hover");
				$('.grass2').addClass("grass2Hover");
				$('.grass3').addClass("grass3Hover");
				$('.castle').addClass("castlehover");
				$('.chipmunk').addClass("chipmunkhover");
				$('.jungle').addClass("junglehover");
				$('.shinchan').addClass("shinchanhover");
				$('.bottle').addClass("bottlehover");
				$('.boat').addClass("boathover");
				$('.sun').addClass("sunhover");
				$('.winnie').addClass("winniehover");
			}
			else if(e.keyCode==40){
				$('.island, .water, .bird, .pikachu, .castle, .chipmunk, .tape, .leftplant, .baloon, .lamp, .starfish').removeClass("islandHover");
				$('.zealicon').removeClass('zealiconhover');
				$('.grass1').removeClass("grass1Hover");
				$('.grass2').removeClass("grass2Hover");
				$('.grass3').removeClass("grass3Hover");
				$('.castle').removeClass("castlehover");
				$('.chipmunk').removeClass("chipmunkhover");
				$('.jungle').removeClass("junglehover");
				$('.shinchan').removeClass("shinchanhover");
				$('.bottle').removeClass("bottlehover");
				$('.boat').removeClass("boathover");
				$('.sun').removeClass("sunhover");
				$('.winnie').removeClass("winniehover");
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

		$('.spbtn').click(function(){
			$('#sponsorpage').css('right','0');
			$('#homepage').css('right','100vw');
		});
		$('.spclose').click(function(){
			$('#sponsorpage').css('right','-100vw');
			$('#homepage').css('right','0');
		});
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
});
