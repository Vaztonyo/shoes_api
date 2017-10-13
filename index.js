//Require All The Modules Needed for This Project
const express = require('express');
const exphbs = require('express-handlebars');
const jParser = require('body-parser').json;
const logger = require('morgan');

const Models = require('./models');
const mongoURL = process.env.MONGO_DB_URL || 'mongodb://localhost/shoes-api';
const models = Models(mongoURL);

const ShoeRoutes = require('./shoes');
const shoeRoutes = ShoeRoutes(models);

const app = express();

// app.use(function(req, res, next) {
//         res.header('Access-Control-Allow-Origin', "*");
//         res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//         res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
//         next();
// });

app.engine('handlebars', exphbs({ // set the app engine to handlebars
    defaultLayout: 'main' // set the default layout to main
}));
app.set('view engine', 'handlebars');

app.use(logger("dev"));
app.use(jParser());


app.use(express.static('public')); //use static and set it to public
app.use(express.static('views')); //use static views

var format = require('util').format;

app.get('/', function(req, res){
  res.redirect('/api/shoes');
})

app.get('/api/shoes', shoeRoutes.Shoes);
app.get('/api/shoes/brand/:brand', shoeRoutes.shoeBrand);
app.get('/api/shoes/size/:size', shoeRoutes.shoeSize);
app.get('/api/shoes/color/:color', shoeRoutes.shoeColor);
app.get('/api/shoes/brand/:brand/size/:size', shoeRoutes.shoeBrandAndSize);

app.post('/api/shoes', shoeRoutes.addShoe);
app.post('/api/shoes/sold/:id', shoeRoutes.soldShoe);

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Web app started on the port : ' + port);
});
