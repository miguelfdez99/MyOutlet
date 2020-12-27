# API

I'm using Express to create the API. The API has te be related with my user stories, so I have created every single one of them.

## ROUTES

### GET
- GET /  -> get a message which indicates that the API is running.
- GET /item -> get information about all the items. Refer to [HU:01](https://github.com/miguelfdez99/MyOutlet/issues/2)
- GET /item/:brand -> all the information about items of certain brand. Refer to [HU:07](https://github.com/miguelfdez99/MyOutlet/issues/43)
- GET /brand -> get every existing brand
- GET /type -> get every existing type
- GET /type/:season -> get every existing type of certain season. Refer to [HU:06](https://github.com/miguelfdez99/MyOutlet/issues/38)
- GET /accessory -> get information about all the accessories. Refer to [HU:05](https://github.com/miguelfdez99/MyOutlet/issues/27)

### POST
- POST /item -> add a new item. Refer to [HU:02](https://github.com/miguelfdez99/MyOutlet/issues/6)
- POST /accessory -> add a new accessory

### PUT
- PUT /item -> modifies an existing item. Refer to [HU:04](https://github.com/miguelfdez99/MyOutlet/issues/10)

### DELETE
- DELETE /item -> deletes an item. Refer to [HU:03](https://github.com/miguelfdez99/MyOutlet/issues/9)

## CODE

In order to set up a port I've used an environment variable.
`const port = process.env.port || 8080`. Then with `app.listen(port)` we can run our application on port 8080.

- HU:01

GET /item

```
app.route('/item')
  .get(function(req,res){
    try{
      res.send({'Items': myoutlet.showItems()});
    }catch(error){
      res.sendStatus(404)
      throw error;
    }
  })

```
I have used app.route() to avoid duplicate route names. We get all the information about every item, if there are no items we get an error.

- HU:02

POST /item

```
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
```
We passes the data as x-www-form-urlencoded so it can be use. It tries to add the item we pass, if it succesful we get an 201 status, if it fails we get an 400 status. It's part of the app.route('/item').

- HU:03

DELETE /item

```
.delete(function(req,res){
  let item = req.body
  try{
    myoutlet.deleteItem(item);
    res.sendStatus(200)
  }catch(error){
    throw error;
  }
});

```
It tries to delete an item, if it deletes the item successfully it gets
an 200 status, otherwise we get an error.

- HU:04

PUT /item

```
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
```
Get the data with req.body, then it tries to modified an existing item.

- HU:05

```
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
```
With GET we can get every accessory but first it has to be added with POST.

- HU:06

GET /type/:season

```
app.get('/type/:season', function(req,res){
  let season = req.params.season;
  try{
    res.status(200).json({'This season types': myoutlet.seasonType(season)})
  }catch(error){
    res.sendStatus(404)
    throw error;
  }
})
```
Get the season with req.params, then response with 200 status and the types of a particular season, if it fails, we send an 404 status.

- HU:07

GET /item/:brand

```
app.get('/item/:brand', function(req,res){
  let brand = req.params.brand;
  try{
    res.status(200).json(myoutlet.brandInfo(brand))
  }catch(error){
    res.sendStatus(400)
    throw error;
  }
})
```

It's like the previous one.

## MIDDLEWARES
- morgan: it is a HTTP request logger. There are many ways to use it. You can either use one of the predefined formats or create yout own. I have used dev.
`app.use(morgan('dev'))`. Gets `:method :url :status :response-time ms - :res[content-length]` when calling the API.

- body-parser:Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
```
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

```
