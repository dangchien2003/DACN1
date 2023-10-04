const helpers = require('../../../until/helper');

async function Hienthithongtinkhachhang(req, res) {

    const idkh = req.query.idkh; // sau này idkh ấy từ cookie chứ k truyền bằng url
    const idtk = req.query.idtk; //username
    const sql = `select bietDanh, ten, ho, diaChi, email, ngaySinh, gioiTinh, sdt from ThongTinKhachHang Where idKH = '${idkh}' `;
    var kq = await helpers.query(sql);
    res.json({
        info: kq.recordset
    })
}


async function suaThongTin(req, res) {
    console.log("sua tt")
    try {
        var thongTinMoi = {
            idKH: req.body.idKH,
            idTK: req.body.idTK,
            bietDanh: req.body.bietDanh || "",
            ten: req.body.ten || "",
            ho: req.body.ho || "",
            diaChi: req.body.diaChi || "",
            email: req.body.email || "",
            ngaySinh: req.body.ngaySinh || "",
            gioiTinh: req.body.gioiTinh || "",
            sdt: req.body.sdt || "",
        }

        // đưa vaà câu lệnh sql
        var sql = `Update ThongTinKhachHang SET bietDanh = N'${thongTinMoi.bietDanh}',ten = N'${thongTinMoi.ten}', ho = N'${thongTinMoi.ho}', diaChi = N'${thongTinMoi.diaChi}', email = '${thongTinMoi.email}', ngaysinh = '${thongTinMoi.ngaySinh}', gioiTinh = '${thongTinMoi.gioiTinh}', sdt = '${thongTinMoi.sdt}' WHERE idKH = '${thongTinMoi.idKH}'`
        // //truy vấn
        console.log(sql);
        var result = await helpers.query(sql);
        //câu lệnh tipế thjeo
        var edit = result.rowsAffected[0];
        if (edit == 0) {
            res.json("Sua that bai")
        } else {
            res.json("sua thanh cong")
        }
    } catch (e) {
        res.status(500).json("lỗi:" + e)
    }

}

module.exports = {
    Hienthithongtinkhachhang,
    suaThongTin
}