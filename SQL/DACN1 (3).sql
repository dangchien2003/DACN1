use master;
go
drop database DACN1_QLBH
create database DACN1_QLBH;
go 
use DACN1_QLBH
go


CREATE TABLE [TaiKhoan] (
  [idTK] varchar(20) PRIMARY KEY,
  [taiKhoan] varchar(20) UNIQUE NOT NULL,
  [matKhau] varchar(30) NOT NULL,
  [capBac] int NOT NULL,
  [khoa] bit DEFAULT (0),
  [ngayTao] datetime NOT NULL,
  [ngayKhoa] date,
  [nguoiKhoa] varchar(20)
)
GO

CREATE TABLE [ThongTinKhachHang] (
  [idKH] varchar(20) PRIMARY KEY,
  [idTK] varchar(20) UNIQUE NOT NULL,
  [bietDanh] varchar(30),
  [ten] nvarchar(10),
  [ho] nvarchar(20),
  [diaChi] nvarchar(100),
  [email] varchar(50),
  [ngaySinh] date,
  [gioiTinh] bit,
  [sdt] char(10)
)
GO

CREATE TABLE [admin] (
  [idAdmin] varchar(20) PRIMARY KEY,
  [idTK] varchar(20) UNIQUE NOT NULL,
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
  [idKH] varchar(20) NOT NULL,
  [idSP] int NOT NULL
)
GO

CREATE TABLE [DonHang] (
  [id] varchar(20) PRIMARY KEY,
  [vanChuyen] int NOT NULL,
  [idKH] varchar(20) NOT NULL,
  [idTH] int NOT NULL,
  [maVanDon] varchar(30),
  [tinhTrangDonHang] int,
  [ngayTao] datetime NOT NULL,
  [ngayHuy] datetime,
  [nguoiDuyet] varchar(20)
)
GO

CREATE TABLE [TinhTrangDonHang] (
  [id] int PRIMARY KEY identity(1,1),
  [tinhTrang] nvarchar(50)
)
GO

CREATE TABLE [MaVanDon] (
  [maVanDon] varchar(30) PRIMARY KEY,
  [donViVanChuyen] varchar(50) NOT NULL
)
GO

CREATE TABLE [HinhThucVanChuyen] (
  [id] int PRIMARY KEY identity(1,1),
  [ten] nvarchar(20) NOT NULL
)
GO

CREATE TABLE [TuiHang] (
  [id] int PRIMARY KEY identity(1,1),
  [soLuong] int NOT NULL
)
GO

CREATE TABLE [ThongTinTuiHang] (
  [idTH] int NOT NULL,
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
  [loaiSanPham] nvarchar(50),
  [mauSac] nvarchar(20),
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

ALTER TABLE [ThongTinTuiHang] ADD FOREIGN KEY ([idTH]) REFERENCES [TuiHang] ([id])
GO

ALTER TABLE [ThongTinTuiHang] ADD FOREIGN KEY ([idSP]) REFERENCES [SanPham] ([idSP])
GO

ALTER TABLE [DonHang] ADD FOREIGN KEY ([idTH]) REFERENCES [TuiHang] ([id])
GO

ALTER TABLE [DonHang] ADD FOREIGN KEY ([vanChuyen]) REFERENCES [HinhThucVanChuyen] ([id])
GO

ALTER TABLE [DanhGia] ADD FOREIGN KEY ([idSP]) REFERENCES [SanPham] ([idSP])
GO

ALTER TABLE [DanhGia] ADD FOREIGN KEY ([idDH]) REFERENCES [DonHang] ([id])
GO

ALTER TABLE [DonHang] ADD FOREIGN KEY ([maVanDon]) REFERENCES [MaVanDon] ([maVanDon])
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
