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
    //b1 lấy dữ liệu form đăng ký // username, password, comfirm password, email
    // b2 check đủ dữ liệu cần thiết nếu không đủ dữ liệu thì thông báo nhập thông tin cần thiết
    //b3 check trùng mk nếu không trùng trả về mật khẩu không trùng khớp
    //b4 check tồn tại của username nếu tồn tại trả về username đã tồn tại
    //b5 render ra idtk và idkh
    // b6 thêm dữ liệu vào bảng tk và thông tin khách hàng
    // nếu thêm thành công thì thông báo tạo thành công và chuyển về trang đăng nhập
    // nếu không thì thông báo có lỗi trong quá trình tạo

}
module.exports = {
    login,
    showLogin
}