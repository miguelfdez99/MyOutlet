const brand = require('./wBrand')

exports.handler = async function(event, context){

  try{
    var body = JSON.parse(event.body);
    var {chat, text} = body.message;
    var item = "";
    if(text == "/PUMA"){
      item = brand.wBrand("PUMA");
    }else if(text == "/ADIDAS"){
      item = brand.wBrand("ADIDAS");
    }else if(text == "/KAPPA"){
      item = brand.wBrand("KAPPA");
    }else if(text == "/NIKE") {
      item = brand.wBrand("NIKE");
    }else if(text = "/JOMA"){
      item = brand.wBrand("JOMA")
    }else{
      item = "Para consultar los artículos de cada marca tiene los siguientes comandos: /PUMA para las prendas de marca Puma, /ADIDAS para las prendas de marca Adidas, /KAPPA para las prendas de marca Kappa, /NIKE para las prendas de marca Nike y /JOMA para las prendas de marca Joma";
    }
    return {
      statusCode: 200,
      body: JSON.stringify({text:item, method:'sendMessage', chat_id:chat.id}),
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
  }catch(error){}
}
