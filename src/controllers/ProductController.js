/** @format */

const query = require("../until/helper");

const productController = {
  getAllProduct: async (req, res) => {
    try {
      const queryString = "select * from SanPham";
      const products = await query(queryString);

      res.render("index", { products: products[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  },
  createProduct: async (req, res) => {},
  deleteProduct: async (req, res) => {},
};

module.exports = productController;
