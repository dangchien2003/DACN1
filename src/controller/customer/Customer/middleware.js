const helpers = require('../../../until/helper');

async function Hienthithongtinkhachhang(req, res){

    const idkh = req.query.idkh;
    const idtk = req.query.idtk;

    var kq = await helper.query("Select * from ThongTinKhachHang");


    res.json({
        idtk,
        idkh
    })
}


async function suaThongTin(req, res) {
    console.log("sua tt")
        var thongTinMoi = {
            idKH : req.body.idKH,
            idTK : req.body.idTK,
            bietDanh : req.body.bietDanh,
            ten : req.body.ten,
            ho : req.body.ho,
            diaChi : req.body.diaChi,
            email:  req.body.email,
            ngaySinh : req.body.ngaySinh,
            gioiTinh: req.body.gioiTinh,
           sdt : req.body.sdt,
        }

        // đưa vaà câu lệnh sql
       var sql = `Update ThongTinKhachHang SET bietDanh='${thongTinMoi.bietDanh}',ten='${thongTinMoi.ten}', ho='${thongTinMoi.ho}', diaChi='${thongTinMoi.diaChi}', email='${thongTinMoi.email}', ngaysinh='${thongTinMoi.ngaySinh}', gioiTinh='${thongTinMoi.gioiTinh}', sdt='${thongTinMoi.sdt}' WHERE idKH='${thongTinMoi.idKH}'`
        // //truy vấn
        console.log(sql);
        var result = await helpers.query(sql);
        //câu lệnh tipế thjeo
        var edit = result.rowsAffected[0];
        if(edit == 0) {
            res.json("Sua that bai")
        }else {
            res.json("sua thanh cong")
        }
        
        // return;
        
        // kh bt đâu
        // const newData = thongTinMoi;
        
        //var sql = `Update ThongTinKhachHang SET bietDanh = bietdab WHERE idKH = idkh`,
    }

module.exports = {
    Hienthithongtinkhachhang,
    suaThongTin
}
