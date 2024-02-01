import utilisateur from "../../models/utilisateur";
// Fonction pour créer un utilisateur
const Utilisateur = utilisateur
export async function createUser(req, res) {
    const { Nom, Prenom, Adresse, Dnaiss, Tel, Mail, MotDePasse, estVendeur, estArtiste, IdGenre, IdVille } = req.body;
    try {
        const newUser = await Utilisateur.create({
            Nom,
            Prenom,
            Adresse,
            Dnaiss,
            Tel,
            Mail,
            MotDePasse,
            estVendeur,
            estArtiste,
            IdGenre,
            IdVille
        });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
}

// Fonction pour rechercher un utilisateur spécifique par ID (requête GET)
export async function findUserById(req, res) {
    const userId = req.params.id;
    try {
        const user = await Utilisateur.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur' });
    }
}

