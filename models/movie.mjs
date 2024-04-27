//import mongoose for schema
import mongoose from 'mongoose';

//defines the data structure that will be used in mongoDB for each instance of "Movie" (defined below by mongoos.model)
const movieSchema = new mongoose.Schema({
    title: String,
    release_Date: String,
    main_Actress: String,
    main_Actor: String,
    trilogy: Boolean,
});

const Movie = mongoose.model('Movie', movieSchema);

//export the module
export default Movie;