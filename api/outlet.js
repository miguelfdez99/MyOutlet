const data = require('./data.js')

async function aBrand(){
  var items = "";
  for(let i in data.data.items){
    if(data.data.items[i].brand == "PUMA"){
      items += data.data.items[i].type + "\n";
      }
    }
    return items;
  }

module.exports = async (req,res) => {
  try {
    status: 200,
    res.send(await aBrand())
  } catch(error){
    status: 500,
    res.send(error)
    }
  }
