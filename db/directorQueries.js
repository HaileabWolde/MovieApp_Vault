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

async function allDirectorsNames(){
    const {rows} = await pool.query(`
        SELECT *
        FROM directors
        `)
    return rows;
}

async function insertNewDirector(directorname){
    const directorResult = await pool.query(`
        INSERT INTO directors (directorname)
        VALUES ($1)
        `, [directorname])
}

async function searchSingleDirector(directorid){
    const {rows} = await pool.query(`
        SELECT * FROM directors WHERE directorid = ${directorid}
        `)

        return rows;
}

async function editSingleDirector(directorid, directorname){
    const {rows} = await pool.query(`
        UPDATE DIRECTORS
        SET directorname = $2
        WHERE directorid = $1
        `, [directorid, directorname])
}
module.exports = {
    getALLDirectorNames,
    getDirectorMovies,
    allDirectorsNames,
    insertNewDirector,
    searchSingleDirector,
    editSingleDirector
}
