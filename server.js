var express = require('express')
var app = express()

const hostname = '127.0.0.1';
const port = 3000;  

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});