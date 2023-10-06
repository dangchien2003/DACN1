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


function err(status) {
    try {
        var result;
        switch(status) {
            case 404: 
                result = {
                    background: "/customer/img/404.jpg",
                    bgColor: "#C1DEEE",
                    color: "#0281b6"
                }
                break;
            case 500:
                result = {
                    background: "/customer/img/500.jpg",
                    bgColor: "#48BBF1",
                    color: "white"
                }
                break;
            default:
                result = {
                    background: "/customer/img/404.jpg",
                    bgColor: "#D7ECFD",
                    color: "#0281b6"
                }
        }

        return result;
    }catch(e) {

    }
    
}


module.exports = {
    query,
    err
}