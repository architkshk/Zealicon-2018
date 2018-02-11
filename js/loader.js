$(window).on("load",function(){
  $("#whiteScreen").hide();
    $('.counter_2').hide();
    setTimeout(function(){
    		$("#ball-loader").css({
    			display: "none"
    		});
    		$("#mySpaceship").css({
                display: "block"
    		});
    		$("#Top_counter").css({
                display: "block"
    		});
    }, 3000); 
    $(function(){
      $('.counter_1').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');
    
       $({ countNum: $this.text()}).delay(4000).animate({
          countNum: countTo
        },

       {
      
          duration: 3000,
          easing:'linear',
          step: function() {
          $this.text(Math.floor(this.countNum));
       },
          complete: function() {
          $('.counter_2').show();
          $this.text(this.countNum);
          $('.counter_1').hide();
          $('.counter_2').each(function() {
             var $this = $(this),
             countTo = $this.attr('data-count');
    
             $({ countNum: $this.text()}).delay(250).animate({
               countNum: countTo
             },

             {
      
                duration: 5000,
                easing:'linear',
                step: function() {
                $this.text(Math.floor(this.countNum));
             },
                complete: function() {
                $this.text(this.countNum);
                setTimeout(function(){
                   $("#whiteScreen").fadeIn(1000);
                   $("#mySpaceship").css({
                     display: "none"
                   });
                   $("#Top_counter").css({
                     display: "none"
                   });
                },3000);
                setTimeout(function(){
                   $("#whiteScreen").fadeOut();
                   $("#mySpaceship").css({
                     display: "none"
                   });
                   $("#Top_counter").css({
                     display: "none"
                   });
                   $("#pages").css({
                     display: "block"
                   });
                },6000);
             }

            });
      
          });
        }

    });  
});
//For color swaps
 var rotate = function() {
  $("#Top_counter")
    .delay(150).queue(function() {
        $(this).css({
            "background": "#e57373 center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function() {
        $(this).css({
            "background": "#f48fb1 center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function() {
        $(this).css({
            "background": "#e1bee7 center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function() {
        $(this).css({
            "background": "#bbdefb center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function(next) {
        $(this).css({
            "background": "#c5e1a5 center center fixed no-repeat"
        });
        $(this).dequeue();
        next();
    })
    .queue(rotate);
};

rotate();
//For image swaps

 /*var rotate = function() {
  $("#Top")
    .delay(150).queue(function() {
        $(this).css({
            "background": "url(images/donald.png) center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function() {
        $(this).css({
            "background": "url(images/tom.png) center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function() {
        $(this).css({
            "background": "url(images/sea1.png) center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function() {
        $(this).css({
            "background": "url(images/Picture1.png) center center fixed no-repeat"
        });
        $(this).dequeue();
    })
    .delay(150).queue(function(next) {
        $(this).css({
            "background": "url(images/logo.png) center center fixed no-repeat"
        });
        $(this).dequeue();
        next();
    })
    .queue(rotate);
};

rotate();*/
 
});
  
});