define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require) {
  registerSuite({
    name: 'async demo',

    'async test': function () {

      return this.remote
        .get(require.toUrl('public/demos/calendar/index.html'))
        .setFindTimeout(10000)
        .findById('result')
        .text()
        .then(function (resultText) {
          assert.equal(resultText, 'hello world',
            'When form is submitted, operation should complete successfully');
        });
    }
  });
});








