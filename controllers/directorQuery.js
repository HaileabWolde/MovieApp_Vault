const db = require("../db/directorQueries");
async function getALLDirector(req, res){
  const director = await db.getALLDirectorNames()
  
  res.render('Director/director', {
    title: 'Mini Messageboard',
    director: director
  })
}

async function getSearchedDirector(req, res){
  const {directorsearch} = req.query
  const searchedDirectors = await db.getSearchedDirectors(directorsearch)

  res.render('Director/director', {
    title: 'Mini Messageboard',
    director: searchedDirectors
  })
}
async function getDirectorMovies(req, res){
  const directorid = req.params.id
  const directorname = req.params.directorname

  const singleDirector = await db.getDirectorMovies(directorid)
 
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
async function deleteDirector(req, res){
  const {directorid} = req.body;
  try{
    await db.deleteSingleDirector(directorid)
    res.redirect('/directors')
  }
  catch(error){
    console.log('Error', error)
  }
}
module.exports = {
  getALLDirector,
  getDirectorMovies,
  addDirectorForm,
  getSearchedDirector,
  deleteDirector
};