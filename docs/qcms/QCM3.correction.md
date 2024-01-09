# QCM 3

`Active Record` est : 
- ❌ l'inverse du `dataMapper`
- ✅ un `design pattern` pour accéder à la BDD
- ❌ une méthode d'instance
- ❌ "Tu connais pas Active Record ? C'est un groupe, ils étaient number one"


`MVC` veut dire : 
- ✅ Model View Controller
- ❌ Major Version Control
- ❌ Merguezed Versionned Couscous


Une **méthode de classe** se définit avec le mot clé :
- ✅ `static`
- ❌ `class`  ==> définir la classe 
- ❌ `public`
- ❌ aucun des trois

```js
// La classe
class User {

  // Le constructor
  constructor() {}

  // Méthode de classe
  static findAll() {}

  // Méthode d'instance
  getFullName() {}
}

// Les méthodes de classe s'appellent directement sur la classe
User.findAll();

// Les méthodes d'instance s'appellent sur les instance de classe
const user = new User({ firstname: "John", lastname: "Doe" });
user.getFullName();
```


Pour appeler le contructeur de la classe parente depuis la classe enfant, on utilise le mot clé : 
- ❌ `constructor()`
- ✅ `super()`
- ❌ `parent()`
- ❌ `ohViensLaQuandJeTappelle()`
