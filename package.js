Package.describe({
  name: 'nicocrm:react-komposer-tracker',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Enable use of react-komposer with Meteor Tracker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nicocrm/react-komposer-tracker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function(api) {
  Npm.depends({
    'react-komposer': '2.0.0'
  })
  api.versionsFrom('1.4.2.1');
  api.use('ecmascript');
  api.mainModule('react-komposer-tracker.js');
});

Package.onTest(function(api) {
  Npm.depends({
    'react': '15.3.2',
    'react-komposer': '2.0.0',
    'react-addons-test-utils': '15.3.2'
  })
  api.use('ecmascript');
  api.use('session');
  api.use('practicalmeteor:mocha');
  api.use('practicalmeteor:chai');
  api.use('practicalmeteor:sinon')
  api.use('nicocrm:react-komposer-tracker');
  api.mainModule('react-komposer-tracker-tests.js');
});
