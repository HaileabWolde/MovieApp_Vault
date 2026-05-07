const db = require("../db/queries");


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


async function getSingleGener(req, res){
  const generid = req.params.id
  const genername = req.params.genername
  const singleGener = await db.getSingleGener(generid)

  res.render("geners/eachgener", {
    title: 'Mini Messageboard',
    singleGener: singleGener,
    genername: genername
  })
}

async function getALLDirector(req, res){
  const director = await db.getALLDirectorNames()
  console.log("Director", director)
  res.render('Director/director', {
    title: 'Mini Messageboard',
    director: director
  })
}


async function getDirectorMovies(req, res){
  const directorid = req.params.id
  const directorname = req.params.directorname

  const singleDirector = await db.getDirectorMovies(directorid)
  console.log("director", singleDirector)
  res.render(
    'Director/singleDirector/eachdirector', {
      title: 'Mini Messageboard',
      singleDirector: singleDirector,
      directorname: directorname
    }
  )
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



module.exports = {
  getAllMovies,
  getSingleMovie,
  getALLDirector,
  getDirectorMovies,
getAllGeners,
getSingleGener
};