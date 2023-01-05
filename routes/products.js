const express = require("express");
const Product = require("../models/product");
const router = express.Router();

//creating the routers

//Get all the products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//Get single product
router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const p = await Product.findById(productId);
    res.json(p);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//Create product
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = {
      name: req.body.productName,
      price: req.body.productPrice,
      description: req.body.productText,
      category: req.body.categorySelect,
      rating: req.body.ratingSelect,
    };
    const product = await Product.create(data);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//Delete product
router.delete("/:productId", async (req, res) => {
  try {
    await Product.remove({ _id: req.params.productId });
    res.status(200).json({
      message: "Done",
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//Update product
router.put("/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.updateOne(
      {
        _id: productId,
      },
      req.body
    );
    res.json(product);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
