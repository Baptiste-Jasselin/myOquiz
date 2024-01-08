// On simplifie notre modèle au maximum pour faciliter la compréhension

const db = require("../../database/database-client");

class Level {
  // ==== Attributes ====
  id;
  name;

  // ==== Constructor ====
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }

  // ==== Instance methods ====

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

  // Méthode Active Record n°6 : UPDATE
  async update() {
    await db.query(`UPDATE "level" SET name = $1 WHERE id = $2`, [this.name, this.id]);
  }

  // ==== Class methods ====

  // Méthode Active Record n°3 : READ (findById)
  static async findById(researchedId) {
    const result = await db.query('SELECT * FROM "level" WHERE id = $1', [researchedId]);
    
    const rawLevel = result.rows[0]; // { id, name, created_at, updated_at } (objet brut)
    if (!rawLevel) { return null; }

    const level = new Level(rawLevel); //  Level { id, name } (instance de Classe)
    return level; // En renvoyant l'instance de classe, on récupère également toutes les méthodes de l'instance : insert(), delete(), update(), ...
  }

  // Méthode Active Record n°4 : READ (findByName)
  static async findByName(researchedName) {
    // Retrouve dans la BDD le "premier" Level avec le nom de recherché et le renvoie
    const result = await db.query(`
      SELECT * FROM "level" WHERE name = $1
    `, [researchedName]);

    const foundLevel = result.rows[0]; // { id, name, created_at, updated_at } // Comme d'habitude 
    if (! foundLevel) { return null; } // Si aucun level avec le nom demandé n'est trouvé, on renvoie null -> typique Active Record

    // foundLevel = { id, name, created_at, updated_at }
    const level = new Level(foundLevel); // Level { id, name, update, delete }
    return level;

    // Pourquoi on renvoie :
    // return new Level(rawLevel) // { id, name, update(), delete(), insert() } ==> ceci est un Active Record
    
    // Plutôt que renvoyer directement : 
    // return rawLevel; // { id, name, created_at, updated_at } ==> Ceci est un plain objet JavaScript sans méthodes d'accès à la BDD
  }

  // Méthode Active Record n°5 : READ (findAll)
  static async findAll() {
    // Objectif : renvoyer tous les levels de la BDD
    
    // Etape 1 : récupérer tous les raw levels en BDD
    const result = await db.query('SELECT * FROM "level"');
    const rowLevels = result.rows; // [{}, {}, {}]

    // Etape 2 : renvoyer les Active Record plutôt que des objet JS simple

    /* Méthode 1 : on créé un array vide et on push dedans
    const levels = []; // [Level{}, Level{}, Level{}]
    // Pour chaque rawLevel (on boucle), on y ajoute un Level dans le tableau !
    rowLevels.forEach(rowLevel => {
      levels.push(new Level(rowLevel));
      //  ^ []     ^ Level{}
    });
    */

    // Méthode 2 : avec un .map
    const levels = rowLevels.map(rowLevel => new Level(rowLevel));

    return levels;
  }

}

module.exports = Level;
