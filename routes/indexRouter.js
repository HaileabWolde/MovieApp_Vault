const {Router}  = require("express");
const { getAllMovies, 
    getSingleMovie, getSearchedMovies
} = require("../controllers/movieQuery")

const {getAllGeners, getSingleGener, 
    getGenreForm, insertGenreForm,
    editSingleGenre,
   getSearchedGeners
 } = require("../controllers/genersQuery")
const {getALLDirector, getDirectorMovies, 
    addDirectorForm, getSearchedDirector} = require("../controllers/directorQuery")
const {addMovieForm, insertNewMovie} = require("../controllers/addMovieQuery")

const {editMovie}  = require("../controllers/editMovieQuery")

const {addNewDirector, editDirector} = require("../controllers/addDirectoryQuery")

const {Authentication} = require("../controllers/authentication")

const {authController} = require("../authController/authController")
const indexRouter = Router();


// GET routes - For Movies
indexRouter.get('/movies', getAllMovies)
indexRouter.get('/movies/add', addMovieForm)
indexRouter.get('/movies/search', getSearchedMovies)
indexRouter.get('/movie/delete', (req, res)=> {
    const {id, type} = req.query
  res.render('Authentication/Authentication', {
    id: id,
    type: type
  })
})

indexRouter.get('/movies/edit/:id', (req, res)=>{
  const {type} = req.query
  const {id} = req.params


  res.render('Authentication/Authentication', {
    id: id,
    type: type
  })
})

indexRouter.get('/movies/:id', getSingleMovie)


//GET ROUTES  FOR A DIRECTOR

indexRouter.get('/directors/add', addDirectorForm)
indexRouter.get('/directors', getALLDirector)
indexRouter.get('/director/search', getSearchedDirector)
indexRouter.get('/director/delete', (req, res)=> {
   const {directorid, type} = req.query
  
  res.render('Authentication/Authentication', {
    id: directorid,
    type: type
  })
})
indexRouter.get('/director/:directorname/:id', getDirectorMovies)

indexRouter.get('/editdirector/:id', (req, res)=> {
  const {type} = req.query
  const {id} = req.params


  res.render('Authentication/Authentication', {
    id: id,
    type: type
  })
})



//GET ROUTES FOR A GENERS 

indexRouter.get('/geners', getAllGeners)
indexRouter.get('/genres/search', getSearchedGeners)
indexRouter.get('/genre/delete', (req, res)=>{
  const {genreid, type} = req.query
  
  res.render('Authentication/Authentication', {
    id: genreid,
    type: type
  })
})
indexRouter.get('/geners/:genername/:id', getSingleGener)
indexRouter.get('/genres/add', getGenreForm)

indexRouter.get('/editgenre/:id', (req, res)=> {
  const {type} = req.query
  const {id} = req.params


  res.render('Authentication/Authentication', {
    id: id,
    type: type
  })
})
/*
indexRouter.get('/editgenre/:id',  editExistingGenre)*/



// POST ROUTES FOR MOVIES
indexRouter.post('/movie/newMovie', insertNewMovie)
indexRouter.post('/movie/editMovie/:id', editMovie)


// POST ROUTES FOR DIRECTORS
indexRouter.post('/director/add', addNewDirector)
indexRouter.post('/director/editdirector/:id', editDirector)



// POST ROUTES FOR GENRES

indexRouter.post('/genres/add', insertGenreForm)
indexRouter.post('/editgenre/:id', editSingleGenre)



// POST ROUTES FOR AUTHETNICATION
indexRouter.post('/auth/check', Authentication, authController)

module.exports = indexRouter;