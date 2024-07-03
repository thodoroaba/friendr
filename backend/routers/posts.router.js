const express = require('express');
const postsController = require('../controllers/posts.controller');

const router = express.Router();

router.post('/', postsController.createPost);
router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPost);
router.delete('/:id', postsController.deletePost);
router.patch('/:id/likes', postsController.updatePostLikes)

module.exports = router;
