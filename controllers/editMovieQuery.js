const db = require('../db/queries')
const dbOne = require('../db/genersQueries')
const dbTwo = require("../db/directorQueries")

async function editMovieForm(movieid){

   // const movieid = req.params.id
      const singleMovie = await db.getSpecficMovies(movieid);
      const categories = await db.getAllGenersIdOfSingleMovie(movieid);
      const directors = await db.getAllDirectorsIdofSingleMovie(movieid);
        // Use Number() to ensure the result is a number type
const directorArray= directors.map(obj => Number(obj.directorid)); 
const genersArray = categories.map(obj=> Number(obj.genreid))
    const FormData = {
      singleMovie,
      genersArray ,
       directorArray
    }
 
  

      //all Directors and Geners
      const allDirectors = await dbTwo.allDirectorsNames();
       const allGeners = await dbOne.getAllGenersNames();
   
       return {
         allDirectors, allGeners, FormData
       }
     
}

async function editMovie(req, res){
    const movieid = req.params.id
     const {
        moviename, typeofmovie, description, priority,
        imageurl, director, geners, rating, watcheddate
    } = req.body;
    await db.editExistingMovie(
       moviename, typeofmovie, 
       description, priority, 
       imageurl, director, 
       geners, rating, 
       watcheddate,movieid
    )
    res.redirect("/movies")

}

async function deleteMovie(movieid){
  
    
   try{
        await db.deleteSingleMovie(movieid)
     
   }
   catch(error){
      console.error("Insert Movie Error:", error);
   }
 
}
module.exports = {
    editMovieForm,
    editMovie,
    deleteMovie
}