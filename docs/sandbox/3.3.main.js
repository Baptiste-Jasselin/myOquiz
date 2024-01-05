const Vehicule = require("./3.2.Vehicule");


// Instancier une clio
const clio = new Vehicule(4, 50);
console.log(clio);

clio.start();
clio.makeNoise();
console.log(clio.isStarted);

clio.stop();
clio.makeNoise();
console.log(clio.isStarted);

console.log(clio.toString());

// Instancier une ferrari
const ferrari = new Vehicule(4, 150);
ferrari.boostEngine(500);
console.log(ferrari.enginePower); // 150 + 500 = 650

ferrari.boostEngine(3000); // On est capé à 2000
console.log(ferrari.enginePower); // 2000

// Instancier une trotinette electrique
const trotinette = new Vehicule(2, 30);
trotinette.start();
trotinette.makeNoise();

