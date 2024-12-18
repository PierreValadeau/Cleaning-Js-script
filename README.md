# Script de tri automatique pour le dossier Téléchargements

## 📋 Description

Ce projet est un script **Node.js** qui organise automatiquement les fichiers de votre dossier **Téléchargements** (`Downloads`) en les déplaçant dans des dossiers spécifiques sur votre **Bureau** (`Desktop`).  

Par exemple :
- Les images (`.jpg`, `.png`, etc.) seront déplacées dans un dossier `/Bureau/images`.
- Les documents (`.pdf`, `.docx`, etc.) iront dans `/Bureau/documents`.

C'est une démonstration simple mais efficace de mes compétences en **JavaScript**, **Node.js**, et en manipulation de fichiers.

---

## 🛠️ Fonctionnalités

- 🔍 **Analyse des fichiers** dans le dossier Téléchargements.
- 📂 **Déplacement automatique** des fichiers vers des dossiers selon leur type (images, vidéos, documents, etc.).
- 🚀 **Création dynamique** des dossiers cibles s'ils n'existent pas.
- 🔒 Gestion sécurisée des chemins de fichiers grâce aux modules natifs `fs` et `path` de Node.js.

---

## 🚀 Installation

1. **Pré-requis** :
   - Node.js installé sur votre machine (téléchargez-le ici : [nodejs.org](https://nodejs.org)).

2. **Cloner ou télécharger le projet** :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
