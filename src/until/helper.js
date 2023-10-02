/** @format */

const sql = require("mssql");
const config = require("../../config/config");

async function query(stringQuery) {
  let pool = await sql.connect(config);
  const result = await pool.request().query(stringQuery);
  return result.recordsets;
}

module.exports = {query};
