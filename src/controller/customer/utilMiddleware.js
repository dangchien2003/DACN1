const helper = require("../../until/helper");

async function checkBlock(req, res, next) {

    try {
        // const tk =  req.cookies.tk;
        const tk = 'tk7';
        if (!tk) {
            // res.redirect('/login');
            res.json("login");
            return;
        }

        const sql = `select khoa from TaiKhoan where taiKhoan = '${tk}'`;
        const result = await helper.query(sql);
        if (!result.recordset[0].khoa) next();
        else res.json("Tài khoản đã bị khoá");
    } catch (err) {
        res.json("error");
    }

}

module.exports = {
    checkBlock
}