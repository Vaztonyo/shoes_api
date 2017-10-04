//Require All The Needed Modules
const express = require('express');


var app = express();


app.get();

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Web app started on port : ' + port);
});
