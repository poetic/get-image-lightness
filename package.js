Package.describe({
  name: 'poetic:get-image-lightness',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Exposes function to get the lightness of an image.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/poetic/get-image-lightness',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('get-image-lightness.js');
  api.export('getImageLightness')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poetic:get-image-lightness');
  api.addFiles('get-image-lightness-tests.js');
});
