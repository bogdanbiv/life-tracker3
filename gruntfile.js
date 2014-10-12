module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-dojo');
//  grunt.loadNpmTasks('dojo');
  grunt.loadNpmTasks('grunt-kommando');

  grunt.initConfig({
    dojo: {
      dist:    {
        options: {
          dojo:          'node_modules/dojo/dojo.js', // Path to dojo.js file in dojo source
          load:          'build', // Optional: Utility to bootstrap (Default: 'build')
          profile:       'app.profile.js', // Profile for build
          profiles:      [], // Optional: Array of Profiles for build
          appConfigFile: '', // Optional: Config file for dojox/app
          package:       '', // Optional: Location to search package.json (Default: nothing)
          packages:      [], // Optional: Array of locations of package.json (Default: nothing)
          require:       '', // Optional: Module to require for the build (Default: nothing)
          requires:      [], // Optional: Array of modules to require for the build (Default: nothing)
          cwd:           './', // Directory to execute build within
          dojoConfig:    '', // Optional: Location of dojoConfig (Default: null),
          // Optional: Base Path to pass at the command line
          // Takes precedence over other basePaths
          // Default: null
          basePath:      ''
        }
      },
      options: {
        // You can also specify options to be used in all your tasks
        dojo:          'path/to/dojo.js', // Path to dojo.js file in dojo source
        load:          'build', // Optional: Utility to bootstrap (Default: 'build')
        profile:       'app.profile.js', // Profile for build
        profiles:      [], // Optional: Array of Profiles for build
        appConfigFile: '', // Optional: Config file for dojox/app
        package:       '', // Optional: Location to search package.json (Default: nothing)
        packages:      [], // Optional: Array of locations of package.json (Default: nothing)
        require:       '', // Optional: Module to require for the build (Default: nothing)
        requires:      [], // Optional: Array of modules to require for the build (Default: nothing)
        cwd:           './', // Directory to execute build within
        dojoConfig:    '', // Optional: Location of dojoConfig (Default: null),
        // Optional: Base Path to pass at the command line
        // Takes precedence over other basePaths
        // Default: null
        basePath:      ''
      }
    },

    dojoBuildProfile: {
      options: {
        scanExcludeList:    ['app/path/someModule', 'docs'],
        profileFile:        "./profile.js",
        appPackages:        [
          {name: "app", location: "./src/app"}
        ],
        libPackages:        [
          {name: "majix", location: "./libs/majix"}
        ],
        appLayers:          [
          {
            name:     "app",
            includes: ["app" ],
            excludes: ["majix" ]
          } //,
          // ...
        ],
        baseLayerDeps:      true,
        baseLayerName:      "libBase",
        baseLayerThreshold: 8
      }
    },

    /*intern: {
      client: {
        options: {
          // for other available options, see:
          // https://github.com/theintern/intern/wiki/Using-Intern-with-Grunt#task-options
          config: 'tests/local.intern'
        }
      },
      *//*clientSuiteGet: {
       // an example of specifying a suite name
       options: {
       config: 'tests/local.intern',
       suites: ['tests/lib/get']
       }
       },*//*
      runner: {
        options: {
          config:  'tests/local.intern',
          runType: 'runner'
        }
      }
    }*/
    kommando: {
      configSeleniumWebdriverMocha: {
        browsers: ['chrome'],
        options: {},
        tests: ['test/mytest.js']
      }
    }
  });

  grunt.registerTask('test', ['kommando:configSeleniumWebdriverMocha']);
};
