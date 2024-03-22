const helpers = require('../../../until/helper');

async function showCart(req, res) {

    try {
        console.log("showCart");
        const kh = req.cookies.kh;
        if (!kh) {
            res.redirect('/login');
            return;
        }

        const sql = `select GioHang.idSP as idsp,ten, gia, GioHang.soLuong, gia*GioHang.soLuong as tong , anh from GioHang left join SanPham on SanPham.idSP = GioHang.idSP where idKH = '${kh}'`;
        var cart = await helpers.query(sql);
        var cartTotals = 0;
        cart.recordset.forEach(e => {
            cartTotals += e.tong
        });
        res.render('customer/cart/root', {
            cart: cart.recordset,
            cartTotals,
            title: "cart",
            scripts: ["cart", "custom-dev", "custom"]
        });
    } catch (e) {
        console.log(e);
        res.render('customer/err/err', helpers.err(500))
    }
}

async function addCart(req, res) {
    console.log("add cart");

    try {
        var kh;
        try {
            kh = req.cookies.kh;
        } catch {
            kh = null;
        }

        const productId = req.body.sp_ma;
        const productName = req.body.sp_ten;
        const sl = req.body.soluong;

        if (sl <= 0) {
            res.json({
                error: {
                    message: "số lượng không hợp lệ"
                }
            });
            return;
        }


        var sql = `MERGE INTO giohang AS target
        USING (SELECT '${kh}' AS idkh, ${productId} AS idsp, ${sl} AS soluong) AS source
        ON target.idkh = source.idkh AND target.idsp = source.idsp
        WHEN MATCHED THEN
            UPDATE SET target.soluong = target.soluong + source.soluong
        WHEN NOT MATCHED THEN
            INSERT (idkh, idsp, soluong) VALUES (source.idkh, source.idsp, source.soluong);`;
        console.log(sql);
        var result = await helpers.query(sql);

        if (result.rowsAffected[0] == 1) {
            res.redirect('/cart/product')
        } else {
            res.render("customer/err/err", helpers.err(404))
        }
    } catch (err) {
        res.render("customer/err/err", helpers.err(500))
    }


}

async function updateCart(req, res) {
    try {
        var kh;
        try {
            kh = req.cookies.kh;

        } catch {
            res.redirect('/login');
            return;
        }

        var cart = req.body;

        // chuyển string thành array
        if (!Array.isArray(cart.idsp)) {
            cart.idsp = [cart.idsp]
            cart.ten = [cart.ten]
            cart.soluong = [cart.soluong]
        }

        // lấy chuỗi sql
        var sql = "";
        for (var i = 0; i < cart.idsp.length; i++) {
            sql += `update GioHang set soLuong = ${cart.soluong[i]} where idSP = ${cart.idsp[i]} and idKH = '${kh}';`;
        }
        // truy vấn
        var result = await helpers.query(sql);

        var response = {
            fail: []
        };

        var count = 0;

        // lấy sản phẩm update lỗi
        result.rowsAffected.forEach(e => {
            if (e == 0) {
                response.fail.push(req.body.ten[count]);
            }
            count++;
        })
        res.redirect('/cart/product');

    } catch (e) {
        console.log(e);
        res.render('customer/err/err', helpers.err(500));
    }
}

async function showCheckout(req, res) {
    try {
        const kh = req.cookies.kh;
        var sql = `select ten, GioHang.soLuong, SanPham.gia, (SanPham.gia * GioHang.soLuong) as tong from GioHang 
        join SanPham on SanPham.idSP = GioHang.idSP
        where GioHang.idKH = '${kh}'`;

        var sanPham = await helpers.query(sql);
        var phiShip = 30000;
        var tongGia = phiShip;
        sanPham.recordset.forEach(e => {
            tongGia += e.tong;
        })
        res.render("customer/pay/root", {
            title: "Thanh toán",
            tongGia,
            phiShip,
            sanPham: sanPham.recordset,
            scripts: ["custom-dev", "thanhtoan"]
        })
    } catch (err) {
        console.log(err.message);
        res.render("customer/err/err", helpers.err(500))
    }

}

async function CheckoutCart(req, res) {
    console.log("checkout");
    try {
        const kh = req.cookies.kh;
        const tk = req.cookies.un;
        var thanhToan = req.body.input.phuongthucthanhtoan;
        var ten = req.body.input.ten;
        var sdt = req.body.input.sdt;
        var diachi = req.body.input.diachi;

        var idDH = `DH${Date.now()}_${Math.floor(Math.random() * 90 +10).toString()}`;
        var input = [{
                key: "ten",
                value: ten
            },
            {
                key: "sdt",
                value: sdt
            },
            {
                key: "diachi",
                value: diachi
            },
            {
                key: 'idKH',
                value: kh
            },
            {
                key: 'idDH',
                value: idDH
            },
            {
                key: 'thanhToan',
                value: thanhToan
            }
        ]
        var result = await helpers.procedureSQL(input, "ThanhToanDonHang");
        if (result.returnValue == 0) {
            res.json({
                status: 2,
                error: true,
                message: "Có lỗi xảy ra"
            })
        } else {
            res.json({
                status: 1,
                error: false,
                message: "Thanh toán thành công"
            })
        }
    } catch (e) {
        console.log(e);
        res.json({
            status: 2,
            error: true,
            message: "Có lỗi xảy ra"
        })
    }

}

async function deleteCart(req, res) {
    console.log("deleteCart");
    try {
        const kh = req.cookies.kh;

        var idsp = req.body.idsp;

        const sql = `delete from GioHang where idsp = ${idsp} and idKH = '${kh}'; 
        select sum(GioHang.soLuong*SanPham.gia) as tongGia from GioHang 
        join SanPham on SanPham.idSP = Giohang.idSP
        where GioHang.idKH = '${kh}'`;
        var result = await helpers.query(sql);
        if (result.rowsAffected[0] == 1) {
            res.json({
                status: 1,
                message: "Xoá thành công",
                tongGia: result.recordset[0].tongGia
            })
        } else {
            console.log("Xoá không thành công");
            res.json({
                status: 2,
                message: "Xoá không thành công"
            })
        }
    } catch (err) {
        res.json({
            status: 2,
            message: "Lỗi server"
        })
    }

}


module.exports = {
    showCart,
    addCart,
    updateCart,
    CheckoutCart,
    showCheckout,
    deleteCart
}