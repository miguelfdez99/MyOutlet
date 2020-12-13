# Serverless Telegram Bot with Netlify

The goal of this assignment is to deploy a Telegram Bot. How do we achieve that?
It's pretty easy with BotFather, it's as simple as send a /newbot command then you follow the steps and you'll finally get a TOKEN that is going to be use to set the webhook.

### What is a WebHook?
A webhook is a method that every time we send a message, the webhook is going to be called, the webhook is responsible for trigger a function that will process the request and send back a response.

### Why Netlify?

The main reason why I've used Netlify is that it was easier to understand and deploy than others sites like AWS Lambda, I also deployed a bot in AWS Lambda following this [tutorial](https://muhannad0.github.io/post/serverless-telegram-bot-on-aws/) but I didn't really undesrtand how telegraf and serverless were used.I guess it didn't make much sense doing it in AWS so I looked into Netlify documentation and found out that it was way more easy.

### Setting up Netlify
After signing up in Netlify with GitHub we pick a repository to start the deployment we can choose how we want to build it and the publish directory.
To have more advanced settings you can create a netlify.toml file that is going to be far more flexible.
In my netlify.toml file I've indicated that the build is done in my functions folder.

## Code

- getBrand.js: gets the information about an item or items given a brand. This correspond with the HU:1 and HU:7. [HU:1](https://github.com/miguelfdez99/MyOutlet/issues/2) , [HU:7](https://github.com/miguelfdez99/MyOutlet/issues/43)

```
function gBrand(b){
    item = "";
    for(i = 1; i <= 6; i++){
        if (data['items'][i]["brand"] == b){
          item += data['items'][i]["brand"] + ":" +
          "\n Type:" + data['items'][i]["type"] +
          "\n Size: " + data['items'][i]["size"] +
          "\n Color: " + data['items'][i]["color"] +
          "\n Price: " + data['items'][i]["price"] +
          "\n Season: " + data['items'][i]["season"] + "\n";
    }
  }
  return item;
}
```

- brand.js: Handles the bot.
  - /puma: Gets the information about every Puma item
  - /adidas: Gets the information about every Adidas item
  - /kappa: Gets the information about every Kappa item
  - /nike: Gets the information about every Nike item
  - /joma: Gets the information about every Joma item

```
if(text){
  switch(text){
    case "/puma":
      item = brand.gBrand("PUMA");
      break;
    case "/adidas":
      item = brand.gBrand("ADIDAS");
      break;
    case "/kappa":
      item = brand.gBrand("KAPPA");
      break;
    case "/nike":
      item = brand.gBrand("NIKE");
      break;
    case "/joma":
      item = brand.gBrand("JOMA");
      break;
    default:
      item = "Para ver los objetos de marca Puma utilice /puma, para Adidas /adidas , para Kappa /kappa. para Nike /nike y para Joma /joma"
    break;
  }

```

```
exports.handler = async(event,context)

```
It is used to handle the requests, it gets the information about the event and response back with the right action.

```
var body = JSON.parse(event.body);
var {chat, text} = body.message;
var item = "";

```
Text has the request that we send and chat will have the id.

```
statusCode: 200,
body: JSON.stringify({text:item, method:'sendMessage', chat_id:chat.id})

```
We return a status 200 which is the standard response for successful request.
As we can see the method is 'sendMessage' that send us a message back.

## Webhook

We need to set the webhook if we want to get the bot working. We can do this with the next url `https://api.telegram.org/botTOKEN_BOT/setWebHook?url=URL_NETLIFY`

![](img/webhook.png)


## Bot

[Telegram link](https://t.me/ivmyoutlet_bot)

![](img/bot1.png)

![](img/bot2.png)
