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
const sql = require("mssql");

const dbConfig = require('../../config/configdb.json');
//Hàm hết nối sql server 

// Hàm thực hiện truy vấn SQL
async function query(stringQuery) {
    try {
        const config = await getConfig();
        await sql.connect(config);
        await sql.connect(dbConfig);
        console.log("Kết nối thành công!")
        const request = new sql.Request();
        const result = await request.query(stringQuery);
        return result;
    } catch (error) {
        console.log(error);
        return undefined;
        console.error("Lỗi truy vấn SQL:", error);
        throw error; // Nếu bạn muốn xử lý lỗi ở lớp gọi, bạn có thể bắt lỗi ở đây và xử lý nó sau đó.
    } finally {
        sql.close();
    }
}


async function getOrder(idkh) {
    try {
        const config = await getConfig();
        await sql.connect(config);
        const request = new sql.Request();
        request.input('idkh',idkh);
        const result = await request.execute('getOrder');
        return result;
    } catch (error) {
        console.log(error);
        return undefined;
    } finally {
        sql.close();
    }


};

function formatDate(date, format) {
    var value = date.split('-');
    if(format == 'dd/mm/yyy')
        var newValue = `${value[1]}/${value[2]}/${value[0]}`;
    return newValue
}

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
    err,
    getOrder,
    formatDate
}
    query
};
