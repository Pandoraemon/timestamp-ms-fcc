var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    res.send('<h1>hello World</h1>');
});

var server = app.listen(app.get('port'), function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log("listen on http://%s:%s", host, port);
});
