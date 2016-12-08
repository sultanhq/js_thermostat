var increaseTemp = $("#increase-temp");
var decreaseTemp = $("#decrease-temp");
var resetTemp = $("#reset-button");
var powerSavingToggle = $("#power-saving-toggle");
var powerMode = $("#power-saving-state");
var API_KEY = (env.API_KEY)

var updateDisplay = function() {
  $("#currentTemp").text(thermostat.temp);
  $("#usage").text(thermostat.usage);
  $("#power-saving-state").text(thermostat.powerSaving);
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
