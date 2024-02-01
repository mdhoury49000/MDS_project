import express from 'express';
import userRouter from './userRouter.js'; // Importer le routeur des utilisateurs

const router = express.Router();

// Rediriger vers le routeur des utilisateurs pour la route /
router.use('/User', userRouter);

export default router;
