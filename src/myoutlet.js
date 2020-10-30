var Item = require("./item.js");


class MyOutlet{
  constructor() {
    this.items = new Array();
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


}

module.exports = MyOutlet;
