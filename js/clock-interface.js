var Clock = require("./../js/clock.js").clockModule;
$(function() {
  var target = "Tuesday, March 14, 2017 11:49 AM";
  setInterval(function(){
    var clock = moment().format('LLLL');
    if(clock === target){
      $("body").css({"background-color":"#000"})
    }

    $('.clock').text(clock);
  }, 500);
});
