const assert = require('chai').assert;
var expect = require('chai').assert;
const Item = require('../src/item.js');
const MyOutlet = require('../src/myoutlet.js');

var store = new MyOutlet();
var nItem = new Item("HOODIE", "S", "KAPPA", "WHITE", 30, "FALL_WINTER");
var nItem1 = new Item("T-SHIRT", "M", "ADIDAS", "BLACK", 25, "SPRING_SUMMER");
var nItem2 = new Item("JEANS", "XL", "FILA", "BLUE", 50, "FALL_WINTER");
store.addItem(nItem1);
store.addItem(nItem2);

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

describe("Testing getItem" , function() {
  it("should get an item", function(){
    let i = store.getItem();
    assert.equal(i[0],nItem1)
  })
});
