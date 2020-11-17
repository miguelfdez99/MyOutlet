var Item = require("./item.js");
var Accessory = require("./accessories.js");

class MyOutlet{
  constructor() {
    this.items = new Array();
    this.accessories = new Array();
  }

  //Method to add a new item to the store
  addItem(item) {
    var exists = false;
    this.items.forEach(element => {
      if (item.type == element.type && item.size == element.size && item.brand == element.brand &&
      item.color == element.color && item.price == element.price && item.season == element.season){
        exists = true;
        throw new Error("This item already exists");
      }
    });
    if (exists == false) {
      this.items.push(item);
    }
  }

  getItem() {
    return this.items;
  }


  //Method to delate an item of the store
  deleteItem(item) {
    if(this.items.length > 0){
      this.items.pop(item);
    }else{
      throw new Error("There is not items in the store");
    }
  }

//Method to show every item
showItems(){
    var _items = new Array();
    for(var i in this.items){
      _items.push(this.items[i].checkItem() + "\n");
    }
    return _items;
  }

  //Method to show every type existing in the store
  showType(){
    var _type = new Array();
    for(var i in this.items){
      _type.push(this.items[i].getType() + "\n");
    }
    return _type;
  }

  //Method to show every size existing in the store
  showBrand(){
    var _brand = new Array();
    for(var i in this.items){
      _brand.push(this.items[i].getBrand() + "\n");
    }
    return _brand;
    }

  //Method to add a new accessory
  addAccessory(accessory){
    var exists = false;
    this.accessories.forEach(element => {
      if (accessory.type == element.type && accessory.description == element.description){
        exists = true;
        throw new Error("This accessory already exists");
      }
    });
    if (exists == false) {
      this.accessories.push(accessory);
    }
  }

  //Method to delate an item of the store
  deleteAccesory(accesory) {
    if(this.accessories.length > 0){
      this.accessories.pop(accesory);
    }else{
      throw new Error("There is not items in the store");
     }
  }
}

module.exports = MyOutlet;
