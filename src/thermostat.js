'use strict';
function Thermostat() {

  this.temp = null;
  this.minimumTemp = 10;
  this.powerSaving = false;
  this.maximumTemp = 25
  this.usage = ""
}

Thermostat.prototype.startTemp = function(startTemp) {
  this.temp = startTemp
};

Thermostat.prototype.reset = function(temp) {
  this.temp = temp
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temp >= this.maximumTemp) {
    throw new Error("Cannot increase temp above maximum");
  }
  else {
    this.temp++;
  };
  this.currentUsage();
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp <= this.minimumTemp) {
    throw new Error("Cannot reduce temp lower than 10");
  }
  else {
    this.temp--;
  };
  this.currentUsage();
};

Thermostat.prototype.powerSavingOn = function() {
  this.maximumTemp = 25
  if (this.temp > this.maximumTemp) {
    var tempAdjustment = this.temp - this.maximumTemp;
    var i = 0;
      for ( i = 0; i < tempAdjustment; i++)
      {
        this.decreaseTemp();
      }
  }
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.maximumTemp = 32;
  this.powerSaving = false
};

Thermostat.prototype.currentUsage = function (){

  if (this.temp < 18)
    {
      this.usage = "Low";
    }
  else if (this.temp > 18 && this.temp < 25)
    {
      this.usage = "Medium";
    }
  else
    {
      this.usage = "High";
    }
    return this.usage
};
