const router = require('express').Router();
const Post = require('../models/post.model');

// Read Post
router.get('/', async (req, res) => {
	try {
		const post = await Post.find();
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Create new post
router.post('/new', async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savePost = await newPost.save();
		res.status(201).json(savePost);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Update post
router.patch('/:id', async (req, res) => {
	try {
		const updatedPost = await Post.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedPost);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Delete Post
router.delete('/:id', async (req, res) => {
	try {
		const deletedPost = await Post.findByIdAndDelete(req.params.id);
		res
			.status(200)
			.json({ message: 'Post has been deleted successfully', deletedPost });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
