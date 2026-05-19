const db = require('../db/queries')
const dbOne = require('../db/genersQueries')
const dbTwo = require("../db/directorQueries")

async function editMovieForm(req, res){

    const movieid = req.params.id
      const singleMovie = await db.getSpecficMovies(movieid);
      const categories = await db.getAllGenersOfSingleMovie(movieid);
      const directors = await db.getAllDirectorsOfSingleMovie(movieid);

      //all Directors and Geners
      const allDirectors = await dbTwo.allDirectorsNames();
       const allGeners = await dbOne.getAllGenersNames();
    
      res.render("Form/addMovieForm", {
        title: 'Mini Messageboard',
         allDirectors: allDirectors,
        allGeners: allGeners,
        error: null,        // ← Important
       FormData: null
      })
}
module.exports = {
    editMovieForm
}