// setting up the express server to use localhost
var express = require('express');
var app = express();

app.use(express.static(__dirname + ''));

app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 5000;
// app.listen(port, '192.168.1.57');
app.listen(port);

console.log('server started!!');