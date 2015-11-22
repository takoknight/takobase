process.env.NODE_ENV = 'test';
var app = require('../../src/server'),
  assert = require('assert'),
  fetch = require('isomorphic-fetch');

describe('basic server functionality', function() {

  before(function() {
    this.server = app.listen(0);
    this.serverPort = this.server.address().port;
    this.baseUrl = 'http://localhost:' + this.serverPort.toString(10);
  });

  after(function(done) {
    this.server.close(done);
  });

  it('should respond to a request for the homepage', function() {
    return fetch(this.baseUrl + '/')
      .then(function(resp) {
        assert.equal(resp.status, 200);
      });
  });

});
