import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import upload from '../middleware/upload';

const router = Router();

router.post('/register', upload.single('profilePhoto'), registerUser);
router.post('/login', loginUser);

export default router;
