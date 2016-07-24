var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.send("<h2>Example usage:</h2><p>https://timestamp-ms.herokuapp.com/December%2015,%202015</p><p>https://timestamp-ms.herokuapp.com/1450137600</p><h2>Example output:</h2><p>{ 'unix': 1450137600, 'natural': 'December 15, 2015' }</p>");

});
app.get('/:time', function(req, res){
  var date = req.params.time;
  if (/^[0-9]*$/.test(date))
  {
    date = parseInt(date);
  }
  date = new Date(date);
  var result = {};
  if (date == "Invalid Date")
    {
      result = {"unix" : null, "date": null};
    }
  else
    {
      result = {"unix" : date.valueOf(), "date": date.toDateString()};
    }
  res.send(JSON.stringify(result));
});

var server = app.listen(app.get('port'), function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log("listen on http://%s:%s", host, port);
});
