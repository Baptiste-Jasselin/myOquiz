// Charger les variables d'environnement
require("dotenv/config"); // Met les variables du fichier '.env' dans la variable 'process.env'

// Importer les dépendances
const express = require("express");
const router = require("./src/router");

// Créer une app Express
const app = express();

// Configurer EJS
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Servir statiquement le contenu du dossier public
app.use(express.static("./public"));

// Brancher le router
app.use(router);


// Lancer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
