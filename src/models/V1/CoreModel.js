class CoreModel {
  // Propriétés communes à nos modèles
  #id; // On passe l'id en privé pour l'exemple
  created_at;
  updated_at;

  constructor(obj) {
    this.#id = obj.id;
    this.created_at = new Date(); // Ajout d'un created_at pour l'exemple !
  }

  get id() { return this.#id; }

  // Ne mettons pas de setter pour que l'exterieur ne puisse pas MODIFIER l'id !
}

module.exports = CoreModel;
