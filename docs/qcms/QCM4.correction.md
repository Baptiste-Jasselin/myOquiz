# QCM 4

`sequelize` est : 
- ❌ un SGBD ==> ex: Postgres = Systeme de Gestion de baseS de donnéeS
- ✅ un ORM  ==> Object Relational Mapping
- ❌ un CLI  ==> Command Line Interface (ex: Terminal)
- ❌ un AR (Active Record)  ==> `new User()` est un active record


Laquelle de ces méthodes de classe n'existe pas dans `sequelize`
- ❌ `Model.findAll()`  ==> renvoie toutes les enregistrements de la BDD
- ❌ `Model.create()`   ==> créer un enregistrement et renvoyer son instance active record
- ❌ `Model.findOne()`  ==> renvoyer un enregistrement (le premiere qui match la query)
- ✅ `Model.findById()` ==> `.findByPk` (pk = primary key)


Laquelle de ces méthodes d'instance n'existe pas dans `sequelize`
- ❌ `model.save()`    ==> persiste l'état de l'instance en BDD (=> soit la créer, soit l'update !)
- ✅  `model.insert()`  ==> c'est notre Active Record maison où on avait codé Insert
- ❌ `model.set()`     ==> `harry.email = "hp@hogwarts.io"` EQUIVALENT `harry.set("email", "hp@hogwarts.io")` (note : il faut penser à persister avec `.save()`)
- ❌ `model.destroy()` ==> supprimer l'instance de la BDD


Dans l'assignation : `const sequelize = new Sequelize(process.env.PG_URL);`, la variable `sequelize` designe :
- ❌ le module sequelize  ==> `require("sequelize")` (avec tout : `Model`, `Sequelize`, `DataTypes`...)
- ✅ l'instance de connexion à la BDD  ==> le tunnel d'accès entre `Node.js` et `Postgres`
- ❌ l'adresse de la BDD Postgresql ==> `process.env.PG_URL` (qu'on a mis dans le `.env` et chargé avec `.dotenv`)
- ❌ le constructeur de la classe Sequelize ===> `new Sequelize`

