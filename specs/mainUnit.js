var allTestFiles = [];
var TEST_REGEXP = /(Unit)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});
console.log('CHAI::: ' + sinon);
//console.log('chaiAsPromised::: ' + chaiAsPromised);
stepper = function(o) {
  var s = "";
  for (k in o) {
    s += k + ", ";
  }
  return s;
};

console.log('window::: ' + stepper(sinon));


var dojoConfig = {
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  packages: [
  {
    name: "dojo", location: "public/components/dojo"
  },
  {
    name: "dijit", location: "public/components/dijit"
  },
  {
    name: "dojox", location:"public/components/dojox"
  },
  /* {
    name: "dojox/calendar", location: "public/components/dojo-calendar/"
  }, */
  {
    name: "demos", location: "public/demos"
  },
  {
    name: "specs", location: "specs"
  }],
  // deps: allTestFiles,
  async: true /// test
};

/**
 * This function must be defined and is called back by the dojo adapter
 * @returns {string} a list of dojo spec/test modules to register with your testing framework
 */
window.__karma__.dojoStart = function() {
  console.log("allTestFiles: " + JSON.stringify(allTestFiles));
  return allTestFiles;
};

