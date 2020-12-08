const data = require('./data.json');

function gBrand(b){
    item = "";
    for(i = 1; i <= 6; i++){
        if (data['items'][i]["brand"] == b){
          item += "\n Type:" + data['items'][i]["type"][i] +
          "\n Size: " + data['items'][i]["size"] +
          "\n Color: " + data['items'][i]["color"] +
          "\n Price: " + data['items'][i]["price"] +
          "\n Season: " + data['items'][i]["season"] + "";
    }
  }
  return item;
}
module.exports={gBrand}
