var DataTypes = require("sequelize").DataTypes;
var _abonne = require("./abonne");
var _abonnement = require("./abonnement");
var _articles = require("./articles");
var _assigne = require("./assigne");
var _codepostal = require("./codepostal");
var _colore = require("./colore");
var _commande = require("./commande");
var _couleur = require("./couleur");
var _etat = require("./etat");
var _facture = require("./facture");
var _genre = require("./genre");
var _imagesarticle = require("./imagesarticle");
var _imagespostes = require("./imagespostes");
var _livraison = require("./livraison");
var _marque = require("./marque");
var _modele = require("./modele");
var _pieces = require("./pieces");
var _posts = require("./posts");
var _typeabonnement = require("./typeabonnement");
var _typevehicule = require("./typevehicule");
var _utilisateur = require("./utilisateur");
var _ville = require("./ville");

function initModels(sequelize) {
  var abonne = _abonne(sequelize, DataTypes);
  var abonnement = _abonnement(sequelize, DataTypes);
  var articles = _articles(sequelize, DataTypes);
  var assigne = _assigne(sequelize, DataTypes);
  var codepostal = _codepostal(sequelize, DataTypes);
  var colore = _colore(sequelize, DataTypes);
  var commande = _commande(sequelize, DataTypes);
  var couleur = _couleur(sequelize, DataTypes);
  var etat = _etat(sequelize, DataTypes);
  var facture = _facture(sequelize, DataTypes);
  var genre = _genre(sequelize, DataTypes);
  var imagesarticle = _imagesarticle(sequelize, DataTypes);
  var imagespostes = _imagespostes(sequelize, DataTypes);
  var livraison = _livraison(sequelize, DataTypes);
  var marque = _marque(sequelize, DataTypes);
  var modele = _modele(sequelize, DataTypes);
  var pieces = _pieces(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var typeabonnement = _typeabonnement(sequelize, DataTypes);
  var typevehicule = _typevehicule(sequelize, DataTypes);
  var utilisateur = _utilisateur(sequelize, DataTypes);
  var ville = _ville(sequelize, DataTypes);

  abonnement.belongsToMany(utilisateur, { as: 'IdUser_utilisateurs', through: abonne, foreignKey: "IdAbonnement", otherKey: "IdUser" });
  articles.belongsToMany(couleur, { as: 'IdCouleur_couleurs', through: colore, foreignKey: "IdArticle", otherKey: "IdCouleur" });
  codepostal.belongsToMany(ville, { as: 'IdVille_villes', through: assigne, foreignKey: "IdCodePostal", otherKey: "IdVille" });
  couleur.belongsToMany(articles, { as: 'IdArticle_articles', through: colore, foreignKey: "IdCouleur", otherKey: "IdArticle" });
  utilisateur.belongsToMany(abonnement, { as: 'IdAbonnement_abonnements', through: abonne, foreignKey: "IdUser", otherKey: "IdAbonnement" });
  ville.belongsToMany(codepostal, { as: 'IdCodePostal_codepostals', through: assigne, foreignKey: "IdVille", otherKey: "IdCodePostal" });
  abonne.belongsTo(abonnement, { as: "IdAbonnement_abonnement", foreignKey: "IdAbonnement"});
  abonnement.hasMany(abonne, { as: "abonnes", foreignKey: "IdAbonnement"});
  facture.belongsTo(abonnement, { as: "IdAbonnement_abonnement", foreignKey: "IdAbonnement"});
  abonnement.hasMany(facture, { as: "factures", foreignKey: "IdAbonnement"});
  colore.belongsTo(articles, { as: "IdArticle_article", foreignKey: "IdArticle"});
  articles.hasMany(colore, { as: "colores", foreignKey: "IdArticle"});
  imagesarticle.belongsTo(articles, { as: "IdArticle_article", foreignKey: "IdArticle"});
  articles.hasMany(imagesarticle, { as: "imagesarticles", foreignKey: "IdArticle"});
  assigne.belongsTo(codepostal, { as: "IdCodePostal_codepostal", foreignKey: "IdCodePostal"});
  codepostal.hasMany(assigne, { as: "assignes", foreignKey: "IdCodePostal"});
  articles.belongsTo(commande, { as: "IdCommande_commande", foreignKey: "IdCommande"});
  commande.hasMany(articles, { as: "articles", foreignKey: "IdCommande"});
  livraison.belongsTo(commande, { as: "IdCommande_commande", foreignKey: "IdCommande"});
  commande.hasMany(livraison, { as: "livraisons", foreignKey: "IdCommande"});
  colore.belongsTo(couleur, { as: "IdCouleur_couleur", foreignKey: "IdCouleur"});
  couleur.hasMany(colore, { as: "colores", foreignKey: "IdCouleur"});
  articles.belongsTo(etat, { as: "IdEtat_etat", foreignKey: "IdEtat"});
  etat.hasMany(articles, { as: "articles", foreignKey: "IdEtat"});
  utilisateur.belongsTo(genre, { as: "IdGenre_genre", foreignKey: "IdGenre"});
  genre.hasMany(utilisateur, { as: "utilisateurs", foreignKey: "IdGenre"});
  articles.belongsTo(marque, { as: "IdMarque_marque", foreignKey: "IdMarque"});
  marque.hasMany(articles, { as: "articles", foreignKey: "IdMarque"});
  modele.belongsTo(marque, { as: "IdMarque_marque", foreignKey: "IdMarque"});
  marque.hasMany(modele, { as: "modeles", foreignKey: "IdMarque"});
  articles.belongsTo(pieces, { as: "IdPiece_piece", foreignKey: "IdPiece"});
  pieces.hasMany(articles, { as: "articles", foreignKey: "IdPiece"});
  imagespostes.belongsTo(posts, { as: "IdPoste_post", foreignKey: "IdPoste"});
  posts.hasMany(imagespostes, { as: "imagespostes", foreignKey: "IdPoste"});
  abonnement.belongsTo(typeabonnement, { as: "Idtype_typeabonnement", foreignKey: "Idtype"});
  typeabonnement.hasMany(abonnement, { as: "abonnements", foreignKey: "Idtype"});
  articles.belongsTo(typevehicule, { as: "IdTypeVehicule_typevehicule", foreignKey: "IdTypeVehicule"});
  typevehicule.hasMany(articles, { as: "articles", foreignKey: "IdTypeVehicule"});
  abonne.belongsTo(utilisateur, { as: "IdUser_utilisateur", foreignKey: "IdUser"});
  utilisateur.hasMany(abonne, { as: "abonnes", foreignKey: "IdUser"});
  commande.belongsTo(utilisateur, { as: "IdUser_utilisateur", foreignKey: "IdUser"});
  utilisateur.hasMany(commande, { as: "commandes", foreignKey: "IdUser"});
  commande.belongsTo(utilisateur, { as: "IdUser_1_utilisateur", foreignKey: "IdUser_1"});
  utilisateur.hasMany(commande, { as: "IdUser_1_commandes", foreignKey: "IdUser_1"});
  facture.belongsTo(utilisateur, { as: "IdUser_utilisateur", foreignKey: "IdUser"});
  utilisateur.hasMany(facture, { as: "factures", foreignKey: "IdUser"});
  livraison.belongsTo(utilisateur, { as: "IdUser_utilisateur", foreignKey: "IdUser"});
  utilisateur.hasMany(livraison, { as: "livraisons", foreignKey: "IdUser"});
  posts.belongsTo(utilisateur, { as: "IdUser_utilisateur", foreignKey: "IdUser"});
  utilisateur.hasMany(posts, { as: "posts", foreignKey: "IdUser"});
  assigne.belongsTo(ville, { as: "IdVille_ville", foreignKey: "IdVille"});
  ville.hasMany(assigne, { as: "assignes", foreignKey: "IdVille"});
  livraison.belongsTo(ville, { as: "IdVille_ville", foreignKey: "IdVille"});
  ville.hasMany(livraison, { as: "livraisons", foreignKey: "IdVille"});
  utilisateur.belongsTo(ville, { as: "IdVille_ville", foreignKey: "IdVille"});
  ville.hasMany(utilisateur, { as: "utilisateurs", foreignKey: "IdVille"});

  return {
    abonne,
    abonnement,
    articles,
    assigne,
    codepostal,
    colore,
    commande,
    couleur,
    etat,
    facture,
    genre,
    imagesarticle,
    imagespostes,
    livraison,
    marque,
    modele,
    pieces,
    posts,
    typeabonnement,
    typevehicule,
    utilisateur,
    ville,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
