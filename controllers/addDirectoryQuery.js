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
        // Handle Duplicate Movie Error (PostgreSQL)
                if (error.code === '23505' || error.constraint === 'unique_director_name') {
                    
                    return res.render('Form/addDirectorForm', {
                        title: 'Add New Movie',
                        error: `${directorname} already exists!`,
    
                    });
                }
        // For any other real error, pass to your error middleware
        next(error);
    }
}

module.exports = {
    addNewDirector
}