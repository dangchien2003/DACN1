const helpers = require('../../../until/helper');

async function Hienthithongtinkhachhang(req, res) {
    var idkh = null;
    var idtk = null;
    try {
        idkh = req.cookies.kh;
        idtk = req.cookies.un;
    } catch {
        res.redirect('/login');
        return;
    }

    try {
        const sql = `select idKH, bietDanh, ten, ho, diaChi, email, ngaySinh, gioiTinh, sdt from ThongTinKhachHang Where idKH = '${idkh}' `;
        var info = await helpers.query(sql);
        info = info.recordset.map(row => {
            if (row.ngaySinh) {
                return ({
                    ...row,
                    ngaySinh: row.ngaySinh.toISOString().slice(0, 10)
                })
            } else {
                return row
            }

        })
        res.render('customer/customer/root', {
            title: "Thông tin",
            info: info[0],
            scripts: ["custom-dev", "thongTinKH"]
        })
    } catch (e) {
        console.log(e);
        res.render('customer/err/err', helpers.err(500));
    }

}


async function suaThongTin(req, res) {
    console.log("sua tt")
    try {
        var thongTinMoi = {
            idKH: req.cookies.kh,
            idTK: req.cookies.un,
            bietDanh: req.body.input.bietdanh || "",
            ten: req.body.input.ten || "",
            ho: req.body.input.ho || "",
            diaChi: req.body.input.diachi || "",
            email: req.body.input.email || "",
            ngaySinh: req.body.input.ngaysinh || "",
            gioiTinh: req.body.input.gioitinh || "",
            sdt: req.body.input.sdt || "",
        }
        if(new Date(thongTinMoi.ngaySinh) > new Date()) {
            res.json({
                status: 2,
                message: "Sửa thất bại"
            })
            return;
        }

        // đưa vaà câu lệnh sql
        var sql = `Update ThongTinKhachHang SET bietDanh = N'${thongTinMoi.bietDanh}',ten = N'${thongTinMoi.ten}', ho = N'${thongTinMoi.ho}', diaChi = N'${thongTinMoi.diaChi}', email = '${thongTinMoi.email}', ngaysinh = '${thongTinMoi.ngaySinh}', gioiTinh = '${thongTinMoi.gioiTinh}', sdt = '${thongTinMoi.sdt}' WHERE idKH = '${thongTinMoi.idKH}'`

        
        var result = await helpers.query(sql);
        //câu lệnh tipế thjeo
        var edit = result.rowsAffected[0];
        if (edit == 1) {
            res.json({
                status: 1,
                message: "Sửa thành công"
            })

        } else {
            res.json({
                status: 2,
                message: "Sửa thất bại"
            })
        }
    } catch (e) {
        res.json({
            status: 2,
            message: "Có lỗi xảy ra"
        })
    }

}

function action(req, res) {

    res.render('customer/customer/root', {
        title: "Cá nhân"
    })
}

module.exports = {
    Hienthithongtinkhachhang,
    suaThongTin,
    action
}