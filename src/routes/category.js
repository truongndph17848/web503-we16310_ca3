import { Router } from 'express';
import { create, read, list, remove, update } from '../controllers/category';
import { userById } from '../controllers/user';

const router = Router();

router.get('/category', list);
router.post('/category', create);
router.get('/category/:id', read);
router.delete('/category/:id', remove);
router.put('/category/:id', update);
router.get('/categoryId/:id', read);

export default router;