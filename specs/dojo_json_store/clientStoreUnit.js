/**
 * Created by bogdanbiv on 8/24/14.
 */

define([
  'dojo/request',
  'dojox/calendar/Calendar',
  'demos/calendar/utils',
  'dojo/store/JsonRest'
], function (request, Calendar, utils, JsonRest) {
  var calendar = new Calendar();
  var xhr;
  var server;
  debugger;

  function mystringify(input) {
    var key, type, retVal = "";
    for(key in input) {
      if (input.hasOwnProperty(key)) {
        type = typeof(input[key]);
        if (type === 'array' || type === 'object') {
          retVal += key + ": " + type + ", ";
        } else {
          retVal += key + ": " + input[key] + ", ";
        }
      }
    }
    return retVal;
  }

  describe('async demo', function() {
    before(function(done) {
      // assert.strictEqual(mystringify(sinon), "", "strings are strictly equal");
      /* xhr = sinon.useFakeXMLHttpRequest(); // FindTask.prototype, 'execute'
      xhr.onCreate = function(req) {
        console.log(req);
      }; */
      // alert(JSON.stringify(JsonRest));
      server = sinon.fakeServer.create();
      calItemJson = '[{"summary":"New event 8","startTime":"2014-08-31T08:29:06+03:00","endTime":"2014-08-31T09:29:06+03:00","calendar":"cal1","allDay":false,"_id":"540242221321d8281b36432a","__v":0,"id":"540242221321d8281b36432a"}]';
      server.respondWith("GET", "/collections/calitems/",
        [200, { "Content-Type": "text/html", "Content-Length": calItemJson.length }, calItemJson]);
      done();
    });

    after(function(done) {
      server.restore();
//      debugger;
      done();
    });

    it('async test', function(done) {
      /* var dfd = this.async(3000); */
      var store = calendar.set("store", utils.createDefaultStore(calendar));
      store.then(function(val) {
        console.log("val: " + mystringify(val[0]) + " \n");
        // assert.strictEqual(mystringify(val), "", "store");
        assert.strictEqual(/*mystringify()*/ store.isFulfilled(), true, "promise");
        done();
      }, function(err) {
        console.log('fake server does not work: ' + err);
        done();
      });
      server.respond();
//      done();
    });
  });
});
