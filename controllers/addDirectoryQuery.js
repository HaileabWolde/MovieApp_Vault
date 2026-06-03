const db = require('../db/directorQueries')

async function addNewDirector(req, res) {
    const {
        directorname
    } = req.body

   
    try {
        await db.insertNewDirector(directorname)
         res.redirect("/directors");
    }
    catch (error){
        console.error("Director", error)
        // Handle Duplicate Movie Error (PostgreSQL)
                if (error.code === '23505' || error.constraint === 'unique_director_name') {
                    
                    return res.render('Form/addDirectorForm', {
                        title: 'Add New Director',
                        error: `${directorname} already exists!`,
                           singleDirector: null
    
                    });
                }
        // For any other real error, pass to your error middleware
        next(error);
    }
}

async function editExistingDirector(id){
    
    try{
       const singleDirector =  await db.searchSingleDirector(id)
        return {
            singleDirector
        }
       
    }
    catch(error){
        console.log("Error", error)
    }
}

async function editDirector(req, res){
    const directorid = req.params.id
  
   const {
        directorname
    } = req.body
 
    try {
        await db.editSingleDirector(directorid , directorname)
         res.redirect("/directors");
    }
    catch(error){
        console.log('Error', error)
    }
}

module.exports = {
    addNewDirector,
    editExistingDirector,
    editDirector
}