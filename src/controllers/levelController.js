const { Level } = require("../models"); // Quand le fichier n'est pas précisé, JS va chercher le fichier nommé index.js dans le dossier demandé !

const levelController = {
  async renderLevelsPage(req, res) {
    try {

      const levels = await Level.findAll();
      res.render("levels", { levels });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};

module.exports = levelController;
