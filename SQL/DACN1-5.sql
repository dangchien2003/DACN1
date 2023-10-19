
drop database DACN1_QLBH
create database DACN1_QLBH
use DACN1_QLBH
CREATE TABLE [TaiKhoan] (
  [idTK] varchar(30) PRIMARY KEY,
  [taiKhoan] varchar(20) UNIQUE NOT NULL,
  [matKhau] varchar(30) NOT NULL,
  [capBac] int NOT NULL,
  [khoa] bit DEFAULT (0),
  [ngayTao] datetime NOT NULL,
  [ngayKhoa] date,
  [nguoiKhoa] varchar(30)
)
GO

CREATE TABLE [ThongTinKhachHang] (
  [idKH] varchar(30) PRIMARY KEY,
  [idTK] varchar(30) UNIQUE NOT NULL,
  [bietDanh] varchar(30),
  [ten] nvarchar(10),
  [ho] nvarchar(20),
  [diaChi] nvarchar(100),
  [email] varchar(50),
  [ngaySinh] date,
  [gioiTinh] bit,
  [sdt] varchar(10)
)
GO

CREATE TABLE [admin] (
  [idAdmin] varchar(30) PRIMARY KEY,
  [idTK] varchar(30) UNIQUE NOT NULL,
  [ten] nvarchar(10) NOT NULL,
  [ho] nvarchar(20) NOT NULL,
  [sdt] char(10) NOT NULL,
  [email] varchar(50) NOT NULL,
  [ngaySinh] date NOT NULL,
  [gioiTinh] bit NOT NULL,
  [diaChi] nvarchar(100) NOT NULL
)
GO

CREATE TABLE [GioHang] (
  [idKH] varchar(30) NOT NULL,
  [idSP] int NOT NULL
)
GO

CREATE TABLE [DonHang] (
  [id] varchar(20) PRIMARY KEY,
  [vanChuyen] int NOT NULL,
  [idKH] varchar(30) NOT NULL,
  [maVanDon] varchar(30),
  [donViVanChuyen] varchar(50),
  [tinhTrangDonHang] int,
  [ngayTao] datetime NOT NULL,
  [ngayHuy] datetime,
  [nguoiDuyet] varchar(30)
)
GO

CREATE TABLE [TinhTrangDonHang] (
  [id] int PRIMARY KEY,
  [tinhTrang] nvarchar(50)
)
GO

CREATE TABLE [HinhThucVanChuyen] (
  [id] int PRIMARY KEY,
  [ten] nvarchar(20) NOT NULL
)
GO

CREATE TABLE [ThongTinDonHang] (
  [idDH] varchar(20) NOT NULL,
  [idSP] int NOT NULL,
  [gia] bigint NOT NULL,
  [soLuong] int NOT NULL
)
GO

CREATE TABLE [SanPham] (
  [idSP] int primary key identity(1,1),
  [anh] varchar(200) NOT NULL,
  [ten] nvarchar(100) NOT NULL,
  [gia] bigint NOT NULL,
  [hang] varchar(20),
  [mauSac] nvarchar(20),
  loaiSanPham nvarchar(50),
  [soluong] int NOT NULL,
  [moTa] nvarchar(100),
  [ngayCapNhat] datetime NOT NULL,
  [ngayXoa] datetime
)
GO

CREATE TABLE [DanhGia] (
  [idDH] varchar(20) UNIQUE NOT NULL,
  [idSP] int NOT NULL,
  [soSao] int NOT NULL,
  [danhGia] nvarchar(200),
  [traLoiDG] nvarchar(200),
  [ngayChinhSua] datetime NOT NULL,
  [lanChinhSua] int NOT NULL DEFAULT (1)
)
GO

ALTER TABLE [GioHang] ADD FOREIGN KEY ([idSP]) REFERENCES [SanPham] ([idSP])
GO

ALTER TABLE [DonHang] ADD FOREIGN KEY ([vanChuyen]) REFERENCES [HinhThucVanChuyen] ([id])
GO

ALTER TABLE [DanhGia] ADD FOREIGN KEY ([idSP]) REFERENCES [SanPham] ([idSP])
GO

ALTER TABLE [DanhGia] ADD FOREIGN KEY ([idDH]) REFERENCES [DonHang] ([id])
GO

ALTER TABLE [DonHang] ADD FOREIGN KEY ([tinhTrangDonHang]) REFERENCES [TinhTrangDonHang] ([id])
GO

ALTER TABLE [DonHang] ADD FOREIGN KEY ([idKH]) REFERENCES [ThongTinKhachHang] ([idKH])
GO

ALTER TABLE [GioHang] ADD FOREIGN KEY ([idKH]) REFERENCES [ThongTinKhachHang] ([idKH])
GO

ALTER TABLE [ThongTinKhachHang] ADD FOREIGN KEY ([idTK]) REFERENCES [TaiKhoan] ([idTK])
GO

ALTER TABLE [TaiKhoan] ADD FOREIGN KEY ([nguoiKhoa]) REFERENCES [admin] ([idAdmin])
GO

ALTER TABLE [DonHang] ADD FOREIGN KEY ([nguoiDuyet]) REFERENCES [admin] ([idAdmin])
GO

ALTER TABLE [ThongTinDonHang] ADD FOREIGN KEY ([idDH]) REFERENCES [DonHang] ([id])
GO

ALTER TABLE [ThongTinDonHang] ADD FOREIGN KEY ([idSP]) REFERENCES [SanPham] ([idSP])

INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'AM6', N'tk6', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH1', N'tk1', N'1', 5, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH2', N'tk2', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH3', N'tk3', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH4', N'tk4', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH5', N'tk5', N'1', 1, 0, CAST(N'2023-10-01T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[TaiKhoan] ([idTK], [taiKhoan], [matKhau], [capBac], [khoa], [ngayTao], [ngayKhoa], [nguoiKhoa]) VALUES (N'KH7', N'tk7', N'1', 1, 1, CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2023-10-02' AS Date), NULL)



INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (1, N'đang chuẩn bị hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (2, N'đã giao cho đơn vị vận chuyển')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (3, N'đang giao hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (4, N'đã nhận hàng')
INSERT [dbo].[TinhTrangDonHang] ([id], [tinhTrang]) VALUES (5, N'đã huỷ đơn')

INSERT [dbo].[admin] ([idAdmin], [idTK], [ten], [ho], [sdt], [email], [ngaySinh], [gioiTinh], [diaChi]) VALUES (N'Admin1', N'tk1', N'Chiến', N'Lê Đăng', N'0333757429', N'chienboy03@gmail.com', CAST(N'2003-01-26' AS Date), 1, N'Hải Dương')
