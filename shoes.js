module.exports = function(models) {
  'use strict';

  const Shoes = function(req, res, next) {
    models.Shoes.find({}, function(err, shoes){
      if(err){
        return next(err);
      }
    res.json({shoes});
  });
};

const shoeBrand = function(req, res, next){
    var brand = req.params.brand;
    models.Shoes.find({
      brand: brand
    }, function(err, brand){
      if(err){
        return next(err)
      }
      res.json({
        brand
      });
    });
}

const shoeSize = function(req, res, next){
    var size = req.params.size;
    models.Shoes.find({
      size: size
    }, function(err, size){
      if(err){
        return next(err)
      }
      res.json({
        size
      });
    });
}

const shoeBrandAndSize = function(req, res, next){
  var brand = req.params.brand;
  var size = req.params.size;

  models.Shoes.find({
    brand: brand,
    size: size
  }, function(err, brandAndSize){
    if(err){
      return next(err)
    }
    res.json({
      brandAndSize
    });
  });
}

  const addShoe = function(req, res, next) {

var newShoe =[
  {
      id : req.body.id,
      color : req.body.color,
      brand : req.body.brand,
      price : req.body.price,
      size : req.body.size,
      in_stock : req.body.in_stock
  }
]

    models.Shoes.create(newShoe, function(err, shoes){
      if(err){
        if (err.code === 11000){
        } else{
          return next(err);
        }
      }
    res.json(shoes);
  });
};

return {
  Shoes,
  addShoe,
  shoeBrand,
  shoeSize,
  shoeBrandAndSize
}

};
