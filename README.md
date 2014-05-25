life-tracker3
=============

Life Management
tests:
TestsFolder: http://localhost/dojo_playground/dojox/calendar/tests
OldRunnerURL: http://localhost/dojo_playground/dojo-util/doh/runner.html
OldRunnerPath: ~/Projects/dojo_playground/dojo-util/doh/runner.html

NewRunnerURL: http://localhost/dojo_playground/util/doh/runner.html?test=dojox/calendar/tests/module
http://localhost/dojo_playground/dojox/calendar/tests/
http://localhost/dojo_playground/dojox/calendar/tests/columnview.html
http://localhost/dojo_playground/dojox/calendar/tests/matrixtablet.html
http://localhost/dojo_playground/dojox/calendar/tests/matrixview.html

Matching, find:
grep 'doh\.\([^\ (]*\)' ./unitTest_*
grep 'function test_([a-zA-Z0-9_]*)\(doh\){' ./unitTest_* matches function test_MoveSnap(doh){

Porting
doh.register === doh.registerTests(group, testFuncOrObjArr)
doh.is === doh.assertEqual(obj1, obj2)
dojo define ??

Modules:
itemEditing
unitTest_proj
unitTest_Store
unitTest_Time
unitTest_TimeRanges


Calendar documentation:
http://dojotoolkit.org/reference-guide/1.9/dojox/calendar.html


Calendar failing tests:
************************* FAIL ************************
./itemEditing.js:          function test_ResizeNoSnap(doh){
./itemEditing.js:          function test_ResizeSnap(doh){
./itemEditing.js:          function test_ResizeMinDurationColumnView(doh){
************************* FAIL ************************

http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/
http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4

MongoDB instances:
mongodb://biv:qwe123@oceanic.mongohq.com:10082/calendaringTrials

DONE: Read documentation until http://dojotoolkit.org/reference-guide/1.9/dojox/calendar.html#column-view
JSONRest implementation problems: https://github.com/damiengarbarino/dojo-calendar/issues/15
Expected JSONRest instance: http://localhost/cal/calendar/
