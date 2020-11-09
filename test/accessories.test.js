const assert = require('chai').assert;
var expect = require('chai').assert;
var Accessories = require('../src/accessories.js');

var newAccessory = new Accessories("Sunglasses" , 25, "High protection against sunglare. Not for direct observation of the sun");
var newAccessory1 = new Accessories("Watches", 120, "3ATM – water resistant to 30 metres (100 feet).2 years manufacturer warranty ");


describe("Testing Accessories:", function(){
  it("should get the right accessory type", function(){
    var t = newAccessory.getAccessoryType();
    assert.equal(t,newAccessory.type);
  });

  it("should get the right accessory price", function(){
    var p = newAccessory.getAccessoryPrice();
    assert.equal(p,newAccessory.price);
  });

  it("should get the right accessory description", function(){
    var d = newAccessory.getAccessoryDescription();
    assert.equal(d ,newAccessory.description);
  });

  it("should set a new accesory type", function(){
    var t = "Caps";
    newAccessory.setAccessoryType(t);
    assert.equal(newAccessory.type, t);
  })

  it("should set a new accesory price", function(){
    var p = 50;
    newAccessory.setAccessoryPrice(p);
    assert.equal(newAccessory.price, p);
  });

  it("should set a new accesory description", function(){
    var d = "Soft corduroy, made with recycled polyester";
    newAccessory.setAccessoryDescription(d);
    assert.equal(newAccessory.description, d);
  });

});
