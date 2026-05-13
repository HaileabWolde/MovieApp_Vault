const db = require("../db/directorQueries");
const dbOne = require('../db/genersQueries')
const database = require('../db/queries');

async function addMovieForm(req, res){
   const allDirectors = await db.allDirectorsNames();
   const allGeners = await dbOne.getAllGenersNames();

   res.render('Form/addMovieForm',
    {
        title: 'Mini Messageboard',
        allDirectors: allDirectors,
        allGeners: allGeners
    }
   )
}

async function insertNewMovie(req, res){
   const {
      moviename, typeofmovie,
        description, priority,
      imageurl, director, 
      geners, rating, 
      watcheddate, 
    } = req.body;
    await database.insertNewMovie(
      moviename, typeofmovie,
        description, priority,
      imageurl, director, 
      geners, rating, 
      watcheddate)
  res.redirect("/movies");
}
module.exports = {
   addMovieForm,
   insertNewMovie
};