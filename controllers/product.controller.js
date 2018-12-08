const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//Create a product
exports.product_create = function(req, res, next){
  //Create a product object
  let product = new Product({
    name: req.body.name,
    price: req.body.price
  });
  
  //Save that product
  product.save(function(err) {
    if(err){
      return next(err);
    }
    res.send("Product created succesfully");
  });
};

//Finds a product by id and returns it
exports.product_details = function(req, res, next){
  Product.findById(req.params.id, function(err, product){
    if(err) return next(err);
    res.send(product);
  })
}

//Finds a product by id and updates it
exports.product_update = function(req, res, next){
  Product.findByIdAndUpdate(req.params.id, {$set: req.body},
    function(err, product){
      if(err) return next(err);
      res.send('Product updated');
  })
}

//Removes a product from the DB
exports.product_delete = function(req, res, next){
  Product.findByIdAndRemove(req.params.id, function(err){
    if(err) return next(err);
    res.send('Product deleted');
  })
}