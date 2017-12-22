$(document).ready(function () {
  var apiKey = 'd63a56c5ee8fd2af7c8e6ca176244b1e';

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $('form').submit(function() {
    var city = $(this).serializeArray()[0].value;
    $.get('http://api.openweathermap.org/data/2.5/weather?q='
    + city + '&&appid=' + apiKey, function(data) {
      var tempF = Math.round(data.main.temp * (9/5) - 459.67);
      $('body').append('<p> The temperature in ' + capitalize(city) + ' is currently '
      + tempF + ' degrees Fahrenheit.');
    }, 'json');
    return false;
  });
})
