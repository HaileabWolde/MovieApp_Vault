const db = require("../db/queries");


async function getAllMovies(req, res){
  const movies = await db.allMovies()
  const directors = await  db.getALLMoviesWithDirectors()
  const genres = await db.getAllMoviesWithGeneres()
  
  res.render('index', { 
    title: 'Mini Messageboard',
    movies: movies,
    directors: directors,
    genres: genres
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