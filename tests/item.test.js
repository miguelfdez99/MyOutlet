const assert = require('chai').assert;
var expect = require('chai').assert;
var Item = require('../src/item.js');

var newItem = new Item("HOODIE", "S", "KAPPA", "WHITE", 30, "FALL_WINTER");
var newItem1 = new Item("HOODIE", "M", "KAPPA", "BLACK", 25, "FALL_WINTER");
var rev = "Pretty comfortable hoodie";

describe("Testing Item:",function(){

  it("should get the right type", function() {
    var t = newItem.getType();
    assert.equal(t, newItem.type);
  });

  it("should get the right size", function() {
    var s = newItem.getSize();
    assert.equal(s, newItem.size);
  });

  it("should get the right brand", function() {
    var b = newItem.getBrand();
    assert.equal(b, newItem.brand);
  });

  it("should get the right color", function() {
    var c = newItem.getColor();
    assert.equal(c, newItem.color);
  });

  it("should get the right price", function() {
    var p = newItem.getPrice();
    assert.equal(p, newItem.price);
  });

  it("should get the right season", function() {
    var se = newItem.getSeason();
    assert.equal(se, newItem.season);
  });

  it("should set a new type", function() {
    const t = "SHOES";
    newItem.setType(t);
    assert.equal(newItem.type, t);
  });

  it("should set a new size", function() {
    const s = "L";
    newItem.setSize(s);
    assert.equal(newItem.size, s);
  });

  it("should set a new brand", function() {
    const b = "ADIDAS";
    newItem.setBrand(b);
    assert.equal(newItem.brand, b);
  });

  it("should set a new color", function() {
    const c = "BLUE";
    newItem.setColor(c);
    assert.equal(newItem.color, c);
  });

  it("should set a new season", function() {
    const se = "SPRING_SUMMER";
    newItem.setSeason(se);
    assert.equal(newItem.season, se);
  });

describe("Testing updateItem", function() {
  it("should update an item", function() {
    newItem.updateItem("M", "BLACK", 25);
    assert.equal(newItem.size, newItem1.size);
    assert.equal(newItem.color, newItem1.color);
    assert.equal(newItem.price, newItem1.price);
  });
});

describe("Testing checkItem", function() {
  it("should give information about an item", function() {
    var des = ("Type: " + "HOODIE"  + ", " +
    "Size: " + "M" + ", " +
    "Brand: " + "KAPPA" + ", " +
    "Color: " + "BLACK" + ", " +
    "Price: " + 25 + ", " +
    "Season: " + "FALL_WINTER" );
    var d = newItem1.checkItem();
    assert.equal(d, des);
  });
});

describe("Test addReview", function() {
  it("should add a new review", function() {
    newItem.addReview(rev);
    assert.equal(newItem.getReview(), rev);
    });
  });
});
