// On simplifie notre modèle au maximum pour faciliter la compréhension

const db = require("../../database/database-client");

class Level {
  id;
  name;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }

  // Methode Active Record n°1 : CREATE
  async insert() {
    const result = await db.query(`
      INSERT INTO "level" 
        ("name")
      VALUES
        ($1)
      RETURNING
        *
    `, [this.name]); // 'RETURNING *' permet de retourner le level qui a été inserré en BDD

    const insertedLevel = result.rows[0]; // { rows: [{ id, name }], rowCount: 1, ... }
    // insertedLevel = { id: 11, name: 'Facile', created_at: 2024-01-08T12:43:45.900Z, updated_at: null }
    
    this.id = insertedLevel.id; // Je met dans l'instance courante l'ID de ce qui viens d'être inséré
  }

  // Méthode Active Record n°2 : DELETE
  async delete() {
    const result = await db.query(`
      DELETE FROM "level" WHERE id = $1
    `, [this.id]);
    
    // Facultatif
    if (result.rowCount > 0) { // Si rowCount = 1, l'entité à bien été supprimé
      return true;
    } else { // Sinon, il y a eu une erreur qqpart, on retourne false
      return false;
    }
  }

}

module.exports = Level;
