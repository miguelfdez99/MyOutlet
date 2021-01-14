let Accessory = require('./models/accessorySchema')

function getAccessories(req,res){
  let accessory = Accessory.find({}).exec(function(err,item){
    if(!err){
      res.status(200).json(accessory)
    }else{
      res.send(err)
    }
  })
}


module.exports = {getAccessories}
