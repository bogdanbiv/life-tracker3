// mytest.js (using jasmine syntax)
describe('express server', function() {
  it('reads the "title"', function(done) {
    // the global "kommando.browser" provides the initialized Webdriver session
    // using "selenium-webdriver" as default Webdriver library
    kommando.browser.get('http://localhost:3000/').then(function() {
      // return kommando.browser.findElement(kommando.webdriver.By.className('heading'));
      return kommando.browser.findElement(kommando.webdriver.By.tagName('body'));
    }).then(function(heading) {
        return heading.getText();
      }).then(function(text) {
        expect(text).toBe('please select a collection, e.g., /collections/messages');
      }).then(done, done); // handle promise error / success within "it"
  });
});