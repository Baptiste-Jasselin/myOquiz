const { Car, Moto, ElectricCar } = require("./6.Vehicule");

const clio = new Car(50, 500);
console.log(clio);
clio.openDoors();


const harley = new Moto(100);
harley.start();
harley.makeNoise();
// harley.openDoors(); // Erreur harley.openDoors is not a function ==> normal, car la méthode openDoors, c'est pour les Car
harley.doAWheelies();

const suvElectric = new ElectricCar(150, 600, 3);
suvElectric.charge();

