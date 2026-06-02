const {deleteMovie} = require("../controllers/editMovieQuery")
const authController = (req, res)=>{
    console.log(req.body)
    const {id, type} = req.body

    if(type === 'movies'){
        deleteMovie(id)
          res.redirect('/movies'); // ← THIS WAS MISSING
    }
    else {
        console.log('Fuck off')
    }
}
module.exports = {
    authController
}