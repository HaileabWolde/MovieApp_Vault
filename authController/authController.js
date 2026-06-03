const {deleteMovie, editMovieForm} = require("../controllers/editMovieQuery")
async function  authController(req, res){
   
    const {id, type} = req.body

    if(type === 'movies'){
        deleteMovie(id)
          res.redirect('/movies'); // ← THIS WAS MISSING
    }
    if(type == 'editmovies'){
      const {allDirectors, allGeners, FormData}  = await editMovieForm(id)
        

       res.render("Form/addMovieForm", {
        title: 'Mini Messageboard',
         allDirectors: allDirectors,
        allGeners: allGeners,
        error: null,        // ← Important
       FormData: FormData
      })
    }
    else {
        console.log('Fuck off')
    }
}
module.exports = {
    authController
}