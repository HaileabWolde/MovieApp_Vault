const {Router}  = require("express");
const {getUsernames} = require("../controllers/queryUsername")
const indexRouter = Router();

indexRouter.get("/",  getUsernames)

indexRouter.get('/new', (req, res)=>{
    console.log("username will be formmed")
})

indexRouter.post('/new', (req, res)=>{
    console.log("username to be saved; ", req.body.username)
})
module.exports = indexRouter;