// Importer les dépendances
const express = require("express");
const router = require("./router");

// Créer une app Express
const app = express();


// Brancher le router
app.use(router);


// Lancer le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});

