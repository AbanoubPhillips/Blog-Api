import express from "express";
import { createComment, deleteComment, getallComments, updateComment } from "../controller/comment_controller";

const router = express.Router();

router.post("/",createComment);
router.get("/",getallComments);
router.delete("/:id",deleteComment);
router.patch("/:id",updateComment);



export default router