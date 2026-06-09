const db = require("../db/queries")
const dbOne = require("../db/directorQueries")
const dbTwo = require("../db/genersQueries")
async function homePage(req, res){

    const movies = await db.allMovies()
    const directors = await dbOne.getALLDirectorNames()
    const genres = await dbTwo.getAllGeners()

   
res.render('Home/HomePage', {
    title: 'Mini Movie Vault',
    movies: movies,
    directors: directors,
    genres: genres
})
}
module.exports = {
    homePage
}