const sql = require("mssql");
const dbConfig = require('../../config/config.json');

let pool;

async function connect() {
    try {
        pool = await sql.connect(dbConfig);
        console.log("Kết nối thành công!");
    } catch (error) {
        console.error("Lỗi kết nối SQL:", error);
        throw error;
    }
}

async function query(stringQuery) {
    try {
        if (!pool) {
            await connect();
        }
        const request = pool.request();
        const result = await request.query(stringQuery);
        return result;
    } catch (error) {
        console.error("Lỗi truy vấn SQL:", error);
        throw error;
    }
}

module.exports = {
    query
};