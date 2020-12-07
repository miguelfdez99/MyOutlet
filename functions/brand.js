const brand = require('./wBrand')

exports.handler = async function(event, context){

    var body = JSON.parse(event.body);
    if(body.message != undefined){
    var msg = body.message.text;
    var id_chat = body.message.chat.id;
    var item = "";

    if(msg == "/start"){
      item = "¡Bienvenido, utilice los comando como ayuda!"
    }
    else if(msg == "/puma"){
      item = brand.wBrand("PUMA");
    }else if(msg == "/adidas"){
      item = brand.wBrand("ADIDAS");
    }else if(msg == "/kappa"){
      item = brand.wBrand("KAPPA");
    }else if(msg == "/nike") {
      item = brand.wBrand("NIKE");
    }else if(msg = "/joma"){
      item = brand.wBrand("JOMA")
    }else{
      item = "Para consultar los artículos de cada marca tiene los siguientes comandos: /puma para las prendas de marca Puma, /adidas para las prendas de marca Adidas, /kappa ra las prendas de marca Kappa, /nike para las prendas de marca Nike y /joma para las prendas de marca Joma";
    }
    return {
      statusCode: 200,
      body: JSON.stringify({text:item, method:'sendMessage', chat_id:chat.id}),
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
  }else{
    item = "";
    return{
      statusCode: 200.
      body: item.toString()
    }
  }
}
