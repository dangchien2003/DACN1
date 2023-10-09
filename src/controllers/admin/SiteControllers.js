//const query = require("../until/helper");

class SiteController {
    //[GET] /admin - trang chủ admin
    index(req, res) {
        res.render('home.hbs');
    }
}

module.exports = new SiteController;