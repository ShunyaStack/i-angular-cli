var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname, './../dist/i-angular-cli')));

var port = process.env.PORT || 5000;

app.listen(port, function () {
    appInitialized = true;
    console.info('Shunya App started on port ' +  port);
});