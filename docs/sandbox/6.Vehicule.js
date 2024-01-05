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

// Notion HERITAGE
// - Car ETEND la classe Vehicule. 
// - Car HERITE de la classe Vehicule

class Car extends Vehicule {

  bootCapacity; // Capacité du coffre

  constructor(enginePower, bootCapacity) { // enginePower = 50
    super(4, enginePower); // super() === Vehicule.constructor()
    this.bootCapacity = bootCapacity;
  }

  openDoors() {
    console.log("**Bruit de portes qui s'ouvrent**");
  }

  // ⚡️ 'CAR' hérite de toutes les propriétés de Vehicule !  (Pas besoin de les renoté en dessous !)
}

class Moto extends Vehicule {
  constructor(enginePower) { // Toute classe necessite un constructeur
    super(2, enginePower); // Toute classe qui hérite d'une autre doit appeler le parent !
  }

  // ⚡️ 'MOTO' hérite de toutes les METHODES de Vehicule ! (pas besoin de les réimplémenter)

  doAWheelies() {
    console.log("**Bruit de roue avant** couiiiiiiink");
  }
}

class ElectricCar extends Car {
  batteryCapacity; // en kwh

  constructor(enginePower, bootCapacity, batteryCapacity) {
    super(enginePower, bootCapacity);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`La voiture charge...`);
  }
}


module.exports = { Vehicule, Car, Moto, ElectricCar };
