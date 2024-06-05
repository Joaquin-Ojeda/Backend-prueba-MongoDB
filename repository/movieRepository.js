const Movies = require('./Movies');

exports.getMoviesRepo = async ()=>{
    try{
        let movies = await Movies.find();
        return movies;
    }catch(error){
        console.log(error);
    }
};

exports.getMovieByIdRepo = async (id)=>{
    try{
        let movie = await Movies.findById(id);
        return movie;
    }catch(error){
        console.log(error);
    }
};

exports.createMovieRepo = async (movie)=>{
    try{
        let newMovie = new Movies(movie);
        await newMovie.save();
        return newMovie;
    }catch(error){
        console.log(error);
    }
};

exports.deleteMovieRepo = async (id)=>{
    try{
        let movie = await Movies.findById(id);
        if(movie){
            await Movies.findOneAndDelete({_id:id});
        }else{
            console.log("No se encontro la pelicula con id: " + id);
        }
    }catch(error){
        console.log(error);
    }
};

exports.updateMovieRepo = ()=>{

};