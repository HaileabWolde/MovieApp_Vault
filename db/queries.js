const pool = require("./pool");

async function getALLDirectorNames(){
    const { rows }  = await pool.query("SELECT * FROM directors");
    return rows;
}
async function getALLMovies(){
    const {rows} = await pool.query(`SELECT* 
        FROM movies JOIN movie_director ON movies.movieid = movie_director.movieid 
        JOIN directors ON movie_director.directorid = directors.directorid`);
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
    getALLMovies,
    getSpecficMovies,
    getALLDirectorNames,
    insertUsername,
}