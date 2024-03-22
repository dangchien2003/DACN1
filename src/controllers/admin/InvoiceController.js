const query = require("../../until/helper");

class InvoiceController {
  //[GET] /admin/invoices --> Lấy danh sách đơn hàng
  async index(req, res) {
    const status = req.query;
    try {
      const queryString = `SELECT 
                                dh.id as 'id_don_hang',
                                dh.idKH as 'id_khach_hang',
                                dh.donViVanChuyen as don_vi_van_chuyen,
                                tk.taiKhoan as tai_khoan,
                                kh.ho + ' ' + kh.ten as ten_khach_hang ,
                                vc.ten as 'hinh_thuc_thanh_toan',
                                tt.tinhTrang as 'ten_trang_thai',
                                dh.ngayTao as 'ngay_dat_hang',
                                dh.nguoiDuyet as id_admin,
                                ad.ho + ' ' + ad.ten as ten_admin
                           FROM DonHang dh
                                JOIN ThongTinKhachHang kh ON dh.idKH = kh.idKH
                                JOIN TaiKhoan tk on tk.idTK = kh.idTK
                                JOIN HinhThucThanhToan vc ON dh.thanhToan = vc.id
                                JOIN TinhTrangDonHang tt ON dh.tinhTrangDonHang = tt.id
                                LEFT JOIN admin ad ON dh.nguoiDuyet = ad.idAdmin                          
                           WHERE dh.ngayHuy IS NULL
                           ORDER BY dh.ngayTao DESC`;
      const result = await query.query(queryString);
      if (result && result.recordset) {
        const invoices = result.recordset;
        let q = `SELECT * FROM TinhTrangDonHang`;
        let qResult = await query.query(q);
        let statusInvoices = [];
        if (qResult && qResult.recordset && qResult.recordset.length > 0) {
          statusInvoices = qResult.recordset;
        }
        q = `SELECT * FROM HinhThucThanhToan`;
        qResult = await query.query(q);
        let payments = [];
        if (qResult && qResult.recordset && qResult.recordset.length > 0) {
          payments = qResult.recordset;
        }
        return res.render("invoices/invoices.hbs", {
          invoices: invoices,
          statusInvoices: statusInvoices,
          payments: payments,
          status,
        });
      } else {
        // Xử lý trường hợp không có dữ liệu sản phẩm
        res.render("invoices/invoices.hbs", { invoices: [] });
      }
    } catch (error) {}
  }

  async approval(req, res) {
    try {
      const idDonHang = req.params.id;
      const nguoiDuyet = res.locals.global.user.idAdmin;
      const q = `UPDATE DonHang SET nguoiDuyet = '${nguoiDuyet}' WHERE id = '${idDonHang}'`;
      let result = await query.query(q);
      return res.redirect("/admin/invoices?status=success&code=approval");
    } catch (error) {
      return res.redirect(
        "/admin/invoices?status=failed&code=connect_database"
      );
    }
  }
  //[POST] /admin/invoices/edit/:id --> Cập nhật 1 đơn hàng
  async update(req, res) {
    const invoiceId = req.params.id;
    const updatedData = req.body;
    try {
      const q = `UPDATE DonHang
                SET thanhToan = ${updatedData.hinhThucThanhToan}, donViVanChuyen = '${updatedData.donViVanChuyen}',
                tinhTrangDonHang = ${updatedData.tinhTrangDonHang}
                WHERE id = '${invoiceId}'
                ;`;
      const result = await query.query(q);
      return res.status(200).json({ message: "Update Thanh Cong" });
    } catch (error) {
      return res.status(500).json({ error: "Đã xảy ra lỗi" });
    }
  }

  //[DELETE] /admin/invoices/delete/:id - xóa 1 sản phẩm
  async destroyed(req, res) {
    try {
      const invoiceId = req.params.id;
      const queryDeleteString = `UPDATE DonHang
                                 SET ngayHuy = GETDATE()
                                 WHERE id = '${invoiceId}'`;
      await query.query(queryDeleteString);
      res.redirect("/admin/invoices?status=success&code=delete_invoice");
    } catch (error) {
      res.redirect("/admin/invoices?status=failed&code=connect_database");
    }
  }
  async getInvoiceDetail(req, res) {
    try {
      const idDH = req.params.id;
      const queryGetInfo = `SELECT dh.id as id_don_hang,
                                   dh.donViVanChuyen as don_vi_van_chuyen,
                                   dh.ngayTao as ngay_dat_hang,
                                   dh.diaChi as dia_chi_nhan_hang,
                                   dh.tenNguoiNhan as nguoi_nhan_hang,
                                   dh.sdt as so_dien_thoai,
                                   kh.idKH as id_khach_hang,
                                   tk.taiKhoan as tai_khoan,
                                   kh.diaChi as dia_chi_khach_hang,
                                   kh.email as email_khach_hang,
                                   kh.sdt as sdt_khach_hang,
                                   kh.ho + ' ' + kh.ten as ten_khach_hang,
                                   ad.idAdmin as id_admin,
                                   ad.ho + ' ' + ad.ten as ten_admin,
                                   vc.id as id_thanh_toan,
                                   vc.ten as hinh_thuc_thanh_toan,
                                   tt.tinhTrang as tinh_trang_don_hang
                            FROM DonHang dh
                                 JOIN ThongTinKhachHang kh ON dh.idKH = kh.idKH
                                 JOIN TaiKhoan tk on tk.idTK = kh.idTK
                                 LEFT JOIN admin ad ON dh.nguoiDuyet = ad.idAdmin
                                 LEFT JOIN HinhThucThanhToan vc ON dh.thanhToan = vc.id
                                 LEFT JOIN TinhTrangDonHang tt ON dh.tinhTrangDonHang = tt.id
                            WHERE dh.id = '${idDH}'  `;
      const invoiceDetailResult = await query.query(queryGetInfo);
      let invoiceDetail = [];
      if (invoiceDetailResult && invoiceDetailResult.recordset)
        invoiceDetail = invoiceDetailResult.recordset;
      const queryGetProducts = `SELECT ttdh.gia as gia_san_pham,
                                       ttdh.soLuong as so_luong,
                                       sp.anh as anh_san_pham,
                                       sp.ten as ten_san_pham,
                                       ttdh.gia * ttdh.soLuong as thanh_tien
                                FROM ThongTinDonHang ttdh
                                     JOIN SanPham sp ON sp.idSP = ttdh.idSP
                                WHERE idDH = '${idDH}'`;
      const productsDetailResult = await query.query(queryGetProducts);
      let productsDetail = [];
      let total = 0;
      if (productsDetailResult && productsDetailResult.recordset) {
        productsDetail = productsDetailResult.recordset;
        productsDetail.forEach((element) => {
          const subTotal = element.gia_san_pham * element.so_luong;
          total += subTotal;
        });
      }
      return res.render("invoices/invoiceDetail.hbs", {
        detail: invoiceDetail,
        products: productsDetail,
        total: total,
      });
    } catch (error) {
      return res.status(500).send(`message: lỗi ${error}`);
    }
  }
}

module.exports = new InvoiceController();
