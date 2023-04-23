import express  from "express";
import { adduser } from "../controllers/user.js";


const router = express.Router()

//router.get("/test", adduser)

router.get("/new", adduser)





export default router;