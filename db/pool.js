const { Pool } = require("pg");
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.DB_USERNAME,
  database: "shoes",
  password: process.env.DB_PASSWORD,
  port: 5432 // The default port
});	