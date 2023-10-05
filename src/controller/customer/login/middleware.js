const {
    request
} = require('express');
const helpers = require('../../../until/helper');

function showLogin(req, res) {
    res.render('customer/authen/login.ejs', {title: "login"})
}

async function login(req, res) {
    try{
        // tạo ra 2 biên
        // 1 biến lưu username
        var user = req.body.username;

        //    1 biên lưu password
        var pass = req.body.password;
        // tao 1 biến sql lưu câu truy vấn
        var sql = `Select ThongTinKhachHang.idKH from TaiKhoan left join ThongTinKhachHang on TaiKhoan.idTK = ThongTinKhachHang.idTK WHERE taiKhoan = '${user}' and matKhau = '${pass}'`;
    
        //taạ 1 biên hấng kết qua cua hamf truy vấn bằng helper
        var kq = await helpers.query(sql);
        // ếu kết quả bằng 1 thì trả về đăng nhpậ thành công
        console.log(kq.recordset);
        var idKH = kq.recordset[0].idKH;
        if (idKH) {
            res.cookie('un',user );
            res.cookie('kh',idKH );

            res.redirect("/sale")
        } else {
            res.json("dang nhap that bai")
        }
        // nếu không trả về đăng nập thất bại
    }catch(err) {
        
        res.json(err);
    }
    
}
async function register(req, res) {

}
module.exports = {
    login,
    showLogin
}