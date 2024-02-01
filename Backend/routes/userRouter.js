import express from 'express';
import { createUser, findUserById } from '../controller/User/userController'; 
const router = express.Router();

router.get('/:id', findUserById); // Requête GET pour rechercher un utilisateur par ID
router.post('/', createUser); // Requête POST pour créer un nouvel utilisateur

export default router;
