const sql = require("mssql/msnodesqlv8");
const config = require("../../config/config");
const {
    promises
} = require("msnodesqlv8");

async function query(stringQuery) {
    try {
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query(stringQuery);
        return result;
    }catch (error) {
        return undefined;
    }finally {
        sql.close();
    }
    

};

module.exports = {
    query
}