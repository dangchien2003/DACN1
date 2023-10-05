const helpers = require('../../../until/helper');

async function showCart(req, res) {
    console.log("showCart");
    const kh = req.cookies.kh;
    if (!kh) {
        res.redirect('/login');
        return;
    } 
    
    const sql = `select ten, gia, GioHang.soLuong, gia*GioHang.soLuong as tong , anh from GioHang left join SanPham on SanPham.idSP = GioHang.idSP where idKH = '${kh}'`;
    console.log(sql);
    var cart = await helpers.query(sql);
    var cartTotals = 0;
    cart.recordset.forEach(e=> {
        cartTotals += e.tong
    });
    res.render('customer/cart/root', {
        cart: cart.recordset, 
        cartTotals
    });
}

module.exports = {
    showCart
}