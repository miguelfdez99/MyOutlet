# INTEGRATION TESTS

To do the integretion test I've used supertest. We have to make sure that our application gets the right response when we use GET,POST,PUT or DELETE, that's why we need integration tests.

### HU01: mostrar información de una prenda
```
describe('GET /item', () => {
  it('should get every item', (done) => {
    request(app)
      .get('/item')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
```
### HU02: Añadir una prenda nueva

We make sure that we get an 201 status.
```
describe('POST /item', () => {
  it('should add a new item', (done) => {
    request(app)
      .post('/item')
      .send(item)
      .expect(201,done);
  })
})
```

### HU03: Eliminar una prenda

We see if we get a 200 status after the item is deleted.

```
describe('DELETE /item', () => {
  it('should delete an item', (done) => {
    request(app)
      .delete('/item')
      .send(item)
      .expect(200,done)
  })
})
```
### HU04: Modificar una prenda

We check that it has been successfully modified.

```
describe('PUT /item', () => {
  it('should update an item', (done) => {
    request(app)
      .put('/item')
      .expect('Content-Type', /json/)
      .send(newItem)
      .expect(200, done)
  })
})
```

### HU05: Consultar un accesorio
```
describe('GET /accessory', () => {
  it('should get every accessory', (done) => {
    request(app)
      .get('/accessory')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
```

### HU06: Como usuario quiero consultar el tipo de prenda disponible de una termporada en concreto

```
describe('GET /type/:season', () => {
  it('should get every existing type of certain season', (done) => {
    request(app)
      .get('/type/FALL_WINTER')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
})
```
### HU07:  Como usuario quiero consultar el tipo de prenda que hay de una determinada marca
```
describe('GET /item/:brand', () => {
  it('should get all the information about items of certain brand', (done) => {
    request(app)
      .get('/item/NIKE')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
```
### Others routes tested

```
describe('GET /', () => {
  it('should get OK status', (done) => {
    request(app)
      .get('/')
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

describe('GET /brand', () => {
  it('should get every existing brand', (done) => {
    request(app)
      .get('/brand')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
```
