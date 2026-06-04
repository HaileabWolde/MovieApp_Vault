// middleware/auth.js
require("dotenv").config();

const Authentication = (req, res, next) => {
    try {
        const { Admincheck, id, type } = req.body;

        if (!Admincheck) {
             res.render('Authentication/Authentication', {
                     id: id,
                  type: type,
                error: "Admin Check is required" 
            })
        }

        else if  (Admincheck === process.env.DB_admin) {
            next(); // Proceed to next middleware/route handler
        } 
        else {
            res.render('Authentication/Authentication', {
                id: id,
                 type: type,
                error: "Unauthorized: Invalid admin password" 
         })

        }
    } catch (error) {
        console.error('Authentication Error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { Authentication };