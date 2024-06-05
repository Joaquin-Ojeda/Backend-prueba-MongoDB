const movieRepository = require('../repository/movieRepository');

exports.getMovies = ()=>{
    return movieRepository.getMoviesRepo();
}

exports.getMovieById = (id)=>{
    return movieRepository.getMovieByIdRepo(id);
}

exports.createMovie = (movie)=>{
    return movieRepository.createMovieRepo(movie);
}

exports.deleteMovie = ()=>{

}

exports.updateMovie = ()=>{

}