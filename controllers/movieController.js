const movieService = require('../services/movieService');

exports.readMovies = async (req, res)=>{
    try{
        const movies = await movieService.getMovies();
        res.status(200).send(movies);
    }catch(error){
        console.log(error)
        res.status(500).send("Error al encontrar peliculas.");
    }
    
};

exports.getMovieById = async (req, res)=>{
    try{
        const movie = await movieService.getMovieById(req.params.id);
        if(movie){
            res.status(200).send(movie);
        }else{
            res.status(404).send("Error al encontrar pelicula con id: "+req.params.id)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al encontrar pelicula con id: "+req.params.id);
    }
};

exports.createMovie = ()=>{};

exports.updateMovie = ()=>{};

exports.deleteMovie = ()=>{};

