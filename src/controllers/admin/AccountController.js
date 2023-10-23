const query = require("../../until/helper");
const { v4: uuidv4 } = require("uuid");
class AccountController {
  //[GET] /admin/acounts --> Lấy danh sách tài khoản (admin và khách hàng)
  async index(req, res) {
    const status = req.query;
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
                        JOIN [TaiKhoan] AS TK ON KH.idTK = TK.idTK
                        WHERE TK.ngayKhoa IS NULL;`;
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
                          JOIN [TaiKhoan] AS TK ON A.idTK = TK.taiKhoan
                          WHERE TK.ngayKhoa IS NULL;`;

      const adminsResult = await query.query(queryString);
      const customersResult = await query.query(queryStringKhachHang);
      const admins = adminsResult.recordset || [];
      const customers = customersResult.recordset || [];
      res.render("accounts/account.hbs", { admins, customers, status });
    } catch (error) { }
  }
  async getViewCreateAccount(req, res) {
    const status = req.query;
    const currentPath = req.originalUrl;
    const isCreate = currentPath.includes("create");
    let user = [];
    if (!isCreate) {     
      const idTK = res.locals.global.user ? res.locals.global.user.idTK : '';
      const q = `SELECT tk.idTK as idTK, tk.taiKhoan as tai_khoan, tk.CapBac as cap_bac, ad.ten as ten, ad.ho as ho, ad.sdt as dien_thoai, ad.email as email, ad.ngaySinh as sinh_nhat, ad.gioiTinh as gioi_tinh, ad.diaChi as dia_chi
        FROM TaiKhoan tk JOIN admin ad ON tk.taiKhoan = ad.idTK WHERE tk.idTK = '${idTK}'`;
      const tkResult = await query.query(q);
      user = tkResult.recordset[0] || [];
    }
    return res.render("accounts/addAccount.hbs", { status, isCreate, user });
  }
  async store(req, res) {
    try {
      const {
        tai_khoan,
        mat_khau,
        cap_bac,
        ho,
        ten,
        email,
        dien_thoai,
        gioi_tinh,
        dia_chi,
        sinh_nhat,
      } = req.body;
      //Check tai khoan, email, sdt
      let qcheckTaiKhoan = `SELECT * FROM TaiKhoan WHERE taiKhoan = '${tai_khoan}';`;
      let result = await query.query(qcheckTaiKhoan);
      if (result && result.recordset && result.recordset.length > 0) {
        return res.redirect(
          "/admin/accounts/create?status=failed&code=account_exist"
        );
      }
      let qcheckEmail = `SELECT * FROM admin WHERE email = '${email}';`;
      result = await query.query(qcheckEmail);
      if (result && result.recordset && result.recordset.length > 0) {
        return res.redirect(
          "/admin/accounts/create?status=failed&code=email_exist"
        );
      }
      let qcheckPhone = `SELECT * FROM admin WHERE sdt = '${dien_thoai}';`;
      result = await query.query(qcheckPhone);
      if (result && result.recordset && result.recordset.length > 0) {
        return res.redirect(
          "/admin/accounts/create?status=failed&code=phone_exist"
        );
      }
      const idTK = uuidv4().slice(0, 30);
      const idAdmin = uuidv4().slice(0, 30);

      let taiKhoanQuery = `INSERT INTO TaiKhoan (idTK, taiKhoan, matKhau, capBac, ngayTao)
      VALUES ('${idTK}', '${tai_khoan}', '${mat_khau}', ${cap_bac}, GETDATE());`;
      await query.query(taiKhoanQuery);

      let adminQuery = `INSERT INTO admin (idAdmin, idTK, ten, ho, sdt, email, ngaySinh, gioiTinh, diaChi)
      VALUES ('${idAdmin}', '${tai_khoan}', '${ten}', '${ho}', '${dien_thoai}', '${email}', '${sinh_nhat}', ${gioi_tinh}, '${dia_chi}');`;

      await query.query(adminQuery);
      res.redirect("/admin/accounts/create?status=success");
    } catch (error) {
      res.redirect(
        "/admin/accounts/create?status=failed&code=connect_database"
      );
    }
  }

  async update(req, res) {
    const idTK = res.locals.global.user ? res.locals.global.user.idTK : '';
    const {
      tai_khoan,
      mat_khau,
      cap_bac,
      ho,
      ten,
      email,
      dien_thoai,
      gioi_tinh,
      dia_chi,
      sinh_nhat,
    } = req.body;
    try {
      let taiKhoanQuery = `UPDATE TaiKhoan SET capBac = ${cap_bac}`;
      // Kiểm tra xem trường mật khẩu có được cung cấp hay không
      if (mat_khau) {
        taiKhoanQuery += `, matKhau = '${mat_khau}'`;
      }
      taiKhoanQuery += ` WHERE idTK = '${idTK}';`;
      await query.query(taiKhoanQuery);

      let adminQuery = `UPDATE admin SET ten = '${ten}', ho = '${ho}', sdt = '${dien_thoai}', email = '${email}', ngaySinh = '${sinh_nhat}', gioiTinh = ${gioi_tinh}, diaChi = '${dia_chi}' WHERE idTK = '${tai_khoan}';`;
      await query.query(adminQuery);
      res.locals.global.user.ten = ten;
      return res.redirect('/admin/accounts/'+ idTK + '?status=success')
    } catch (error) {
      return res.redirect('/admin/accounts/'+ idTK + '?status=failed&code=connect_database')
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

        // Xóa các bản ghi trong bảng "TaiKhoan" liên quan
        const deleteTKQuerry = `UPDATE TaiKhoan SET ngayKhoa = GETDATE() WHERE idTK = '${idTK}'`;
        await query.query(deleteTKQuerry);
      }
      res.redirect("/admin/accounts?status=success&code=delete_customer");
    } catch (error) {
      res.redirect("/admin/accounts?status=failed&code=connect_database");
    }
  }
  //[GET] /admin/acounts/delete/admin/:id --> Xóa tài khoản Admin
  async deleteAdmin(req, res) {
    try {
      const id = req.params.id;
      const getIdTKQuery = `SELECT idTK FROM admin WHERE idAdmin = '${id}'`;
      const idTKResult = await query.query(getIdTKQuery);
      if (idTKResult && idTKResult.recordset) {
        const idTK = idTKResult.recordset[0].idTK;
        const deleteTKQuerry = `UPDATE TaiKhoan SET ngayKhoa = GETDATE() WHERE taiKhoan = '${idTK}'`;
        await query.query(deleteTKQuerry);
      }
      res.redirect("/admin/accounts?status=success&code=delete_admin");
    } catch (error) {
      res.redirect("/admin/accounts?status=failed&code=connect_database");
    }
  }

  //[GET] /admin/accounts/band/customer/:id --> band tài khoản
  async bandAccount(req, res) {
    try {
      const id = req.params.id;
      const currentLockStatusQuery = `SELECT khoa FROM TaiKhoan WHERE idTK = '${id}'`;
      const lockStatus = await query.query(currentLockStatusQuery);
      if (lockStatus && lockStatus.recordset) {
        const currentLockStatus =
          lockStatus.recordset[0].khoa === false ? 0 : 1;
        const newLockStatus = currentLockStatus === 0 ? 1 : 0;
        const updateLockStatusQuery = `UPDATE TaiKhoan SET khoa = ${newLockStatus} WHERE idTK = '${id}'`;
        await query.query(updateLockStatusQuery);
        const code = newLockStatus ? "band_customer" : "unband_customer";
        res.redirect("/admin/accounts?status=success&code=" + code);
      }
    } catch (error) {
      res.redirect("/admin/accounts?status=failed&code=connect_database");
    }
  }
  async bandAccountAdmin(req, res) {
    try {
      const id = req.params.id;
      const currentLockStatusQuery = `SELECT khoa FROM TaiKhoan WHERE taiKhoan = '${id}'`;
      const lockStatus = await query.query(currentLockStatusQuery);
      if (lockStatus && lockStatus.recordset) {
        const currentLockStatus =
          lockStatus.recordset[0].khoa === false ? 0 : 1;
        const newLockStatus = currentLockStatus === 0 ? 1 : 0;
        const updateLockStatusQuery = `UPDATE TaiKhoan SET khoa = ${newLockStatus} WHERE taiKhoan = '${id}'`;
        await query.query(updateLockStatusQuery);
        const code = newLockStatus ? "band_admin" : "unband_admin";
        res.redirect("/admin/accounts?status=success&code=" + code);
      }
    } catch (error) {
      res.redirect("/admin/accounts?status=failed&code=connect_database");
    }
  }
}

module.exports = new AccountController();
