const {
    request
} = require('express');
const helpers = require('../../../until/helper');
async function login(req, res) {
    // tạo ra 2 biên
    // 1 biến lưu username
    var user = req.body.taikhoan;

    //    1 biên lưu password
    var pass = req.body.matkhau;
    // tao 1 biến sql lưu câu truy vấn
    var sql = `Select count(taiKhoan) as exits from TaiKhoan WHERE taiKhoan = '${user}' and matKhau = '${pass}'`;
    //taạ 1 biên hấng kết qua cua hamf truy vấn bằng helper
    var kq = await helpers.query(sql);
    // ếu kết quả bằng 1 thì trả về đăng nhpậ thành công
    var exits = kq.recordset[0].exits;
    if (exits == 1) {
        res.json("dang nhap thanh cong");
    } else {
        res.json("dang nhap that bai")
    }
    // nếu không trả về đăng nập thất bại
}
async function register(req, res) {

}
module.exports = {
    login
}