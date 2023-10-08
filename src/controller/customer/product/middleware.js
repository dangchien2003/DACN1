const helpers = require('../../../until/helper');

async function returnProducts(req, res) {
    console.log("list products");
    try {
        var numproduct = 6;
        var sql = `select top ${numproduct} idSP, anh, ten, gia from SanPham`;
        var listProduct = await helpers.query(sql);
        res.cookie('lp', '1', {
            maxAge: 360000,
            httpOnly: true
        });
        res.render("customer/sale/root.ejs", {
            products: listProduct.recordset,
            title: "Gian hàng"
        });
    } catch (err) {
        console.log(err);
    }
}


async function moreProducts(req, res) {
    try {
        console.log("moreProducts");
        var lp = req.cookies.lp;

        if (!lp) {
            lp = 1;
        }
        const numproduct = 6;
        var sql = `SELECT idSP, anh, ten, gia FROM SanPham ORDER BY idSP OFFSET ${lp*numproduct} ROWS FETCH NEXT 10 ROWS ONLY;`;
        var listProduct = await helpers.query(sql);
        if (listProduct.recordset.length == 0) {
            {
                res.json("end product")
                return;
            }
        }
        res.cookie('lp', lp + 1, {
            maxAge: 36000,
            httpOnly: true
        })
        res.json(listProduct.recordset)
    } catch (err) {
        res.json("err");
    }

}

async function returnInfoProduct(req, res) {
    console.log("info product");
    try {
        var idsp = req.params.idsp;
        var sql = `
        select idSP, anh, ten, gia, mota, 
        (select AVG(soSao) from DanhGia 
        where DanhGia.idSP = ${idsp}
        group by idSP) as sosao,
        (select count(*) from ThongTinDonHang
        where ThongTinDonHang.idSP = ${idsp} ) as luotmua
        from SanPham where idSP = ${idsp}`;
        var info = await helpers.query(sql);
        if (info.recordset.length == 0) {
            res.status(404).json({
                message: "not find product",
                clientIP
            });
            return;
        }
        var comments = await returnComment(idsp);
        res.render("customer/product/root", {
            info: info.recordset[0],
            comments,
            title: "sản phẩm"
        })
    } catch (err) {
        console.log(err);
    }
}

async function returnComment(idsp) {
    var sql = `
    select danhGia, traLoiDG, ten, soSao from DanhGia 
    left join DonHang on DonHang.id = DanhGia.idDH
    left join ThongTinKhachHang on ThongTinKhachHang.idKH = DonHang.idKH
    where DanhGia.idsp = ${idsp}`;
    var result = await helpers.query(sql);
    return result.recordset;
}

// async function returnComment(req, res) {
    
// }

module.exports = {
    returnProducts,
    returnInfoProduct,
    moreProducts
    ,returnComment
}