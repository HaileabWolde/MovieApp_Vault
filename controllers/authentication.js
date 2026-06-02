// middleware/auth.js
require("dotenv").config();

const Authentication = (req, res, next) => {
    try {
        const { Admincheck, id, type } = req.body;

        if (!Admincheck) {
            return res.status(400).json({ message: "Admincheck is required" });
        }

        if (Admincheck === process.env.DB_admin) {
            next(); // Proceed to next middleware/route handler
        } else {
            return res.status(403).json({ message: "Unauthorized: Invalid admin password" });
        }
    } catch (error) {
        console.error('Authentication Error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { Authentication };