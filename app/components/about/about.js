class AboutComponent {

    constructor() {
        this.message = 'This is about message!';
    }

    handler() {
        alert('Button clicked!');
    }
}

angular.module('about',[]);

angular.module('about').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            template: '<about></about>'
        })
        .state('about.us', {
            url: '/us',
            template: 'About Us'
        })
        .state('about.company', {
            url: '/company',
            template: 'About Company'
        });

}]);

angular.module('about').component('about', {
    template: require('./about.tpl.html'),
    controller: AboutComponent,
    controllerAs: 'vm'
});




