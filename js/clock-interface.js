var Clock = require("./../js/clock.js").clockModule;
$(function() {
  var alarm = new Clock();

  alarm.getSevenDays().forEach(function(day){
    $("#day").append("<option value='"+day+"'>" + day + "</option>");
  });

  alarm.getHour().forEach(function(hour) {
    $('#hour').append("<option value='"+hour+"'>" + hour + "</option>");
  });

  alarm.getMin().forEach(function(min) {
    $('#min').append("<option value='"+min+"'>" + min + "</option>");
  });



  $('#alarm-input').submit(function(e) {
    e.preventDefault();
    var year = moment().format("YYYY");
    var target = $("#day").val() +", "+year+" "+ $("#hour").val() +":"+ $("#min").val() + " " + $("#ampm").val();
    $("#target").text(target);
    $("#alarm-input").children("button").toggle();

    $("#new-reminder").click(function(){
      window.location.reload();
    });
    setInterval(function(){
      var clock = moment().format('LLLL');
      if(clock === target){
        $("body").css({"background-color":"#000"})
      }
      console.log(target);
      $('#current').text(clock);
    }, 500);
  });
});
