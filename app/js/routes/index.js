app.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
})

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home/home.html',
    controller: 'RepositoryController'
  })
  .when('/details/:ownerName/:repositoryName', {
    templateUrl: 'templates/details/details.html',
    controller: 'RepositoryDetailsController'
  }).otherwise({ redirectTo: '/' })
})