
const helper = require('../../../until/helper');

async function getTongGia(idkh) {
    try {
        var sql = `SELECT ThongTinTuiHang.idTH, count(gia) as gia 
        FROM ThongTinTuiHang
        LEFT JOIN DonHang ON ThongTinTuiHang.idTH = DonHang.idTH
        WHERE DonHang.idKH = '${idkh}'
        GROUP BY ThongTinTuiHang.idTH;`

        
    }catch(err) {

    }
    
}

async function getOrder(req, res) {
    try {
        const kh = req.cookies.kh;
        if (kh == undefined) {
            res.redirect("/login");
            return;
        }
        const sql = `select DISTINCT 
        DonHang.id, maVanDon, DonHang.donViVanChuyen, 
        TinhTrangDonHang, TinhTrangDonHang.tinhTrang, ngayTao, soLuongMatHang as soLuong
        from DonHang 
        left join ThongTinDonHang on DonHang.id = ThongTinDonHang.idDH
        left join TinhTrangDonHang 
        on DonHang.tinhTrangDonHang = TinhTrangDonHang.id
         where DonHang.idKH = '${kh}';`;
        const order = await helper.query(sql);
        res.render('customer/order/root.ejs', {
            order: order.recordset,
            title: "Đơn hàng"})
    } catch (err) {
        res.render('customer/err/err.ejs', helper.err(500));
    }
}


async function cancelOrder(req, res) {
    console.log("cancelOrder");
    try {
        // var idDH = req.body.idDH;
        // var idKH = req.cookies.user;
        var idDH = "DH1";
        var idKH = 'KH1';
        if (!idKH) {
            res.json(" về trang đăng nhập");
            return;
        }

        if (!idDH) {
            res.json("có lỗi xảy ra")
        }
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        const sql = `update [DonHang] set [ngayHuy] = '${time}', [tinhTrangDonHang] = 5 where idKH='${idKH}' and id = '${idDH}';`;
        const result = await helper.query(sql);
        console.log(result);
        if (result.rowsAffected[0] == 0) {
            res.json("lỗi trong quá trình thực hiện")
            return;
        }
        res.json("huỷ thành công");
    } catch (err) {
        console.log(err);
        console.log("order/middleware");
        res.json("có lỗi xảy ra");
    }

}

module.exports = {
    getOrder,
    cancelOrder
}