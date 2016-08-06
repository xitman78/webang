class MyComponent {

    constructor() {
        this.message = 'Hello About!';
    }

    handler() {
        alert('Button clicked!');
    }
}

angular.module('mycomp',[]);

angular.module('mycomp').config(['$stateProvider',function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<mycomp></mycomp>'
        });
}]);

angular.module('mycomp').component('mycomp', {
    template: require('./mycomp.tpl.html'),
    controller: MyComponent,
    controllerAs: 'vm'
});




