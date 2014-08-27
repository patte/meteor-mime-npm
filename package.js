Package.describe({
  summary: "Wrapper for the npm package mime",
  version: "0.0.1",
  git: " \* Fill me in! *\ "
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
