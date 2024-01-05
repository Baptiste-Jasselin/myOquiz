class Vehicule {
  #nbOfWheels;
  #enginePower;
  #isStarted;

  constructor(nbOfWheels, enginePower) {
    this.#nbOfWheels = nbOfWheels;
    this.#enginePower = enginePower;
    this.#isStarted = false;
  }
  
  start() {
    this.#isStarted = true;
  }

  stop() {
    this.#isStarted = false;
  }

  makeNoise() {
    if (this.#isStarted) {
      console.log("Vroooom !");
    }
  }

  toString() {
    const startedString = this.#isStarted ? "est démarré" : "n'est pas démarré";
    return `Véhicule à ${this.#nbOfWheels} roues, de puissance ${this.#enginePower}, ${startedString}.`;
  }

  // Nos getters (passe-plat)
  get nbOfWheels() { return this.#nbOfWheels; }
  get enginePower() { return this.#enginePower; }
  get isStarted() { return this.#isStarted; }

  // Nos setters
  set nbOfWheels(value) {
    if (value <= 0) { throw new Error("Les voiture sans roues n'existent pas"); }
    this.#nbOfWheels = value;
  }

  set enginePower(value) {
    if (value < 0) { throw new Error("enginePower should be positive"); }
    if (value > 2000) { throw new Error("enginePower should be below 2000"); }

    this.#enginePower = value;
  }
  // Ex: ne pas mettre de setter pour le isStarted => on force le passage du démarrage par la méthode 'start()' 
}

module.exports = Vehicule;
