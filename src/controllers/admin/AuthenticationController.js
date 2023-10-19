

const query = require("../../until/helper");


class AuthenticationController {
  getLogin(req, res) {
    return res.render("login.hbs");
  }
}

module.exports = new AuthenticationController();
