const helpers = require('../../../until/helper');

async function returnProducts(req, res) {
    console.log("list products");
    try {
        var search = req.query.search || "";
        
        search = search.replace(/'/g, '');
        var numproduct = 8;
        var sql = ""
        if (search) {
            sql = `select top ${numproduct} idSP, anh, ten, gia from SanPham where ten LIKE N'%${search}%' and ngayXoa IS NULL`;

        } else {
            sql = `select top ${numproduct} idSP, anh, ten, gia from SanPham where ngayXoa IS NULL`;
        }
        var listProduct = await helpers.query(sql);
        res.cookie('search', search);
        res.cookie('lp', 1, {
            maxAge: 360000,
            httpOnly: true
        });
        res.render("customer/sale/root.ejs", {
            search,
            products: listProduct.recordset,
            title: "Gian hàng",
            scripts: ["list_product", "custom-dev", "search-product"]
        });
    } catch (err) {
        res.render("customer/sale/root.ejs", helpers.err(500))
    }
}


async function moreProducts(req, res) {
    console.log("moreProducts");
    try {
        var lp = req.cookies.lp;
        var page = req.body.page;
        var search = req.cookies.search;

        if (lp != page) {
            lp = page
        }
        if (!lp) {
            lp = 1;
        }
        const numproduct = 8;
        var sql = "";

        if (search) {
            sql = `SELECT idSP, anh, ten, gia FROM SanPham where ten LIKE N'%${search}%' and ngayXoa IS NULL ORDER BY idSP OFFSET ${lp*numproduct} ROWS FETCH NEXT ${numproduct} ROWS ONLY;`;
        } else {
            sql = `SELECT idSP, anh, ten, gia FROM SanPham where ngayXoa IS NULL ORDER BY idSP OFFSET ${lp*numproduct} ROWS FETCH NEXT ${numproduct} ROWS ONLY;`;
        }
        var listProduct = await helpers.query(sql);
        if (listProduct.recordset.length == 0) {
            {
                console.log("hết sp");
                res.send("")
                return;
            }
        }
        res.cookie('lp', parseInt(lp) + 1, {
            maxAge: 36000,
            httpOnly: true
        })
        res.render("customer/sale/list-product", {
            products: listProduct.recordset
        })
    } catch (err) {
        console.log(err.message);
        res.send("Có lỗi xảy ra");
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
        from SanPham where idSP = ${idsp} and ngayXoa IS NULL `;

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
            title: "sản phẩm",
            scripts: ["custom-dev"]
        })
    } catch (err) {
        console.log(err);
        res.render("customer/err/err", helpers.err(500))
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
module.exports = {
    returnProducts,
    returnInfoProduct,
    moreProducts
}