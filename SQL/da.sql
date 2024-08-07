USE [QLBH]
GO
/****** Object:  Table [dbo].[admin]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[admin](
	[idAdmin] [varchar](30) NOT NULL,
	[idTK] [varchar](30) NOT NULL,
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
/****** Object:  Table [dbo].[DanhGia]    Script Date: 22/10/2023 12:44:35 am ******/
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
/****** Object:  Table [dbo].[DonHang]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonHang](
	[id] [varchar](20) NOT NULL,
	[thanhToan] [int] NOT NULL,
	[idKH] [varchar](30) NOT NULL,
	[maVanDon] [varchar](30) NULL,
	[donViVanChuyen] [varchar](50) NULL,
	[tinhTrangDonHang] [int] NULL,
	[ngayTao] [datetime] NOT NULL,
	[ngayHuy] [datetime] NULL,
	[nguoiDuyet] [varchar](30) NULL,
	[soLuongMatHang] [int] NULL,
	[diaChi] [nvarchar](200) NOT NULL,
	[sdt] [varchar](10) NOT NULL,
	[tenNguoiNhan] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[idKH] [varchar](30) NOT NULL,
	[idSP] [int] NOT NULL,
	[soLuong] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HinhThucThanhToan]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HinhThucThanhToan](
	[id] [int] NOT NULL,
	[ten] [nvarchar](40) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 22/10/2023 12:44:35 am ******/
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
/****** Object:  Table [dbo].[TaiKhoan]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaiKhoan](
	[idTK] [varchar](30) NOT NULL,
	[taiKhoan] [varchar](20) NOT NULL,
	[matKhau] [varchar](30) NOT NULL,
	[capBac] [int] NOT NULL,
	[khoa] [bit] NULL,
	[ngayTao] [datetime] NOT NULL,
	[ngayKhoa] [date] NULL,
	[nguoiKhoa] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[idTK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TinhTrangDonHang]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TinhTrangDonHang](
	[id] [int] NOT NULL,
	[tinhTrang] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ThongTinDonHang]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThongTinDonHang](
	[idDH] [varchar](20) NOT NULL,
	[idSP] [int] NOT NULL,
	[gia] [bigint] NOT NULL,
	[soLuong] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ThongTinKhachHang]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThongTinKhachHang](
	[idKH] [varchar](30) NOT NULL,
	[idTK] [varchar](30) NOT NULL,
	[bietDanh] [varchar](30) NULL,
	[ten] [nvarchar](10) NULL,
	[ho] [nvarchar](20) NULL,
	[diaChi] [nvarchar](100) NULL,
	[email] [varchar](50) NULL,
	[ngaySinh] [date] NULL,
	[gioiTinh] [bit] NULL,
	[sdt] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[idKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[admin] ([idAdmin], [idTK], [ten], [ho], [sdt], [email], [ngaySinh], [gioiTinh], [diaChi]) VALUES (N'5cdd6a13-07c1-4717-8c51-def033', N'chientesst', N'chi?n', N'tr?n', N'2323      ', N'ggfhhfgf@gmail.com', CAST(N'2003-01-26' AS Date), 1, N'sadcdsdsdas')
INSERT [dbo].[admin] ([idAdmin], [idTK], [ten], [ho], [sdt], [email], [ngaySinh], [gioiTinh], [diaChi]) VALUES (N'Admin1', N'tk1', N'Chiến', N'Lê Đăng', N'0333757429', N'chienboy03@gmail.com', CAST(N'2003-01-26' AS Date), 1, N'Hải Dương')
GO
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1', 2, 3, N'danhGia123', N'Xin lỗi về vấn đề bạn đang gặp phải. Bạn có thể hoàn hàng về cho shop', CAST(N'2023-10-16T18:04:08.797' AS DateTime), 3)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH2', 2, 3, N'danhGia123', NULL, CAST(N'2023-10-16T18:07:20.417' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH7', 6, 3, N'danhGia123', NULL, CAST(N'2023-10-16T18:07:00.463' AS DateTime), 3)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 1, 3, N'dâs', NULL, CAST(N'2023-10-16T18:34:49.597' AS DateTime), 11)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 5, 4, N'dấd', NULL, CAST(N'2023-10-16T18:33:16.303' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 1, 3, N'dâs', NULL, CAST(N'2023-10-16T18:34:49.597' AS DateTime), 10)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 5, 4, N'dấd', NULL, CAST(N'2023-10-16T18:34:41.003' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 5, 4, N'dấd', NULL, CAST(N'2023-10-16T18:34:42.430' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 5, 4, N'dấd', NULL, CAST(N'2023-10-16T18:34:48.173' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 5, 4, N'dấd', NULL, CAST(N'2023-10-16T18:34:48.830' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697446120236_12', 5, 4, N'dấd', NULL, CAST(N'2023-10-16T18:34:49.600' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697456921990_28', 1, 3, N'', NULL, CAST(N'2023-10-16T18:58:47.100' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697456921990_28', 1, 3, N'', NULL, CAST(N'2023-10-16T19:14:56.250' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697456921990_28', 1, 3, N'đâsds', NULL, CAST(N'2023-10-16T19:15:33.903' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697534567660_89', 6, 2, N'abc', NULL, CAST(N'2023-10-17T16:23:25.183' AS DateTime), 1)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697539331799_88', 4, 4, N'hài lòng', NULL, CAST(N'2023-10-17T18:53:26.807' AS DateTime), 1)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697456921990_28', 1, 3, N'', NULL, CAST(N'2023-10-16T18:58:40.483' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697456921990_28', 1, 3, N'', NULL, CAST(N'2023-10-16T19:15:00.080' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697456921990_28', 1, 3, N'', NULL, CAST(N'2023-10-16T19:15:01.030' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697459261884_52', 2, 5, N'xẫ', NULL, CAST(N'2023-10-16T19:29:45.617' AS DateTime), 2)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697472440472_35', 6, 4, N'dg1', NULL, CAST(N'2023-10-16T23:08:32.103' AS DateTime), 1)
INSERT [dbo].[DanhGia] ([idDH], [idSP], [soSao], [danhGia], [traLoiDG], [ngayChinhSua], [lanChinhSua]) VALUES (N'DH1697472440472_35', 2, 1, N'dg2', NULL, CAST(N'2023-10-16T23:08:32.107' AS DateTime), 1)
GO
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1', 1, N'KH1', N'ma1', N'J&T', 4, CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2023-11-10T20:07:00.000' AS DateTime), N'Admin1', 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697028559027_66', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-11T19:49:19.030' AS DateTime), CAST(N'2023-10-13T17:45:17.300' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697029281487_92', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-11T20:01:21.527' AS DateTime), CAST(N'2023-10-13T17:45:14.733' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697029454853_36', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:04:14.887' AS DateTime), CAST(N'2023-10-12T14:40:57.510' AS DateTime), NULL, 5, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697029738245_15', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:08:58.257' AS DateTime), CAST(N'2023-10-12T14:42:39.617' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031328943_82', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:35:28.953' AS DateTime), CAST(N'2023-10-12T16:24:35.990' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031374948_62', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:36:14.960' AS DateTime), CAST(N'2023-10-12T14:45:52.770' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031415772_63', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:36:55.783' AS DateTime), CAST(N'2023-10-12T16:24:49.480' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031567100_80', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:39:27.113' AS DateTime), CAST(N'2023-10-12T16:24:44.313' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031642422_49', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:40:42.430' AS DateTime), CAST(N'2023-10-12T16:26:11.200' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031665832_68', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:41:05.840' AS DateTime), CAST(N'2023-10-12T16:26:36.383' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031700145_10', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:41:40.160' AS DateTime), CAST(N'2023-10-12T16:28:58.323' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697031736099_41', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:42:16.100' AS DateTime), CAST(N'2023-10-12T16:20:17.630' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697032047715_73', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:47:27.723' AS DateTime), CAST(N'2023-10-12T16:29:07.950' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697032449897_27', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T20:54:09.910' AS DateTime), CAST(N'2023-10-12T16:29:24.473' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697035988688_78', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-11T21:53:08.717' AS DateTime), CAST(N'2023-10-12T16:33:03.553' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697037009506_84', 1, N'kh1697033663846_47', NULL, NULL, 5, CAST(N'2023-10-11T22:10:09.540' AS DateTime), CAST(N'2023-10-15T14:00:51.127' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697038989251_50', 1, N'kh1697033663846_47', NULL, NULL, 5, CAST(N'2023-10-11T22:43:09.290' AS DateTime), CAST(N'2023-10-15T14:03:47.940' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697043905932_49', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-12T00:05:06.080' AS DateTime), CAST(N'2023-10-12T16:34:12.737' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697053561355_68', 1, N'kh1697033663846_47', NULL, NULL, 5, CAST(N'2023-10-12T02:46:01.377' AS DateTime), CAST(N'2023-10-15T14:03:55.797' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697054287742_47', 1, N'kh1697033663846_47', NULL, NULL, 5, CAST(N'2023-10-12T02:58:07.770' AS DateTime), CAST(N'2023-10-15T14:05:11.637' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697054519085_63', 1, N'kh1697033663846_47', NULL, NULL, 5, CAST(N'2023-10-12T03:01:59.113' AS DateTime), CAST(N'2023-10-15T14:05:31.127' AS DateTime), NULL, 0, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697185646691_69', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-13T15:27:26.700' AS DateTime), CAST(N'2023-10-13T16:46:46.613' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697186464328_89', 1, N'KH2', NULL, NULL, 5, CAST(N'2023-10-13T15:41:04.340' AS DateTime), CAST(N'2023-10-13T15:46:29.927' AS DateTime), NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697186588073_16', 1, N'KH2', NULL, N'', 3, CAST(N'2023-10-13T15:43:08.083' AS DateTime), NULL, NULL, 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697193898918_20', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-13T17:44:58.933' AS DateTime), CAST(N'2023-10-13T18:03:07.270' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697195030181_21', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-13T18:03:50.190' AS DateTime), CAST(N'2023-10-13T18:24:02.060' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697196139502_79', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-13T18:22:19.517' AS DateTime), CAST(N'2023-10-14T09:58:37.500' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697254377612_99', 2, N'KH1', NULL, NULL, 5, CAST(N'2023-10-14T10:32:57.620' AS DateTime), CAST(N'2023-10-14T11:40:02.117' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697254423963_97', 3, N'KH1', NULL, NULL, 5, CAST(N'2023-10-14T10:33:43.970' AS DateTime), CAST(N'2023-10-15T14:37:21.980' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697255651196_34', 3, N'KH1', NULL, NULL, 5, CAST(N'2023-10-14T10:54:11.210' AS DateTime), CAST(N'2023-10-15T17:01:39.340' AS DateTime), NULL, 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697259482212_76', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-14T11:58:02.237' AS DateTime), CAST(N'2023-10-14T11:58:33.150' AS DateTime), NULL, 3, N'đwadads', N'ádasdsad', N'SP2')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697266293773_62', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-14T13:51:33.827' AS DateTime), CAST(N'2023-10-15T17:02:43.927' AS DateTime), NULL, 1, N'1', N'1', N'chiến lê')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697355324011_82', 3, N'KH1', NULL, NULL, 5, CAST(N'2023-10-15T14:35:24.080' AS DateTime), CAST(N'2023-10-16T19:21:12.967' AS DateTime), NULL, 2, N'1', N'0333757429', N'sua sp1')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697355356295_96', 3, N'KH1', NULL, NULL, 5, CAST(N'2023-10-15T14:35:56.303' AS DateTime), CAST(N'2023-10-16T19:21:36.413' AS DateTime), NULL, 1, N'đwadads', N'0333757429', N'SP2')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697357553546_86', 1, N'kh1697357087984_85', NULL, NULL, 5, CAST(N'2023-10-15T15:12:33.560' AS DateTime), CAST(N'2023-10-15T15:13:08.520' AS DateTime), NULL, 1, N'Bđbs', N'0333757429', N'Lê đăng chiến')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697357908867_10', 2, N'kh1697357087984_85', NULL, NULL, 5, CAST(N'2023-10-15T15:18:28.877' AS DateTime), CAST(N'2023-10-15T17:01:16.180' AS DateTime), NULL, 1, N'adsad', N'1', N'adsadsa')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697364203078_85', 1, N'kh1697357087984_85', NULL, NULL, 5, CAST(N'2023-10-15T17:03:23.100' AS DateTime), CAST(N'2023-10-15T17:03:31.640' AS DateTime), NULL, 2, N'', N'', N'')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697364242296_32', 1, N'KH1', NULL, NULL, 6, CAST(N'2023-10-15T17:04:02.303' AS DateTime), NULL, NULL, 1, N'', N'', N'')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697364439573_63', 1, N'KH1', NULL, NULL, 6, CAST(N'2023-10-15T17:07:19.580' AS DateTime), NULL, NULL, 1, N'', N'', N'')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697364590990_25', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-15T17:09:51.010' AS DateTime), CAST(N'2023-10-16T19:17:34.313' AS DateTime), NULL, 1, N'', N'', N'')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697364734795_52', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-15T17:12:14.803' AS DateTime), CAST(N'2023-10-16T19:17:31.213' AS DateTime), NULL, 1, N'đasad', N'đâsdasd', N'sua sp1')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697364755552_26', 1, N'kh1697357087984_85', NULL, NULL, 6, CAST(N'2023-10-15T17:12:35.560' AS DateTime), NULL, NULL, 1, N'adsad', N'0333757429', N'adsadsa')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697446120236_12', 1, N'KH1', NULL, NULL, 4, CAST(N'2023-10-16T15:48:40.257' AS DateTime), NULL, NULL, 3, N'đasad', N'ádasdsad', N'sua sp1')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697456921990_28', 1, N'KH1', NULL, NULL, 4, CAST(N'2023-10-16T18:48:42.010' AS DateTime), NULL, NULL, 1, N'đwadads', N'ádasdsad', N'SP2')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697459261884_52', 1, N'KH1', NULL, NULL, 4, CAST(N'2023-10-16T19:27:41.900' AS DateTime), NULL, NULL, 1, N'đasad', N'dsadasdas', N'SP2')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697460015133_97', 1, N'KH1', NULL, NULL, 6, CAST(N'2023-10-16T19:40:15.143' AS DateTime), NULL, NULL, 1, N'đasad', N'đâsdasd', N'choieens')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697468248321_85', 1, N'kh1697033663846_47', NULL, NULL, 6, CAST(N'2023-10-16T21:57:28.340' AS DateTime), NULL, NULL, 2, N'1', N'1', N'chiến')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697472440472_35', 1, N'kh1697033663846_47', NULL, NULL, 4, CAST(N'2023-10-16T23:07:20.490' AS DateTime), NULL, NULL, 3, N'nhân ki?t', N'0333757429', N'chiến koi123')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697534567660_89', 1, N'KH1', NULL, NULL, 4, CAST(N'2023-10-17T16:22:47.713' AS DateTime), NULL, NULL, 2, N'đwadads', N'ádasdsad', N'sua sp1')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697539331799_88', 1, N'KH1', NULL, NULL, 4, CAST(N'2023-10-17T17:42:11.817' AS DateTime), NULL, NULL, 2, N'đasad', N'dsadasdas', N'đasadsd')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697545220043_30', 1, N'kh1697545163725_94', N'SPX2325353424VN', N'SPEXPRESS', 2, CAST(N'2023-10-17T19:20:20.127' AS DateTime), NULL, NULL, 2, N'nhân kiệt', N'0333757429', N'abc')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697545992689_95', 2, N'kh1697357087984_85', N'SPX2325353424VN', N'Shopee EXPress', 5, CAST(N'2023-10-17T19:33:12.713' AS DateTime), CAST(N'2023-10-17T21:14:46.510' AS DateTime), NULL, 2, N'Abc', N'0333757429', N'Chiến lê')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697551324222_29', 2, N'kh1697545163725_94', NULL, NULL, 6, CAST(N'2023-10-17T21:02:04.237' AS DateTime), NULL, NULL, 1, N'đasad', N'dsadasdas', N'đasadsd')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697903947578_91', 3, N'KH1', NULL, NULL, 6, CAST(N'2023-10-21T22:59:07.597' AS DateTime), NULL, NULL, 2, N'đasad', N'ádasdsad', N'lê đăng chiến')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697904049980_83', 2, N'KH1', NULL, NULL, 6, CAST(N'2023-10-21T23:00:49.990' AS DateTime), NULL, NULL, 1, N'đwadads', N'ádasdsad', N'SP2')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697904140445_40', 1, N'KH1', NULL, NULL, 6, CAST(N'2023-10-21T23:02:20.457' AS DateTime), NULL, NULL, 1, N'ádasd', N'dsadasdas', N'SP2')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697905921325_41', 1, N'KH1', NULL, NULL, 5, CAST(N'2023-10-21T23:32:01.343' AS DateTime), CAST(N'2023-10-21T23:38:42.493' AS DateTime), NULL, 1, N'jkhdfghujhgsf', N'jnjkjncv', N'ret')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH1697905981287_52', 2, N'KH1', NULL, N'', 3, CAST(N'2023-10-21T23:33:01.297' AS DateTime), NULL, NULL, 1, N'sdgdhgdhfd', N'kjshguhsui', N'udfushgu')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH2', 2, N'KH2', N'ma2', N'J&T', 2, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1', 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH3', 2, N'KH3', N'ma3', N'vnpost', 2, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1', 2, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH4', 1, N'KH2', N'ma4', N'J&T', 4, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1', 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH5', 3, N'KH2', N'ma5', N'vnpost', 5, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1', 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH6', 2, N'KH2', N'ma6', N'vnpost', 5, CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2023-10-12T16:34:21.687' AS DateTime), N'Admin1', 1, N'0', N'0', N'0')
INSERT [dbo].[DonHang] ([id], [thanhToan], [idKH], [maVanDon], [donViVanChuyen], [tinhTrangDonHang], [ngayTao], [ngayHuy], [nguoiDuyet], [soLuongMatHang], [diaChi], [sdt], [tenNguoiNhan]) VALUES (N'DH7', 2, N'KH2', N'ma7', N'vnpost', 3, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, N'Admin1', 1, N'0', N'0', N'0')
GO
INSERT [dbo].[GioHang] ([idKH], [idSP], [soLuong]) VALUES (N'kh1697357087984_85', 30, 3)
INSERT [dbo].[GioHang] ([idKH], [idSP], [soLuong]) VALUES (N'KH3', 3, 3)
INSERT [dbo].[GioHang] ([idKH], [idSP], [soLuong]) VALUES (N'kh1:59:1_9-10-2023', 1, 21)
INSERT [dbo].[GioHang] ([idKH], [idSP], [soLuong]) VALUES (N'KH3', 2, 3)
INSERT [dbo].[GioHang] ([idKH], [idSP], [soLuong]) VALUES (N'KH1', 3, 1)
INSERT [dbo].[GioHang] ([idKH], [idSP], [soLuong]) VALUES (N'kh1697907384565_65', 3, 1)
GO
INSERT [dbo].[HinhThucThanhToan] ([id], [ten]) VALUES (1, N'Thanh toán khi nhận hàng')
INSERT [dbo].[HinhThucThanhToan] ([id], [ten]) VALUES (2, N'Thanh toán ngân hàng')
INSERT [dbo].[HinhThucThanhToan] ([id], [ten]) VALUES (3, N'Thanh toán momo')
GO
SET IDENTITY_INSERT [dbo].[SanPham] ON 

INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (1, N'1696867465662-IMG_20230314_135658.jpg', N'sua sp1', 1, N'', N'đen', -18, N'mo ta sp1', CAST(N'2023-10-09T23:04:25.797' AS DateTime), NULL, N'')
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (2, N'1697901257590-IMG_20230314_142224.jpg', N'SP2', 5555, N'toshiba', N'tr?ng', -24, N'mo ta', CAST(N'2023-10-21T22:14:17.617' AS DateTime), NULL, N'n?i cơm')
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (3, N'prod-1.jpg', N'SP3', 2, NULL, N'trắng', -8, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (4, N'prod-1.jpg', N'SP4', 2, NULL, N'trắng', 1, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (5, N'prod-1.jpg', N'SP5', 2, NULL, N'trắng', 1, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (6, N'1697905613862-IMG_20230314_135655.jpg', N'SP6', 343, N'ferr', N'tr?ng', 66, N'mo ta', CAST(N'2023-10-21T23:26:53.933' AS DateTime), NULL, N'frfref')
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (7, N'prod-1.jpg', N'SP7', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (8, N'prod-1.jpg', N'SP8', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (9, N'prod-1.jpg', N'SP9', 2, NULL, N'trắng', 5, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (10, N'prod-1.jpg', N'SP10', 2, NULL, N'trắng', 4, N'mo ta', CAST(N'2023-09-30T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (11, N'1696867407872-chien2.jpg', N'n?i cơm đi?n', 100000, N'không', N'đen', -13, N'cáccascs', CAST(N'2023-10-09T23:03:28.040' AS DateTime), NULL, N'n?i cơm')
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (13, N'prod-1.jpg', N'ấm siêu tốc', 120000, NULL, N'đen', 6, N'sản phẩm chất lượng', CAST(N'2023-10-09T00:00:00.000' AS DateTime), NULL, N'ấm đun nước')
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (15, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (16, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (17, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (18, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (19, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (20, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (21, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (22, N'prod-1.jpg', N'tivi 20cm', 9000000, N'samsung', N'đen', 10, N'tivi siêu mỏng', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (23, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N's', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (24, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (25, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (26, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (27, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (28, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (29, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (30, N'prod-1.jpg', N'chảo chống dính', 150000, N'sunhouse', N'xanh', 10, N'chảo chống dính', CAST(N'2003-10-10T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (31, N'1697897901302-IMG_20230314_142320.jpg', N'Thêm 1 s?a', 6666, N'không', N'tr?ng', 666, N'thêm 1', CAST(N'2023-10-21T21:18:21.390' AS DateTime), CAST(N'2023-10-21T21:18:44.003' AS DateTime), N'thêm 1')
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (32, N'1697903080829-chien2.jpg', N'sua sp1', 545354, N'không', N'đ?', 6, N'đâsd', CAST(N'2023-10-21T22:44:40.853' AS DateTime), CAST(N'2023-10-21T22:45:14.573' AS DateTime), N'đâsdas')
INSERT [dbo].[SanPham] ([idSP], [anh], [ten], [gia], [hang], [mauSac], [soluong], [moTa], [ngayCapNhat], [ngayXoa], [loaiSanPham]) VALUES (33, N'1697903193707-IMG_20230314_144930.jpg', N'abc', 11231232131, N'không', N'tr?ng', 6, N'1111', CAST(N'2023-10-21T22:46:33.730' AS DateTime), CAST(N'2023-10-21T22:46:50.227' AS DateTime), N'n?i cơm')
SET IDENTITY_INSERT [dbo].[SanPham] OFF
GO
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'59a6c37a-1e3b-4876-9775-ffced2', N'chientesst', N'123', 1, 0, CAST(N'2023-10-21T21:20:14.680' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'AM6', N'tk6', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH1', N'tk1', N'1', 5, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH2', N'tk2', N'1', 1, 1, CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2023-10-09' AS Date), NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH3', N'tk3', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH4', N'tk4', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH5', N'tk5', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH7', N'tk7', N'1', 1, 1, CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2023-10-02' AS Date), NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1:59:1_9-10-2023', N'chien', N'1', 1, 0, CAST(N'2023-10-09T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697033663846_47', N'chienkoi123', N'1', 1, 0, CAST(N'2023-10-11T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697196640915_36', N'chien666', N'1', 1, 0, CAST(N'2023-10-13T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697196662632_65', N'fsdfsdffsdf', N'chienkoi123', 1, 0, CAST(N'2023-10-13T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697353725320_83', N'dangchien2003', N'chienkoi123', 1, 0, CAST(N'2023-10-15T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697357087984_85', N'Abc123', N'1', 1, 0, CAST(N'2023-10-15T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697545163725_94', N'chien123', N'1', 1, 0, CAST(N'2023-10-17T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697906934890_72', N'KH20', N'1', 1, 0, CAST(N'2023-10-21T00:00:00.000' AS DateTime), CAST(N'2023-10-21' AS Date), NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697907384565_65', N'TK20', N'1', 1, 0, CAST(N'2023-10-21T00:00:00.000' AS DateTime), CAST(N'2023-10-21' AS Date), NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697907735709_14', N'tb', N't', 1, 0, CAST(N'2023-10-22T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'tk1697907774758_48', N'tt', N't', 1, 0, CAST(N'2023-10-22T00:00:00.000' AS DateTime), NULL, NULL)
GO
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (1, N'đang chuẩn bị hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (2, N'đã giao cho đơn vị vận chuyển')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (3, N'đang giao hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (4, N'đã nhận hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (5, N'đã huỷ đơn')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (6, N'chờ duyệt')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (7, N'chờ xác nhận huỷ')
GO
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1', 2, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH2', 2, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH3', 3, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH3', 2, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH4', 4, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH5', 4, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH6', 5, 3, 3)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH7', 6, 5, 3)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH7', 5, 5, 3)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697029454853_36', 5, 13, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697029454853_36', 4, 3, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697029454853_36', 6, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697029454853_36', 2, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697029454853_36', 3, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697029738245_15', 1, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031328943_82', 6, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031374948_62', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031567100_80', 4, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031567100_80', 5, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697032047715_73', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697032047715_73', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697032449897_27', 6, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697185646691_69', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697185646691_69', 3, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697186588073_16', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697186588073_16', 3, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697193898918_20', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697195030181_21', 1, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697196139502_79', 2, 2, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697254377612_99', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697254423963_97', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697255651196_34', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697259482212_76', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697259482212_76', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697259482212_76', 3, 2, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697266293773_62', 2, 2, 4)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697355324011_82', 11, 100000, 13)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697355324011_82', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697355356295_96', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697357553546_86', 1, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697357908867_10', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697364203078_85', 11, 100000, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697364203078_85', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697364590990_25', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697364755552_26', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697446120236_12', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697446120236_12', 5, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697446120236_12', 11, 100000, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697456921990_28', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697460015133_97', 13, 120000, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697468248321_85', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697468248321_85', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697472440472_35', 6, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697472440472_35', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697472440472_35', 10, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697534567660_89', 6, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697534567660_89', 13, 120000, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697539331799_88', 4, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697539331799_88', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697545220043_30', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697545220043_30', 4, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697545992689_95', 11, 100000, 4)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697545992689_95', 3, 2, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697551324222_29', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697903947578_91', 2, 5555, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697903947578_91', 1, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697904049980_83', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697904140445_40', 6, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697905921325_41', 5, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697905981287_52', 2, 5555, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031415772_63', 2, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031415772_63', 3, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031700145_10', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031736099_41', 2, 1, 2)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697031736099_41', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697038989251_50', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697038989251_50', 3, 2, 5)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697054287742_47', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697054287742_47', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697364242296_32', 1, 1, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697364734795_52', 2, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697364439573_63', 3, 2, 1)
INSERT [dbo].[ThongTinDonHang] ([idDH], [idSP], [gia], [soLuong]) VALUES (N'DH1697459261884_52', 2, 2, 1)
GO
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH1', N'KH1', N'so', N'th', N't', N'hải', N'Chienboy03@gmail.com', CAST(N'2003-03-18' AS Date), 0, N'a')
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1:59:1_9-10-2023', N'tk1:59:1_9-10-2023', NULL, NULL, NULL, NULL, N'Chienboy03@gmail.com', NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697033663846_47', N'tk1697033663846_47', N'', N'', N'dsadasdsad', N'sadasdsadsda', N'fsdfds@gmail.com', CAST(N'1900-01-01' AS Date), 1, N'dsadsadsa')
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697196640915_36', N'tk1697196640915_36', NULL, NULL, NULL, NULL, N'linhtri2326@gmail.com', NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697196662632_65', N'tk1697196662632_65', NULL, NULL, NULL, NULL, N'Chienboy03@gmail.com', NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697353725320_83', N'tk1697353725320_83', NULL, NULL, NULL, NULL, N'Chienboy03@gmail.com', NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697357087984_85', N'tk1697357087984_85', N'', N'', N'Lê đăng', N'', N'dangchien2601@gmail.com', CAST(N'1900-01-27' AS Date), 0, N'')
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697545163725_94', N'tk1697545163725_94', NULL, NULL, NULL, NULL, N'Chienboy03@gmail.com', NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697906934890_72', N'tk1697906934890_72', N'T', N'T', N'T', N'T', N'Chienboy03@gmail.com', CAST(N'1993-03-13' AS Date), 1, N'2')
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697907384565_65', N'tk1697907384565_65', N'sd', N'hg', N'tr', N'sd', N'linhtri2326@gmail.com', CAST(N'1900-01-01' AS Date), 0, N'')
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697907735709_14', N'tk1697907735709_14', NULL, NULL, NULL, NULL, N'tb@gmai.com', NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'kh1697907774758_48', N'tk1697907774758_48', NULL, NULL, NULL, NULL, N'tt@gmail.com', NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH2', N'KH2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH3', N'KH3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH4', N'KH4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[ThongTinKhachHang] ([idKH], [idTK], [bietDanh], [ten], [ho], [diaChi], [email], [ngaySinh], [gioiTinh], [sdt]) VALUES (N'KH5', N'KH5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__admin__9DB8286FFEA0F0F2]    Script Date: 22/10/2023 12:44:35 am ******/
ALTER TABLE [dbo].[admin] ADD UNIQUE NONCLUSTERED 
(
	[idTK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__TaiKhoan__B4C45318A8F7976F]    Script Date: 22/10/2023 12:44:35 am ******/
ALTER TABLE [dbo].[TaiKhoan] ADD UNIQUE NONCLUSTERED 
(
	[taiKhoan] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__ThongTin__9DB8286F4F9DE7E0]    Script Date: 22/10/2023 12:44:35 am ******/
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
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([nguoiDuyet])
REFERENCES [dbo].[admin] ([idAdmin])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([tinhTrangDonHang])
REFERENCES [dbo].[TinhTrangDonHang] ([id])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([thanhToan])
REFERENCES [dbo].[HinhThucThanhToan] ([id])
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
ALTER TABLE [dbo].[ThongTinDonHang]  WITH CHECK ADD FOREIGN KEY([idDH])
REFERENCES [dbo].[DonHang] ([id])
GO
ALTER TABLE [dbo].[ThongTinDonHang]  WITH CHECK ADD FOREIGN KEY([idSP])
REFERENCES [dbo].[SanPham] ([idSP])
GO
ALTER TABLE [dbo].[ThongTinKhachHang]  WITH CHECK ADD FOREIGN KEY([idTK])
REFERENCES [dbo].[TaiKhoan] ([idTK])
GO
/****** Object:  StoredProcedure [dbo].[GetInfoOrder]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[GetInfoOrder](
	@idKh varchar(30),
	@idDH varchar(20)
) as
begin
	DECLARE @count int;
	select @count = count(*) from DonHang where id = @idDH and idKH = @idKh;
	if(@count != 1) 
	begin
		return 100;
	end

	
	select ThongTinDonHang.idDH, SanPham.ten as tenSP, ThongTinDonHang.idSP, ThongTinDonHang.gia*ThongTinDonHang.soLuong as giaSP,
	ThongTinDonHang.soLuong, SanPham.anh
	from ThongTinDonHang 
	join SanPham on ThongTinDonHang.idSP = SanPham.idSP
	where ThongTinDonHang.idDH = @idDH
	order by idSP;

	select HinhThucThanhToan.ten as hinhThucThanhToan, maVanDon, donViVanChuyen,
	tinhTrangDonHang, ngayTao, ngayHuy, soLuongMatHang, diaChi, sdt, tenNguoiNhan as nguoiNhan 
	from DonHang
	join HinhThucThanhToan on DonHang.thanhToan = HinhThucThanhToan.id
	where DonHang.id = @idDH and idKH = @idKh;

	select danhGia.danhGia, danhGia.traLoiDG, soSao, danhGia.idSP from DanhGia 
	where idDH = @idDH
	order by idSP;
end
GO
/****** Object:  StoredProcedure [dbo].[getOrder]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[getOrder]
@idkh VARCHAR(30)
AS
BEGIN
    -- Tạo bảng tạm
    CREATE TABLE #infoOrder (
        idDH varchar(20),
		maVanDon varchar(30),
		donViVanChuyen varchar(50),
		statusDH int,
		tinhTrang nvarchar(50),
		ngayTao datetime
    );

	
	 -- Thực hiện các thao tác khác trên bảng tạm ở đây
	insert into #infoOrder 
	select DISTINCT 
	DonHang.id as idDH, maVanDon, DonHang.donViVanChuyen,
	tinhTrangDonHang as statusDH, TinhTrangDonHang.tinhTrang, ngayTao as [ngayTao]
	from DonHang 
	left join ThongTinDonHang 
	on DonHang.id = ThongTinDonHang.idDH
	left join TinhTrangDonHang 
	on DonHang.tinhTrangDonHang = TinhTrangDonHang.id
	 where DonHang.idKH = @idkh

   
	-- Tạo bảng tạm
    CREATE TABLE #moreInfoOrder (
        idDH varchar(20),
		gia bigint,
		soLuong int
    );
	-- -- Thực hiện các thao tác khác trên bảng tạm ở đây
	insert into #moreInfoOrder
	select idDH, sum(gia*soLuong) as gia, count(soLuong) as soLuong
	from ThongTinDonHang
	left join DonHang on DonHang.id = ThongTinDonHang.idDH
	where idKH = @idkh
	Group by idDH

	select #infoOrder.idDH, maVanDon, donViVanChuyen, statusDH, tinhTrang, ngayTao, gia, soLuong from #infoOrder
	left join #moreInfoOrder on #infoOrder.idDH = #moreInfoOrder.idDH
	--select * from #moreInfoOrder
    -- Xóa bảng tạm khi bạn đã sử dụng xong
    DROP TABLE #infoOrder;
    DROP TABLE #moreInfoOrder;

END;

GO
/****** Object:  StoredProcedure [dbo].[ThanhToanDonHang]    Script Date: 22/10/2023 12:44:35 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[ThanhToanDonHang](
	@idKH varchar(30),
	@idDH varchar(20),
	@ten nvarchar(50),
	@diachi nvarchar(100),
	@sdt varchar(10),
	@thanhToan int
)
as
begin
	--select @idKH, @idDH, @thanhToan
	--return 1;
	-- lấy ra số lượng mặt hàng
	DECLARE @RecordCount INT;
	DECLARE @count int = 0;
	DECLARE @idSP int;
	select @RecordCount = count(*) from GioHang where idKH = @idKH;
	if (@RecordCount = 0) 
	begin
		return 0;
	end;
	-- thêm bản ghi vào đơn hàng
	insert into DonHang(id, tenNguoiNhan, sdt, diaChi, thanhToan, idKH, maVanDon, donViVanChuyen, tinhTrangDonHang, ngayTao, ngayHuy, nguoiDuyet, soLuongMatHang) values(@idDH,@ten, @sdt, @diachi, @thanhToan, @idKH, null, null, 6, GetDate(), null, null, @RecordCount);
	


	--thêm bản ghi vào thông tin đơn hàng
	
	insert into ThongTinDonHang (idDH, idSP, soLuong, gia)
	select @idDH as idDH, GioHang.idSP, GioHang.soLuong, SanPham.gia
	from GioHang
	join SanPham on SanPham.idSP = GioHang.idSP
	where idKH = @idKH 
	order by GioHang.idSP
	--xoá giỏ hàng
	delete GioHang where idKH = @idKH
	--cập nhật số lượng sản phẩm
	create table #sanpham(
		idSP int,
		soLuong int,
		soLuongCu int
	)

	-- lấy chi tiết đơn hàng gán vào bảng tạm sanpham
	insert into #sanpham select ThongTinDonHang.idSP, ThongTinDonHang.soLuong, SanPham.soluong as soLuongCu 
	from ThongTinDonHang 
	join SanPham on SanPham.idSP = ThongTinDonHang.idSP
	where idDH = @idDH 

	while @count < @RecordCount
	begin
		select @idSP = idSP from #sanpham ORDER BY idSP OFFSET @count ROWS FETCH NEXT 1 ROWS ONLY
		
		--cập nhật số lượng
		update SanPham set soluong = (select soLuongCu - soLuong from #sanpham where idSP = @idSP) where idSP = @idSP;
		SET @count = @count + 1;
	end 

	return 1;
end;
GO
