import 'angular';
import 'angular-ui-router';

import './components';
import './directives';

angular.module('app', ['ui.router', 'directives', 'mycomp', 'about']);

angular.module('app').config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}]);

