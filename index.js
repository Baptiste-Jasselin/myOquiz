// Charger les variables d'environnement
require("dotenv/config"); // Met les variables du fichier '.env' dans la variable 'process.env'

// Importer les dépendances
const express = require("express");
const router = require("./src/router");
const middleware404 = require("./middlewares/middleware404");

// Créer une app Express
const app = express();

// Configurer EJS
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Servir statiquement le contenu du dossier public
app.use(express.static("./public")); // Ce middleware catch toutes les requêtes, regarde s'il y a un fichier nommé identiquement dans le dossier public, et renvoie le fichier s'il le trouve

// Brancher le router
app.use(router);

// Brancher la page 404
app.use(middleware404);


// Lancer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
