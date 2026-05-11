const pool = require("./pool");
async function getAllGeners(){
    const {rows} = await pool.query("SELECT * FROM  genres")
    return rows;
}
async function getSingleGener(id){
    const {rows} = await pool.query(`
        SELECT 
             *
         FROM genres
        JOIN movie_genre ON genres.genreid = movie_genre.genreid
        JOIN movies ON movie_genre.movieid = movies.movieid
        WHERE genres.genreid = ${id}
        `);
    return rows
}
module.exports = {  
    getAllGeners,
    getSingleGener,
}