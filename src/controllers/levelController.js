const Level = require("../models/V3/Level"); // Import du Level Sequelize

const levelController = {
  async renderLevelsPage(req, res) {

    // Récupérer les levels en utilisant Sequelize !
    const levels = await Level.findAll();
    
    res.render("levels", { levels });
  }
};

module.exports = levelController;
