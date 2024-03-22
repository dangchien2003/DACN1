const {
    request
} = require('express');
const helpers = require('../../../until/helper');

function showLogin(req, res) {
    res.render('customer/authen/login.ejs', {
        title: "login"
    })
}

async function login(req, res) {
    try {
        // tạo ra 2 biên
        // 1 biến lưu username
        var user = req.body.input.un;

        //    1 biên lưu password
        var pass = req.body.input.pass;
        // tao 1 biến sql lưu câu truy vấn
        var sql = `Select ThongTinKhachHang.idKH, TaiKhoan.khoa from TaiKhoan left join ThongTinKhachHang on TaiKhoan.idTK = ThongTinKhachHang.idTK WHERE taiKhoan = '${user}' and matKhau = '${pass}'`;

        //taạ 1 biên hấng kết qua cua hamf truy vấn bằng helper
        var kq = await helpers.query(sql);

        if (kq.recordset.length == 0) {
            res.json({
                status: 2,
                message: "Tài khoản hoặc mật khẩu không đúng "
            })
            return;
        }
        // ếu kết quả bằng 1 thì trả về đăng nhpậ thành công
        var idKH = kq.recordset[0].idKH;
        var khoa = kq.recordset[0].khoa;

        if (khoa) {
            res.json({
                status: 2,
                message: "Tài khoản đã bị khoá"
            })
        } else {
            res.cookie('un', user);
            res.cookie('kh', idKH);
            res.json({
                status: 1,
                message: "Đăng nhập thành công"
            })
        }
        return;
        // nếu không trả về đăng nập thất bại
    } catch (err) {

        res.json({
            status: 3,
            message: "Có lỗi xảy ra: " + err.message
        })
    }

}
async function register(req, res) {
    var sqlde = "";
    try {
        //b1 lấy dữ liệu form đăng ký // username, password, comfirm password, email
        var user = req.body.user;
        var password = req.body.password;
        var confirmPassword = req.body.confirmPassword;
        var email = req.body.email;
        // b2 check đủ dữ liệu cần thiết nếu không đủ dữ liệu thì thông báo nhập thông tin cần thiết
        if (!user || !password || !confirmPassword || !email) {
            res.render('customer/authen/register.ejs', {
                message: "Thiếu thông tin"
            })

            return;
        }
        //b3 check trùng mk nếu không trùng trả về mật khẩu không trùng khớp
        if (password != confirmPassword) {

            res.render('customer/authen/register.ejs', {
                message: "Mật khẩu không trùng khớp"
            })

            return;
        }

        //b5 render ra idtk và idkh
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0
        var year = date.getFullYear();
        var ntn = `${year}-${month}-${day}`;
        var random = Math.floor(Math.random() * 90 + 10).toString();
        var idKH = `kh${Date.now()}_${random}`;
        var idTK = `tk${Date.now()}_${random}`;


        //b4 check tồn tại của username nếu tồn tại trả về username đã tồn tại
        var sql = `SELECT count(*) as exits from TaiKhoan where taiKhoan = '${user}'`;
        var kq = await helpers.query(sql);
        if (kq.recordset[0].exits == 1) {
            res.render('customer/authen/register.ejs', {
                message: "Tài khoản đã tồn tại"
            })
        } else {
            sql = `INSERT INTO TaiKhoan (idTK, taikhoan, matKhau, capBac, ngayTao ) values ('${idTK}', '${user}', '${password}', 1, '${ntn}');
            insert into ThongTinKhachHang (idKH, idTK, email) values('${idKH}', '${idTK}', '${email}')`;
            // var sqld = `delete TaiKhoan where idTK = '${idTK}'`;
            console.log(sql);
            var insert = await helpers.query(sql);
            try {
                if (insert.rowsAffected[0] == 1 && insert.rowsAffected[1] == 1) {


                    res.render('customer/authen/register.ejs', {
                        message: "Đăng ký thành công"
                    })
                } else {
                    
                    res.render('customer/authen/register.ejs', {
                        message: "Đăng ký thất bại"
                    })

                }
            } catch (e) {
                console.log(e);
                // var insert = await helpers.query(sql);
                res.render('customer/authen/register.ejs', {
                    message: "Đăng ký thất bại"
                })

            }

        }

        // b6 thêm dữ liệu vào bảng tk và thông tin khách hàng
        // nếu thêm thành công thì thông báo tạo thành công và chuyển về trang đăng nhập
        // nếu không thì thông báo có lỗi trong quá trình tạo
    } catch (e) {
        console.log(e);
        res.render('customer/err/err', helpers.err(404))
    }

}


function showRegister(request, response) {
    response.render('customer/authen/register.ejs', {
        message: null
    })
}

function logOut(req, res) {
    res.cookie('kh', "");
    res.cookie('un', "");
    res.redirect("/login")
}

module.exports = {
    login,
    showLogin,
    register,
    showRegister,
    logOut
}