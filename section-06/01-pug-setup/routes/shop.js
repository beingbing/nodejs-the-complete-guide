const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const { products } = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("admin data: ", products);
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
