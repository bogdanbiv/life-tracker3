// Karma configuration
// Generated on Mon Sep 15 2014 00:03:50 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'dojo', 'chai', /*'chai-as-promised',*/ 'sinon', /*'sinon-chai' */],


    // list of files / patterns to load in the browser
    files: [
      // http://localhost:9876/base/public/components/dojo/
      {pattern: './public/components/**/*', included: false, served: true},
      {pattern: './public/demos/**/*', included: false, served: true},
      {pattern: './specs/mainUnit.js', included: true, served: true},
      {pattern: './specs/**/*Unit.js', included: false, served: true}

    ],


    // list of files to exclude
    exclude: [
      '**/*Test.js',
      '**/test/*',
      '**/*test*',
      '**/.directory',
      '.idea',
      '**/*~',
      '**/*_good',
      'logs',
      '**/*.log',
      '**/*.pid',
      '**/*.seed',
      'lib-cov',
      'coverage',
      '**/lcov.info',
      '**/.grunt',
      '**/build/Release',
      '**/release',
     /* 'node_modules',*/
      '**/bower_components'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    plugins: [
      'karma-mocha',
      'karma-sinon',
      'karma-chai',
      'karma-chai-plugins',
      'karma-dojo',
      'karma-requirejs',
      //'karma-jasmine',
      'karma-chrome-launcher',
      // uncomment for firefox launcher
      'karma-firefox-launcher'
      // uncomment for code coverage
      //, 'karma-coverage'
      // 'karma-intellij'
    ]
  });
};