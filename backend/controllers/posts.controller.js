const PostModel = require('../data/users.model');
const postsService = require('../services/posts.service');

const postsController = {
  updatePostLikes: async (req, res) => {
    console.log('Reached PATCH post likes controller');

    const postId = req.params.id;
    const username = req.body.username;

    if (!username) {
      res.status(400).json({ message: 'username is required' });
      return;
    }

    console.log(req.params.id);
    console.log(req.params.username);

    const postObj = await postsService.getPostById(postId);
    if (!postObj) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    const likes = postObj.likes;

    if (likes.includes(username)) {
      await postsService.removePostLikes(postId, username);
    } else {
      await postsService.addPostLikes(postId, username);
    }

    const updatedPostObj = await postsService.getPostById(postId);

    res.status(200).send(updatedPostObj);
  },

  getPost: async (req, res) => {
    console.log('Reached GET post controller');
    const postId = req.params.id;
    console.log(req.params.id);
    const postObj = await postsService.getPostById(postId);
    res.status(200).send(postObj);
  },
  getPosts: async (req, res) => {
    console.log('Reached GET posts controller');

    const postsObj = await postsService.getPosts();

    res.status(200).send(postsObj);
  },
  createPost: async (req, res) => {
    console.log('Reached post controller');
    const postToBeCreated = req.body;
    console.log(postToBeCreated);

    //validate user object from request
    if (!postToBeCreated || !postToBeCreated.author || !postToBeCreated.title || !postToBeCreated.description) {
      res.status(400).send({ message: 'Invalid post object' });
      return;
    }

    postsService.createPost(postToBeCreated);
    res.status(201).send({ message: 'Post created successfully' });
  },
  deletePost: async (req, res) => {
    console.log(`Deleted post with id: ${postId}`);
    const response = await postsService.deletePost(postId);
    console.log(response);
    res.send(response);
  },
};

module.exports = postsController;
