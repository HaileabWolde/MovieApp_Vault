const pool = require("./pool");
async function getALLDirectorNames(){
    const { rows }  = await pool.query("SELECT * FROM directors");
    return rows;
}
async function getDirectorMovies(id){
    const {rows}  = await pool.query(`
        SELECT 
*
FROM directors 
JOIN movie_director ON directors.directorid = movie_director.directorid
JOIN movies ON movie_director.movieid = movies.movieid
WHERE directors.directorid = ${id}
        `)
        return rows
}
module.exports = {
    getALLDirectorNames,
    getDirectorMovies,
}
