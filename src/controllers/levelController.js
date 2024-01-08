const dataMapper = require("../database/dataMapper");


const levelController = {
  async renderLevelsPage(req, res) {
    try {

      const levels = await dataMapper.getAllLevels();
      res.render("levels", { levels });

    } catch (error) {
      console.error(error); // Pour aider à debug
      res.status(500).send("Une erreur est survenue."); // TODO: faire la page 500
    }
  }
};

module.exports = levelController;
