/**
 * Created by bogdanbiv on 7/14/14.
 */
dojoConfig = {
  has: {
    "dojo-firebug": true
  },
  parseOnLoad: true,
  foo: "barxx",
  async: true,
  packages: [{
               name: "demos",
               location: "../../demos"
             }, {
               name: "dojox/calendar",
               location: "../../components/dojo-calendar"
             }, 
             { 
               name: "dojo",
                     location: "../../components/dojo"
             }
	    ],
  /*map: {
   dojox: {
   calendar: "../../components/dojo-calendar/Calendar"
   },
   'dojox/calendar': "../../components/dojo-calendar/Calendar",
   'demos/calendar': "../../demos"
   },*/
  paths: {
    "dojox/calendar": "../../components/dojo-calendar"
  }/*,
   cacheBust: true*/
};

