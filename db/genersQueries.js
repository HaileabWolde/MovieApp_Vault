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

async function getAllGenersNames(){
    const {rows} = await pool.query(`
        SELECT * FROM genres
        `)
    return rows;
}

async function insertNewGenre(genrename){
    const genreResult = await pool.query(`
        INSERT INTO GENRES (genername)
        VALUES ($1)
        `, [genrename])
}
module.exports = {  
    getAllGeners,
    getSingleGener,
    getAllGenersNames,
    insertNewGenre
}