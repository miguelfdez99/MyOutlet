class Accessories{

  constructor(type,price,description){
    this.type = type;
    this.price = price;
    this.description = description;
  }

  getAccessoryType(){
    return this.type;
  }

  getAccessoryPrice(){
    return this.price;
  }

  getAccessoryDescription(){
    return this.description;
  }

  setAccessoryType(nType){
    if(nType == "Sunglasses" || nType == "Jewellery" || nType == "Bags" ||
    nType == "Watches" || nType == "Ties" || nType == "Caps"){
      this.type = nType;
    }else{
      throw new Error("The accesory does not exist");
    }
  }

  setAccessoryPrice(nPrice){
    this.price = nPrice;
  }

  setAccessoryDescription(nDescription){
    this.description = nDescription;
  }
}

module.exports = Accessories
