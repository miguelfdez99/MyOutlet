const request = require('supertest');
const app = require('../app/index.js')

describe('GET /status', () => {
  it('should get OK status', (done) => {
    request(app)
      .get('/status')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

//HU:01 ---> Mostrar información de una prenda
describe('GET /item', () => {
  it('should get every item', (done) => {
    request(app)
      .get('/item')
      .expect('Content-Type', /json/)
      .expect(200, done());
  })
})


//HU:02 ---> Añadir una prenda nueva
describe('PUT /item', () => {
  it('should add a new item', (done) => {
    request(app)
      .put('/item')
      .send(item)
      .expect(201,done());
  })
})


//HU:04 ---> Modificar una prenda
describe('PUT /item/:type', () => {
  it('should update an item', (done) => {
    request(app)
      .put('/item/JACKET')
      .expect('Content-Type', /json/)
      .send(newItem)
      .expect(200, done())
  })
})

//HU:07 ---> Como usuario quiero consultar el tipo de prenda que hay de una determinada marca
describe('GET /item/:brand', () => {
  it('should get all the information about items of certain brand', (done) => {
    request(app)
      .get('/item/NIKE')
      .expect('Content-Type', /json/)
      .expect(200, done());
  })
})

//HU:03 ---> Eliminar una prenda
describe('DELETE /item/:type', () => {
  it('should delete an item', (done) => {
    request(app)
      .delete('/item/JACKET')
      .send(item)
      .expect(200,done())
  })
})

let item = {
  "type": "JACKET",
  "size": "S",
  "brand": "FILA",
  "color": "WHITE",
  "price": 43,
  "season": "FALL_WINTER"
}

let newItem = {
  "type": "JACKET",
  "size": "M",
  "brand": "NIKE",
  "color": "RED",
  "price": 25,
  "season": "SPRING_SUMMER"
}
