const CoreModel = require("./CoreModel");

class Level extends CoreModel{ // PascalCase -> majuscule à la première lettre ==> convention ! 
  // Attributs (facultatif, mais recommandé : d'un coup d'oeil, on voit les propriétés de nos objets)
  name;

  constructor(obj) {
    super(obj);
    this.name = obj.name;
  }
}

module.exports = Level;
