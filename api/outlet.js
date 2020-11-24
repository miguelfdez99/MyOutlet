const data = require('./data.js')

async function aSeason(){
  var item = "";
  for(let i in data.data.items){
    if(data.data.items[i].season == "SPRING_SUMMER"){
      item = data.data.items[i];
      }
    }
    return item;
  }

module.exports = async (req,res) => {
  try {
    status: 200,
    res.send(await aSeason())
  } catch(error){
    status: 500,
    res.send(error)
    }
  }
