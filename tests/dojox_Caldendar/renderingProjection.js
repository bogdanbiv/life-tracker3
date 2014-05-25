/**
 * Created by bogdanbiv on 5/18/14.
 */
define(['intern!object', 'intern/chai!assert', "dojox/calendar/ColumnView"],
    function(registerSuite, assert, ColumnView) {
        var o;
        var refDate;

        registerSuite({
            name: "renderingProjection",
            beforeEach: function () {
                // console.log('Before each test or nested suite');
                o = new ColumnView({
                    startDate:  new Date(2015, 4, 13)
                });
                refDate = new Date(2012, 4, 13);
            },

            "#Projection_0_24": function() {
                var renderData = {
                    dateModule: o.dateModule,
                    minHours: 0,
                    maxHours: 24
                };

                /* var refDate = new Date(2012, 4, 13); */

                var d = new Date(2012, 4, 13, 0, 0, 0);
                var p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 0);

                d = new Date(2012, 4, 14, 0, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 1000);

                d = new Date(2012, 4, 13, 12, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 500);
            },

            "#Projection_8_18": function() {
                var renderData = {
                    dateModule: o.dateModule,
                    minHours: 8,
                    maxHours: 18
                };

                /* var refDate = new Date(2012, 4, 13); */

                var d = new Date(2012, 4, 13, 0, 0, 0);
                var p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 0);

                d = new Date(2012, 4, 13, 8, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 0);

                d = new Date(2012, 4, 13, 13, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 500);

                d = new Date(2012, 4, 13, 18, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 1000);

                d = new Date(2012, 4, 13, 20, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 1000);
            },

            "#Projection_12_36": function() {
                var renderData = {
                    dateModule: o.dateModule,
                    minHours: 12,
                    maxHours: 36
                };

                /* var refDate = new Date(2012, 4, 13); */

                var d = new Date(2012, 4, 13, 0, 0, 0);
                var p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 0);

                d = new Date(2012, 4, 13, 12, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 0);

                d = new Date(2012, 4, 14, 0, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 500);

                d = new Date(2012, 4, 14, 12, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 1000);

                d = new Date(2012, 4, 14, 20, 0, 0);
                p = o.computeProjectionOnDate(renderData, refDate, d, 1000);
                assert.equal(p, 1000);
            }
        });
    });

