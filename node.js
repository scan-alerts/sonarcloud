// Importing chai for assertion
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// Below are the test cases for each endpoint

describe('Test login endpoint', function() {
  it('should login successful', function(done) {
    chai.request(app)
      .get('/login')
      .query({username: "admin", password: "password123"})
      .end((err, res) => {
        chai.expect(res.text).to.equal('Login successful!');
        done();
      });
  }); 

  it('should return Invalid credentials', function(done) {
    chai.request(app)
      .get('/login')
      .query({username: "not_admin", password: "not_password"})
      .end((err, res) => {
        chai.expect(res.text).to.equal('Invalid credentials!');
        done();
      });
  });

});

describe('Test greet endpoint', function() {
  it('should greet the person', function(done) {
    chai.request(app)
      .get('/greet')
      .query({name: "John"})
      .end((err, res) => {
        chai.expect(res.text).to.equal('<h1>Welcome, John!</h1>');
        done();
      });
  });

});

describe('Test deserialize endpoint', function() {
  it('should return Deserialized data', function(done) {
    chai.request(app)
      .post('/deserialize')
      .send({data: JSON.stringify({foo: "bar"})})
      .end((err, res) => {
        chai.expect(res.text).to.equal('Deserialized data: {"foo":"bar"}');
        done();
      });
  });
});

describe('Test error endpoint', function() {
  it('should return error stack', function(done) {
    chai.request(app)
      .get('/error')
      .end((err, res) => {
        chai.expect(res.status).to.equal(500);
        done();
      });
  });
});