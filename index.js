const schedule = require('node-schedule');
const fs = require('fs'); // Module pour manipuler les fichiers
const path = require('path'); // Module pour gérer les chemins de fichiers

// Chemins importants
const downloadsFolder = path.join(process.env.HOME, 'Downloads'); // Chemin vers le dossier Téléchargements
const desktopFolder = path.join(process.env.HOME, 'Desktop'); // Chemin vers le Bureau

// Dictionnaire des extensions et dossiers cibles
const fileTypes = {
  images: ['jpg', 'jpeg', 'png', 'gif'],
  documents: ['pdf', 'doc', 'docx', 'txt'],
  videos: ['mp4', 'mkv', 'avi'],
  music: ['mp3', 'wav', 'flac'],
};

// Fonction pour obtenir l'extension d'un fichier
const getFileType = (filename) => {
  const ext = path.extname(filename).slice(1).toLowerCase(); // Ex : ".jpg" devient "jpg"
  for (const [type, extensions] of Object.entries(fileTypes)) {
    if (extensions.includes(ext)) return type;
  }
  return 'others'; // Fichiers qui ne rentrent pas dans les catégories
};

// Fonction pour déplacer un fichier
const moveFile = (filePath, type) => {
  const targetFolder = path.join(desktopFolder, type); // Ex : /Desktop/images
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder); // Crée le dossier cible s'il n'existe pas
  }

  const targetPath = path.join(targetFolder, path.basename(filePath)); // Nouveau chemin
  fs.renameSync(filePath, targetPath); // Déplace le fichier
  console.log(`Moved ${filePath} to ${targetPath}`);
};

// Fonction principale
const organizeDownloads = () => {
  console.log(`Scanning folder: ${downloadsFolder}`);

  fs.readdir(downloadsFolder, (err, files) => {
    if (err) {
      console.error(`Error reading folder: ${err.message}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(downloadsFolder, file);

      // Vérifie si c'est un fichier (et non un dossier)
      if (fs.lstatSync(filePath).isFile()) {
        const type = getFileType(file);
        moveFile(filePath, type);
      }
    });

    console.log('Organizing completed!');
  });
};
// Planification : Exécuter le script chaque dimanche à 2h00
schedule.scheduleJob({ hour: 2, minute: 0, dayOfWeek: 0 }, () => {
  console.log('Scheduled task running...');
  organizeDownloads();
});

console.log('Scheduler initialized. Waiting for the next run...');

// Exécute la fonction principale
organizeDownloads();
