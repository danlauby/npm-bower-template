var Clock = require("./../js/clock.js").clockModule;
$(function() {
  var alarm = new Clock();

  alarm.getSevenDays().forEach(function(day){
    $("#day").append("<option value='"+day+"'>" + day + "</option>");
  });

  alarm.getHours().forEach(function(hour) {
    $('#hour').append("<option value='"+hour+"'>" + hour + "</option>");
  });

  alarm.getMin().forEach(function(min) {
    $('#min').append("<option value='"+min+"'>" + min + "</option>");
  });



  $('#alarm-input').submit(function(e) {
    e.preventDefault();
    var target = "Tuesday, March 14, 2017 1:10 PM";
    setInterval(function(){
      var clock = moment().format('LLLL');
      if(clock === target){
        $("body").css({"background-color":"#000"})
      }
      $('.clock').text(clock);
    }, 500);
  });
});
