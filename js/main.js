

$(document).ready(function(){
	    if(window.innerHeight > window.innerWidth){
        alert("Please use Landscapemode for a better view!!");
        $('body').hide();
    }
    else{
		$(".iframe").colorbox({iframe:true, width:"100%", height:"100%"});
		$(".registerframe").colorbox({iframe:true, width:"90%", height:"95%"});
    	var d = new Date();
		var n = d.getHours();
		$('.moon').hide();
		if (n > 19 || n < 6) {
			$('#home').css('background','rgba(9,18,25,1)');
			$('.birds, .sun, .cloud1, .cloud2, .cloud3, .cloud4, .cloud5').css('display', 'none');
			$('.moon').show();
		}
		else {
			$('#home').css('background','linear-gradient(rgba(82,201,251,1),rgba(122,213,252,0.1),rgba(255,0,0,0))');
			$('.moon').hide();
		}
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
    }
    $( window ).on( "orientationchange", function( event ) {
      location.reload();
    });
    $("[data-toggle='tooltip']").tooltip();
});


function fout (){
	$('a').focusout();
}