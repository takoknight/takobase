process.env.NODE_ENV = 'test';
var app = require('../../src/server');

describe('authentication functionality', function() {
  before(function() {
    this.server = app.listen(0);
    this.serverPort = this.server.address().port;
  });

  after(function(done) {
    this.server.close(done);
  });

  it('should require a username');
  it('should require a password');
  it('should show an error when the login has failed');
  it('should show a spinner while login is pending');
});
