
function isAdmin(req, res, next) {
    console.log(req.session);
    if (req.user && req.user.isAdmin) {
        return next();
    } return res.redirect('/admin/login');
  }

module.exports = isAdmin;