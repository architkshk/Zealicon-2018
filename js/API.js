$(document).ready(function(){
  var url='http://backoffice.zealicon.in/events';
  var i=0;
  $.ajax({
   type: 'GET',
   url: url,
   success: function(wb){
     	//console.log(wb);
      console.log(wb);
                // console.log(wb.category);
                data =[];
                wb.forEach(function(d){
                  rules = d.rules;
                  rules = $.parseJSON(rules)
                  rulestring ="<ol>";
                  rules.forEach(function(r){
                    rulestring = rulestring+"<li>";
                    rulestring+=r;
                    rulestring+="</li>";

                  })
                  rulestring+="</ol>";
                  console.log(rules.length)
                	//console.log((d.category).replace(/\s/g,''));
                	data[(d.category).replace(/\s/g,'')] = [];
                	//console.log("#"+((d.category).replace(/\s/g,''))+"_modal_eventname");
                	//console.log("dfghj")
                	$("#"+((d.category).replace(/\s/g,''))+"_eventname").append("<li>"+(d.event_name)+"</li>");
                	$("#"+((d.category).replace(/\s/g,''))+"_modal_eventname").append('\<li role="presentation" class="brand-nav active "><a class="event_title_to_click" eventname="'+(d.event_name).replace(/\s/g,'').replace(/'/g, "\\'")+'" href="#event_tab_'+(d.event_name).replace(/\s/g,'').replace(/'/g, "\\'")+'" class="event_list" aria-controls="event_tab_'+(d.event_name).replace(/\s/g,'').replace(/'/g, "\\'")+'" role="tab" data-toggle="tab">'+(d.event_name)+'</a></li>');
                	data[(d.category).replace(/\s/g,'')].push(d);
                	//console.log($.parseJSON(d.contact)[0].name)
                	//console.log($.parseJSON(d.contact)[0].number)
                	$("#"+((d.category).replace(/\s/g,''))+"_event_desc_default").append('\
                    <div role="tabpanel" class="tab-pane event_specific_details_to_show" eve-cat="'+(d.category).replace(/\s/g,'')+'" id="event_tab_'+(d.event_name).replace(/\s/g,'')+'">\
                    <div class="col-md-8" id="desc">\
                    <h2 align="center">Event Description</h2>'+$.parseJSON(d.event_description)+'<br><h3 align="center">Rules</h3>'+'\
                    '+
                        rulestring
                    +'<br>\
                    </div>\
                    <div class="col-md-4 eventlist">\
                    <h3>Prizes</h3>\
                    <p>\
                    '+$.parseJSON(d.prize_money)+'\
                    </p>\
                    <h3>Results</h3>\
                    <p>\
                    Coming Soon\
                    </p>\
                    <h3>Venue</h3>\
                    <p>\
                    '+d.timing+'\
                    </p>\
                    <h3>Contact</h3>\
                    <p>\
                    '+
                    $.parseJSON(d.contact)[0].name+':'+$.parseJSON(d.contact)[0].number+'<br>'+'\
                    '+
                    $.parseJSON(d.contact)[1].name+':'+$.parseJSON(d.contact)[1].number+'\
                    </p>\
                    </div>\
                    </div>\
                    ');

                });

                //console.log(data);
                // // New array to store events category wise
                // var category_events = [];
                // // Seperate the events based on categories
                // category_events.push($.grep(wb, function (obj) { return obj.category.toLowerCase() === 'coderz'; }));
                // category_events.push($.grep(wb, function (obj) { return obj.category.toLowerCase() === 'coloralo'; }));
                // category_events.push($.grep(wb, function (obj) { return obj.category.toLowerCase() === 'mechavoltz'; }));
                // category_events.push($.grep(wb, function (obj) { return obj.category.toLowerCase() === 'play it on'; }));
                // category_events.push($.grep(wb, function (obj) { return obj.category.toLowerCase() === 'robotiles'; }));
                // category_events.push($.grep(wb, function (obj) { return obj.category.toLowerCase() === 'zwars'; }));
                // // Inject events into html

                // var html = '';
                // for(var i=0; i<6; i++) {

                //     if(category_events[i].length !== 0) {''
                //     	console.log(category_events[i][0].category);
                //         $("#cat_name").html('<h2>' + category_events[i][0].category +'</h2>');
                //         for(var j=0; j<category_events[i].length; j++) {
                //             html += '<h3>'+ category_events[i][j].event_name +'</h3>';
                //             html += '<p><b>Description: </b>' + category_events[i][j].event_description + '</p>';
                //             html += '<p><b>Long Description: </b>' + category_events[i][j].long_des + '</p>';
                //             html += '<p><b>Rules: </b>' + category_events[i][j].rules + '</p>';
                //             html += '<p><b>Prize: </b>' + category_events[i][j].prize_money + '</p>';
                //             html += '<p><b>Timing: </b>' + category_events[i][j].timing + '</p>';
                //             html += '<p><b>Contact: </b>' + category_events[i][j].contact + '</p>';
                //         }

                //     }
                // }
                //document.getElementById("events").innerHTML = html;
              }
            });
$(document).on("click",".event_title_to_click",function(){
  event_name = $(this).attr('eventname');
  //console.log("33333333333333"+"#event_tab_"+event_name+" .event_specific_details_to_show")
  $(".event_specific_details_to_show").removeClass('active');
  $("#event_tab_"+event_name+".event_specific_details_to_show").addClass('active');
});

$(document).on("click",".category_to_click",function(){
  category = $(this).attr('data-category');
  //console.log("#"+category+".event_specific_details_to_show")
  $(".event_specific_details_to_show").removeClass('active');
  $("[eve-cat="+category+"].event_specific_details_to_show").first().addClass("active");
});

});
