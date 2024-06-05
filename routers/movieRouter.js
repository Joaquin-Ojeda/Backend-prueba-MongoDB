const express = require('express');
const movieController = require('../controllers/movieController');

const movieRouter = express.Router();

//Middleware
movieRouter.use(express.json());

movieRouter.get('/', movieController.readMovies);
movieRouter.get('/:id', movieController.getMovieById);
movieRouter.post('/', movieController.createMovie);
movieRouter.put('/:id', movieController.updateMovie);
movieRouter.delete('/:id', movieController.deleteMovie);

module.exports = movieRouter;