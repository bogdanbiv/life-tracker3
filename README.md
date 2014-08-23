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

404 Resources:
http://localhost:3000/components/dojo/resources/blank.gif
http://localhost:3000/components/dojo-calendar/themes/claro/images/titlebar.png

Server replies with wrong message:
typeof(item.msg)=='string'

Update is fine, insert has trouble on the server:
Test existence of given ID - make UPDATE or INSERT

# INSERT:
curl 'http://localhost:3000/collections/calitems/5' -X PUT -H 'Cookie: JSESSIONID=1ojw30k1u1lhfrv2c9ho9ys1h' -H 'Origin: http://localhost:3000' -H 'Accept-Encoding: gzip,deflate,sdch' -H 'Accept-Language: en-US,en;q=0.8,ro;q=0.6,en-GB;q=0.4' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36' -H 'Content-Type: application/json' -H 'Accept: application/javascript, application/json' -H 'Cache-Control: no-cache' -H 'If-None-Match: *' -H 'Referer: http://localhost:3000/demos/calendar/' -H 'DNT: 1' --data-binary '{"id":5,"summary":"New event 5","startTime":"2014-07-08T06:00:00.000Z","endTime":"2014-07-08T06:15:00.000Z","calendar":"cal1","allDay":false}' --compressed

# UPDATE:
curl 'http://localhost:3000/collections/calitems/53ba34061411e44012088316' -X PUT -H 'Pragma: no-cache' -H 'Origin: http://localhost:3000' -H 'Accept-Encoding: gzip,deflate,sdch' -H 'Accept-Language: en-US,en;q=0.8,ro;q=0.6,en-GB;q=0.4' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36' -H 'Content-Type: application/json' -H 'Accept: application/javascript, application/json' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: JSESSIONID=1ojw30k1u1lhfrv2c9ho9ys1h' -H 'Connection: keep-alive' -H 'Referer: http://localhost:3000/demos/calendar/' -H 'DNT: 1' --data-binary '{"id":"53ba34061411e44012088316","summary":"New event 5","startTime":"2014-07-08T07:30:00.000Z","endTime":"2014-07-08T09:45:00.000Z","calendar":"cal1","_id":"53ba34061411e44012088316"}' --compressed

__GulpJS tasks__
- https://www.npmjs.org/package/gulp-grunt
- Dojo build & porting dojo build - https://github.com/phated/grunt-dojo
- port local test runner - "intern" - BAT & regression - https://github.com/theintern/intern-examples/tree/master/grunt-example
- JSHint, Csslint, html lint?
- static /+ api server
- file watch server ?
- Commit hooks for - CI/travis/browserify
- deploy production

**DOJO BUILD**
http://dojotoolkit.org/reference-guide/1.10/build/buildSystem.html#build-buildsystem
Dojo ready made profiles:
/home/bogdanbiv/WebstormProjects/life-tracker3/public/components/util/buildscripts/profiles/
    mobile.profile.js
    demo.profile.js
errors: 307, 311, 354, 356,
warn: 202, 205, 207, 216

warn(202) AMD module specified and absolute module identifier that is not consistent with the configuration and filename module: demos/calendar/release/qalife/dojox/wire/demos/WidgetRepeater.js.uncompressed; specified: dojox/wire/demos/WidgetRepeater
cd ~/WebstormProjects/life-tracker3/public/components/util/buildscripts/profiles/
node.js ../../../dojo/dojo.js load=build --help

http://dojotoolkit.org/reference-guide/1.10/build/buildScript.html
./build.sh --bin node --profile --require --dojoConfig --check-args --stripConsole --releaseDir --releaseName --localeList="de-de,en-gb,ro-ro" --cssOptimize=
Most effective is Google Closure Compiler

Build / Gulp tasks for static file checking:
    test index.html exists
        test referenced scripts exist
        test referenced styles exist
        test referenced images exist

cd /home/bogdanbiv/WebstormProjects/life-tracker3/
public/components/util/buildscripts/build.sh --profile public/components/util/buildscripts/profiles/mobile-all.profile.js --dojoConfig public/demos/calendar/lifeTracker.config.js --releaseDir `pwd`/release/qalife --releaseName 0.1
public/components/util/buildscripts/build.sh --profile public/components/util/buildscripts/profiles/standard.profile.js --dojoConfig public/demos/calendar/lifeTracker.config.js --releaseDir `pwd`/release/qalife --releaseName 0.1
public/components/util/buildscripts/build.sh --profile public/components/util/buildscripts/profiles/demos-all.profile.js --dojoConfig public/demos/calendar/lifeTracker.config.js --releaseDir release/qalife --releaseName 0.1
public/components/util/buildscripts/build.sh --profile public/components/util/buildscripts/profiles/demos-all.profile.js --dojoConfig public/demos/calendar/lifeTracker.config.js --releaseDir release/qalife --releaseName 0.1
public/components/util/buildscripts/build.sh --profile public/components/util/buildscripts/profiles/life-tracker.profile.js --dojoConfig public/demos/calendar/lifeTracker.config.js --releaseDir release/qalife --releaseName 0.1



* output dojo build directory - ?? outside public?
* ? output minified code separately from nonminified?
* extra components in path
http://localhost:3000/components/release/demosite/dojo/dojo.js
http://localhost:3000/components/release/demosite/components/dojo/dojo.js


__Tests__

- store tests
    replace superagent with dojo Request
    Use mongoose to setup test environments - http://mongoosejs.com/
- functional tests


__Dev__
- CalItemDetails
- Filters
- Calendar: Todo/Plan/Actual/Delegated
- Domains: (Family, Work, Hobby, PersonalDev)
- Projects: Task/Activity/Subtask/Templates

__VisualDesign__
grey = todo
/// hashColor = plan
solidColor = actual
\\\ hashColor = Delegated

# Intern config is borked again:
best candidate: node node_modules/.bin/intern-runner config=tests/intern reporters=console
