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
    try {
        //b1 lấy dữ liệu form đăng ký // username, password, comfirm password, email
        var user = req.body.user;
        var password = req.body.password;
        var confirmPassword= req.body.confirmPassword;
        var email = req.body.email;
        // b2 check đủ dữ liệu cần thiết nếu không đủ dữ liệu thì thông báo nhập thông tin cần thiết
        if(!user|| !password || !confirmPassword || !email){
            res.render('customer/authen/register.ejs', {message: "Thiếu thông tin"})
                
            return;
        }
        //b3 check trùng mk nếu không trùng trả về mật khẩu không trùng khớp
        if(password != confirmPassword){
           
            res.render('customer/authen/register.ejs', {message: "Mật khẩu không trùng khớp"})
                
            return;
        } 
        
        //b5 render ra idtk và idkh
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var day = date.getDate();
        var month = date.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0
        var year = date.getFullYear();
        var ntn = `${year}-${month}-${day}`;
        var time = `${hours}:${minutes}:${seconds}_${day}-${month}-${year}`;
        var random = Math.floor(Math.random() * 90 +10).toString();
        var idKH = `kh${time}`;
        var idTK = `tk${time}`;


        //b4 check tồn tại của username nếu tồn tại trả về username đã tồn tại
        var sql = `SELECT count(*) as exits from TaiKhoan where taiKhoan = '${user}'`;
        var kq = await helpers.query(sql);
        console.log(kq)
        if (kq.recordset[0].exits == 1) {
            res.render('customer/authen/register.ejs', {message: "Tài khoản đã tồn tại"})
            // res.json( {
                
            //     message: "Tài khoản đã tồn tại"
            // })
        }
        else {
            sql = `INSERT INTO TaiKhoan (idTK, taikhoan, matKhau, capBac, ngayTao ) values ('${idTK}', '${user}', '${password}', 1, '${ntn}');
            insert into ThongTinKhachHang (idKH, idTK, email) values('${idKH}', '${idTK}', '${email}')`;
            console.log(sql);
            var insert = await helpers.query(sql);
            console.log(insert);
            try {
                if(insert.rowsAffected[0] == 1 && insert.rowsAffected[1] == 1) {
                    
                    
                    res.render('customer/authen/register.ejs', {message: "Đăng ký thành công"})
                }else {
                    res.render('customer/authen/register.ejs', {message: "Đăng ký thất bại"})
                
                }
            }catch(e) {
                res.render('customer/authen/register.ejs', {message: "Đăng ký thất bại"})
                
            }
            
        }
            
        // b6 thêm dữ liệu vào bảng tk và thông tin khách hàng
        // nếu thêm thành công thì thông báo tạo thành công và chuyển về trang đăng nhập
        // nếu không thì thông báo có lỗi trong quá trình tạo
    }catch(e) {
        res.render('customer/err/err', helpers.err(404))
    }
    
}


function showRegister(request, response){
    response.render('customer/authen/register.ejs', {message: null})
}

module.exports = {
    login,
    showLogin,
    register,
    showRegister
}