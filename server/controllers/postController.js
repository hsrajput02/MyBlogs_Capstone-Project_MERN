import Post from "../models/Post.js";

// CREATE POST
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
      author: req.user
    });

    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL POSTS (with pagination + search)
export const getPosts = async (req, res) => {
  try {
    const { search = "", page = 1 } = req.query;

    const limit = 5;
    const skip = (page - 1) * limit;

    const posts = await Post.find({
      title: { $regex: search, $options: "i" }
    })
      .populate("author", "name email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json(posts);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE POST
export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("author", "name email");

  res.json(post);
};

// UPDATE POST
export const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  if (post.author.toString() !== req.user)
    return res.status(401).json({ message: "Unauthorized" });

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  await post.save();

  res.json(post);
};

// DELETE POST
export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  if (post.author.toString() !== req.user)
    return res.status(401).json({ message: "Unauthorized" });

  await post.deleteOne();

  res.json({ message: "Post deleted" });
};