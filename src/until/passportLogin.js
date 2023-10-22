const query = require("./helper");
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

function passportLogin(app) {
  //Thiết lập session
  app.use(session({
    secret: 'kim-anh',
    resave: false,
    saveUninitialized: false
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
            user.isAdmin = true;
        }
        return done(null, user);
      }
      else {
        return done(null, false, { message: 'username hoặc mật khẩu không chính xác!' });
      }
    }
  ))

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

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
}
module.exports = passportLogin;