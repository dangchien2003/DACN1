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

module.exports = {
    getOrder
}