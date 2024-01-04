// Importer les dépendances
const express = require("express");

// Créer une app Express
const app = express();


// Configurer l'app 
app.get("/", (req, res) => {
  res.send("Ok");
});


// Lancer le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
})

