const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");


// Créer un router
const router = Router();


// Le configurer
router.get("/", mainController.renderHomePage);
router.get("/levels", levelController.renderLevelsPage);

// L'exporter
module.exports = router;

