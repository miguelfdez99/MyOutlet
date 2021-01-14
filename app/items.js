let Item = require('./models/itemSchema')

// Get every single item. HU01
function getItems(req,res){
  let item = Item.find({}).exec(function(err,item){
    if(!err){
      res.status(200).json(item)
    }else{
      res.send(err)
    }
  })
}

//HU07
async function getItemByBrand(req,res){
    let brand = req.params.brand
    try{
      const items = await Item.find({brand: brand})
      res.json(items)
    }catch(err){
      res.status(500).json({message: err.message })
    }
  }

//Delete an item. HU03
function deleteItem(req,res){
  let type = req.params.type;
  let item = Item.deleteOne({'type': type}).exec(function(err,type){
    if(!err){
      res.status(200).json({message: "Removed"})
    }else{
      res.send(err)
    }
  })
}

//Creates a new Item HU02
async function addItem(req,res){
  const item = new Item({
    type: req.body.type,
    size: req.body.size,
    brand: req.body.brand,
    color: req.body.color,
    price: req.body.price,
    season: req.body.season
  })
  try{
    const newItem = await item.save()
    res.status(201).json(newItem)
  }catch(err){
    res.status(400)
  }
}

//HU04
async function updateItem(req,res){
  let type = req.params.type;
  let newSize = req.body.size;
  let newBrand = req.body.brand;
  let newColor = req.body.color;
  let newPrice = req.body.price;
  let newSeason = req.body.season;

  let item = Item.updateOne({type: type}, {$set: {size: newSize, brand: newBrand, color: newColor, price: newPrice, season: newSeason}}).exec(function(err,type){
    if(!err){
      res.status(200).json({message: "Updated!"})
    }else{
      res.send(err)
    }
  })
}



module.exports = {getItems,getItemByBrand,addItem,deleteItem,updateItem}