const {Router}  = require("express");
const { getAllMovies, 
    getSingleMovie
} = require("../controllers/movieQuery")

const {getAllGeners, getSingleGener } = require("../controllers/genersQuery")
const {getALLDirector, getDirectorMovies, addDirectorForm} = require("../controllers/directorQuery")
const {addMovieForm, insertNewMovie} = require("../controllers/addMovieQuery")

const {editMovieForm, editMovie, deleteMovie}  = require("../controllers/editMovieQuery")

const {addNewDirector, editExistingDirector, editDirector} = require("../controllers/addDirectoryQuery")
const indexRouter = Router();


// GET routes - Put more specific routes FIRST
indexRouter.get('/movies', getAllMovies)
indexRouter.get('/movies/add', addMovieForm)


//GET ROUTES FORM FOR A DIRECTOR

indexRouter.get('/directors/add', addDirectorForm)



// These two should come before the generic :id route
indexRouter.get('/movies/edit/:id', editMovieForm)
indexRouter.get('/movies/:id', getSingleMovie)

indexRouter.get('/geners', getAllGeners)
indexRouter.get('/geners/:genername/:id', getSingleGener)
indexRouter.get('/directors', getALLDirector)
indexRouter.get('/director/:directorname/:id', getDirectorMovies)


//direcotr post routes

indexRouter.get('/editdirector/:id', editExistingDirector)

// POST
indexRouter.post('/movie/newMovie', insertNewMovie)
indexRouter.post('/movie/editMovie/:id', editMovie)


// POST 
indexRouter.post('/director/add', addNewDirector)
indexRouter.post('/director/editdirector/:id', editDirector)

//DELETE
indexRouter.post('/movie/delete', deleteMovie)
module.exports = indexRouter;