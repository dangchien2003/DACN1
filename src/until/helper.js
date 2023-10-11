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
        throw error;
    } finally {
        sql.close();
    }


};


async function procedureSQL (input, procedureName) {
    try {
        const config = await getConfig();
        await sql.connect(config);
        const request = new sql.Request();
        input.forEach(element => {
            request.input(element.key, element.value)
        });
        const result = await request.execute(procedureName);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        sql.close();
    }
}

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
    formatDate,
    procedureSQL
}