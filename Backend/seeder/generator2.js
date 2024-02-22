const faker = require('@faker-js/faker');
const sequelize = require('sequelize');
const utilisateur = require('../models/utilisateur');
const abonne = require('../models/abonne');
const abonnement = require('../models/abonnement');
const articles = require('../models/articles');
const assigne = require('../models/assigne');
const codePostal = require('../models/codepostal');
const colore = require('../models/colore');
const commande = require('../models/commande');
const couleur = require('../models/couleur');
const etat = require('../models/etat');
const facture = require('../models/facture');
const genre = require('../models/genre');
const imagesarticle = require('../models/imagesarticle'); 
const imagespostes = require('../models/imagespostes');
const livraison = require('../models/livraison');
const marque = require('../models/marque');
const modele = require('../models/modele');
const pieces = require('../models/pieces');
const posts = require('../models/posts');
const typeabonnement = require('../models/typeabonnement');
const typevehicule = require('../models/typevehicule');
const ville = require('../models/ville');

const Utilisateur = utilisateur;
const Abonne = abonne;
const Abonnement = abonnement;
const Articles = articles;
const Assigne = assigne;    
const CodePostal = codePostal;
const Colore = colore;
const Commande = commande;
const Couleur = couleur;
const Etat = etat;
const Facture = facture;
const Genre = genre;
const ImagesArticle = imagesarticle;
const ImagesPostes = imagespostes;
const Livraison = livraison;
const Marque = marque;
const Modele = modele;
const Pieces = pieces;
const Posts = posts;
const TypeAbonnement = typeabonnement;
const TypeVehicule = typevehicule;
const Ville = ville;
// Génération de CodePostal
async function generateCodePostals() {
  for (let i = 0; i < 10; i++) {
    await CodePostal.create({
      IdCodePostal: faker.datatype.uuid(),
      Cp: faker.address.zipCode(),
    });
  }
}

// Génération de Assigne (suppose que Ville et CodePostal existent déjà)
async function generateAssignes() {
  const villes = await Ville.findAll();
  const codePostaux = await CodePostal.findAll();

  for (const ville of villes) {
    await Assigne.create({
      IdVille: ville.IdVille,
      IdCodePostal: faker.random.arrayElement(codePostaux).IdCodePostal,
    });
  }
}

// Génération de Facture
async function generateFactures() {
  const utilisateurs = await Utilisateur.findAll();
  const abonnements = await Abonnement.findAll();

  for (let i = 0; i < 20; i++) {
    await Facture.create({
      DateFacture: faker.date.recent(),
      IdAbonnement: faker.random.arrayElement(abonnements).IdAbonnement,
      IdUser: faker.random.arrayElement(utilisateurs).IdUser,
    });
  }
}

// Génération de Modele (suppose que Marque existe déjà)
async function generateModeles() {
  const marques = await Marque.findAll();

  for (let i = 0; i < 20; i++) {
    await Modele.create({
      NomModele: faker.vehicle.model(),
      AnneeModele: faker.date.past(10).getFullYear(),
      IdMarque: faker.random.arrayElement(marques).IdMarque,
    });
  }
}

// Génération de Piece
async function generatePieces() {
  for (let i = 0; i < 20; i++) {
    await Pieces.create({
      NomPiece: faker.commerce.productName(),
    });
  }
}

  
  async function generateCouleurs() {
    // Génération de données pour la table Couleur
  }
  
  async function generateMarques() {
    // Génération de données pour la table Marque
  }
  
  async function generateTypeVehicules() {
    // Génération de données pour la table TypeVehicule
  }
  
  async function generateUtilisateurs() {
    // Génération de données pour la table Utilisateur
  }
  
  async function generateAbonnements() {
    // Génération de données pour la table Abonnement
  }
  
  async function generateModeles() {
    // Génération de données pour la table Modele
  }
  
  async function generateFactures() {
    // Génération de données pour la table Facture
  }
  
  async function generateCommandes() {
    // Génération de données pour la table Commande
  }
  
  async function generateLivraisons() {
    // Génération de données pour la table Livraison
  }
  
  async function generatePosts() {
    // Génération de données pour la table Posts
  }
  
  async function generateImagesPostes() {
    // Génération de données pour la table ImagesPostes
  }
  
  async function generateArticles() {
    // Génération de données pour la table Articles
  }
  
  async function generateImagesArticle() {
    // Génération de données pour la table ImagesArticle
  }
  
  async function generateAssignes() {
    // Génération de données pour la table Assigne
  }
  
  async function generateAbonnes() {
    // Génération de données pour la table Abonne
  }
  
  async function generateColores() {
    // Génération de données pour la table Colore
  }
  
  // Fonction principale pour orchestrer la génération de données
  async function generateAllData() {
    try {
      await sequelize.sync({ force: true }); // Attention: cela supprimera toutes les données existantes
  
      await generateGenres();
      await generateVilles();
      // Continuez avec toutes les autres fonctions de génération dans l'ordre approprié
      // ...
  
      console.log('Toutes les données ont été générées avec succès.');
    } catch (error) {
      console.error('Erreur lors de la génération des données :', error);
    }
  }
  
  // Exécutez la fonction principale
  generateAllData();
  