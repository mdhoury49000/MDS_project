import utilisateur from "../../models/utilisateur";
import codePostal from "../../models/codePostal";
import ville from "../../models/ville";
import genre from "../../models/genre";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Utilisateur = utilisateur;
const CodePostal = codePostal;
const Ville = ville;
const Genre = genre;	
// Fonction de connexion modifiée pour inclure la génération de token JWT
export const loginUser = async (req, res) => {
  try {
    const { Mail, MotDePasse } = req.body;
    const utilisateur = await Utilisateur.findOne({ where: { Mail } });

    if (!utilisateur) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    const validPassword = await bcrypt.compare(MotDePasse, utilisateur.MotDePasse);
    if (!validPassword) {
      return res.status(401).send('Mot de passe incorrect');
    }

    const token = jwt.sign(
      { id: utilisateur.IdUser, estVendeur: utilisateur.estVendeur, estArtiste: utilisateur.estArtiste },
      'tuttutdeco',
      { expiresIn: '24h' }
    );

    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    res.status(500).send('Erreur lors de la connexion');
  }
};

export const register = async (req, res) => {
    try {
      let { Nom, Prenom, Adresse, Dnaiss, Tel, Mail, MotDePasse, estVendeur, estArtiste, NomVille, NomGenre, Cp } = req.body;
      
      // Vérifie si le code postal existe déjà
      let codePostal = await CodePostal.findOne({ where: { Cp } });
      if (!codePostal) {
        // Si le code postal n'existe pas, créez-le
        codePostal = await CodePostal.create({ Cp });
      }
  
      // Gestion de la ville avec le code postal
      let ville = await Ville.findOne({ where: { NomVille, IdCodePostal: codePostal.IdCodePostal } });
      if (!ville) {
        // Si la ville n'existe pas avec le code postal donné, créez-la
        ville = await Ville.create({ NomVille, IdCodePostal: codePostal.IdCodePostal });
      }
  
      // Gestion du genre
      const genre = await Genre.findOne({ where: { NomGenre } });
      if (!genre) {
        return res.status(400).send("Le genre spécifié n'existe pas.");
      }
  
      // Chiffrage du mot de passe et création de l'utilisateur
      const salt = await bcrypt.genSalt(10);
      MotDePasse = await bcrypt.hash(MotDePasse, salt);
      
      const nouvelUtilisateur = await Utilisateur.create({
        Nom,
        Prenom,
        Adresse,
        Dnaiss,
        Tel,
        Mail,
        MotDePasse,
        estVendeur,
        estArtiste,
        IdVille: ville.IdVille, // Utilisation de l'IdVille de la ville trouvée ou créée
        IdGenre: genre.IdGenre // Utilisation de l'IdGenre trouvé
      });
  
      res.json(nouvelUtilisateur);
    } catch (error) {
      res.status(500).send("Erreur lors de l'enregistrement de l'utilisateur : " + error.message);
    }
  };