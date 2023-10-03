const e = require('express');
const helper = require('../../../until/helper');

async function getOrder(req, res) {
    try {
        const kh = req.cookies.user;
        console.log(kh);
        if (kh == undefined) {
            // res.redirect("/login");
            res.send("về trang đăng nhập");
            return;
        }

        const sql = `select 
        DonHang.id, maVanDon, TinhTrangDonHang.tinhTrang, ngayTao, TuiHang.soLuong from DonHang 
        left join TuiHang on DonHang.idTH = TuiHang.id
        left join TinhTrangDonHang on DonHang.tinhTrangDonHang = TinhTrangDonHang.id
        where DonHang.idKH = '${kh}';`;
        const result = await helper.query(sql);

        res.json(result.recordset);
    } catch (err) {
        res.json("err");
    }
}


async function cancelOrder(req, res) {
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