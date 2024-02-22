import express from 'express';
import userRouter from './userRouter.js'; // Importer le routeur des utilisateurs
import authRouter from './authRouter.js'; 
const router = express.Router();

// Rediriger vers le routeur des utilisateurs pour la route /
router.use('/User', userRouter);
router.use('/Auth', authRouter);
export default router;
