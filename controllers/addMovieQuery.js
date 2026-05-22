const db = require("../db/directorQueries");
const dbOne = require('../db/genersQueries')
const database = require('../db/queries');
//error handling middleware

const CustomNotFoundError = require("../errors/CustomNotFoundError")


async function addMovieForm(req, res){
   const allDirectors = await db.allDirectorsNames();
   const allGeners = await dbOne.getAllGenersNames();

   res.render('Form/addMovieForm',
    {
        title: 'Mini Messageboard',
        allDirectors: allDirectors,
        allGeners: allGeners,
        error: null,        // ← Important
       FormData: null
    }
   )
}

async function insertNewMovie(req, res, next) {
    const {
        moviename, typeofmovie, description, priority,
        imageurl, director, geners, rating, watcheddate
    } = req.body;

   try {
        await database.insertNewMovie(
            moviename, typeofmovie, description, priority,
            imageurl, director, geners, rating, watcheddate
        );

        res.redirect("/movies");

    } catch (error) {
        console.error("Insert Movie Error:", error);

        // Handle Duplicate Movie Error (PostgreSQL)
        if (error.code === '23505' || error.constraint === 'unique_movie_name') {
            
            const allDirectors = await db.allDirectorsNames();
            const allGeners = await dbOne.getAllGenersNames();

            return res.render('Form/addMovieForm', {
                title: 'Add New Movie',
                allDirectors: allDirectors,
                allGeners: allGeners,
                error: `A movie titled ${moviename} already exists!`,
                FormData: null
                
            });
        }

        // For any other real error, pass to your error middleware
        next(error);
    }
}
module.exports = {
   addMovieForm,
   insertNewMovie
};