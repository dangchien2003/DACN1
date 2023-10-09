const query = require("../../until/helper");

class AccountController {
  //[GET] /admin/acounts --> Lấy danh sách tài khoản (admin và khách hàng)
  async index(req, res) {
    try {
      const queryStringKhachHang = `
                        SELECT KH.*,
                              TK.[taiKhoan],
                              TK.[matKhau],
                              TK.[capBac],
                              TK.[khoa],
                              TK.[ngayTao],
                              TK.[ngayKhoa],
                              TK.[nguoiKhoa]
                        FROM [ThongTinKhachHang] AS KH
                        JOIN [TaiKhoan] AS TK ON KH.idTK = TK.idTK;`;
      const queryString = `
                          SELECT A.*,
                                TK.[taiKhoan],
                                TK.[matKhau],
                                TK.[capBac],
                                TK.[khoa],
                                TK.[ngayTao],
                                TK.[ngayKhoa],
                                TK.[nguoiKhoa]
                          FROM [admin] AS A
                          JOIN [TaiKhoan] AS TK ON A.idTK = TK.idTK;`;

      const adminsResult = await query.query(queryString);
      const customersResult = await query.query(queryStringKhachHang);
      const admins = adminsResult.recordset || [];
      const customers = customersResult.recordset || [];
      res.render("accounts/account.hbs", { admins, customers });
    } catch (error) {
      res.status(500).send("message: Lỗi không thể xóa được", error)
    }
  }

  //[GET] /admin/acounts/delete/customer/:id --> Xóa tài khoản khách hàng
  async deleteCustomer(req, res) {
    try {
      const id = req.params.id;
      const getIdTKQuery = `SELECT idTK FROM ThongTinKhachHang WHERE idKH = '${id}'`;
      const idTKResult = await query.query(getIdTKQuery);
      
      if (idTKResult && idTKResult.recordset.length > 0) {
        const idTK = idTKResult.recordset[0].idTK;
        
        // Xóa bản ghi trong bảng "ThongTinKhachHang"
        const deleteKHQuery = `DELETE FROM ThongTinKhachHang WHERE idKH = '${id}'`;
        await query.query(deleteKHQuery); 

        // Xóa các bản ghi trong bảng "TaiKhoan" liên quan
        const deleteTKQuerry = `DELETE FROM TaiKhoan WHERE idTK = '${idTK}'`;
        await query.query(deleteTKQuerry);      
        
      } res.redirect("/admin/accounts");
    } catch (error) {
      res.status(500).send("message: Lỗi không thể xóa được", error)
    }
  }
  //[GET] /admin/acounts/delete/admin/:id --> Xóa tài khoản Admin
  async deleteAdmin(req, res) {
    try {
      const id = req.params.id;
      const getIdTKQuery = `SELECT idTK FROM admin WHERE idAdmin = '${id}'`;
      const idTKResult = await query.query(getIdTKQuery);
      if (idTKResult && idTKResult.recordset) {
        const deleteAdminQuery = `DELETE FROM admin WHERE idAdmin = '${id}'`;
        await query.query(deleteAdminQuery);
        const idTK = idTKResult.recordset[0].idTK;
        const deleteTKQuerry = `DELETE FROM TaiKhoan WHERE idTK = '${idTK}'`;
        await query.query(deleteTKQuerry);
      }
      res.redirect("/admin/accounts");
    } catch (error) {}
  }

  //[GET] /admin/accounts/band/customer/:id --> band tài khoản
  async bandAccount(req, res) {
    try {
      const id = req.params.id;
      console.log(id);
      const currentLockStatusQuery = `SELECT khoa FROM TaiKhoan WHERE idTK = '${id}'`;
      const lockStatus = await query.query(currentLockStatusQuery);
      if (lockStatus && lockStatus.recordset) {
        const currentLockStatus = lockStatus.recordset[0].khoa === false ? 0: 1;
        console.log(currentLockStatus);
        const newLockStatus = currentLockStatus === 0 ? 1 : 0;
        console.log(newLockStatus);
        const updateLockStatusQuery = `UPDATE TaiKhoan SET khoa = ${newLockStatus}, ngayKhoa = GETDATE() WHERE idTK = '${id}'`;
        await query.query(updateLockStatusQuery);
        res.redirect("/admin/accounts");
      }
    } catch (error) {}
  }
}

module.exports = new AccountController();
