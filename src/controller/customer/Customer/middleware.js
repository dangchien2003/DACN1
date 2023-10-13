const helpers = require('../../../until/helper');

async function Hienthithongtinkhachhang(req, res) {
    var idkh = null;
    var idtk = null;
    try {
        idkh = req.cookies.kh;
        idtk = req.cookies.un;
    }catch {
        res.redirect('/login');
        return;
    }

    try {
        const sql = `select idKH, bietDanh, ten, ho, diaChi, email, ngaySinh, gioiTinh, sdt from ThongTinKhachHang Where idKH = '${idkh}' `;
        var info = await helpers.query(sql);
        info = info.recordset.map(row =>  {
            if(row.ngaySinh) {
                return ({
                    ...row,
                    ngaySinh: row.ngaySinh.toISOString().slice(0,10)
                } )
            }else {
                return row
            }
            
        })
        
        console.log(info);
        res.render('customer/customer/root.ejs', {
            title: "Thông tin",
            info: info[0]
        })
    }catch(e) {
        console.log(e);
        res.render('customer/err/err', helpers.err(500)); 
    }
    
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