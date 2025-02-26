(function (app) {
  'use strict';

  app.registerModule('colleges', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('colleges.services');
  app.registerModule('colleges.routes', ['ui.router', 'core.routes', 'colleges.services']);
}(ApplicationConfiguration));
