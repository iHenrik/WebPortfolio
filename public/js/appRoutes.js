    portfolioApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

       .when('/',
             {
                 controller: 'IntroductionController',
                 templateUrl: 'views/introduction.html'
             })
         .when('/projects',
             {
                 controller: 'ProjectsController',
                 templateUrl: 'views/projects.html'
             })
         .when('/portfolio',
             {
                 controller: 'PortfolioController',
                 templateUrl: 'views/portfolio.html'
             })
         .otherwise({ redirectTo: '/' });

    // $locationProvider.html5Mode(true);
}]);
