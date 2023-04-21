require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const postRoute = require('./routes/post.route');

const app = express();

const MONGODB_URL = process.env.MONGO_DB_URL;

mongoose
	.connect(MONGODB_URL)
	.then(() => console.log('Database is connected'))
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use('/api/post', postRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
