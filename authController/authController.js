const {deleteMovie, editMovieForm} = require("../controllers/editMovieQuery")
const {deleteDirector} = require("../controllers/directorQuery")
const { editExistingDirector} = require("../controllers/addDirectoryQuery")
const {deleteGenre,  editExistingGenre} = require("../controllers/genersQuery")
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
    if(type == "directors"){
        
        await  deleteDirector(id)
         res.redirect('/directors')
    }
    if(type == "editdirector"){
        const {singleDirector} = await editExistingDirector(id)
         res.render('Form/addDirectorForm', {
               title: 'Mini Messageboard',
       
         singleDirector: singleDirector    ,
           error: null,    // ← Important

        })
    }
    if(type == "genres"){
        await deleteGenre(id)
         res.redirect('/geners')
    }
    if(type == "editgenre"){
        const {singleGenre} = await editExistingGenre(id)
        
        res.render("Form/addGenreForm", {
    title: 'Mini Messageboard',
    error: null,
    singleGenre: singleGenre
  })
    }
    else {
        console.log('Fuck off')
    }
}
module.exports = {
    authController
}