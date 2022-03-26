import { Router } from "express";
import { register, login } from "../controllers/auth";

const router = Router()

router.get("/register", register)
router.get("/login", login)

export default router;