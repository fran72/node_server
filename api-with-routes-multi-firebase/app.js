var express = require('express');
var request = require('request');
const cuadrosRoutes = require('./cuadros');
const surfRoutes = require('./surf');

var app = express();
const port = 3002;

app.use('/private/surf', surfRoutes);
app.use('/private/cuadros', cuadrosRoutes);

app.get('/private', (req, res) => {
  res.send('Hello World!')
});

//params
app.get('/private/pois', (req, res) => {
    res.redirect('breikobreiko://breikobreiko.com/pois?id='+req.query.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
