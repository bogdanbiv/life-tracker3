/**
 * Created by bogdanbiv on 5/16/14.
 */
define(['intern!object', 'intern/chai!assert', "dojox/calendar/Calendar", "dojo/dom-construct"],
    function(registerSuite, assert, Calendar, domConstruct){
        var o;
        var cal;
        var startDate;
        var res;

        registerSuite({
            name: "timeRanges",

            // Note: this method is called `before` when using tdd or bdd interfaces
            setup: function () {
                // console.log('Before this suite runs');
            },

            beforeEach: function () {
                // console.log('Before each test or nested suite');
                o = new Calendar({
                    firstDayOfWeek: 0 // do not depend on locale
                });
                cal = o.dateModule;
                startDate = new Date(2011, 0, 5);
                o.set("date", startDate);
            },

            afterEach: function () {
                // console.log('After each test or nested suite');
            },

            // Note: this method is called `after` when using tdd or bdd interfaces
            teardown: function () {
                // console.log('After this suite runs');
                /* o.destroyRecursive(); */
            },


            "#DayInterval": function() {
                /* o.set("date", startDate); */
                o.set("dateInterval", "day");
                o.set("dateIntervalSteps", 1);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 5)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 0, 6)), 0);
            },

            "#MultiDayInterval": function() {
                /* o.set("date", startDate); */
                o.set("dateInterval", "day");
                o.set("dateIntervalSteps", 3);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 5)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 0, 8)), 0);
            },

            "#WeekInterval": function() {
                /* o.set("date", startDate); */
                o.set("dateInterval", "week");
                o.set("dateIntervalSteps", 1);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 2)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 0, 9)), 0);

                o.set("firstDayOfWeek", 1);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 3)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 0, 10)), 0);
            },

            "#MultiWeekInterval": function() {
                /* o.set("date", startDate); */
                o.set("dateInterval", "week");
                o.set("dateIntervalSteps", 2);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 2)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 0, 16)), 0);

                o.set("firstDayOfWeek", 1);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 3)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 0, 17)), 0);
            },


            "#MonthInterval": function() {
                /* o.set("date", startDate); */
                o.set("dateInterval", "month");
                o.set("dateIntervalSteps", 1);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 1)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 1, 1)), 0);
            },

            "#MultiMonthInterval": function() {
                /* o.set("date", startDate); */
                o.set("dateInterval", "month");
                o.set("dateIntervalSteps", 2);
                o.validateRendering();
                assert.equal(cal.compare(o.get("date"), startDate), 0);

                res = o._timeInterval;
                assert.equal(cal.compare(res[0], new Date(2011, 0, 1)), 0);
                assert.equal(cal.compare(res[1], new Date(2011, 2, 1)), 0);
            } //*/

        });
    });
