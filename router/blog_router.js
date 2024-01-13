import express from "express";
import { createblog, deleteblog, getallblogs, updateblog } from "../controller/blog_controller";

const router = express.Router();

router.post("/",createblog);
router.get("/",getallblogs);
router.delete("/:id",deleteblog);
router.patch("/:id",updateblog);



export default router