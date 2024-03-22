const express = require("express");
const router = express.Router();
const {
  returnProducts,
  returnInfoProduct,
  moreProducts,
} = require("./middleware");
const utilMiddleware = require("../utilMiddleware");
//  /sale
router.get("/", utilMiddleware.checkBlock, returnProducts);

// /sale/search
router.post("/search", utilMiddleware.checkBlock, returnProducts);

// /sale/more
router.post("/more", utilMiddleware.checkBlock, moreProducts);

// /sale/product/info/:idsp
router.get("/product/info/:idsp", returnInfoProduct);

module.exports = router;
