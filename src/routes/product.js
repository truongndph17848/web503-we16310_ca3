import { Router } from "express";
import { creat, list, read, remove ,update } from "../controllers/product";
const router = Router()

router.get("/product", list)
router.post("/product", creat)
router.get("/product", read)
router.delete("/product", remove)
router.put("/product", update)



export default router;