describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat.startTemp(20);
  });

    it('Start at 20 degrees', function() {

      expect(thermostat.temp).toEqual(20)
    });

    it('can increase the temperature by 1', function() {
      previousTemp = thermostat.temp
      thermostat.increaseTemp()
      expect(thermostat.temp).toBeGreaterThan(previousTemp)
    });

    it('can decrease the temperature by 1', function() {
      previousTemp = thermostat.temp
      thermostat.decreaseTemp()
      expect(thermostat.temp).toBeLessThan(previousTemp)
    });

    it('has a minimum temperature of 10', function () {
      expect(thermostat.minimumTemp).toEqual(10)
    });

    it('will throw an error when you try to decrease below minimum temp', function() {
      thermostat.startTemp(10);
      expect(function(){thermostat.decreaseTemp()}).toThrowError("Cannot reduce temp lower than 10")
    });

    it('checks if powersaving is on', function() {
      thermostat.powerSavingOn();
      expect(thermostat.powerSaving).toBe(true)
    });

    it('if powersaving is on maximum temp is 25', function() {
      thermostat.powerSavingOn();
      expect(thermostat.maximumTemp).toEqual(25)
    });

    it('if powersaving is off and temp is above maximum temp reduce to maximum temp', function() {
      thermostat.startTemp(25);
      thermostat.powerSavingOn();
      expect(thermostat.temp).toEqual(25)
    });

    it('if powersaving is off maximum temp is 32', function() {
      thermostat.powerSavingOff();
      expect(thermostat.maximumTemp).toEqual(32)
    });

    it('will throw an error when you try to increase above minimum temp', function() {
      thermostat.startTemp(25);
      thermostat.powerSavingOn();
      expect(function(){thermostat.increaseTemp()}).toThrowError("Cannot increase temp above maximum")
    });

    it('reset function will reset the temperature to 20', function(){
      thermostat.startTemp(25);
      thermostat.reset(20)
      expect(thermostat.temp).toEqual(20)
    });

    it('returns the current energy usage as low if < 18 degrees', function() {
      thermostat.startTemp(17);
      expect(thermostat.usage).toEqual("Low")
    });

    it('returns the current energy usage as medium if > 18 & < 25 degrees', function() {
      thermostat.startTemp(20);
      expect(thermostat.usage).toEqual("Medium")
    });

    it('returns the current energy usage as high if > 25 degrees', function() {
      thermostat.startTemp(27);
      expect(thermostat.usage).toEqual("High")
    });
});
