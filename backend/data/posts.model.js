const mongoose = require('mongoose');

const PostModel = mongoose.model('Post', {
  id: Number,
  user_id: Number,
  title: String,
  description: String,
  date: String,
});

module.exports = PostModel;
