$(document).ready(function() {
    // Add you code here
    console.log('api.js is working!');
    var API_URL = 'http://backoffice.zealicon.in/events';
    function getEvents() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', API_URL, true);
        xhr.onload = function () {
            if(this.status == 200) {
                // Parse received data into JS objects
                var events_data = JSON.parse(this.responseText);
                // New array to store events category wise
                var category_events = [];
                // Seperate the events based on categories
                category_events.push($.grep(events_data, function (obj) { return obj.category.toLowerCase() === 'coderz'; }));
                category_events.push($.grep(events_data, function (obj) { return obj.category.toLowerCase() === 'coloralo'; }));
                category_events.push($.grep(events_data, function (obj) { return obj.category.toLowerCase() === 'mechavoltz'; }));
                category_events.push($.grep(events_data, function (obj) { return obj.category.toLowerCase() === 'play it on'; }));
                category_events.push($.grep(events_data, function (obj) { return obj.category.toLowerCase() === 'robotiles'; }));
                category_events.push($.grep(events_data, function (obj) { return obj.category.toLowerCase() === 'zwars'; }));
                // Inject events into html
                var html = '';
                for(var i=0; i<6; i++) {
                    if(category_events[i].length !== 0) {
                        html += '<h2>' + category_events[i][0].category +'</h2>';
                        for(var j=0; j<category_events[i].length; j++) {
                            html += '<h3>'+ category_events[i][j].event_name +'</h3>';
                            html += '<p><b>Description: </b>' + category_events[i][j].event_description + '</p>';
                            html += '<p><b>Long Description: </b>' + category_events[i][j].long_des + '</p>';
                            html += '<p><b>Rules: </b>' + category_events[i][j].rules + '</p>';
                            html += '<p><b>Prize: </b>' + category_events[i][j].prize_money + '</p>';
                            html += '<p><b>Timing: </b>' + category_events[i][j].timing + '</p>';
                            html += '<p><b>Contact: </b>' + category_events[i][j].contact + '</p>';
                        }
                    }
                }
                document.getElementById("events").innerHTML = html;
            }
            else {
                document.getElementById("events").innerHTML = '<span>Error!</span>';
            }
        }
        xhr.send();
    }
    getEvents();
});