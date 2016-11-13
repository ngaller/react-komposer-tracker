Package.describe({
  name: 'nicocrm:react-komposer-tracker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Enable use of react-komposer with Tracker',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'react-komposer': '2.0.0'
})

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.1');
  api.use('ecmascript');
  api.mainModule('react-komposer-tracker.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('session');
  api.use('practicalmeteor:mocha');
  api.use('practicalmeteor:chai');
  api.use('practicalmeteor:sinon')
  api.use('nicocrm:react-komposer-tracker');
  api.mainModule('react-komposer-tracker-tests.js');
});
