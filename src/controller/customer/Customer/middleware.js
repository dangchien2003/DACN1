const helper = require("../../../until/helper");

async function Hienthithongtinkhachhang(req, res){
    console.log(1)
    
var kq = await helper.query("Select * from ThongTinKhachHang");
console.log(1)

res.json(kq)
}
//async function SuaThongTinKhachhang(req, res){
    //console.log(1)

module.exports = {
    Hienthithongtinkhachhang
}