const { Router } = require("express");
const mainController = require("./controllers/mainController");


// Créer un router
const router = Router();


// Le configurer
router.get("/", mainController.renderHomePage);

// L'exporter
module.exports = router;

