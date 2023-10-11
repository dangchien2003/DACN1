
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
        var order = await helper.getOrder(kh);

        order = order.recordset.map(row => ({
            ...row,
            ngayTao: helper.formatDate(row.ngayTao.toISOString().slice(0, 10),"dd/mm/yyy") +" "+row.ngayTao.toISOString().slice(11, 19)
        }));

        res.render('customer/order/root.ejs', {
            order,
            title: "Đơn hàng"})
    } catch (err) {
        res.render('customer/err/err.ejs', helper.err(500));
    }
}


async function cancelOrder(req, res) {
    console.log("cancelOrder");
    try {
        var idDH = req.body.idDH;
        var idDH = 0;
        var idKH = req.cookies.kh;
        if (!idKH) {
            res.json(" về trang đăng nhập");
            return;
        }

        if (!idDH) {
            res.json("có lỗi xảy ra")
            return;
        }
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        const sql = `update [DonHang] set [ngayHuy] = '${time}', [tinhTrangDonHang] = 5 where idKH='${idKH}' and id = '${idDH}';`;
        const result = await helper.query(sql);
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