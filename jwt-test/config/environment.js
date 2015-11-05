/* jshint node: true */

module.exports = function(environment) {

  var ENV = {
    modulePrefix: 'jwt-test',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token'
  };

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: 'http://127.0.0.1:5000/auth',
    identificationField: 'username',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {},
    refreshAccessTokens: true,
    serverTokenRefreshEndpoint: 'http://127.0.0.1:5000/refresh',
    tokenExpireName: 'exp',
    refreshLeeway: 0,
    timeFactor: 1  // example - set to "1000" to convert incoming seconds to milliseconds.
  };

  ENV.contentSecurityPolicy = {
    // ... other stuff here
    'connect-src': "'self' http://127.0.0.1:5000"
  }
  return ENV;
};
