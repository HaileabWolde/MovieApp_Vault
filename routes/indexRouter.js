const {Router}  = require("express");

const indexRouter = Router();

indexRouter.get("/",  (req, res)=>{
    console.log("usernames will be logged here - wip");
    res.send("hello world")
})

indexRouter.get('/new', (req, res)=>{
    console.log("username will be formmed")
})

indexRouter.post('/new', (req, res)=>{
    console.log("username to be saved; ", req.body.username)
})
module.exports = indexRouter;