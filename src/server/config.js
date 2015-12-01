var convict = require('convict');

// Define a schema
var conf = convict({
  env: {
    doc: "The applicaton environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },

  server: {
    ip: {
      doc: "The IP address to bind.",
      format: "ipaddress",
      default: "0.0.0.0",
      env: "IP_ADDRESS",
    },
    port: {
      doc: "The port to bind.",
      format: "port",
      default: 0,
      env: "PORT"
    }
  },

  sessionSecret: {
    doc: "The secret session key.",
    default: 'devkey',
    env: 'SESSION_SECRET'
  }
  
});

// Load environment dependent configuration
// var env = conf.get('env');
// conf.loadFile('./config/' + env + '.json');

// Perform validation
conf.validate({strict: true});

module.exports = conf;
