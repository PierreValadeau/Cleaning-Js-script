const fs = require('fs'); // Module pour manipuler les fichiers
const path = require('patch'); // Module pour gérer les chemins de fichiers

const dowloadsFolder = path.join(process.env.HOME, 'Téléchargements'); // Chemin vers le dossier téléchargements
const desktopFolder = path.join(process.env.HOME, 'Bureau'); // Chemin vers le bureau

// Dictionnaire des extensions et dossiers cibles
const fileTypes = {
  images: ['jpg', 'jpeg', 'png', 'gif'], 
  documents: ['pdf', 'doc', 'docx', 'txt'], 
  videos: ['mp4', 'mkv', 'avi'], 
  music: ['mp3', 'wav', 'flac'], 
}

// Fonction pour obtenir l'extension d'un fichier 

const getFilType = (filename) => {
  const ext = path.extname(filename).slice(1).toLowerCase(); // transforme .jpg en jpg 
  for (const [type, extensions] of Object.entries(fileTypes)) {
    if (extensions.includes(ext)) return type; 
  }
  return 'others'; // Fichiers qui ne rentrent pas dans les catégories 
}

// Fonction pour déplacer un fichier 

constmoveFile = (filePath, type) => {
  const targetFolder = path.join(desktopFolder, type); 
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder); // Créer le dossier cible s'il n'éxiste pas 
  }

  const targetPath = path.join(targetFolder, path.basename(filePath)); // Créer un nouveau chemin 
  fs.renameSync(filePath, targetPath); // Déplace le fichier 
  console.log(`Moved ${filePath} to ${targetPath}`);
}