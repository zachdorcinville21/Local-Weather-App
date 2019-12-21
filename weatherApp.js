//Get user coordinates
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON(
      "https://fcc-weather-api.glitch.me/api/current?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude,
//Display weather, temp, and image from fcc API
      function(json) {
        $("#current-weather").html(json.weather[0].main);
        $("#temp").text(Math.round(json.main.temp) + " °C");
        $("#weather-image").html("<img src =" + json.weather[0].icon + ">");
//Add button functionality to toggle fahrenheit and celsius
        var temp = json.main.temp;
        var fahtemp = temp * (9 / 5) + 32;
        $("#fah").on("click", function() {
          $("#temp").text(Math.round(fahtemp) + " °F");
        });
        $("#cel").on("click", function() {
          $("#temp").text(Math.round((fahtemp - 32) * (5 / 9)) + " °C");
        });
      }
    );
  });
}
//Get user location using ipdata API
const accessKey = "2feefe0c07b5159a792f451c9743b6de9aac18c721c2b0f63834243e";

$(document).ready(function() {
  $.get(
    "https://api.ipdata.co?api-key=" + accessKey,
    function(response) {
      $("#location").html(response.city + ", " + response.region);
    },
    "jsonp"
  );
});
