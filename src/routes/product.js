import { Router } from "express";
import { creat, list, read, remove ,update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requidredSigin } from "../middlewares/checkAuth";


const router = Router()

router.get("/product",checkAuth, list)
router.post("/products/:userId",requidredSigin,isAuth,isAdmin, checkAuth, creat)
router.get("/product",checkAuth, read)
router.delete("/product",checkAuth, remove)
router.put("/product",checkAuth, update)



export default router;