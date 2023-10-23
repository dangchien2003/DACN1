const query = require("./helper");

const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");

function passportLogin(app) {
  //Thiết lập session
  app.use(
    session({
      secret: "kim-anh",
      resave: false,
      saveUninitialized: false,
    })
  );

  //khởi tạo Passport và thiết lập session cho Passport:
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async function (username, password, done) {
      const queryUser = `SELECT * FROM TaiKhoan WHERE taiKhoan = '${username}' AND matKhau = '${password}'`;
      const userResult = await query.query(queryUser);
      if (
        userResult &&
        userResult.recordset &&
        userResult.recordset.length > 0
      ) {
        const user = userResult.recordset[0];
        user.isAdmin = false;
        const adminString = `SELECT * FROM admin WHERE idTK = '${user.taiKhoan}'`;
        const adminResult = await query.query(adminString);
        if (
          adminResult &&
          adminResult.recordset &&
          adminResult.recordset.length > 0
        ) {
          user.ten = adminResult.recordset[0].ten;
          user.idAdmin = adminResult.recordset[0].idAdmin;
          user.isAdmin = true;
        }
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(async function (user, done) {
    // const queryUser = `SELECT * FROM TaiKhoan WHERE idTK = '${user.idTK}'`; // Truy vấn dựa trên ID
    // const userResult = await query.query(queryUser);
    // if (userResult && userResult.recordset && userResult.recordset.length > 0) {
    //   const user = userResult.recordset[0];
    //   return done(null, user);
    // }
    // else return done(null,false);
    if (user) return done(null, user);
    return done(null, false);
  });

  app.post(
    "/admin/login",
    passport.authenticate("local", {
      successRedirect: "/admin/dashboard",
      failureRedirect: "/admin/login?code=failed",
    })
  );
}
module.exports = passportLogin;
