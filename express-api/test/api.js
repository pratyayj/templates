var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);
describe('API', () => {
  describe('/GET API response', () => {
    it('it should GET API response', (done) => {
      chai.request(app)
        .get('/api/getResponse')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      }
    );
  });
});