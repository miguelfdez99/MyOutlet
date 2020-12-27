const request = require('supertest');
const app = require('../src/app.js')

describe('GET /', () => {
  it('should get OK status', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

//HU:02 ---> Añadir una prenda nueva
describe('POST /item', () => {
  it('should add a new item', (done) => {
    request(app)
      .post('/item')
      .send(item)
      .expect(201,done);
  })
})

//HU:01 ---> Mostrar información de una prenda
describe('GET /item', () => {
  it('should get every item', (done) => {
    request(app)
      .get('/item')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})


//HU:04 ---> Modificar una prenda
describe('PUT /item', () => {
  it('should update an item', (done) => {
    request(app)
      .put('/item')
      .expect('Content-Type', /json/)
      .send(newItem)
      .expect(200, done)
  })
})

//HU:07 ---> Como usuario quiero consultar el tipo de prenda que hay de una determinada marca
describe('GET /item/:brand', () => {
  it('should get every accessory', (done) => {
    request(app)
      .get('/item/NIKE')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

//HU:05 ---> Consultar un accesorio
describe('GET /accessory', () => {
  it('should get every accessory', (done) => {
    request(app)
      .get('/accessory')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

describe('POST /accessory', () => {
  it('should add a new accessory', (done) => {
    request(app)
    .post('/accessory')
    .send(item)
    .expect(201,done);
  })
})

//
describe('GET /type', () => {
  it('should get every existing type', (done) => {
    request(app)
      .get('/type')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

//HU:08 ---> Como usuario quiero consultar el tipo de prenda disponible de una termporada en concreto

describe('GET /type/:season', () => {
  it('should get every existing type of certain season', (done) => {
    request(app)
      .get('/type/FALL_WINTER')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
})


describe('GET /brand', () => {
  it('should get every existing brand', (done) => {
    request(app)
      .get('/brand')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

//HU:03 ---> Eliminar una prenda
describe('DELETE /item', () => {
  it('should delete an item', (done) => {
    request(app)
      .delete('/item')
      .send(item)
      .expect(200,done)
  })
})

let item = {
  "type": "HOODIE",
  "size": "S",
  "brand": "KAPPA",
  "color": "WHITE",
  "price": 22,
  "season": "FALL_WINTER"
}

let newItem = {
  "type": "JEANS",
  "size": "M",
  "brand": "NIKE",
  "color": "RED",
  "price": 25,
  "season": "SPRING_SUMMER"
}
