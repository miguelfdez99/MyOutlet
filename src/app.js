const express = require('express');
const app = express();
const morgan = require('morgan');

//const port = process.env.port || 8080

const MyOutlet = require('./myoutlet.js');
const Item = require('./item.js');
const Accessory = require('./accessories.js')
let myoutlet = new MyOutlet();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
    res.status(200).json('API is running');
});

app.get('/type', function(req,res){
  res.status(200).json({'Types': myoutlet.showType()});
});

app.get('/brand', function(req,res){
  res.status(200).json({'Brands': myoutlet.showBrand()});
});

app.get('/item/:brand', function(req,res){
  let brand = req.params.brand;
  try{
    res.status(200).json(myoutlet.brandInfo(brand))
  }catch(error){
    res.sendStatus(400)
    throw error;
  }
})

app.get('/type/:season', function(req,res){
  let season = req.params.season;
  try{
    res.status(200).json({'This season types': myoutlet.seasonType(season)})
  }catch(error){
    res.sendStatus(404)
    throw error;
  }
})


app.route('/item')
  .get(function(req,res){
    try{
      res.send({'Items': myoutlet.showItems()});
    }catch(error){
      res.sendStatus(404)
      throw error;
    }
  })

  .post(function(req,res){
    let type = req.body.type;
    let size = req.body.size;
    let brand = req.body.brand;
    let color = req.body.color;
    let price = req.body.price;
    let season = req.body.season;
    try{
      let item = new Item(type,size,brand,color,price,season)
      myoutlet.addItem(item);
      res.sendStatus(201)
    }catch(error){
      res.sendStatus(400)
      throw error;
    }
  })

  .put(function(req,res){
    let type = req.body.type;
    let size = req.body.size;
    let brand = req.body.brand;
    let color = req.body.color;
    let price = req.body.price;
    let season = req.body.season;
    try{
      let item = myoutlet.updatedItem(type,size,brand,color,price,season)
      res.status(200).json(item)
    }catch(error){
      res.sendStatus(400)
      throw error;
    }
  })

  .delete(function(req,res){
    let item = req.body
    try{
      myoutlet.deleteItem(item);
      res.sendStatus(200)
    }catch(error){
      throw error;
    }
  });

app.route('/accessory')
  .get(function(req,res){
  res.send({'Accesories': myoutlet.showAccessories()});
  })

  .post(function(req,res){
    let type = req.body.type;
    let price = req.body.price;
    let description = req.body.description;
    try{
      let accessory = new Accessory(type,price,description)
      myoutlet.addAccessory(accessory);
      res.sendStatus(201)
    }catch(error){
      res.sendStatus(400)
      throw error;
    }
  })


//app.listen(port);
//console.log('Server running at localhost:'+port+'/');

module.exports = app
