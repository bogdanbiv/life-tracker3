 
define([
    'intern!object',
    'intern/chai!assert',
    'require',
], function (registerSuite, assert, require) {
    /*assert.strictEqual(registerSuite, {});
    registerSuite({
        name: 'index',
        '#greeting form': function () {
          // assert.strictEqual(this, {});
          console.log(JSON.stringify(this));
        },
    }); //// */

    registerSuite({
        name: 'index',

        '#calendar_details': function () {
            return this.remote
                .get(require.toUrl('public/demos/calendar/index.html'))
                //.waitForElementByCssSelector(".dijitAccordionContainer .dijitAccordionText", 1200)
                .elementById('dijit_layout_ContentPane_0_button_title').text()
                .then(function (text) {
                  assert.strictEqual(text, 'Main properties', 'simple functional test');
                });

                /*.elementById('nameField')
                    .clickElement()
                    .type('Elaine2')
                    .end()
                .elementByCssSelector('#loginForm input[type=submit]')
                    .clickElement()
                    .end()
                .elementById('greeting')
                .text()
                .then(function (text) {
                    assert.strictEqual(text, 'Hello, Elaine!', 'Greeting should be displayed when the form is submitted');
                });*/
        }
    });/// */;
});
