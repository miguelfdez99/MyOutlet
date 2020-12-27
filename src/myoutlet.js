var Item = require("./item.js");
var Accessory = require("./accessories.js");

class MyOutlet {
  constructor() {
    this.items = new Array();
    this.accessories = new Array();
  }

  //Method to add a new item to the store
  addItem(item) {
    var exists = false;
    this.items.forEach(element => {
      if (item.type == element.type && item.size == element.size && item.brand == element.brand &&
        item.color == element.color && item.price == element.price && item.season == element.season) {
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
    if (this.items.length > 0) {
      this.items.pop(item);
    } else {
      throw new Error("There is not items in the store");
    }
  }

  //Method to update one item of the store
  updatedItem(type, size, brand, color, price, season) {
    var exists = false;
    for (var i in this.items) {
      if (this.items[i].getType()) {
        exists = true;
      }
    }
    if (exists == true) {
      this.items[i].type = type;
      this.items[i].size = size;
      this.items[i].brand = brand;
      this.items[i].color = color;
      this.items[i].price = price;
      this.items[i].season = season;
      return this.items[i];
    } else {
      throw new Error("Error updating the item");
    }
  }

  //Method to show every item
  showItems() {
    if (this.items.length > 0) {
      var _items = new Array();
      for (var i in this.items) {
        _items.push(this.items[i].checkItem());
      }
      return _items;
    } else {
      throw new Error("There are no items")
    }

  }

  //Method to show every type existing in the store
  showType() {
    var _type = new Array();
    for (var i in this.items) {
      _type.push(this.items[i].getType());
    }
    return _type;
  }

  //Method to show every size existing in the store
  showBrand() {
    var _brand = new Array();
    for (var i in this.items) {
      _brand.push(this.items[i].getBrand());
    }
    return _brand;
  }

  //Method to add a new accessory
  addAccessory(accessory) {
    var exists = false;
    this.accessories.forEach(element => {
      if (accessory.type == element.type && accessory.description == element.description) {
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
    if (this.accessories.length > 0) {
      this.accessories.pop(accesory);
    } else {
      throw new Error("There are no items in the store");
    }
  }


  //Method to show information about certain brand
  brandInfo(b) {
    let brand = ""
    for (var i in this.items) {
      if (this.items[i].getBrand() == b) {
        brand += "Type:" + this.items[i].getType() + ", " +
          "Size: " + this.items[i].getSize() + ", " +
          "Color: " + this.items[i].getColor() + ", " +
          "Price: " + this.items[i].getPrice() + ", " +
          "Season: " + this.items[i].getSeason() + " ";
      }
    }
    return brand;
  }


  //
  seasonType(s) {
    if (s == "FALL_WINTER" || s == "SPRING_SUMMER") {
      let season = new Array();
      for (var i in this.items) {
        if (this.items[i].getSeason() == s) {
          season.push(this.items[i].getType());
        }
      }
      return season;
    } else {
      throw new Error("Season name it's not right")
    }
  }

  //
  showAccessories() {
    var _accessories = new Array();
    for (var i in this.accessories) {
      _accessories.push(this.accessories[i].checkAccessories());
    }
    return _accessories;
  }

}

module.exports = MyOutlet;
