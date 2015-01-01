module.exports = function (grunt) {
/*
  grunt.loadNpmTasks('grunt-dojo');
//  grunt.loadNpmTasks('dojo');
  grunt.loadNpmTasks('grunt-kommando');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');
*/

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  var path = require('path');

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
    express: {
      options: {
        port: 9000,
        hostname: '*'
      },
      test: {
        server: path.resolve('./api.js'),
        bases: ['public'],
        livereload: true,
        serverreload: true,
        // if you do not define a port it will start your server at port 3000
      }
    },
    watch: {
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:test' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
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
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });
  grunt.registerTask('msr', ['express:test', 'express-keepalive']);
  grunt.registerTask('test', ['kommando:configSeleniumWebdriverMocha']);
};
