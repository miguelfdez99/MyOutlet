class Item {

  /**
   * Constructor
   * @param {String} type - Type of the item
   * @param {String} size - Size of the item
   * @param {String} brand - Brand of the item
   * @param {String} color - Color of the item
   * @param {Number} price - Price of the item
   * @param {String} season - Season of the item
   */

  constructor(nType, nSize, nBrand, nColor, nPrice, nSeason) {
    this.type = nType;
    this.size = nSize;
    this.brand = nBrand;
    this.color = nColor;
    this.price = nPrice;
    this.season = nSeason;
    this.review = new Array();
  }

  //Get

  getType() {
    return this.type;
  }

  getSize() {
    return this.size;
  }

  getBrand() {
    return this.brand;
  }

  getColor() {
    return this.color;
  }

  getPrice() {
    return this.price;
  }

  getSeason() {
    return this.season;
  }

  getReview(){
    return this.review;
  }

  //Set

  setType(t) {
    if (t=="HOODIE" || t=="T-SHIRT" || t=="JEANS" || t=="JOGGERS" || t=="JACKET" ||
      t=="SHOES" || t=="TROUSERS" || t=="SHIRTS"){
        this.type = t;
    }else{
      throw new Error("Type name not valid");
    }
  }

  setSize(s) {
    if (s == "XS" || s == "S" || s == "M" ||
      s == "L" || s == "XL" || s == "XXL" || s == "XXXL") {
      this.size = s;
    } else {
      throw new Error("Size format not valid");
    }
  }

  setBrand(b) {
    if (b == "ADIDAS" || b == "ASICS" || b == "FILA" || b == "JOMA" || b == "KAPPA" || b == "NIKE" ||
      b == "PUMA" || b == "NEW_BALANCE") {
      this.brand = b;
    } else {
      throw new Error("Brand name not valid");
    }
  }

  setColor(c) {
    if (c == "WHITE" || c == "BLACK" || c == "BLUE" || c == "RED" || c == "GREEN" ||
      c == "YELLOW" || c == "PURPLE" || c == "BROWN" || c == "MULTICOLOR") {
      this.color = c;
    } else {
      throw new Error("Color not valid");
    }
  }

  setSeason(se) {
    if (se == "FALL_WINTER" || se == "SPRING_SUMMER") {
      this.season = se;
    } else {
      throw new Error("Season name not valid");
    }
  }

  //Method to add a new review

  addReview(re) {
    var exists = false;
    this.review.forEach(element => {
      if (element == re) {
        exists = true;
      }
    });
    if (exists == true) {
      throw new Error("This review already exists")
    } else {
      this.review.push(re);
    }
  }

  //Method to update some fields of the item

  updateItem(nSize, nColor, nPrice) {
      this.size = nSize;
      this.color = nColor;
      this.price = nPrice;
}

  //Method to check the information about an item

  checkItem() {
    var description = ("Information about the item" +
      "\n Type: " + this.type +
      "\n Size: " + this.size +
      "\n Brand: " + this.brand +
      "\n Color: " + this.color +
      "\n Price: " + this.price +
      "\n Season: " + this.season);

      return description;
    }

}


module.exports = Item;
