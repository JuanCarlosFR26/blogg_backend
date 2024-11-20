import * as postService from '../services/postService.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json( {message: 'Error retrieving posts', error});
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await postService.createPost({ title, content });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json( {message: 'Error creating post', error });
    }
};