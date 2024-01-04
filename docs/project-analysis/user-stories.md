# User stories

## Kesako

- Explicite les attentes de certaines fonctionnalités
- Clarifier le besoin client
- Ce sont des parfait **SCENARI DE TEST**, qui permettrons de valider le bon fonctionnement de l'application.

## Formalisme

- 🇫🇷 `En tant que [role], je veux pouvoir [action] (( afin de [but] ))`
- 🇺🇸 `As a [role], I want to [action] (( in order to [goal] ))`

## Etape préliminaire

Définir les `rôles` de nos utilisateurs : 
- `visiteur` = un utilisateur qui navigue sur la plateforme sans s'être loggé
- `membre` = un utilisateur qui navigue sur la plateforme en étant loggé
- `admin` = un member avec des droits d'administration

## Exemples 

- En tant que visiteur, je veux pouvoir accéder à une home page, afin de visualiser les quiz de l'application

| En tant que | Je veux pouvoir                  | Afin de                                        | Sprint |
| ----------- | -------------------------------- | ---------------------------------------------- | ------ |
| Visiteur    | Accéder à la home page           | visualiser les quizzes de l'app                | V1     |
| Visiteur    | Accéder à une page de login      |                                                | V2     |
| Visiteur    | Accéder à une page de signup     |                                                | V2     |
| Visiteur    | Me créer un compte               |                                                | V2     |
| Visiteur    | Me connecter                     | afin d'accéder aux fonctionnalités des membres | V2     |
| Visiteur    | Accéder à la liste DES quizzes   |                                                | V1     |
| Membre      | Accéder et répondre à UN quiz    |                                                | V1     |
| Membre      | voir la difficulté des questions |                                                | V1     |
| Membre      | Me déconnecter                   |                                                | V2     |
| Membre      | Accéder à la liste des thèmes    | afin de visualiser les quizzes associés        | V2     |
| Membre      | Filtrer les quizzes              | sélectionner le quiz qui m'interresse          | V3     |
| Membre      | Voir mes résultats               | Visualiser mon score                           | V3     |
| Membre      | Voir mes résultats               | Voir si mes réponses sont bonnes ou mauvaises  | V3     |
| Admin       | Créer un quiz                    |                                                | V3     |

## Notes

Notes : 
- les visiteurs voient les quizzes (titre, description, thèmes) mais ne voit pas le contenu du quiz (questions, propositions) tant qu'ils ne sont pas connectés (ie. membre).
- les questions sont à choix uniques. Et non pas à choix multiple !
- on ne peut pas choisir un quiz par sa "difficulté" car un quiz est composé de plusieurs QUESTIONS avec des difficultés potentiellement diverses

Versions : 
- V0 = Mise en place architecture 
- V1 = Premières fonctionnalités
- V2 = Authentification
- V3 = Les bonus de fin de saison si on a le temps

