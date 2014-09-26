/**
 * Created by bogdanbiv on 5/18/14.
 */

define(['intern!object', 'intern/chai!assert', "dojox/calendar/Calendar", "dojo/when", "dojo/store/JsonRest"],
    function(registerSuite, assert, Calendar, when, JsonRest){
        registerSuite({
            name: "store",
            "#error": function(t) {
                var calendar = new Calendar();
                var d = when(calendar.set("store", new JsonRest({ target: "/" }), function(){
                    t.f(true, "ok fct must not have been called");
                }, function(){
                    t.t(true, "failure fct must have been called");
                }));
                calendar.startup();
            }
        });
    });
