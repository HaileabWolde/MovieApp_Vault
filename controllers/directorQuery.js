const db = require("../db/directorQueries");
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

async function addDirectorForm(req, res){
   res.render('Form/addDirectorForm',
    {
        title: 'Mini Messageboard',
         error: null,     
         singleDirector: null   // ← Important
    }
   )
}

module.exports = {
  getALLDirector,
  getDirectorMovies,
  addDirectorForm
};