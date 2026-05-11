const db = require("../db/queries");


async function getAllMovies(req, res){
  const movies = await  db.getALLMoviesWithDirectors()
  const generes = await db.getAllMoviesWithGeneres()
  
  res.render('index', { 
    title: 'Mini Messageboard',
    movies: movies,
    generes: generes
  })
}



async function getSingleMovie(req, res){
  const movieid = req.params.id
  const singleMovie = await db.getSpecficMovies(movieid);
  const categories = await db.getAllGenersOfSingleMovie(movieid);
  const directors = await db.getAllDirectorsOfSingleMovie(movieid);
  console.log("Movie:",  categories);
  res.render('singleMovie', {
    title: 'A Single Movie Detail',
    singleMovie: singleMovie,
    categories: categories,
    directors: directors
  })
}



module.exports = {
  getAllMovies,
  getSingleMovie,
};