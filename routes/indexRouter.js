const {Router}  = require("express");
const { getAllMovies, 
    getSingleMovie
} = require("../controllers/movieQuery")

const {getAllGeners, getSingleGener } = require("../controllers/genersQuery")
const {getALLDirector, getDirectorMovies} = require("../controllers/directorQuery")
const {addMovieForm, insertNewMovie} = require("../controllers/addMovieQuery")


const indexRouter = Router();


indexRouter.get('/movies', getAllMovies)
indexRouter.get('/movies/add', addMovieForm)
indexRouter.get('/movies/:id', getSingleMovie)

indexRouter.get('/geners',  getAllGeners)
indexRouter.get('/geners/:genername/:id', getSingleGener)
indexRouter.get('/directors', getALLDirector)
indexRouter.get('/director/:directorname/:id', getDirectorMovies)


//post routers

indexRouter.post('/movie/newMovie', insertNewMovie)
module.exports = indexRouter;