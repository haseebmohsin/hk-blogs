const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  datePublished: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  image: { type: String },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  bio: { type: String },
  profilePicture: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }],
  likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }],
  role: { type: String, enum: ['visitor', 'user', 'admin'], default: 'visitor' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
