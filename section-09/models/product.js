const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      // 'this' will refer to the object created based on
      // the class. And that is the object we want to store
      // in this array.
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // it's a utility function, should not be called for
  // a single instance of the Product class, because it
  // should fetch all products. And i don't want to create
  // a new object with the 'new' keyword with some dummy
  // title just to fetch all existing products. Hence,
  // i will keep it static
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
