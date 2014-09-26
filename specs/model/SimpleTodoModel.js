// define([
//     'intern!object',
//     'intern/chai!assert',
//     'app/hello'
// ], function (registerSuite, assert, hello) {
//   registerSuite({
//         name: 'hello',
//
//         greet: function () {
//             assert.strictEqual(hello.greet('Murray'), 'Hello, Murray!', 'hello.greet should return a greeting for the person named in the first argument');
//             assert.strictEqual(hello.greet(), 'Hello, world!', 'hello.greet with no arguments should return a greeting to "world"');
//         }
//     });
// });
define([
  'intern!object',
  'intern/chai!assert',
  "dojo/ready",
  "dojo/_base/lang",
  "dojo/_base/fx",
  "dojo/dom",
  "demos/calendar/utils",
  //"demos/calendar/ExtendedCalendar"
], function(
  registerSuite,
  assert,
  ready,
  lang,
  fx,
  dom,
  utils
) {
    registerSuite({
        name: 'createDefaultStore',

        createDefaultStore: function () {
            calInstance = utils.createDefaultStore({});
        }
    });
});
