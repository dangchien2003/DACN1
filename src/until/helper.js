const sql = require("mssql");

const dbConfig = require('../../config/configdb.json');
//Hàm hết nối sql server 

// Hàm thực hiện truy vấn SQL
async function query(stringQuery) {
    try {
        await sql.connect(dbConfig);
        console.log("Kết nối thành công!")
        const request = new sql.Request();
        const result = await request.query(stringQuery);
        return result;
    } catch (error) {
        console.error("Lỗi truy vấn SQL:", error);
        throw error; // Nếu bạn muốn xử lý lỗi ở lớp gọi, bạn có thể bắt lỗi ở đây và xử lý nó sau đó.
    } finally {
        sql.close();
    }
}

module.exports = {
    query
};