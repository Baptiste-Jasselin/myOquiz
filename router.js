const { Router } = require("express");

// Créer un router
const router = Router();


// Le configurer
router.get("/", (req, res) => {
  res.send("OK");
});

// L'exporter
module.exports = router;

