const {Router}  = require("express");
const {getUsernames, getAllMovies, 
    getSingleMovie,  getAllGeners, 
    getALLDirector, getSingleGener} = require("../controllers/queryUsername")
const indexRouter = Router();

indexRouter.get("/",  getUsernames)
indexRouter.get('/movies', getAllMovies)
indexRouter.get('/movies/:id', getSingleMovie)
indexRouter.get('/geners',  getAllGeners)
indexRouter.get('/geners/:genername/:id', getSingleGener)
indexRouter.get('/directors', getALLDirector)
indexRouter.get('/new', (req, res)=>{
    console.log("username will be formmed")
})

indexRouter.post('/new', (req, res)=>{
    console.log("username to be saved; ", req.body.username)
})
module.exports = indexRouter;