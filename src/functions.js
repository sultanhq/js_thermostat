var increaseTemp = $("#increase-temp");
var decreaseTemp = $("#decrease-temp");
var resetTemp = $("#reset-button");
var powerSavingToggle = $("#power-saving-toggle");
var powerMode = $("#power-saving-state");
var selectedCity = "London";

var API_KEY = (env.API_KEY)

var updateDisplay = function() {
  $("#currentTemp").text(thermostat.temp);
  $("#usage").text(thermostat.usage);
  $("#power-saving-state").text(thermostat.powerSaving);
  updateUsageColor();
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity},uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`, function(data) {
  $("#weather-api").text(data.main.temp);
});
};

function displayWeather(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var preToken = ',uk&appid=';
  var units = '&units=metric';
  $.get(url + city + preToken + API_KEY + units, function(data) {
  $("#weather-api").text(data.main.temp);
  });
};

$("#cities").change( function(){
  var selectedCity = $("#cities").val();
  displayWeather(selectedCity);
});

updateUsageColor = function(){
  $("#usage").attr('class', thermostat.usage);
};

window.onload = function() {
  thermostat = new Thermostat;
  updateDisplay();
}

increaseTemp.click(function() {
  thermostat.increaseTemp();
  updateDisplay();
});

decreaseTemp.click(function() {
  thermostat.decreaseTemp();
  updateDisplay();
});

resetTemp.click(function() {
  thermostat.reset(20);
  updateDisplay();
});

powerSavingToggle.click(function() {
  if (thermostat.powerSaving === false) {
      thermostat.powerSavingOn();
    }
  else {
        thermostat.powerSavingOff();
  }
  updateDisplay();

});
