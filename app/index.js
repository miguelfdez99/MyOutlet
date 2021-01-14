const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const item = require("./items.js");
const accessory = require("./accessory.js")
require('dotenv').config({ path: '../.env' })

const host = '0.0.0.0';
const port = process.env.PORT || 5000;
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', function(req,res){
  res.send("Running!!")
});

app.get('/status', function(req,res){
  res.status(200).json({status:"OK"});
})
//Items

app.route('/item')
  .get(item.getItems)
  .put(item.addItem)

app.route('/item/:brand')
  .get(item.getItemByBrand);

app.route('/item/:type')
  .delete(item.deleteItem)
  .put(item.updateItem)

module.exports = app;
