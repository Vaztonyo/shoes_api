'use strict';
const mongoose = require('mongoose');

module.exports = function(mongoUrl) {
  //connect to MongoDB
    mongoose.connect(mongoUrl);

    mongoose.Promise = global.Promise;

    //initialise schema
    const ShoeSchema = mongoose.Schema({
        id: {
            type: Number,
            Required: true,
            unique: true,
            default: 100
        },
        brand: {
            type: String,
        },
        color: {
            type: String,
            default: 'Black'
        },
        price: {
            type: Number,
            default: 0.00
        },
        size: {
            type: Number,
            default: 1
          },
        in_stock: {
            type: Number,
            default: 1
        },
        sold_out: {
          type: Boolean,
          default: false
        }
    });

    ShoeSchema.index({id: 1}, {unique: true});

    const Shoes = mongoose.model('Shoes', ShoeSchema);

    return {
        Shoes
    }
}
