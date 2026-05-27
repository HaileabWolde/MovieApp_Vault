const db = require("../db/genersQueries");
async function getAllGeners(req, res){
  const geners = await db.getAllGeners()

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
    error: null
  })
}

async function insertGenreForm(req, res){
  const {genrename} = req.body;
  console.log(genrename)
  try{
    await db.insertNewGenre(genrename)
    res.redirect('/geners')
  }
  catch(error){
    console.log('Eroor', error)
  }

}
module.exports = {
getAllGeners,
getSingleGener,
getGenreForm,
insertGenreForm
};
