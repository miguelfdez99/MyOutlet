class Item{
  constructor(name,type,size,brand,color,price,discount,season){
      this.name = name;
      this.type = type;
      this.size = size;
      this.brand = brand;
      this.color = color;
      this.price = price;
      this.discount = discount;
      this.season = season;
  }
}
module.exports = Item;

export const type{
  HOODIES = "hoodies",
  JACKET = "jacket",
  JOGGERS = "joggers",
  SHIRTS = "shirts",
  SHORTS = "shorts",
  SHOES = "shoes",
  TROUSERS = "trousers",
  T_SHIRTS = "t_shirts",
  UNDERWEAR = "underwear"
}

export const size{
  XS = "xs",
  SMALL = "s",
  MEDIUM = "m",
  LARGE = "l",
  XL = "xl",
  XXL = "xxl",
  3XL = "3xl"

}

export const brand{
  ADIDAS = "adidas",
  ASICS = "asics",
  FILA = "fila",
  JOMA = "joma",
  KAPPA = "kappa",
  NIKE = "nike",
  PUMA = "puma",
  NEW_BALANCE = "new_balance"
}

export const season{
  SPRING_SUMMER = "spring_winter",
  FALL_WINTER = "fall_winter"
}
