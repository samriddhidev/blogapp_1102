import blogModel from "../models/blogModel.js";

// Get all blogs
export const getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "No blogs found",
      });
    }

    return res.status(200).send({
      success: true,
      blogCount: blogs.length,
      message: "All blogs listed",
      blogs,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      message: "Error while getting blogs",
    });
  }
};

// Create blog
export const createBlogController = async (req, res) => {
  try {
    // Add logic to create a new blog
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      return res.status(400).send({
        success: false,
        message: "please provide all fields",
      });
    }
    const newBlog = new blogModel({ title, description, image });
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "blog created!",
      newBlog,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      message: "Error while creating a blog",
    });
  }
};

// Update blog
export const updateBlogController = async (req, res) => {
  try {
    // Add logic to update a blog
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      message: "Error while updating a blog",
    });
  }
};

// Get single blog by ID
export const getBlogByIdController = async (req, res) => {
  try {
    // Add logic to get a single blog by ID
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      message: "Error while getting a blog by ID",
    });
  }
};

// Delete blog
export const deleteBlogController = async (req, res) => {
  try {
    // Add logic to delete a blog
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      message: "Error while deleting a blog",
    });
  }
};
