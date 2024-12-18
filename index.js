const fs = require('fs'); // Module pour manipuler les fichiers
const path = require('patch'); // Module pour gérer les chemins de fichiers

const dowloadsFolder = path.join(process.env.HOME, 'Téléchargements'); // Chemin vers le dossier téléchargements
const desktopFolder = path.join(process.env.HOME, 'Bureau'); // Chemin vers le bureau