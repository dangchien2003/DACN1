/** @format */

const sql = require("mssql/msnodesqlv8");
var config = {
  database: "DACN1_QLBH",
  server: "localhost",
  driver: "msnodesqlv8",
  user: "sa",
  password: "sa",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
};

// const conn = new sql.connect(config);
module.exports = config;
