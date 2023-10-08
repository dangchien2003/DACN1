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
        cart.recordset.forEach(e=> {
            cartTotals += e.tong
        });
        res.render('customer/cart/root', {
            cart: cart.recordset, 
            cartTotals,
            title: "cart"
        });
    }catch(e) {
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
        }catch{
            kh = null;
        }
        
        const productId = req.body.sp_ma;
        const productName = req.body.sp_ten;
        const sl = req.body.soluong;

        if(sl <= 0) {
            res.json({
                error: {
                    message: "số lượng không hợp lệ"
                }
            });
            return ;
        }


        var sql  = `MERGE INTO giohang AS target
        USING (SELECT '${kh}' AS idkh, ${productId} AS idsp, ${sl} AS soluong) AS source
        ON target.idkh = source.idkh AND target.idsp = source.idsp
        WHEN MATCHED THEN
            UPDATE SET target.soluong = target.soluong + source.soluong
        WHEN NOT MATCHED THEN
            INSERT (idkh, idsp, soluong) VALUES (source.idkh, source.idsp, source.soluong);`;
        
        var result = await helpers.query(sql);
        
        if(result.rowsAffected[0] == 1) {
            res.redirect('/cart/product')
        }else {
            res.render("customer/err/err", helpers.err(404))
        }
    }catch(err) {
        res.render("customer/err/err", helpers.err(500))
    }

    
}

async function updateCart(req, res) {
    try{
        var kh;
        try {
            kh = req.cookies.kh;

        }catch {
            res.redirect('/login');
            return;
        }

        var cart = req.body;

        // chuyển string thành array
        if(!Array.isArray(cart.idsp)) {
            cart.idsp = [cart.idsp]
            cart.ten = [cart.ten]
            cart.soluong = [cart.soluong]
        }

        // lấy chuỗi sql
        var sql = "";
        for(var i = 0; i < cart.idsp.length; i++) {
            sql += `update GioHang set soLuong = ${cart.soluong[i]} where idSP = ${cart.idsp[i]} and idKH = '${kh}';`;
        }
        // truy vấn
        var result = await helpers.query(sql);

        var response = {
            fail:[]
        };

        var count = 0;

        // lấy sản phẩm update lỗi
        result.rowsAffected.forEach(e=> {
            if(e == 0) {
                response.fail.push(req.body.ten[count]);
            }
            count++;
        })
        res.redirect('/cart/product');

    }catch(e) {
        console.log(e);
        res.render('customer/err/err', helpers.err(500));
    }
}


module.exports = {
    showCart,
    addCart,
    updateCart
}