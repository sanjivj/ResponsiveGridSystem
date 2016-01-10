Package.describe({
  name: 'sanjivcj:responsive-grid-system',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Wrapper for Graham Miller's Responsive Grid System",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sanjivj/ResponsiveGridSystem.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  // api.use('ecmascript');
  // api.use("templating", "client");
  // api.add_files('responsivegridsystem.html', 'client'); 
  api.addFiles('rgs.js');
  var clientFiles=[
      // css
      "css/2cols.css",
      "css/3cols.css",
      "css/4cols.css",
      "css/5cols.css",
      "css/6cols.css",
      "css/7cols.css",
      "css/8cols.css",
      "css/9cols.css",
      "css/10cols.css",
      "css/11cols.css",
      "css/12cols.css",
      "css/col.css",
      "css/html5reset.css"
  ];
  api.add_files(clientFiles,"client");
});

Package.onTest(function(api) {
  // api.use('ecmascript');
  api.use('tinytest');
  api.use('sanjivcj:responsive-grid-system');
  api.addFiles('rgs-tests.js');
});
