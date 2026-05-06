const db = require("../db/queries");

async function getUsernames(req, res) {

  //res.render('index')
  
  const directornames = await db.getALLDirectorNames();
  console.log("Usernames: ", directornames);
  res.send("Usernames: " + directornames.map(user => user.directorname).join(", "));
}
async function getAllMovies(req, res){
  const movies = await  db.getALLMoviesWithDirectors()
  const generes = await db.getAllMoviesWithGeneres()
  
  res.render('index', { 
    title: 'Mini Messageboard',
    movies: movies,
    generes: generes
  })
}
async function getAllGeners(req, res){
  const geners = await db.getAllGeners()
  console.log("geners", geners)
  res.render('geners/gener', {
    title: 'Mini Messageboard',
    geners: geners
  })
}
async function getALLDirector(req, res){
  const director = await db.getALLDirectorNames()
  console.log("Director", director)
  res.send('Fuck Off')
}
async function getSingleMovie(req, res){
  const movieid = req.params.id
  const singleMovie = await db.getSpecficMovies(movieid);
  console.log("Movie:", singleMovie);
  res.render('singleMovie', {
    title: 'A Single Movie Detail',
    singleMovie: singleMovie
  })
}
async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getAllMovies,
  getSingleMovie,
  getUsernames,
  getALLDirector,
getAllGeners
};