// server.test.js

const request = require('supertest');
const server = require('./solution');

describe('Server', () => {

  afterAll(() => {
    server.close();
  });

  it('responds with Hello, World! on /', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello, World!\n', done);
  });
});
