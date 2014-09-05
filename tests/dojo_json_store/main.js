/**
 * Created by bogdanbiv on 8/24/14.
 */
define([
  'intern!object',
  'intern/chai!assert',
  'dojo/request',
  'public/components/dojox/calendar/Calendar',
  'public/demos/calendar/utils'
], function (registerSuite, assert, request, calendar, utils) {
  alert(JSON.stringify(calendar));

  registerSuite({
    name: 'async demo',

    'async test': function () {
      /*var dfd = this.async(1000);*/
      assert.strictEqual(JSON.stringify(calendar), "", "strings are strictly equal");
      /* calendar.set("store", utils.createDefaultStore(calendar));*/

    }
  });
});
