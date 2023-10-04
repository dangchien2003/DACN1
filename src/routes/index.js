/** @format */

const {
    VarChar
} = require("msnodesqlv8");
const productRouter = require("./products");

function route(app) {
    // app.use("/product", productRouter);
    app.use("/", productRouter);
}

module.exports = route;