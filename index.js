const fs = require('fs'); // Module pour manipuler les fichiers
const path = require('patch'); // Module pour gérer les chemins de fichiers

const dowloadsFolder = path.join(process.env.HOME, 'Téléchargements'); // Chemin vers le dossier téléchargements
const desktopFolder = path.join(process.env.HOME, 'Bureau'); // Chemin vers le bureau

const fileTypes = {
  images: ['jpg', 'jpeg', 'png', 'gif'], 
  documents: ['pdf', 'doc', 'docx', 'txt'], 
  videos: ['mp4', 'mkv', 'avi'], 
  music: ['mp3', 'wav', 'flac'], 
}