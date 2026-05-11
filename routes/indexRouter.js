const {Router}  = require("express");
const { getAllMovies, 
    getSingleMovie
} = require("../controllers/movieQuery")

const {getAllGeners, getSingleGener } = require("../controllers/genersQuery")
const {getALLDirector, getDirectorMovies} = require("../controllers/directorQuery")
const indexRouter = Router();


indexRouter.get('/movies', getAllMovies)
indexRouter.get('/movies/:id', getSingleMovie)
indexRouter.get('/geners',  getAllGeners)
indexRouter.get('/geners/:genername/:id', getSingleGener)
indexRouter.get('/directors', getALLDirector)
indexRouter.get('/director/:directorname/:id', getDirectorMovies)
indexRouter.get('/new', (req, res)=>{
    console.log("username will be formmed")
})

indexRouter.post('/new', (req, res)=>{
    console.log("username to be saved; ", req.body.username)
})
module.exports = indexRouter;