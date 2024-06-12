import db from "../models/index.js";
const { User, Post } = db;

const manageUsers = async (req, res) => {
  const { user_id, is_active } = req.body;

  try {
    const user = await User.findByPk(user_id);
    if (user) {
      user.is_active = is_active;
      await user.save();
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const managePosts = async (req, res) => {
  const { post_id, is_approved } = req.body;

  try {
    const post = await Post.findByPk(post_id);
    if (post) {
      post.is_approved = is_approved;
      await post.save();
      res.json(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { managePosts, manageUsers };
