const db = require("../db/directorQueries");
const dbOne = require('../db/genersQueries')

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


module.exports = {
   addMovieForm
};