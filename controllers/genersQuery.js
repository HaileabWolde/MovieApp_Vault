const db = require("../db/genersQueries");
async function getAllGeners(req, res){
  const geners = await db.getAllGeners()

  res.render('geners/gener', {
    title: 'Mini Messageboard',
    geners: geners
  })
}
async function getSearchedGeners(req, res){
  const {genresearch} = req.query

  const geners = await db.getSearchedGenres(genresearch)

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

async function getGenreForm(req, res){
  res.render("Form/addGenreForm", {
    title: 'Mini Messageboard',
    error: null,
     singleGenre: null
  })
}

async function insertGenreForm(req, res){
  const {genrename} = req.body;
 
  try{
    await db.insertNewGenre(genrename)
    res.redirect('/geners')
  }
  catch(error){
    console.log('Genre', error)
      // Handle Duplicate Movie Error (PostgreSQL)
                if (error.code === '23505' || error.constraint === 'unique_genre_name') {
                    
                    return res.render('Form/addGenreForm', {
                        title: 'Add New Genre',
                        error: `${genrename} genre already exists!`,
    
                    });
                }
        // For any other real error, pass to your error middleware
        next(error);
  }

}

async function editExistingGenre(req, res){
  const {id} = req.params


  try{
    const singleGenre = await db.editExistingGenreForm(id)
    console.log(singleGenre[0])
    res.render("Form/addGenreForm", {
    title: 'Mini Messageboard',
    error: null,
    singleGenre: singleGenre
  })
  }
  catch(error){
    console.log("Error", error)
  }
}

async function editSingleGenre(req, res){
  const genreid = req.params.id
  const {
    genrename
  } = req.body

  try{
    await db.editExistingGenre(genreid, genrename)
      res.redirect('/geners')
  }
  catch(error){
    console.log('Error', error)
  }
}

async function deleteGenre(req, res){
  const {genreid} = req.body;
  try{
    await db.deleteGenre(genreid)
    res.redirect('/geners')
  }
  catch(error){
    console.log('Error', error)
  }
}
module.exports = {
getAllGeners,
getSingleGener,
getSearchedGeners,
getGenreForm,
insertGenreForm,
editExistingGenre,
editSingleGenre,
deleteGenre
};
