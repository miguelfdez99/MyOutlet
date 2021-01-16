# Deployment working and API design.

This is the Heroku application: [https://myoutlet.herokuapp.com/](https://myoutlet.herokuapp.com/).

API Routes:

- HU01: show information about items
```
app.route('/item')
  .get(item.getItems)
```
- HU02: add a new item
- HU03: delete an item
```
app.route('/item/:type')
  .get(item.getItemByType)
  .put(item.addItem)
  .delete(item.deleteItem)
```
- HU04: modify an item
```
app.route('/item/type/:type')
  .put(item.updateItem)
```

- HU05: show information about accessories.
```
app.route('/accessory')
  .get(item.getAccessories)
```
- HU06: as a user I want to be able to see which items exists from a particular season
```
app.route('/item/season/:season')
  .get(item.getItemBySeason)
```
- HU07: as a user I want to be able to see the items available of a brand.
```
app.route('/item/:brand')
  .get(item.getItemByBrand)

```
- To see items of a particular color
```
app.route('/item/color/:color')
  .get(item.getItemByColor)

```

You can see the functions I've used [here](https://github.com/miguelfdez99/MyOutlet/blob/master/app/items.js)

Every endpoint gets an status 200 which means it is working right.

![](./img/logs.png)
