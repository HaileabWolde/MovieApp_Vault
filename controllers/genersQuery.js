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
module.exports = {
getAllGeners,
getSingleGener,
getGenreForm
};
