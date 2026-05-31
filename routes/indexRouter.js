const {Router}  = require("express");
const { getAllMovies, 
    getSingleMovie, getSearchedMovies
} = require("../controllers/movieQuery")

const {getAllGeners, getSingleGener, 
    getGenreForm, insertGenreForm,
    editExistingGenre, editSingleGenre,
    deleteGenre, getSearchedGeners
 } = require("../controllers/genersQuery")
const {getALLDirector, getDirectorMovies, 
    addDirectorForm, deleteDirector, getSearchedDirector} = require("../controllers/directorQuery")
const {addMovieForm, insertNewMovie} = require("../controllers/addMovieQuery")

const {editMovieForm, editMovie, deleteMovie}  = require("../controllers/editMovieQuery")

const {addNewDirector, editExistingDirector, editDirector} = require("../controllers/addDirectoryQuery")
const indexRouter = Router();


// GET routes - For Movies
indexRouter.get('/movies', getAllMovies)
indexRouter.get('/movies/add', addMovieForm)
indexRouter.get('/movies/search', getSearchedMovies)
indexRouter.get('/movies/edit/:id', editMovieForm)
indexRouter.get('/movies/:id', getSingleMovie)


//GET ROUTES  FOR A DIRECTOR

indexRouter.get('/directors/add', addDirectorForm)
indexRouter.get('/directors', getALLDirector)
indexRouter.get('/director/search', getSearchedDirector)
indexRouter.get('/director/:directorname/:id', getDirectorMovies)
indexRouter.get('/editdirector/:id', editExistingDirector)



//GET ROUTES FOR A GENERS 

indexRouter.get('/geners', getAllGeners)
indexRouter.get('/genres/search', getSearchedGeners)
indexRouter.get('/geners/:genername/:id', getSingleGener)
indexRouter.get('/genres/add', getGenreForm)
indexRouter.get('/editgenre/:id',  editExistingGenre)



// POST ROUTES FOR MOVIES
indexRouter.post('/movie/newMovie', insertNewMovie)
indexRouter.post('/movie/editMovie/:id', editMovie)
indexRouter.post('/movie/delete', deleteMovie)


// POST ROUTES FOR DIRECTORS
indexRouter.post('/director/add', addNewDirector)
indexRouter.post('/director/editdirector/:id', editDirector)
indexRouter.post('/director/delete', deleteDirector)


// POST ROUTES FOR GENRES

indexRouter.post('/genres/add', insertGenreForm)
indexRouter.post('/editgenre/:id', editSingleGenre)
indexRouter.post('/genre/delete',   deleteGenre)




module.exports = indexRouter;