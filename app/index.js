const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require ('dotenv').config();
const item = require("./items.js");
const accessory = require("./accessory.js")
const host = '0.0.0.0';
const port = process.env.PORT;

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

mongoose.connect('mongodb+srv://admin:admin@cluster0.ifsp5.mongodb.net/myoutlet?retryWrites=true&w=majority', {useNewUrlParser: true}, { useUnifiedTopology: true });

app.get('/', function(req,res){
  res.send("Running!!")
});

app.get('/status', function(req,res){
  res.sendStatus(200);
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

//Accessories

app.route('/accessory')
  .get(accessory.getAccessories)


module.exports = app;
