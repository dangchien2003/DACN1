const helpers = require('../../../until/helper');

async function returnProduct(req, res) {
    var numproduct = 10;
    var sql = `select top ${numproduct} idSP, anh, ten, gia from SanPham `;
    var listProduct = await helpers.query()
    console.log(listProduct);
    res.json(listProduct);
}

module.exports = {returnProduct}