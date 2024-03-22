function returnPageContact(req, res) {
    res.render("customer/contact/formContact", {
        title: "contact",
        scripts: []
    })
}

module.exports = {
    returnPageContact
}