# Rando-Bière Back-end

## Prérequis

- NodeJS
- PostgreSQL
- Sqitch
- Redis


## Packages 

ATTENTION : bien se trouver dans le dossier back !!
> `cd back` à l'ouverture du projet

```bash
    npm install
```

## Initialisation (et migrations) de la base de données

- Créer une db postgres :  `createdb rando_biere` (Bien respecter cette syntaxe !)
- Déployer une première fois les migrations : `sqitch deploy rando_biere`
- Déployer les migrations, créer un user Admin et importer les données de test : `npm run reset` (cette commande commence par un revert, donc attention : elle réinitialise toute la BDD)

## Test de l'api

- Si vous voulez test l'api pensez d'abord à réinitialiser les données (voir au dessus).
- Mettez-vous sur le dossier BACK! (sauf quand vous voulez tester le front ;D)
- configurer votre .env (voir fichier .env.example)
- lancez `nodemon index.js`
- allez sur la route http://localhost:PORT/api-docs pour avoir une belle doc :p.
- profitez ! =D
