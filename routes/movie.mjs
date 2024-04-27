import express from 'express';
const router = express.Router();
import {getAllMovies, getMovie, createMovie, updateMovie, deleteMovie} from '../controllers/movieController.mjs';

//Route for getting all movies and creating movies
router.route('/')
    .get(getAllMovies)
    .post(createMovie)

//Route for getting single movie, updating single movie, and deleting single move
router.route('/:id')
    .get(getMovie)
    .put(updateMovie)
    .delete(deleteMovie)

export default router;