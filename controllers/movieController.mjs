//Import the Schema from Movie model file to be used in the controller
import Movie from '../models/movie.mjs';

//-----------------------VV-----------GET for all movies
const getAllMovies = async(req,res) => {
    const movies = await Movie.find();
    res.json({movies: movies});
};
//-----------------------VV-----------Get for single movie by _id
const getMovie = async(req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    res.json({ movie: movie })
};

//-----------------------VV-----------POST for creating movie
const createMovie = async(req, res) => {
    const title = req.body.title
    const release_Date = req.body.release_Date
    const main_Actress = req.body.main_Actress
    const main_Actor = req.body.main_Actor
    const trilogy = req.body.trilogy

    const movie = await Movie.create({
        title: title,
        release_Date: release_Date,
        main_Actress: main_Actress,
        main_Actor: main_Actor,     
        trilogy: trilogy,
    });
    res.json({ movie: movie})
};

//-----------------------VV-----------PUT for updating parts of a movie by _id
const updateMovie = async(req, res) => {
    const movieId = req.params.id
    const title = req.body.title
    const release_Date = req.body.release_Date
    const main_Actress = req.body.main_Actress
    const main_Actor = req.body.main_Actor
    const trilogy = req.body.trilogy

    const movie = await Movie.findByIdAndUpdate(movieId, {
        title: title,
        release_Date: release_Date,
        main_Actress: main_Actress,
        main_Actor: main_Actor,
        trilogy: trilogy
    })
    const updatedMovie = await Movie.findById(movieId)
    res.json({ movie: updatedMovie})
}

//-----------------------VV-----------Delete for deleting movie by _id
const deleteMovie = async(req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findByIdAndDelete(movieId)
    res.json({success: "Movie has been deleted successfully"})
};

export { getAllMovies, getMovie, createMovie, updateMovie, deleteMovie }
