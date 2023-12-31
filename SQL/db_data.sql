-- ai đã tạo database thì chạy từ đầu đến hết
-- ai chưa tạo thì chạy từ dòng 8 đến hết
USE [master]
GO
drop database DACN1_QLBH
go
/****** Object:  Database [DACN1_QLBH]    Script Date: 03/10/2023 4:18:21 pm ******/
CREATE DATABASE [DACN1_QLBH]
go
use [DACN1_QLBH]
go
CREATE TABLE [dbo].[admin](
	[idAdmin] [varchar](20) NOT NULL,
	[idTK] [varchar](20) NOT NULL,
	[ten] [nvarchar](10) NOT NULL,
	[ho] [nvarchar](20) NOT NULL,
	[sdt] [char](10) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[ngaySinh] [date] NOT NULL,
	[gioiTinh] [bit] NOT NULL,
	[diaChi] [nvarchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idAdmin] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DanhGia]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DanhGia](
	[idDH] [varchar](20) NOT NULL,
	[idSP] [int] NOT NULL,
	[soSao] [int] NOT NULL,
	[danhGia] [nvarchar](200) NULL,
	[traLoiDG] [nvarchar](200) NULL,
	[ngayChinhSua] [datetime] NOT NULL,
	[lanChinhSua] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonHang]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonHang](
	[id] [varchar](20) NOT NULL,
	[vanChuyen] [int] NOT NULL,
	[idKH] [varchar](20) NOT NULL,
	[idTH] [int] NOT NULL,
	[maVanDon] [varchar](30) NULL,
	[tinhTrangDonHang] [int] NULL,
	[ngayTao] [datetime] NOT NULL,
	[ngayHuy] [datetime] NULL,
	[nguoiDuyet] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[idKH] [varchar](20) NOT NULL,
	[idSP] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HinhThucVanChuyen]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HinhThucVanChuyen](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten] [nvarchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MaVanDon]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaVanDon](
	[maVanDon] [varchar](30) NOT NULL,
	[donViVanChuyen] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[maVanDon] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SanPham](
	[idSP] [int] IDENTITY(1,1) NOT NULL,
	[anh] [varchar](200) NOT NULL,
	[ten] [nvarchar](100) NOT NULL,
	[gia] [bigint] NOT NULL,
	[hang] [varchar](20) NULL,
	[mauSac] [nvarchar](20) NULL,
	[soluong] [int] NOT NULL,
	[moTa] [nvarchar](100) NULL,
	[ngayCapNhat] [datetime] NOT NULL,
	[ngayXoa] [datetime] NULL,
	[loaiSanPham] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idSP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaiKhoan]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaiKhoan](
	[idTK] [varchar](20) NOT NULL,
	[taiKhoan] [varchar](20) NOT NULL,
	[matKhau] [varchar](30) NOT NULL,
	[capBac] [int] NOT NULL,
	[khoa] [bit] NULL,
	[ngayTao] [datetime] NOT NULL,
	[ngayKhoa] [date] NULL,
	[nguoiKhoa] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[idTK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TinhTrangDonHang]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TinhTrangDonHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tinhTrang] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TuiHang]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TuiHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[soLuong] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ThongTinKhachHang]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThongTinKhachHang](
	[idKH] [varchar](20) NOT NULL,
	[idTK] [varchar](20) NOT NULL,
	[bietDanh] [varchar](30) NULL,
	[ten] [nvarchar](10) NULL,
	[ho] [nvarchar](20) NULL,
	[diaChi] [nvarchar](100) NULL,
	[email] [varchar](50) NULL,
	[ngaySinh] [date] NULL,
	[gioiTinh] [bit] NULL,
	[sdt] [char](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[idKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ThongTinTuiHang]    Script Date: 03/10/2023 4:18:21 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThongTinTuiHang](
	[idTH] [int] NOT NULL,
	[idSP] [int] NOT NULL,
	[gia] [bigint] NOT NULL,
	[soLuong] [int] NOT NULL
) ON [PRIMARY]
GO
INSERT [dbo].[admin] ([idAdmin], [idTK], [ten], [ho], [sdt], [email], [ngaySinh], [gioiTinh], [diaChi]) VALUES (N'Admin1', N'tk1', N'Chiến', N'Lê Đăng', N'0333757429', N'chienboy03@gmail.com', CAST(N'2003-01-26' AS Date), 1, N'Hải Dương')
GO
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1', 2, 3, N'đánh giá 1', NULL, CAST(N'2023-10-02T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH2', 2, 3, N'đánh giá 1', NULL, CAST(N'2023-10-02T00:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[DonHang] ([id], [vanChuyen], [idKH], [idTH], [maVanDon], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet]) VALUES (N'DH1', 2, N'KH1', 1, N'ma1', 1, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1')
INSERT [dbo].[DonHang] ([id], [vanChuyen], [idKH], [idTH], [maVanDon], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet]) VALUES (N'DH2', 2, N'KH2', 2, N'ma2', 4, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1')
INSERT [dbo].[DonHang] ([id], [vanChuyen], [idKH], [idTH], [maVanDon], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet]) VALUES (N'DH3', 2, N'KH3', 3, N'ma3', 4, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1')
INSERT [dbo].[DonHang] ([id], [vanChuyen], [idKH], [idTH], [maVanDon], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet]) VALUES (N'DH4', 2, N'KH2', 4, N'ma4', 4, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1')
INSERT [dbo].[DonHang] ([id], [vanChuyen], [idKH], [idTH], [maVanDon], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet]) VALUES (N'DH5', 2, N'KH2', 5, N'ma5', 4, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1')
GO
INSERT [dbo].[GioHang] ([idKH], [idSP]) VALUES (N'KH1', 2)
INSERT [dbo].[GioHang] ([idKH], [idSP]) VALUES (N'KH1', 3)
INSERT [dbo].[GioHang] ([idKH], [idSP]) VALUES (N'KH2', 5)
INSERT [dbo].[GioHang] ([idKH], [idSP]) VALUES (N'KH2', 4)
INSERT [dbo].[GioHang] ([idKH], [idSP]) VALUES (N'KH3', 3)
GO
SET IDENTITY_INSERT [dbo].[HinhThucVanChuyen] ON 

INSERT [dbo].[HinhThucVanChuyen] ([id], [ten]) VALUES (2, N'Thanh toán trực tiếp')
INSERT [dbo].[HinhThucVanChuyen] ([id], [ten]) VALUES (3, N'thanh toán ngân hàng')
INSERT [dbo].[HinhThucVanChuyen] ([id], [ten]) VALUES (4, N'thanh toán momo')
SET IDENTITY_INSERT [dbo].[HinhThucVanChuyen] OFF
GO
INSERT [dbo].[MaVanDon] ([maVanDon], [donViVanChuyen]) VALUES (N'ma1', N'vp')
INSERT [dbo].[MaVanDon] ([maVanDon], [donViVanChuyen]) VALUES (N'ma2', N'j&t')
INSERT [dbo].[MaVanDon] ([maVanDon], [donViVanChuyen]) VALUES (N'ma3', N'vp')
INSERT [dbo].[MaVanDon] ([maVanDon], [donViVanChuyen]) VALUES (N'ma4', N'vp')
INSERT [dbo].[MaVanDon] ([maVanDon], [donViVanChuyen]) VALUES (N'ma5', N'vp')
GO
SET IDENTITY_INSERT [dbo].[SanPham] ON 

INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (2, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP1', 1, NULL, N'đen', 5, N'mo ta sp1', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (3, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP2', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (4, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP3', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (5, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP4', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (6, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP5', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (7, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP6', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (8, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP7', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (9, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP8', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (10, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP9', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (11, N'E:\DH_CNDA\DACN1\1622032733583.jpg', N'SP10', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
SET IDENTITY_INSERT [dbo].[SanPham] OFF
GO
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'AM6', N'tk6', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH1', N'tk1', N'1', 5, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH2', N'tk2', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH3', N'tk3', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH4', N'tk4', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH5', N'tk5', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH6', N'tk7', N'1', 1, 1, CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2023-10-02' AS Date), NULL)
GO
SET IDENTITY_INSERT [dbo].[TinhTrangDonHang] ON 

INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (1, N'đang chuẩn bị hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (2, N'đã giao cho đơn vị vận chuyển')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (3, N'đang giao hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (4, N'đã nhận hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (5, N'đã huỷ đơn')
SET IDENTITY_INSERT [dbo].[TinhTrangDonHang] OFF
GO
SET IDENTITY_INSERT [dbo].[TuiHang] ON 

INSERT [dbo].[TuiHang] ([id], [soLuong]) VALUES (1, 1)
INSERT [dbo].[TuiHang] ([id], [soLuong]) VALUES (2, 1)
INSERT [dbo].[TuiHang] ([id], [soLuong]) VALUES (3, 2)
INSERT [dbo].[TuiHang] ([id], [soLuong]) VALUES (4, 1)
INSERT [dbo].[TuiHang] ([id], [soLuong]) VALUES (5, 1)
SET IDENTITY_INSERT [dbo].[TuiHang] OFF
GO
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH1', N'KH2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH2', N'KH3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH3', N'KH4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH4', N'KH5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH5', N'KH6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[ThongTinTuiHang] ([idTH], [idSP], [gia], [soLuong]) VALUES (1, 2, 1, 1)
INSERT [dbo].[ThongTinTuiHang] ([idTH], [idSP], [gia], [soLuong]) VALUES (2, 2, 1, 1)
INSERT [dbo].[ThongTinTuiHang] ([idTH], [idSP], [gia], [soLuong]) VALUES (3, 3, 1, 1)
INSERT [dbo].[ThongTinTuiHang] ([idTH], [idSP], [gia], [soLuong]) VALUES (3, 2, 1, 1)
INSERT [dbo].[ThongTinTuiHang] ([idTH], [idSP], [gia], [soLuong]) VALUES (4, 4, 2, 1)
INSERT [dbo].[ThongTinTuiHang] ([idTH], [idSP], [gia], [soLuong]) VALUES (5, 4, 2, 1)
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__admin__9DB8286F2E153100]    Script Date: 03/10/2023 4:18:21 pm ******/
ALTER TABLE [dbo].[admin] ADD UNIQUE NONCLUSTERED 
(
	[idTK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__DanhGia__9DB8AE5E429D68DB]    Script Date: 03/10/2023 4:18:21 pm ******/
ALTER TABLE [dbo].[DanhGia] ADD UNIQUE NONCLUSTERED 
(
	[idDH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__TaiKhoan__B4C45318EA9BD688]    Script Date: 03/10/2023 4:18:21 pm ******/
ALTER TABLE [dbo].[TaiKhoan] ADD UNIQUE NONCLUSTERED 
(
	[taiKhoan] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__ThongTin__9DB8286F8E5D8F05]    Script Date: 03/10/2023 4:18:21 pm ******/
ALTER TABLE [dbo].[ThongTinKhachHang] ADD UNIQUE NONCLUSTERED 
(
	[idTK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DanhGia] ADD  DEFAULT ((1)) FOR [lanChinhSua]
GO
ALTER TABLE [dbo].[TaiKhoan] ADD  DEFAULT ((0)) FOR [khoa]
GO
ALTER TABLE [dbo].[DanhGia]  WITH CHECK ADD FOREIGN KEY([idDH])
REFERENCES [dbo].[DonHang] ([id])
GO
ALTER TABLE [dbo].[DanhGia]  WITH CHECK ADD FOREIGN KEY([idSP])
REFERENCES [dbo].[SanPham] ([idSP])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([idKH])
REFERENCES [dbo].[ThongTinKhachHang] ([idKH])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([idTH])
REFERENCES [dbo].[TuiHang] ([id])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([maVanDon])
REFERENCES [dbo].[MaVanDon] ([maVanDon])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([nguoiDuyet])
REFERENCES [dbo].[admin] ([idAdmin])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([tinhTrangDonHang])
REFERENCES [dbo].[TinhTrangDonHang] ([id])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([vanChuyen])
REFERENCES [dbo].[HinhThucVanChuyen] ([id])
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD FOREIGN KEY([idKH])
REFERENCES [dbo].[ThongTinKhachHang] ([idKH])
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD FOREIGN KEY([idSP])
REFERENCES [dbo].[SanPham] ([idSP])
GO
ALTER TABLE [dbo].[TaiKhoan]  WITH CHECK ADD FOREIGN KEY([nguoiKhoa])
REFERENCES [dbo].[admin] ([idAdmin])
GO
ALTER TABLE [dbo].[ThongTinKhachHang]  WITH CHECK ADD FOREIGN KEY([idTK])
REFERENCES [dbo].[TaiKhoan] ([idTK])
GO
ALTER TABLE [dbo].[ThongTinTuiHang]  WITH CHECK ADD FOREIGN KEY([idSP])
REFERENCES [dbo].[SanPham] ([idSP])
GO
ALTER TABLE [dbo].[ThongTinTuiHang]  WITH CHECK ADD FOREIGN KEY([idTH])
REFERENCES [dbo].[TuiHang] ([id])
GO
USE [master]
GO
ALTER DATABASE [DACN1_QLBH] SET  READ_WRITE 
GO
