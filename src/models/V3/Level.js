const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize-client");

class Level extends Model {}

Level.init({
  // Pas besoin de préciser le champ "id" : il est déjà dans le Model dont on hérite.

  // Pas besoin du champs `created_at`, `updated_at` il est déjà dans le modèle (par défaut : createdAt, updatedAt => camelCase)
  
  // On précise les champs spécifique à notre BDD
  name: DataTypes.TEXT
}, {
  sequelize, // On passe l'instance de connexion à la BDD
  tableName: "level", // On définie le nom de la table tel qu'il existe dans notre BDD Postgres
});

module.exports = Level;

