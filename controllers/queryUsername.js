const db = require("../db/queries");

async function getUsernames(req, res) {

  //res.render('index')
  
  const directornames = await db.getALLDirectorNames();
  console.log("Usernames: ", directornames);
  res.send("Usernames: " + directornames.map(user => user.directorname).join(", "));
}
async function getAllMovies(req, res){
  const movies = await  db.getALLMovies()
   console.log("movies: ", movies);
  res.render('index', { 
    title: 'Mini Messageboard',
    movies: movies 
  })
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
  createUsernameGet,
  createUsernamePost
};