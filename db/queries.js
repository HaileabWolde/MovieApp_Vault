const pool = require("./pool");

async function getALLDirectorNames(){
    const { rows }  = await pool.query("SELECT * FROM directors");
    return rows;
}
async function getALLMovies(){
    const {rows} = await pool.query("SELECT * FROM  Movies");
    return rows;
}
async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [USERNAME]);
}

module.exports = {
    getALLMovies,
    getALLDirectorNames,
    insertUsername,
}