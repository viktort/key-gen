var config = require('./config');
var crypto = require('crypto');

module.exports = {
  generate : function(options) {
    var prefix = '';
    if(Array.isArray(options.prefix)) {
      prefix += options.prefix.join(':') + ':';
    }
    var hmac = crypto.createHmac(config.encryption, config.salt);
    hmac.update(JSON.stringify(options.data));
    return prefix + hmac.digest(config.encoding);
  }
}