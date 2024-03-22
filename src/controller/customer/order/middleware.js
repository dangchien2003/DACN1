const helper = require('../../../until/helper');

async function getOrder(req, res) {
    console.log("getOrder");
    try {
        const kh = req.cookies.kh;
        if (kh == undefined) {
            res.redirect("/login");
            return;
        }
        var order = await helper.getOrder(kh);
        order = order.recordset.map(row => ({
            ...row,
            ngayTao: helper.formatDate(row.ngayTao.toISOString().slice(0, 10), "dd/mm/yyy") + " " + row.ngayTao.toISOString().slice(11, 19)
        }));

        res.render('customer/order/root.ejs', {
            order,
            title: "Đơn hàng",
            scripts: ["order", "custom-dev"]
        })
    } catch (err) {
        res.render('customer/err/err.ejs', helper.err(500));
    }
}


async function cancelOrder(req, res) {
    console.log("cancelOrder");
    try {
        var idDH = req.body.idDH;
        var idKH = req.cookies.kh;
        if (!idKH || !idDH) {
            res.json({
                status: 2,
                message: "Không tìm thấy thông tin"
            });
            return;
        }
        const sql = `update [DonHang] set [ngayHuy] = GETDATE(), [tinhTrangDonHang] = 5 where idKH='${idKH}' and id = '${idDH.trim()}';`;
        const result = await helper.query(sql);
        if (result.rowsAffected[0] == 0) {
            res.json({
                status: 2,
                message: "Huỷ không thành công"
            })
            return;
        }
        res.json({
            status: 1,
            message: "Huỷ thành công"
        })
    } catch (err) {
        console.log(err);
        console.log("order/middleware");
        res.json({
            status: 2,
            message: "Có lỗi xảy ra"
        });
    }

}


async function showComment(req, res) {
    console.log("showComment");
    try {
        var idDH = req.body.idDH.trim();
        var kh = req.cookies.kh;
        if (!idDH) {
            res.send("err");
            return;
        }

        var sql = `	  select  ThongTinDonHang.idSP ,SanPham.ten, ThongTinDonHang.idDH
        ,danhGia, lanChinhSua, soSao , idKH, anh
        from ThongTinDonHang
        join SanPham on SanPham.idSP = ThongTinDonHang.idSP
        left join DanhGia on DanhGia.idDH = ThongTinDonHang.idDH and danhGia.idSP = ThongTinDonHang.idSP
        join DonHang on DonHang.id = ThongTinDonHang.idDH
        where ThongTinDonHang.idDH = '${idDH}' and idKH ='${kh}' and  (lanChinhSua < 2 or lanChinhSua is NULL)`;
        var products_comment = await helper.query(sql);
        if(products_comment.recordset.length == 0) {
            res.send("err");
            return;
        }
        res.render('customer/order/comment', {products: products_comment.recordset})
    } catch (err) {
        console.log(err);
        res.send("err")
    }

}

async function saveComment(req, res) {
    console.log("save comment");
    try {
        var data = req.body.data;
        var kh = req.cookies.kh;
        var sql = "";
        console.log(data);
        for(var i = 0; i < data.length; i++) {
            sql += `MERGE INTO DanhGia AS target
            USING (SELECT '${data[i].idDH}' AS idDH, ${data[i].idSP} AS idSP, ${data[i].soSao} AS soSao, N'${data[i].danhGia}' as danhGia) AS source
            ON target.idDH = source.idDH AND target.idSP = source.idSP AND (target.lanChinhSua < 2 or target.lanChinhSua is null)
            WHEN MATCHED THEN
                UPDATE SET target.soSao = source.soSao, target.danhGia = source.danhGia, target.ngaychinhSua = getdate(), target.lanChinhSua = target.lanChinhSua + 1
            WHEN NOT MATCHED THEN
                INSERT (idDH, idSP, soSao, danhGia, ngayChinhSua, lanChinhSua) VALUES (source.idDH, source.idSP, source.soSao, source.danhGia, getdate(), 1);`
        }
        if(sql) {
            var result = await helper.query(sql); 
            if(result.rowsAffected.includes(0)) {
                res.json({
                    status: 2,
                    message: "Có sản phẩm lỗi vui lòng xem lại"
                })
            }else {
                res.json({
                    status: 1,
                    message: "Đánh giá thành công"
                })
            }
        }else {
            res.json({
                status: 2,
                message: "Không có sản phẩm đánh giá"
            })
        }
        
        

    }catch (err) {
        res.json({
            status: 2,
            message: "Có lỗi xảy ra"
        })
    }
}

async function showInfoOrder(req, res) {
    console.log("show info order");
    try{
        idDH = req.params.idDH;
        kh = req.cookies.kh;
        var sql_DonHang = `select HinhThucThanhToan.ten as hinhThucThanhToan, maVanDon, donViVanChuyen,
        tinhTrangDonHang, ngayTao, ngayHuy, soLuongMatHang, diaChi, sdt, tenNguoiNhan as nguoiNhan , anh
        from DonHang
        join HinhThucThanhToan on DonHang.thanhToan = HinhThucThanhToan.id
		join ThongTinDonHang on DonHang.id = ThongTinDonHang.idDH 
        join SanPham on SanPham.idSP = ThongTinDonHang.idSP 
        where DonHang.id = '${idDH}' and DonHang.idKH = '${kh}'`;
        
        const resut_DonHang = await helper.query(sql_DonHang);
        if(resut_DonHang.recordset.length == 0) {
            res.render("customer/err/err", helper.err(404));
            return;
        }

        resut_DonHang.recordset[0].ngayTao = helper.formatDate(resut_DonHang.recordset[0].ngayTao.toISOString().slice(0, 10), "dd/mm/yyy") + " " + resut_DonHang.recordset[0].ngayTao.toISOString().slice(11, 19);

        if(resut_DonHang.recordset[0].ngayHuy) {
            resut_DonHang.recordset[0].ngayHuy = helper.formatDate(resut_DonHang.recordset[0].ngayHuy.toISOString().slice(0, 10), "dd/mm/yyy") + " " + resut_DonHang.recordset[0].ngayHuy.toISOString().slice(11, 19);
        }
        
        var sql_SanPham = `select ThongTinDonHang.idDH, SanPham.ten as tenSP, ThongTinDonHang.idSP, ThongTinDonHang.gia,
        ThongTinDonHang.gia*ThongTinDonHang.soLuong as giaSP, ThongTinDonHang.soLuong, SanPham.anh
        from ThongTinDonHang 
        join SanPham on ThongTinDonHang.idSP = SanPham.idSP
        where ThongTinDonHang.idDH = '${idDH}'
        order by idSP`;
        const resut_SanPham = await helper.query(sql_SanPham);
        var sql_DanhGia = `select danhGia.danhGia as comment, danhGia.traLoiDG, soSao, danhGia.idSP from DanhGia 
        where idDH = '${idDH}' 
        order by idSP`;
        const resut_DanhGia = await helper.query(sql_DanhGia);
        
        var sql_tongGia = `select sum(gia) as tongGiaSP,sum(gia) + 30000 as tong from ThongTinDonHang where idDH = '${idDH}'`;
        const result_tongGia = await helper.query(sql_tongGia);
        res.render("customer/order/infoOrder", {
            title: "Thông tin Đơn hàng",
            scripts: ["infoOrder"],
            tongDH: result_tongGia.recordset[0],
            donHang:  resut_DonHang.recordset[0],
            sanPham: resut_SanPham.recordset,
            danhGia: resut_DanhGia.recordset
        })
    }catch(err) {
        console.log(err);
        res.render("customer/err/err", helper.err(404));
    }
    
}


module.exports = {
    getOrder,
    cancelOrder,
    showComment,
    saveComment,
    showInfoOrder
}