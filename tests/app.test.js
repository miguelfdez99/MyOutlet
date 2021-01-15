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

//HU01 ---> Mostrar información de una prenda
describe('GET /item', () => {
  it('should get every item', (done) => {
    request(app)
      .get('/item')
      .expect('Content-Type', /json/)
      .expect(200, done());
  })
})


//HU02 ---> Añadir una prenda nueva
describe('PUT /item', () => {
  it('should add a new item', (done) => {
    request(app)
      .put('/item')
      .send(item)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201,done());
  })
})


//HU04 ---> Modificar una prenda
describe('PUT /item/:type', () => {
  it('should update an item', (done) => {
    request(app)
      .put('/item/JACKET')
      .expect('Content-Type', /json/)
      .send(newItem)
      .expect(200, done())
  })
})

//HU07 ---> Como usuario quiero consultar el tipo de prenda que hay de una determinada marca
describe('GET /item/:brand', () => {
  it('should get all the information about certain brand', (done) => {
    request(app)
      .get('/item/NIKE')
      .expect('Content-Type', 'application/json')
      .expect(200, done());
  })
})

//HU06 --> Como usuario quiero consultar el tipo de prenda disponible de una temporada en concreto
describe('GET /item/season/:season', () => {
  it('should get all the information about certain season', (done) => {
    request(app)
      .get('/item/season/SPRING_SUMMER')
      .expect('Content-Type', 'application/json')
      .expect(200, done());
  })
})

describe('GET /item/color/:color', () => {
  it('should get all the information about certain color', (done) => {
    request(app)
      .get('/item/color/RED')
      .expect('Content-Type', 'application/json')
      .expect(200, done());
  })
})

//HU03 ---> Eliminar una prenda
describe('DELETE /item/:type', () => {
  it('should delete an item', (done) => {
    request(app)
      .delete('/item/JACKET')
      .send(item)
      .expect(200,done())
  })
})


//HU05 ---> Consultar un accesorio
describe('GET /accessory', () => {
  it('should get all the accessories', (done) => {
    request(app)
    .get('/accessory')
    .expect('Content-Type', /json/)
    .expect(200, done());
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
