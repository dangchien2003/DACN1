const query = require("../../until/helper");

class ProductController {
  //[GET] /admin/products --> Lấy danh sách sản phảm
  async index(req, res) {
    try {
      const queryString = "SELECT * FROM SanPham where ngayXoa IS NULL";
      const result = await query.query(queryString);
      if (result && result.recordset) {
        const products = result.recordset;
        res.render("products/product.hbs", { products });
        return;
      } else {
        // Xử lý trường hợp không có dữ liệu sản phẩm
        res.render("products/product.hbs", { products: [] });
      }
    } catch (error) {}
  }

  //[POST] /admin/products/add  --> Thêm mới 1 sản phẩm
  async store(req, res) {
    const product = req.body;
    console.log(req.file.filename);
    try {
      const queryString = `
            INSERT INTO SanPham (anh, ten, gia, hang, loaiSanPham, mauSac, soluong, moTa, ngayCapNhat)
            VALUES ('${req.file.filename}', '${product.ten}', ${product.gia}, '${product.hang}', '${product.loaiSanPham}', '${product.mauSac}', ${product.soluong}, '${product.moTa}', GETDATE() )
          `;
      const result = await query.query(queryString);
      res.redirect("/admin/products");
    } catch (error) {
      return res.status(500).json({ error: "Đã xảy ra lỗi" });
    }
  }

  //[POST] /admin/product/update/:id --> Cập nhật 1 sản phẩm
  async update(req, res) {
    console.log(req.file.filename);
    const product = req.body;
    try {
      const queryString = `
            UPDATE SanPham
            SET anh = '${req.file.filename}',
                ten = '${product.ten}',
                gia = ${product.gia},
                hang = '${product.hang}',
                loaiSanPham = '${product.loaiSanPham}',
                mauSac = '${product.mauSac}',
                soluong = ${product.soluong},
                mota = '${product.moTa}',
                ngayCapNhat = GETDATE()
            WHERE idSP = ${req.params.id}
          `;
      const result = await query.query(queryString);
      res.redirect("/admin/products");
    } catch (error) {
      return res.status(500).json({ error: "Đã xảy ra lỗi" });
    }
  }

  //[GET] /admin/products/:id
  show(req, res) {
    res.send("NEW DETAILS");
  }

  //[DELETE] /admin/products/delete/:id - xóa 1 sản phẩm
  async destroyed(req, res) {
    try {
      const productId = req.params.id;
      const queryDeleteString = `Update SanPham
                                  Set ngayXoa = GETDATE()
                                  where idSP = ${productId}`;
      await query.query(queryDeleteString);
      res.redirect("/admin/products");
    } catch (error) {}
  }
}

module.exports = new ProductController();
