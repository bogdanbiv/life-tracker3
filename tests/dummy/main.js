/**
 * Created by bogdanbiv on 8/24/14.
 */
define([
  'intern!object',
  'intern/chai!assert',
  'dojo/request'
], function (registerSuite, assert, request) {
  registerSuite({
    name: 'async demo',

    'async test': function () {
      var dfd = this.async(1000);

      request('http://example.com/test.json').then(dfd.callback(function (data) {
        assert.strictEqual(data.indexOf('You may use this\n    domain in examples') > 0, true);
      }), dfd.reject.bind(dfd));
    }
  });
});
