const db = require("../db/queries");

async function getShoes(req, res) {
  const shoes = await db.getAllShoes();
  console.log("Shoes: ", shoes);
//   res.send("Shoes: " + shoes.map(shoe => shoe.name).join(", "));
res.render('pages/collections', { title: 'Collections', shoes: shoes });
}

// async function createUsernameGet(req, res) {
//   // render the form
// }

// async function createUsernamePost(req, res) {
//   const { username } = req.body;
//   await db.insertUsername(username);
//   res.redirect("/");
// }

module.exports = {
  getShoes
};