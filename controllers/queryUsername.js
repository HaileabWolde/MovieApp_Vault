const db = require("../db/queries");

async function getUsernames(req, res) {

  res.render('index')
  /*
  const usernames = await db.getALLUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));*/
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};