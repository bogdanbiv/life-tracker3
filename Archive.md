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

DONE: Read documentation until http://dojotoolkit.org/reference-guide/1.9/dojox/calendar.html#column-view

404 Resources:
http://localhost:3000/components/dojo/resources/blank.gif
http://localhost:3000/components/dojo-calendar/themes/claro/images/titlebar.png

Server replies with wrong message:
typeof(item.msg)=='string'

# INSERT:
curl 'http://localhost:3000/collections/calitems/5' -X PUT -H 'Cookie: JSESSIONID=1ojw30k1u1lhfrv2c9ho9ys1h' -H 'Origin: http://localhost:3000' -H 'Accept-Encoding: gzip,deflate,sdch' -H 'Accept-Language: en-US,en;q=0.8,ro;q=0.6,en-GB;q=0.4' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36' -H 'Content-Type: application/json' -H 'Accept: application/javascript, application/json' -H 'Cache-Control: no-cache' -H 'If-None-Match: *' -H 'Referer: http://localhost:3000/demos/calendar/' -H 'DNT: 1' --data-binary '{"id":5,"summary":"New event 5","startTime":"2014-07-08T06:00:00.000Z","endTime":"2014-07-08T06:15:00.000Z","calendar":"cal1","allDay":false}' --compressed

# UPDATE:
curl 'http://localhost:3000/collections/calitems/53ba34061411e44012088316' -X PUT -H 'Pragma: no-cache' -H 'Origin: http://localhost:3000' -H 'Accept-Encoding: gzip,deflate,sdch' -H 'Accept-Language: en-US,en;q=0.8,ro;q=0.6,en-GB;q=0.4' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36' -H 'Content-Type: application/json' -H 'Accept: application/javascript, application/json' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: JSESSIONID=1ojw30k1u1lhfrv2c9ho9ys1h' -H 'Connection: keep-alive' -H 'Referer: http://localhost:3000/demos/calendar/' -H 'DNT: 1' --data-binary '{"id":"53ba34061411e44012088316","summary":"New event 5","startTime":"2014-07-08T07:30:00.000Z","endTime":"2014-07-08T09:45:00.000Z","calendar":"cal1","_id":"53ba34061411e44012088316"}' --compressed