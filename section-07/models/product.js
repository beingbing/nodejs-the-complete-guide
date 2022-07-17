const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        // 'this' will refer to the object created based on
        // the class. And that is the object we want to store
        // in this array. 
        products.push(this);
    }

    // it's a utility function, should not be called for
    // a single instance of the Product class, because it
    // should fetch all products. And i don't want to create
    // a new object with the 'new' keyword with some dummy
    // title just to fetch all existing products. Hence,
    // i will keep it static
    static fetchAll() {
        return products;
    }
}