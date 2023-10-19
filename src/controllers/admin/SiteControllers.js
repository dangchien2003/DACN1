//const query = require("../until/helper");

class SiteController {
    //[GET] /admin - trang chủ admin
    index(req, res) {
        res.render('home.hbs');
    }

    //GET SETTING
}

module.exports = new SiteController;