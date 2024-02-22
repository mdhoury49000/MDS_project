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




async function generateRandomData() {
  try {
    const genres = await Promise.all(
        Array.from({ length: 5 }, async () => {
          return await Genre.create({
            NomGenre: faker.person.sexType(),
          });
        })
      );
  
      // Exemple de création de villes et de codes postaux
      // Note: Assurez-vous que votre modèle et votre logique d'affaires permettent de lier Ville et CodePostal correctement
      const villes = await Promise.all(
        Array.from({ length: 5 }, async () => {
          return await Ville.create({
            NomVille: faker.address.city(),
            IdCodePostal: faker.datatype.uuid(),
          });
        })
      );

  
      // Exemple de création d'utilisateurs en utilisant des IdGenre et IdVille aléatoires
      const utilisateurs = await Promise.all(
        Array.from({ length: 10 }, async () => {
          return await Utilisateur.create({
            Nom: faker.name.lastName(),
            Prenom: faker.name.firstName(),
            Adresse: faker.address.streetAddress(),
            Dnaiss: faker.date.past(20),
            Tel: faker.phone.phoneNumber(),
            Mail: faker.internet.email(),
            MotDePasse: faker.internet.password(),
            estVendeur: faker.datatype.boolean(),
            estArtiste: faker.datatype.boolean(),
            IdGenre: faker.random.arrayElement(genres).IdGenre,
            IdVille: faker.random.arrayElement(villes).IdVille,
          });
        })
      );
    
      const typeAbonnements = [];
      for (let i = 0; i < 5; i++) {
        const typeAbonnement = await TypeAbonnement.create({
          typeAbonnement: faker.commerce.productMaterial(), // Exemple de valeur fictive
        });
        typeAbonnements.push(typeAbonnement);
      }
  
      // Etat
      const etats = [];
      for (let i = 0; i < 5; i++) {
        const etat = await Etat.create({
          NomEtat: faker.lorem.word(),
        });
        etats.push(etat);
      }
  
      // Marque
      const marques = [];
      for (let i = 0; i < 5; i++) {
        const marque = await Marque.create({
          NomMarque: faker.vehicle.manufacturer(),
        });
        marques.push(marque);
      }
  
      // TypeVehicule
      const typeVehicules = [];
      for (let i = 0; i < 5; i++) {
        const typeVehicule = await TypeVehicule.create({
          NomType: faker.vehicle.type(),
        });
        typeVehicules.push(typeVehicule);
      }
  
      const abonnements = [];
      for (let i = 0; i < 10; i++) {
        const abonnement = await Abonnement.create({
          NomAbonnement: faker.commerce.productName(),
          Prix: faker.commerce.price(),
          Duree: faker.datatype.number({ min: 1, max: 12 }),
          Description: faker.lorem.sentence(),
          Idtype: faker.random.arrayElement(typeAbonnements).Idtype,
        });
        abonnements.push(abonnement);
      }
  
      const articles = [];
      for (let i = 0; i < 20; i++) {
        const article = await Articles.create({
          Nom: faker.commerce.productName(),
          Prix: faker.commerce.price(),
          Description: faker.lorem.sentence(),
          estARetirer: faker.datatype.boolean(),
          IdTypeVehicule: faker.random.arrayElement(typeVehicules).IdTypeVehicule,
          IdMarque: faker.random.arrayElement(marques).IdMarque,
          IdPiece: faker.datatype.number(), 
          IdEtat: faker.random.arrayElement(etats).IdEtat,
        });
        articles.push(article);
      }

      const commandes = [];
    for (let i = 0; i < 20; i++) {
      const commande = await Commande.create({
        DateCommande: faker.date.recent(),
        Poids: faker.datatype.float({ min: 0.1, max: 100.0, precision: 0.01 }),
        IdUser: faker.random.arrayElement(utilisateurs).IdUser, // Assurez-vous que 'utilisateurs' contient des enregistrements valides
        IdUser_1: faker.random.arrayElement(utilisateurs).IdUser,
      });
      commandes.push(commande);
    }

    // Création de livraisons basées sur les commandes
    for (const commande of commandes) {
      await Livraison.create({
        DateLivraison: faker.date.soon(),
        estLivre: faker.datatype.boolean(),
        NomDestinataire: faker.name.findName(),
        PrenomDestinataire: faker.name.firstName(),
        AdresseLivraison: faker.address.streetAddress(),
        IdVille: faker.random.arrayElement(villes).IdVille,
        IdUser: commande.IdUser,
        IdCommande: commande.IdCommande,
      });
    }

    // Création de posts pour des utilisateurs
    const posts = [];
    for (let i = 0; i < 30; i++) {
      const post = await Posts.create({
        Titre: faker.lorem.sentence(),
        Description: faker.lorem.paragraphs(),
        Dpublication: faker.date.past(),
        IdUser: faker.random.arrayElement(utilisateurs).IdUser,
      });
      posts.push(post);
    }

    // Création d'images pour les posts
    for (const post of posts) {
      await ImagesPostes.create({
        ImagePoste: faker.image.imageUrl(),
        IdPoste: post.IdPoste,
      });
    }
    const utilisateur = await Utilisateur.findAll();
    const abonnement = await Abonnement.findAll();
    for (let i = 0; i < utilisateur.length; i++) {
      await Abonne.create({
        IdUser: utilisateur[i].IdUser,
        IdAbonnement: faker.random.arrayElement(abonnement).IdAbonnement,
        DateDebut: faker.date.past(),
        DateFin: faker.date.future(),
      });
    }

    // Articles colorés
    const article = await Articles.findAll();
    const couleur = await Couleur.findAll();
    article.forEach(async (article) => {
      await Colore.create({
        IdArticle: article.IdArticle,
        IdCouleur: faker.random.arrayElement(couleur).IdCouleur,
      });
    });

    // Images pour les articles
    articles.forEach(async (article) => {
      const numberOfImages = faker.datatype.number({ min: 1, max: 5 });
      for (let j = 0; j < numberOfImages; j++) {
        await ImagesArticle.create({
          image: faker.image.imageUrl(),
          IdArticle: article.IdArticle,
        });
      }
    });

    async function generateCodePostalAndAssigne() {
        const villes = await Ville.findAll();
        
        for (const ville of villes) {
          const codePostal = await CodePostal.create({
            Cp: faker.address.zipCode(),
            // Assumant que IdCodePostal est généré automatiquement ou non requis
          });
      
          await Assigne.create({
            IdVille: ville.IdVille,
            IdCodePostal: codePostal.IdCodePostal,
          });
        }
      }
      async function generateFactures() {
        const utilisateurs = await Utilisateur.findAll();
        const abonnements = await Abonnement.findAll();
      
        for (const utilisateur of utilisateurs) {
          await Facture.create({
            DateFacture: faker.date.recent(),
            IdAbonnement: faker.random.arrayElement(abonnements).IdAbonnement,
            IdUser: utilisateur.IdUser,
          });
        }
      }
      async function generateModeles() {
        const marques = await Marque.findAll();
      
        for (const marque of marques) {
          await Modele.create({
            NomModele: faker.vehicle.model(),
            AnneeModele: faker.date.past().getFullYear(),
            IdMarque: marque.IdMarque,
          });
        }
      }
      async function generatePieces() {
        for (let i = 0; i < 20; i++) {
          await Pieces.create({
            NomPiece: faker.commerce.productName(),
          });
        }
      }
                        

  //  await sequelize.sync({ force: true });
    await Utilisateur.bulkCreate(utilisateurs);
    // Insérez des données pour d'autres tables de votre base de données de la même manière

    console.log('Données aléatoires générées avec succès.');
  } catch (error) {
    console.error('Erreur lors de la génération des données aléatoires :', error);
  } finally {
    await sequelize.close();
  }
}

generateRandomData();
