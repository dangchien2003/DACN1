const query = require("../../until/helper");

class ReportController {
    async totalCustomers() {
        const q = `SELECT COUNT(*) FROM ThongTinKhachHang`;
        const countResult = await query.query(q);
        return countResult.recordset[0];
    }

    async top10Customers() {
        const q = `SELECT TOP (10) DH.idKH, kh.idKH as taiKhoan, COUNT(DH.id) as SoLuongDonHang, SUM(TTDH.gia * TTDH.soLuong) as TongTienMua
		FROM DonHang DH
        JOIN ThongTinDonHang TTDH ON DH.id = TTDH.idDH
        JOIN ThongTinKhachHang KH ON DH.idKH = KH.idKH
        GROUP BY DH.idKH, KH.idKH
        ORDER BY TongTienMua DESC`;
        const result = await query.query(q);
        let customers = [];
        if (result && result.recordset && result.recordset.length > 0)
            customers = result.recordset;
        return customers;
    }

    async invoicesReport(req, res) {
        const startDate = req.query.startDate ? req.query.startDate : "1990-01-01";
        const endDate = req.query.endDate
            ? req.query.endDate
            : new Date().toISOString().slice(0, 10);
        let q = `SELECT 
        COUNT(DH.id) as SoLuongDonHang, 
        SUM(TTDH.gia * TTDH.soLuong) as TongTien
        FROM DonHang DH
        JOIN ThongTinDonHang TTDH ON DH.id = TTDH.idDH
        WHERE 
         DH.ngayTao >= '${startDate}' AND DH.ngayTao <= '${endDate}';`;
        const result = await query.query(q);
    }
    async report(req, res) {
        const user = req.user;
        try {
            //Lấy số lượng khách hàng
            let q = `SELECT COUNT(*) FROM ThongTinKhachHang`;
            const countResult = await query.query(q);
            const total = countResult.recordset[0][""];
            //console.log({ 'totalCustomers': total });

            //Lấy top10 khách hàng
            q = `SELECT TOP (10) DH.idKH, kh.idKH as taiKhoan, COUNT(DH.id) as SoLuongDonHang, SUM(TTDH.gia * TTDH.soLuong) as TongTienMua
            FROM DonHang DH
            JOIN ThongTinDonHang TTDH ON DH.id = TTDH.idDH
            JOIN ThongTinKhachHang KH ON DH.idKH = KH.idKH
            GROUP BY DH.idKH, KH.idKH
            ORDER BY TongTienMua DESC`;
            const result = await query.query(q);
            let customers = [];
            if (result && result.recordset && result.recordset.length > 0)
                customers = result.recordset;
            //console.log(customers);

            //Thống kê đơn hàng
            const startDate = req.query.startDate
                ? req.query.startDate
                : "1990-01-01";
            const endDate = req.query.endDate
                ? req.query.endDate
                : new Date().toISOString().slice(0, 10);
            q = `SELECT 
        COUNT(DH.id) as SoLuongDonHang, 
        SUM(TTDH.gia * TTDH.soLuong) as TongTien
        FROM DonHang DH
        JOIN ThongTinDonHang TTDH ON DH.id = TTDH.idDH
        WHERE 
         DH.ngayTao >= '${startDate}' AND DH.ngayTao <= '${endDate}';`;
            const invoiceResult = await query.query(q);
            let invoices = [];
            if (invoiceResult && invoiceResult.recordset && invoiceResult.recordset.length > 0)
                invoices = invoiceResult.recordset;

            //Thống kê sản phẩm:
            //Sản phẩm tổn kho:
            q = `SELECT SUM(soluong) AS TongSoLuong FROM SanPham WHERE ngayXoa IS NULL;`;
            let querystring = await query.query(q);
            const sum = querystring.recordset[0]['TongSoLuong'];
            //Top 10 sản phẩm bán chạy
            q = `SELECT TOP 10 
        SP.ten AS TenSanPham,
        SP.anh AS AnhSanPham,
        SUM(DH.soLuong) AS SoLuongMua,
        SUM(DH.gia * DH.soLuong) AS TongTien
    FROM ThongTinDonHang DH
    JOIN SanPham SP ON DH.idSP = SP.idSP
    GROUP BY SP.ten, SP.anh
    ORDER BY TongTien DESC;`;
            querystring = await query.query(q);
            let top10products = [];
            if (querystring && querystring.recordset && querystring.recordset.length > 0)
                top10products = querystring.recordset;

        //Top 10 Sản phẩm mới
        q= `SELECT TOP 10
        ten AS TenSanPham,
        anh AS HinhAnh,
        soluong AS SoLuong,
        gia AS GiaTien
    FROM SanPham
    WHERE ngayXoa IS NULL
    ORDER BY ngayCapNhat DESC;`;
    querystring = await query.query(q);
    let top10NewProducts = [];
    if (querystring && querystring.recordset && querystring.recordset.length > 0)
    top10NewProducts = querystring.recordset;
            return res.render("home.hbs", {
                totalCustomers: total,
                top10Customers: customers,
                invoicesReport: invoices,
                sumproducts: sum,
                top10products: top10products,
                top10NewProducts: top10NewProducts,
                startDate: startDate,
                endDate: endDate,
                user: user,
            });
        } catch (error) { }
    }
}
module.exports = new ReportController();
