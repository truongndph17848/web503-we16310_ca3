import { Router } from 'express';
import { create, read, list, remove, update, search } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth';

const router = Router();

router.get('/products', list);
router.post('/products/:userId', requiredSigin, isAuth, isAdmin, create);
router.get('/product/:id', checkAuth, read);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', update);

router.post("/search", search)

router.param('userId', userById)
export default router;