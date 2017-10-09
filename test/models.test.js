//require assert
const assert = require('assert');
const Models = require('../models');

//connect to MongoDB
var models = Models('mongodb://localhost/shoes-api-test');

describe('store shoes', function() {
   //before it fuction run clear the Database
    beforeEach(function(done) {
        models.Shoes.find({}, function(err) {
            models.Shoes.remove({}, function(err) {
                done(err);
            });
        });
    });

    it('should add new shoes to MongoDB', function(done) {
        var newShoe = {
            id: 200,
            color: 'White',
            brand: 'Adidas',
            price: 899,
            in_stock: 4,
            size: 6
        }

        models.Shoes
            .create(newShoe, function(err) {
                models.Shoes.find({}, function(err, shoes){
                  assert.equal(1, shoes.length);
                  done(err);
                });
            });
    });
});
