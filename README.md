# Script de tri automatique pour le dossier Téléchargements

## 📋 Description

Ce projet est un script **Node.js** conçu spécifiquement pour les utilisateurs de **macOS**. Il organise automatiquement les fichiers de votre dossier **Téléchargements** (`Downloads`) en les déplaçant dans des dossiers spécifiques sur votre **Bureau** (`Desktop`).

### Fonctionnalités principales :
- Les **images** (`.jpg`, `.png`, etc.) sont déplacées dans `/Bureau/images`.
- Les **documents** (`.pdf`, `.docx`, etc.) vont dans `/Bureau/documents`.
- Les **vidéos**, **musiques**, et autres fichiers sont également triés dans des dossiers correspondants.
- Une **planification automatique** exécute le script une fois par semaine (chaque dimanche à 2h00).

---

## 🛠️ Fonctionnalités

1. **Tri des fichiers par type** :
   - Analyse les fichiers dans le dossier Téléchargements.
   - Catégorise les fichiers par extension (images, documents, vidéos, musiques, etc.).
   - Déplace les fichiers vers des dossiers correspondants sur le Bureau.

2. **Planification hebdomadaire** :
   - Le script est automatiquement exécuté chaque dimanche à 2h00 grâce à la bibliothèque `node-schedule`.
   - Idéal pour garder votre dossier Téléchargements toujours organisé sans intervention manuelle.

3. **Conception pour macOS** :
   - Le script utilise des chemins spécifiques à macOS pour accéder aux dossiers Téléchargements et Bureau.
   - Fonctionnalité non testée sur Windows ou Linux.

---

## 🚀 Installation

1. **Pré-requis** :
   - **macOS** comme système d'exploitation.
   - Node.js installé sur votre machine (téléchargez-le ici : [nodejs.org](https://nodejs.org)).

2. **Installation du projet** :
   Clonez ou téléchargez le projet, puis installez la bibliothèque nécessaire :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   npm install

## 📄 Utilisation 

Exécution ponctuelle 
Pour exécuter le script immédiatement, tapez: 
 ```bash 
 node index.js 


