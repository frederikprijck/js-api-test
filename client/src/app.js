import 'nodep-date-input-polyfill';
import angular from 'angular';
import Index from './components/Index';

const setupJSON = $httpProvider => {
  $httpProvider.defaults.headers.common['Accept'] = 'application/json';
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
};

const setupLocation = $locationProvider => {
  $locationProvider.html5Mode({ enabled: true });
};

angular.module('app', [])
.config(['$locationProvider', setupLocation])
.config(['$httpProvider', setupJSON])
.component('index', Index);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app']);
  angular.element(document.body).append('<index></index>');
});
