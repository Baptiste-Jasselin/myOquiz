const dataMapper = require("../database/dataMapper");
const Level = require("../models/V1/Level");


const levelController = {
  async renderLevelsPage(req, res) {
    // ====== DATAMAPPER ====
    // const levels = await dataMapper.getAllLevels(); 

    // ====== MODELS ====
    const levels = await Level.findAll(); // implémenter la fonction findAll

    res.render("levels", { levels });
  },

  async createLevel(req, res) {
    const name = req.body.name; // { name: "HardCore" }

    // ==== DATAMAPPER ====
    // const level = await dataMapper.createLevel({ name: name });

    // ====== MODELS ====
    const level = new Level({ name: name });
    await level.insert();

    res.end();
  }
};

module.exports = levelController;
