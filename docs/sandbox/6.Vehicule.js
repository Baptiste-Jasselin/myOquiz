class Vehicule {
  nbOfWheels;
  enginePower;
  isStarted;
  
  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels;
    this.enginePower = enginePower;
    this.isStarted = false;
  }

  toString() {
    return `Véhicule à ${this.nbOfWheels} roues. Puissance ${this.enginePower}. ${this.isStarted ? "Est démarré" : "N'est pas démarré"}.`;
  }

  makeNoise() {
    if (this.isStarted) {
      console.log(`Vrooom !`);
    }
  }

  start() {
    this.isStarted = true;
  }

  stop() {
    this.isStarted = false;
  }
}

module.exports = { Vehicule };
