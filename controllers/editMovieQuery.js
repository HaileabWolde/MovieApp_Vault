const db = require('../db/queries')
const dbOne = require('../db/genersQueries')
const dbTwo = require("../db/directorQueries")

async function editMovieForm(req, res){

    const movieid = req.params.id
      const singleMovie = await db.getSpecficMovies(movieid);
      const categories = await db.getAllGenersOfSingleMovie(movieid);
      const directors = await db.getAallDirectorsIdofSingleMovie(movieid);
        // Use Number() to ensure the result is a number type
const directorArray= directors.map(obj => Number(obj.directorid)); 


    const FormData = {
      singleMovie,
      categories,
       directorArray
    }
 
  

      //all Directors and Geners
      const allDirectors = await dbTwo.allDirectorsNames();
       const allGeners = await dbOne.getAllGenersNames();
    
      res.render("Form/addMovieForm", {
        title: 'Mini Messageboard',
         allDirectors: allDirectors,
        allGeners: allGeners,
        error: null,        // ← Important
       FormData: FormData
      })
}
module.exports = {
    editMovieForm
}