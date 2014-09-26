/**
 * Created by bogdanbiv on 8/24/14.
 */

define([
  'dojo/request',
  'dojox/calendar/Calendar',
  'demos/calendar/utils'
], function (request, Calendar, utils) {
  alert(JSON.stringify(arguments));
  debugger;
  var calendar = new Calendar();
  describe('async demo', function() {

    it('async test', function(done) {
      /*var dfd = this.async(1000);*/
      assert.strictEqual("", "", "strings are strictly equal");
      calendar.set("store", utils.createDefaultStore(calendar));
      done();
    });
  });
});
