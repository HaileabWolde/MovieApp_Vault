const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});
/*
const { Pool } = require("pg");
require("dotenv").config();   // ← Corrected here
// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database:  process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT// The default port
});

the env file will include like this 
DB_HOST=localhost
DB_USER=postgres
DB_DATABASE=top_users
DB_PASSWORD=1428
DB_PORT=5432
DB_admin = 1428

*/