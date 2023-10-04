const helpers = require('../../../until/helper');

async function returnProducts(req, res) {

    try {
        var numproduct = 10;
        var sql = `select top ${numproduct} idSP, anh, ten, gia from SanPham `;
        var listProduct = await helpers.query(sql)
        console.log(listProduct);
        res.json(listProduct);
    } catch (err) {
        console.log(err);
    }
}

async function returnInfoProduct(req, res) {

    try {
        var id = req.params.idsp;
        var sql = `select idSP, anh, ten, gia, mota from SanPham where idSP = ${id}`;
        var info = await helpers.query(sql)
        const clientIP = req.ip || req.connection.remoteAddress;
        console.log('IP của client:', clientIP);
        if (info.recordset.length == 0) {
            res.status(404).json({
                message: "not find product",
                clientIP
            });
            return;
        }
        res.json({
            sp: info.recordset,
            clientIP
        });
    } catch (err) {
        console.log(err);
    }
}

async function returnComent(req, res) {

}

module.exports = {
    returnProducts,
    returnInfoProduct,
    returnComent
}