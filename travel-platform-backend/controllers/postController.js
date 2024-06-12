import db from "../models/index.js";
const { Post } = db;

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addPost = async (req, res) => {
  const { user_id, content, location_id } = req.body;

  try {
    const post = await Post.create({
      user_id,
      content,
      location_id,
    });

    res.json(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { getPosts, addPost };
