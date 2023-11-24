import express from "express";
import {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
} from "../controllers/blogController.js";

//router object
const router = express.Router();
//routes
//GET|| all blogs
router.get("/all-blog", getAllBlogsController);

//POST || create-blogs
router.post("/create-blog", createBlogController);

//PUT || UPDATE
router.put("/update-blog/:id", updateBlogController);

//Get|| single blog details
router.get("/get-blog/:id", getBlogByIdController);

//DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

export default router;
