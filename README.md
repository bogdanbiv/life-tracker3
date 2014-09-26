life-tracker3 - Life Management
=============

Database
--------
MongoDB instances:
mongodb://biv:**@oceanic.mongohq.com:10082/calendaringTrials

JSON RESTful API server
-----------------------
http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/
http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4

Update is fine, insert has trouble on the server:
Test existence of given ID - make UPDATE or INSERT

Expected JSON Rest instance (?? needs doublechecking): http://localhost/cal/calendar/

Calendar Module
---------------

DojoX Calendar documentation: http://dojotoolkit.org/reference-guide/1.9/dojox/calendar.html

Test suite: ~~The Intern~~ KarmaJS/Mocha/Chai/ChaiAsPromise + Superagent?/WD

Tests modules:
itemEditing
unitTest_proj
unitTest_Store
unitTest_Time
unitTest_TimeRanges

__GulpJS tasks__
- https://www.npmjs.org/package/gulp-grunt
- initial Karma runner &Gulp
- Dojo build & porting dojo build - https://github.com/phated/grunt-dojo
- JSHint, Csslint, html lint?
- static /+ api server
- file/reload watch server ?
- Commit hooks for - CI/travis/browserify .travis.yml
- deploy production
-- WebDriver library: https://github.com/admc/wd


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
