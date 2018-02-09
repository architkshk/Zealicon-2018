$(document).ready(function(){
	$(".button").click(function(){
         $("#myNav").css({
        	height: "100%"
        });
	});
	$(".closebtn").click(function(){
        $("#myNav").css({
        	height: "0%"
        });
	});
});