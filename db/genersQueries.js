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

async function editExistingGenreForm(id) {
    const {rows} = await pool.query(`
    SELECT * FROM GENRES WHERE genreid = ${id}
        `)

    return rows;
    
}

async function editExistingGenre(id, genrename){
    const {rows} = await pool.query(
        `
        UPDATE  GENRES
        SET genername = $2
        WHERE genreid = $1
        `, [id,  genrename]
    )
}

async function deleteGenre(genreid){
    try{
               await pool.query('DELETE FROM  MOVIE_GENRE WHERE genreid = $1', [genreid])
               await pool.query(`DELETE FROM GENRES WHERE genreid  = $1`, [genreid])
     
        }
        catch(error){
             console.error("Delete Movie Error:", error);
            res.status(500).send("Error deleting movie");
        }
}
module.exports = {  
    getAllGeners,
    getSingleGener,
    getAllGenersNames,
    insertNewGenre,
    editExistingGenreForm,
    editExistingGenre,
    deleteGenre
}