import { Router } from 'express';
import { login, register } from '../controllers/auth';
import { checkAuth } from '../middlewares/checkAuth';


const router = Router();

router.post('/register', checkAuth, register);
router.post('/login', checkAuth, login);


export default router;