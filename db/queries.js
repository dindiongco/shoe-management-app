const pool = require("./pool");
	
async function getAllShoes() {
  const { rows } = await pool.query("SELECT * FROM shoe");
  return rows;
}

async function insertShoe(name, brand, price, imgURL) {
  await pool.query("INSERT INTO shoe (name, brand, price) VALUES ($1, $2, $3, $4)", [name, brand, price, imgURL]);
}

module.exports = {
    getAllShoes,
    insertShoe,
    
};
