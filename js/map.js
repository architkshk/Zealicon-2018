$(document).ready(function(){
	$(".mapbtn").click(function(){
         $("#myNav").css({
        	height: "100%"
        });
	});
	$(".closebtn, .map-homep").click(function(){
        $("#myNav").css({
        	height: "0%"
        });
	});
});