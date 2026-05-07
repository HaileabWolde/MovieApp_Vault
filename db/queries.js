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
async function getALLMoviesWithDirectors(){
    const {rows} = await pool.query(`SELECT* 
        FROM movies JOIN movie_director ON movies.movieid = movie_director.movieid 
        JOIN directors ON movie_director.directorid = directors.directorid`);
   
    return rows;
}
async function getAllMoviesWithGeneres(){
     const {rows} = await pool.query(`
        SELECT 
    *
FROM genres
JOIN movie_genre ON genres.genreid = movie_genre.genreid
JOIN movies ON movie_genre.movieid = movies.movieid
        `)
    return rows;
}
async function getSpecficMovies(id){
    const {rows} = await pool.query(`SELECT 
    *
FROM movies
JOIN movie_director ON movies.movieid = movie_director.movieid
JOIN directors ON movie_director.directorid = directors.directorid
WHERE movies.movieid = ${id}`)
    return rows;
}
async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [USERNAME]);
}

module.exports = {
    getALLMoviesWithDirectors,
     getAllMoviesWithGeneres,
    getSpecficMovies,
    getALLDirectorNames,
    getDirectorMovies,
    getAllGeners,
    getSingleGener
   
}