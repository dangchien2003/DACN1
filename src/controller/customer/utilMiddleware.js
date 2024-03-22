const helper = require("../../until/helper");

async function checkBlock(req, res, next) {
    console.log("checkBlock");
    try {

        const tk = req.cookies.un;
        const kh = req.cookies.kh;
        if (!tk || !kh) {
            res.redirect('/login');
            return;
        }
        const sql = `select khoa, ngayKhoa from TaiKhoan where taiKhoan = '${tk}'`;
        const result = await helper.query(sql);
        if (!result.recordset[0].khoa && !result.recordset[0].ngayKhoa) next();
        else res.json("Tài khoản đã bị khoá");
    } catch (err) {
        res.json("error");
    }

}

module.exports = {
    checkBlock
}