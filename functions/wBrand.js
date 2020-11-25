const data = require('./data.json');

function wBrand(b){
    item = "";
    for(i = 1; i <= 6; i++){
      type = "";
      size = ""
        if (data['items'][i]["brand"] == b){
          if (data['items'][i]["type"].length > 0){
            for( j = 0; j < data['items'][i]["type"].length; j++){
              type += "\n  Tarea: " +  data['items'][i]["type"][j] +
              "\n Size: " + data['items'][i]["size"][j];
            }
          }
          else{
            type += "\n  Type: " + data['items'][i]["type"] +
             "\n Size: " + data['items'][i]["size"];
          }
          item += data['items'][i]["brand"] + ":" + type + "\n";
        }
    }
    return item;
  }

  module.exports={wBrand}
