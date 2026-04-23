const pool = require("./pool");

async function getALLUsernames(){
    const { rows }  = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [USERNAME]);
}

module.exports = {
    getALLUsernames,
    insertUsername
}