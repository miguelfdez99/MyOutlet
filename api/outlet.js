const data = require('./data.js')

async function Season(){
  var item = "";
  for(let i in data.data.items){
    if(data.data.items[i].season == "SPRING_SUMMER"){
      item += data.data.items[i];
      }
    }
    return item;
  }

module.exports = async (req,res) => {
  try{
    status:200,
    res.send(await Season())
  }catch(error){
    status:400,
    res.send("Error")
  }
}
