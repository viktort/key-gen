var vows = require('vows');
var generator = require('..');
var assert = require('assert');
var config = require('../config');

vows.describe('Testing generator').addBatch({
  'test the key generation': {
    topic: function() {
      var options = {
        prefix: ['service1','identifier1'],
        data: {
          data1: 'data1',
          data2: 'data2',
          data3: 'data3'
        }
      }
      return generator.generate(options);
    },
    'validate the generated key': function(err, response) {
      if(err) {
        throw new Error(err);
      }
      console.log('Generated key =', response);

      assert.ok(/service1:identifier1:/.test(response));
      if(config.salt == 'HFGKLDSDHKT0123DS534GDW1120SD823' && config.encryption == 'sha512' && config.encoding == 'hex') {
        var expected = 'service1:identifier1:4c0398bf4e511bef5355c32fd71bc9f1ffcde3b144cf3725dae9062cfaa1ab118d4c984855d38dea8efa00422de45e511c3da710541c7c578ee26037ff1d9a4a';
        assert.equal(expected, response);
      }
    }
  }
}).export(module);