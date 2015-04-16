'use strict';

/**
 * @ngdoc overview
 * @name documentsApp
 * @description
 * # documentsApp
 *
 * Main module of the application.
 */
angular
  .module('documentsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'myCtrl'
      })
      .when('/contactlist', {
        templateUrl: 'views/contactlist.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
