var expect = chai.expect;

describe('Calendar page', function() {
  var App, $, _;
  before(function(done) {
    define(['dojox/calendar/ColumnView'],
      function(colView) {
        done();
      });
  });

  it('works for underscore', function() {
    // just checking that _ works
    expect(4).to.equal(4);
  });

  it('functional', function() {
    var browser = wd.promiseChainRemote();

    // optional extra logging
    //browser._debugPromise();
    browser.on('status', function(info) {
      console.log(info.cyan);
    });
    browser.on('command', function(meth, path, data) {
      console.log(' > ' + meth.yellow, path.grey, data || '');
    });

    browser
      .init({browserName: 'chrome'})
      .get('http://angularjs.org/')
      // element method chaining
      .elementById('the-basics');
  })
});