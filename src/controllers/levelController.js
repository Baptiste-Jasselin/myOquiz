const Level = require("../models/V3/Level"); // Import du Level Sequelize

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
