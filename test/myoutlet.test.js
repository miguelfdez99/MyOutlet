const assert = require('chai').assert;
var expect = require('chai').assert;
const Item = require('../src/item.js');
const Accessory = require('../src/accessories.js');
const MyOutlet = require('../src/myoutlet.js');

var store = new MyOutlet();
var nItem = new Item("HOODIE", "S", "KAPPA", "WHITE", 30, "FALL_WINTER");
var nItem1 = new Item("T-SHIRT", "M", "ADIDAS", "BLACK", 25, "SPRING_SUMMER");
var nItem2 = new Item("JEANS", "XL", "FILA", "BLUE", 50, "FALL_WINTER");
var nAccessory = new Accessory("Sunglasses" , 25, "High protection against sunglare. Not for direct observation of the sun");
var nAccessory1 = new Accessory("Watches", 120, "3ATM – water resistant to 30 metres (100 feet).2 years manufacturer warranty ");
var nAccessory2 = new Accessory("Caps" , 17, "Ribbed knit ,soft and warm");
const types = ["HOODIE", "T-SHIRT", "JEANS", "JOGGERS", "JACKET", "SHOES", "TROUSERS", "SHIRTS"];
store.addItem(nItem1);
store.addItem(nItem2);
store.addAccessory(nAccessory);
store.addAccessory(nAccessory1);
const brand = "";

describe("Testing MyOutlet:", function(){

describe("Testing addItem", function() {
  it("should add a new item", function() {
    store.addItem(nItem);
    assert.equal(store.items[2], nItem);
  });
});

describe("Testing deleteItem", function() {
  it("should delete an item if it exists", function() {
    store.deleteItem(nItem2);
    assert.equal(store.items[0], nItem1);
  });
});

describe("Testing updateItem", function() {
  it("should update an item", function() {
    type = "T-SHIRT"
    let newItem = new Item(type, "L", "JOMA", "GREEN", 25, "SPRING_SUMMER");
    store.addItem(newItem);
    let i = store.updatedItem(type, "S", "KAPPA", "WHITE", 30, "FALL_WINTER");
    assert.equal(newItem.getBrand(), "KAPPA");
    assert.equal(newItem.getSize(), "S");
    assert.equal(newItem.getPrice(), 30);
  });
});



describe("Testing getItem" , function() {
  it("should get an item", function(){
    let i = store.getItem();
    assert.equal(i[0],nItem1);
  })
});

describe("Testing showItems", function(){
  it("should return info about every item" , function(){
    var i = store.showItems().length;
    var j = store.items.length;
    assert.equal(i,j);
  })
});

describe("Testing showType", function(){
  it("should return every item's type existing in the store" , function(){
    var i = store.showType().length;
    var j = store.items.length;
    assert.equal(i,j);
  })
});

describe("Testing showBrand", function(){
  it("should return every item's brand existing in the store" , function(){
    var i = store.showBrand().length;
    var j = store.items.length;
    assert.equal(i,j);
  });
});

describe("Testing addAccessory", function() {
  it("should add a new accessory", function() {
    store.addAccessory(nAccessory2);
    assert.equal(store.accessories[2], nAccessory2);
  });
});

describe("Testing deleteItem", function() {
  it("should delete an item if it exists", function() {
    store.deleteAccesory(nAccessory1);
    assert.equal(store.accessories[0], nAccessory);
  });
});

describe("Testing brandInfo", function() {
  it("should return information of certain brand", function() {
    var i = store.brandInfo("FILA");
    var j =
    "Type:" + "JEANS" + ", " +
    "Size: " + "XL" + ", " +
    "Color: " + "BLUE" + ", " +
    "Price: " + "50" + ", " +
    "Season: " + "FALL_WINTER" + " ";
    assert.equal(i,j)
    })
  })

describe("Testing seasonType", function() {
  it("should return the types existing in a season", function() {
    var i = store.seasonType("SPRING_SUMMER")
    assert.equal(i,"T-SHIRT");
    })
  })

  describe("Testing showAccessories", function(){
    it("should return info about every accessory" , function(){
      var i = store.showAccessories().length;
      var j = store.accessories.length;
      assert.equal(i,j);
    })
  });



});
