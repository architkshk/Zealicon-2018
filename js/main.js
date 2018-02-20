

$(document).ready(function(){
	    if(window.innerHeight > window.innerWidth){
        alert("Please use landscape mode!");
        $('body').hide();
    }
    else{
		$('body').height(window.innerHeight);
	    $('body').show();
		$('.antiscroll-wrap').lionbars({
			autohide : false
		});
    	$(window).on('load',function() {
    		setTimeout(function(){
	            $('#whiteScreen').fadeIn();
    			$(".vidloader").fadeOut();
    			if ($('.stripcontent').height() > $('.stripcontainer').height()) {
		        setInterval(function () {
		            start();
		       	}, 2000); 
		    }


		setTimeout(function(){
	            $('.stripcontainer').fadeOut();
	            var typed = new Typed('#welcome', {
				  strings: ["","Welcome to the 90's",""],
				  typeSpeed: 40
				});
	    	},15000);
    		
			setTimeout(function(){
				$('#whiteScreen').fadeOut();
	            $("#pages").css({
	              display: "block"
	          });

	        },22000);

		},3000);


function animateContent(direction) {  
    var animationOffset = $('.stripcontainer').height() - $('.stripcontent').height()-30;
    if (direction == 'up') {
        animationOffset = 0;
    }

    console.log("animationOffset:"+animationOffset);
    $('.stripcontent').animate({ "marginTop": (animationOffset)+ "px" }, 10000);
}

function down(){
    animateContent("down")
}

function start(){
 setTimeout(function () {
    down();
}, 2000);
}

		$('.skip').click(function(){
	            $('.stripcontainer').fadeOut();
	            $('.skip').fadeOut();
	            var typed = new Typed('#welcome', {
				  strings: ["","Welcome to the 90's",""],
				  typeSpeed: 40
				});			
				setTimeout(function(){
				$('#whiteScreen').fadeOut();
	            $("#pages").css({
	              display: "block"
	          });
	        },6200);
		});	
          	$(".view, .island, .grass1, .grass2").mouseover(function(){
          	$("#my_audio")[0].play();
			$('.island, .water, .bird, .bird_left, .pikachu, .pikachu_left .castle, .chipmunk, .tape, .leftplant').addClass("islandHover");
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
			else if(e.keyCode==9){
				return false;
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

		$('.contbtn').click(function(){
			$('#contactpage').css('right','0');
			$('#homepage').css('right','100vw');
		});
		$('.contclose').click(function(){
			$('#contactpage').css('right','-100vw');
			$('#homepage').css('right','0');
		});
		$('.schbtn').click(function(){
			$('#schedulepage').css('right','0');
			$('#homepage').css('right','100vw');
		});
		$('.scclose').click(function(){
			$('#schedulepage').css('right','-100vw');
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
    $("[data-toggle='tooltip']").tooltip();  
});
