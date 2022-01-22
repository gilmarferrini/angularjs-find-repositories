app.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
})

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home/home.html',
    controller: 'RepositoryController'
  })
  .when('/details/:name', {
    templateUrl: 'templates/details/details.html'
  }).otherwise({ redirectTo: '/' })
})