class Vehicule {
  // Attributes (équivalent des 'let') => pour y accéder on passe par 'this.'
  nbOfWheels;
  enginePower;
  isStarted;

  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels; // this = l'instance = clio || trotinette || ferrari
    this.enginePower = enginePower;
    this.isStarted = false;
  }
  
  start() {
    this.isStarted = true;
  }

  stop() {
    this.isStarted = false;
  }

  makeNoise() {
    if (this.isStarted) {
      console.log("Vroooom !");
    }
  }

  toString() {
    /* Méthode 1 : 
    if (this.isStarted) {
      return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, est démarré.`;
    } else {
      return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, n'est pas démarré.`;
    }
    */

    // Méthode 2 :
    const startedString = this.isStarted ? "est démarré" : "n'est pas démarré"; // Termary operator
    return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, ${startedString}.`;
  }

  boostEngine(power)  {
    /* Méthode 1
    this.enginePower = this.enginePower + power;
    if (this.enginePower > 2000) { // Si c'est plus que 2000
      this.enginePower = 2000; // Alors je le limite à 2000
    } 
    */

    // Méthode 2
    const newEnginePower = Math.min(2000, this.enginePower + power); // On prend le min entre 2000 et (la valeur actuel + le boost)
    this.enginePower = newEnginePower;
  }
}

module.exports = Vehicule; // Exporter la fabrique à véhicule
