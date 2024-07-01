const PostModel = require('../data/users.model');
const postsService = require('../services/posts.service');

const postsController = {
  getPost: async (req, res) => {
    console.log('Reached GET post controller');
    const postId = req.params.id;
    console.log(req.params.id);
    const postObj = await usersService.getPostById(postId);
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
    if (!postToBeCreated || !postToBeCreated.id || !postToBeCreated.user_id || !postToBeCreated.title || !postToBeCreated.description) {
      res.status(400).send('Invalid post object');
      return;
    }

    postToBeCreated.date = new Date().toISOString();

    postsService.createPost(postToBeCreated);
    res.status(201).send('User post successfully');
  },
  deletePost: async (req, res) => {
    console.log(`Deleted post with id: ${postId}`);
    const response = await postsService.deletePost(postId);
    console.log(response);
    res.send(response);
  },
};

module.exports = postsController;
