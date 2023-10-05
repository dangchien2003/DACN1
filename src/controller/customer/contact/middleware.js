function returnPageContact(req, res) {
    res.render("customer/contact/formContact", {title: "contact"})
}

module.exports = {
    returnPageContact
}