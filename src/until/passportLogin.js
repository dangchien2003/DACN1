const query = require("./helper");
<<<<<<< HEAD
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
=======

const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
>>>>>>> kim_anh

function passportLogin(app) {
  //Thiết lập session
  app.use(session({
    secret: 'kim-anh',
    resave: false,
<<<<<<< HEAD
    saveUninitialized: false
=======
    saveUninitialized: false,
>>>>>>> kim_anh
  }));

  //khởi tạo Passport và thiết lập session cho Passport:
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
    async function (username, password, done) {
      const queryUser = `SELECT * FROM TaiKhoan WHERE taiKhoan = '${username}' AND matKhau = '${password}'`;
      const userResult = await query.query(queryUser);
      if (userResult && userResult.recordset && userResult.recordset.length > 0) {
        const user = userResult.recordset[0];
        user.isAdmin = false;
        const adminString = `SELECT * FROM admin WHERE idTK = '${user.taiKhoan}'`;
        const adminResult = await query.query(adminString);
        if(adminResult && adminResult.recordset && adminResult.recordset.length > 0)
        {
<<<<<<< HEAD
=======
            user.ten = adminResult.recordset[0].ten;
            user.idAdmin = adminResult.recordset[0].idAdmin;
>>>>>>> kim_anh
            user.isAdmin = true;
        }
        return done(null, user);
      }
      else {
<<<<<<< HEAD
        return done(null, false, { message: 'username hoặc mật khẩu không chính xác!' });
=======
        return done(null, false);
>>>>>>> kim_anh
      }
    }
  ))

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

<<<<<<< HEAD
  passport.deserializeUser(function (id, done) {
    const queryUser = `SELECT * FROM TaiKhoan WHERE idTK = '${id}'`; // Truy vấn dựa trên ID
    const userResult = query.query(queryUser);
    if (userResult && userResult.recordset && userResult.recordset.length > 0) {
      const user = userResult.recordset[0];
      return done(null, user);
    }
  });

  app.post('/signin', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return res.status(500).json({ message: 'Lỗi máy chủ' });
      }
      if (!user) {
        return res.status(500).json({message: "Sai tên đăng nhập hoặc mật khẩu"});
      }
      req.logIn(user, function(err) {
        if (err) {
          return res.status(500).json({ message: 'Lỗi đăng nhập' });
        } 
      return res.redirect('/admin')  
        //return res.status(200).json({ message: 'Đăng nhập thành công' });
      });
    })(req, res, next);
  });
=======
  passport.deserializeUser(async function (user, done) {
    // const queryUser = `SELECT * FROM TaiKhoan WHERE idTK = '${user.idTK}'`; // Truy vấn dựa trên ID
    // const userResult = await query.query(queryUser);
    // if (userResult && userResult.recordset && userResult.recordset.length > 0) {
    //   const user = userResult.recordset[0];
    //   return done(null, user);
    // }
    // else return done(null,false);
    if(user) return done(null,user);
    return done(null, false);
  });

  app.post('/admin/login', passport.authenticate('local', {
    successRedirect :'/admin/dashboard',
    failureRedirect: '/admin/login?code=failed',
  }) )
>>>>>>> kim_anh
}
module.exports = passportLogin;