const brand = require('./wBrand')

exports.handler = async function(event, context){
  try{
    var body = JSON.parse(event.body);
    var {chat, text} = body.message;
    var item = "";

    if(text){
      switch(text){
        case "/puma":
          item = brand.wBrand("PUMA");
          break;
        case "/adidas":
          item = brand.wBrand("ADIDAS");
          break;
        case "/kappa":
          item = brand.wBrand("KAPPA");
          break;
        case "/nike":
          item = brand.wBrand("NIKE");
          break;
        case "/joma":
          item = brand.wBrand("JOMA");
          break;
        default:
          item = "Para ver los objetos de marca Puma utilice /puma, para Adidas /adidas , para Kappa /kappa. para Nike /nike y para Joma /joma"
        break;
      }
    return {
      statusCode: 200,
      body: JSON.stringify({text:item, method:'sendMessage', chat_id:chat.id}),
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
        }
      };
    }
  }catch(error){
    }
}
