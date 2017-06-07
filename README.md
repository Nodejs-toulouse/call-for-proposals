# Call For Proposals 
Ce repo correspond au fil rouge de Node.js Toulouse, présenté le 06/06/2017 (Slides de présentations dispos [ici](https://gitpitch.com/nodejs-toulouse/meetup-01/filrouge)).

> **Note :** Dans un premier temps, le projet sera codé en JavaScript, et non pas en TypeScript comme présenté, suite à vos retours. 

Toutes suggestions/améliorations sont bienvenues, alors n'hésitez pas à ouvrir des issues ! 

# Prérequis
- Installer [Node.js](https://nodejs.org/en/) 8
- Installer [VS Code](https://code.visualstudio.com/) (Optionnel)

> **Pourquoi Visual Studio Code ?**
> - +1 pour le débogage : en appuyant sur `F5`, VS Code recherche un fichier `.vscode/launch.json` qui lui dictera le comportement à suivre pour le mode débogage. Plus de détails dans la section [Débogage](#débogage)

# Getting started
- Cloner le repository
```
git clone https://github.com/Nodejs-toulouse/call-for-proposals.git <nom_projet>
```
- Installer les dépendances
```
cd <nom_projet>
npm install
```
- Run du projet
```
npm start
```
Le serveur sera lancé sur `http://localhost:3000`

# Structure du projet
La structure complète du projet est expliquée ci-dessous :

| Nom | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contient les fichiers de config spécifiques à VS Code                                         |
| **node_modules**         | Contient toutes vos dépendances npm                                                           |
| **src**                  | Contient tout le code source                                                                  |
| **src/public**           | Les assets qui seront utilisés côté client                                                    |
| **src**/server.js        | Point d'entrée du serveur Node.js. C'est ici qu'est défini le serveur.                        |
| .gitignore               | Fichiers à ignorer par Git                                                                    |
| .travis.yml              | Fichier de config pour Travis CI                                                              |
| .checkVersion.js         | Script utilisé lors de l'installation des dépendances qui checke la version de node (>=8)     |
| package.json             | Fichier qui décrit les dépendances npm                                                        |

## Débogage

### Utiliser le debugger de VS Code
Le débogage est une des features où VS Code est particulièrement pratique. Regardons comment déboguer Node.js avec VS Code.
Le projet est déjà pré-configuré pour VS Code : quand vous pressez F5 dans VS Code, Visual Studio Code va chercher un dossier `.vscode` à la racine, avec un fichier `launch.json` à l'intérieur.
Dans ce fichier, vous pouvez décrire le comportement que VS Code doit adopter.

```json
{
    "type": "node",
    "request": "launch",
    "name": "Debug",
    "program": "${workspaceRoot}/src/server.js",
    "protocol": "inspector",
	"preLaunchTask": "check-version"
}
```

| Options `launch.json` | Description |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| `"program": "${workspaceRoot}/src/server.js"`  | Définit quel sera le point d'entrée de l'application              |
| `"protocol": inspector`                        | C'est le protocole de débogage mis en place par la dernière version de node ([par V8](https://chromedevtools.github.io/debugger-protocol-viewer/v8/)) |
| `"preLaunchTask": "check-version"`             | Définit la tâche à lancer avant le débogage (qui est définie dans `tasks.json`) |

Avec ce fichier, faites Déboguer > Démarrer le débogage et le projet se lancera avec le debugger directement attaché. Mettez vos breakpoints et c'est parti ;)

> **Note :** Ce launch.json pour VS Code est très simple et peut être largement amélioré. Le débogage est un vaste sujet, allez voir les
[launch configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations), et le [débogage de Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-debugging), 
et à proposer une version plus sympa ;)

> **Warning :** Assurez-vous que vous n'ayez le projet qui tourne sous une autre ligne de commande (le port sera déjà utilisé). 

# Dependencies
## `dependencies`
Nous n'avons pas de dépendance :) C'est simplement Node.js, et du plain JavaScript et HTML (pour le moment !).

## `devDependencies`

| Package                         | Description                                                                  |
| ------------------------------- | -----------------------------------------------------------------------------|
| nodemon                         | Watch les fichiers et redémarre le serveur node quand il y a des changements |
| semver                          | Package pour comparer des versions au format semver                          |

