import express from 'express';
import { loginUser, register } from '../controller/Auth/authController';
const router = express.Router();

router.post("/loginUser", loginUser)
router.post("/register", register)

export default router;