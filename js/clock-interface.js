var Clock = require("./../js/clock.js").clockModule;
$(function() {
  setInterval(function(){
    var clock = moment().format('LLLL');
    $('.clock').text(clock);
  }, 500);
});
