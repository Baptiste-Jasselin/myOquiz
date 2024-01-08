class Level {
  // Attributs (facultatif, mais recommandé : d'un coup d'oeil, on voit les propriétés de nos objets)
  id;
  name;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }
}

module.exports = Level;
