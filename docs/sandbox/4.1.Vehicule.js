class Vehicule {
  nbOfWheels;
  #enginePower;
  #isStarted; // isStarted est maintenant une propriété PRIVEE ! Non accessible HORS de la classe

  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels;
    this.#enginePower = enginePower;
    this.#isStarted = false;
  }
  
  start() {
    console.log("Verification des bougies...");
    console.log("Verification de la subduction méchanique des pneus");
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
    const startedString = this.#isStarted ? "est démarré" : "n'est pas démarré"; // Termary operator
    return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.#enginePower}, ${startedString}.`;
  }

  boostEngine(power)  {
    const newEnginePower = Math.min(2000, this.#enginePower + power); // On prend le min entre 2000 et (la valeur actuel + le boost)
    this.#enginePower = newEnginePower;
  }

  setEnginePower(power) { // SETTER = pour modifier une propriété PRIVEE depuis l'exterieur (sous certaines conditions définie dans le setter)
    // On peut alors controler, par exemple, le type du power
    if (typeof power !== "number") {
      throw new Error("power should be a number");
    }

    if (power < 0) {
      throw new Error("power should positive");
    }

    this.#enginePower = power;
  }

  getEnginePower() { // GETTER = pour laisser la possibilité de lire la valeur depuis l'exterieur
    return this.#enginePower;
  }
}

module.exports = Vehicule;
