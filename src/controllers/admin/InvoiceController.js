const query = require("../../until/helper");

class InvoiceController {
    //[GET] /admin/invoices --> Lấy danh sách đơn hàng
    async index(req, res) {
        try {
            const queryString = "SELECT * FROM DonHang";
            const result = await query.query(queryString);
            if (result && result.recordset) {
                const invoices = result.recordset;
                res.render("invoices/invoice.hbs", {
                    invoices
                });
                return;
            } else {
                // Xử lý trường hợp không có dữ liệu sản phẩm
                res.render("products/product.hbs", {
                    invoices: []
                });
            }
        } catch (error) {}
    }

    //[POST] /admin/invoices/add  --> Thêm mới 1 sản phẩm
    async store(req, res) {
        const product = req.body;
        try {
            const queryString = `
            INSERT INTO SanPham (anh, ten, gia, hang, loaiSanPham, mauSac, soluong, moTa, ngayCapNhat)
            VALUES ('${product.anh}', '${product.ten}', ${product.gia}, '${product.hang}', '${product.loaiSanPham}', '${product.mauSac}', ${product.soluong}, '${product.moTa}', GETDATE() )
          `;
            const result = await query.query(queryString);
            res.redirect("/admin/products");
        } catch (error) {
            return res.status(500).json({
                error: "Đã xảy ra lỗi"
            });
        }
    }

    //[POST] /admin/invoices/update/:id --> Cập nhật 1 sản phẩm
    async update(req, res) {
        const product = req.body;
        try {
            const queryString = `
            UPDATE SanPham
            SET anh = '${product.anh}',
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
            return res.status(500).json({
                error: "Đã xảy ra lỗi"
            });
        }
    }

    //[DELETE] /admin/invoices/delete/:id - xóa 1 sản phẩm
    async destroyed(req, res) {
        try {
            const productId = req.params.id;
            const queryDeleteString = `delete from SanPham where idSP = ${productId}`;
            await query.query(queryDeleteString);
            res.redirect("/admin/products");
        } catch (error) {}
    }
}

module.exports = new InvoiceController();