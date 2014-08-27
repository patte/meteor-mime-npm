Package.describe({
  summary: "Wrapper for the npm package mime",
  version: "0.0.1",
  git: "https://github.com/patte/meteor-mime-npm"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.add_files([
    'lib/mime.js'
  ], 'server');
  api.export("MIME", "server");
});

Npm.depends({
  mime: "1.2.11",
});
