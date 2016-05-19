/**

* @author: @Sergio_Gordillo
*/

'use strict';

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});


var port = process.env.PORT || 8080;        // set our port

var server = app.listen(port, '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address,
    server.address().port);
  console.log('Press Ctrl+C to quit.');
});
