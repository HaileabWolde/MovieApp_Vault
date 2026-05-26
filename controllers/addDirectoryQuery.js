const db = require('../db/directorQueries')

async function addNewDirector(req, res) {
    const {
        directorname
    } = req.body

    console.log(directorname)
    try {
        await db.insertNewDirector(directorname)
         res.redirect("/directors");
    }
    catch (error){
        console.error("Director", error)
    }
}

module.exports = {
    addNewDirector
}