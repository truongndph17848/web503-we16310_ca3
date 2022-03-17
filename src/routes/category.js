import { Router } from "express";
import { creat } from "../controllers/category";
import { checkAuth } from "../middlewares/checkAuth";


const router = Router();

router.post('/category', checkAuth, creat);

export default router;