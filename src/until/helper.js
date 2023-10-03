const sql = require("mssql/msnodesqlv8");
const {
    promises
} = require("msnodesqlv8");
const fs = require("fs");


function getConfig() {
    return new Promise((resolve, reject) => {
        fs.readFile('./config/configdb.json', 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            } else {
                const config = JSON.parse(data);
                resolve(config);
            }
        })
    })
}


async function query(stringQuery) {
    try {
        const config = await getConfig();
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query(stringQuery);
        return result;
    } catch (error) {
        console.log(error);
        return undefined;
    } finally {
        sql.close();
    }


};

module.exports = {
    query
}