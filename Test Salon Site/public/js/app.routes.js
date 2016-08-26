angular.module('routerRoutes', ['ngRoute'])


alert("in routerRoutes");

//configure routes
// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

    // route for the home page
    // route for the home page
    // route for the home page
    .when('/javaDev', {
      templateUrl : 'public/views/java.html',
      controller : 'mainController',
      controllerAs: 'main'
    })

    .when('/about', {
      templateUrl : 'public/views/aboutMe.html',
      controller : 'mainController',
      controllerAs: 'main'
    })

    .when('/webDev', {
      templateUrl : 'public/views/web.html',
      controller : 'mainController',
      controllerAs: 'main'
    })

    // set our app up to have pretty URLS
    $locationProvider.html5Mode(true);

});
