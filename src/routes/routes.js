import express from 'express';
import * as postController from '../controllers/postController.js';

const router = express.Router();

router.get('/posts', postController.getPosts);
router.post('/posts', postController.createPost);

export default router;