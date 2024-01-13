import express from "express";
import { getallusers , signup , login } from "../controller/user_controller";
const router = express.Router();



router.get("/",getallusers);
router.post('/signup',signup);
router.post('/login', login);
 
  
 export default router