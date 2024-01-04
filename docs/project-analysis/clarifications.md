# Clarification du besoin avec le client

Poser vos questions pour essayer de définir au mieux le besoin de Jeff

- Q. Quel stack technique ?
  - R. Dans un second temps ! Mais spoiler : `express` + `Postgres` + `express-session` + `sequelize` (ORM)

- Q. Pas clair entre les "thèmes" et "sujets"
  - On va simplifier, thème === sujet. Un quiz peut avoir plusieurs thèmes.
  - ex : le "quiz sur la tartiflette" a comme sujet : Cuisine + Montagne

- Q. Comment on signe ?

- Q. Comment fonctionne les utilisateurs ?

  - On peut différencier deux types d'utilisateurs :
    - `visiteurs` = les utilisateurs qui vont sur le site sans s'être créé un compte/connecté
    - `membres` = les utilisateurs qui se sont créé un compte puis connecté => ils ont accès à des pages en plus
    - on va stocker les `membres` en BDD !
    - `admin` ??? => Dans un second temps, on verra plus tard pour ça !

- Q. Est-ce qu'on stock les réponses des utilisateurs dans la BDD ?
  - R. NON !
  - (Pourquoi pas dans un second temps en fin de saison pour les révisions)

- Q. Difficulté => liées à quoi ?
  - R. Difficulté liée à une QUESTION !!

- Q. Utilisateur prédéfinie à l'avance ?
  - R. Non ! On la donne la possibilité aux visiteurs de se créer un compte via :
    - email / mdp / prenom / nom

- Q. A propos du TEMPS d'une partie
  - R. Pas de temps limité

- Q. C'est l'utilisateur qui choisi le quizz
  - R. Oui, sur la home page, il voit TOUS les quiz de la plateforme et choisi lequel il/elle veut jouer. Pour choisir, pour chaque quiz, on affichera son titre, sa description et ses thèmes
  - R. Pourquoi pas, dans un second temps, la possibilité de choisir PAR THEME (filtrer)

- Q. Qui créer les quiz
  - R. Dans un second, on donnera à certains utilisateurs des droits d'ADMIN pour pouvoir accéder à des pages spéciales pour CREER DES QUIZ
  - R. MAIS en attendant, on va prédéfinir quelques quizzes (fixes) dans notre BDD (seed)
- Q. L'intégration nous est-elle fournie ?
  - R. Oui elle le sera

```
Reexplication :

- plateforme de quizzes
- un quiz est composé de plusieurs questions. Le quiz a un titre + description du quiz
- une question a plusieurs réponses possibles MAIS une seule réponse valide. Une question a un énoncé

Platform :

- quiz1 (title, description)
  - THEME ASTROLOGIE
  - question1
    - proposition1
    - proposition2 (\* => bonne réponse)
    - proposition3
    - NIVEAU DIFFICILE
  - question2
    - proposition4 (\* => bonne réponse)
    - proposition5
    - NIVEAU FACILE
- quiz2
```
